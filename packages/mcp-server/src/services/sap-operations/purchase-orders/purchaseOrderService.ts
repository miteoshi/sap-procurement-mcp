import type { CapClient } from '../../../clients/capClient.js';
import type { ODataResponse, PurchaseOrder, PurchaseOrderFilters, POLineItem } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

import { VendorService } from '../vendors/vendorService.js';
import { InventoryService } from '../inventory/inventoryService.js';
import { PricingService } from '../pricing/pricingService.js';

export class PurchaseOrderService {
  constructor(
    private readonly client: CapClient,
    private readonly vendorService: VendorService,
    private readonly inventoryService: InventoryService,
    private readonly pricingService: PricingService
  ) {}

  async searchPurchaseOrders(filters: PurchaseOrderFilters = {}): Promise<PurchaseOrder[]> {
    const filterClauses: string[] = [];

    if (filters.vendorId) {
      filterClauses.push(`vendor_ID eq '${escapeOData(filters.vendorId)}'`);
    }
    if (filters.status) {
      filterClauses.push(`status eq '${escapeOData(filters.status)}'`);
    }
    if (filters.fromDate) {
      filterClauses.push(`orderDate ge ${escapeOData(filters.fromDate)}`);
    }
    if (filters.toDate) {
      filterClauses.push(`orderDate le ${escapeOData(filters.toDate)}`);
    }

    const queryParams: Record<string, string> = {
      $orderby: 'orderDate desc',
      $top: String(filters.limit || 50),
      $expand: 'lineItems',
    };

    if (filterClauses.length > 0) {
      queryParams.$filter = filterClauses.join(' and ');
    }

    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', queryParams);
    return result.value;
  }

  async getPoStatus(poNumber: string): Promise<PurchaseOrder | undefined> {
    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `poNumber eq '${escapeOData(poNumber)}'`,
      $top: '1',
    });
    return result.value[0];
  }

  async getPurchaseOrder(idOrPoNumber: string): Promise<PurchaseOrder | undefined> {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(idOrPoNumber);
    const filterField = isUuid ? 'ID' : 'poNumber';
    
    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `${filterField} eq '${escapeOData(idOrPoNumber)}'`,
      $top: '1',
      $expand: 'lineItems',
    });
    return result.value[0];
  }

  async createPurchaseOrder(data: { vendor_ID: string; currency: string; items?: Array<{ materialId: string, quantity: number, unitPrice?: number }> }): Promise<PurchaseOrder> {
    // 1. Vendor Validation
    const vendor = await this.vendorService.getVendor(data.vendor_ID);
    if (!vendor) {
      throw new Error(`Vendor with ID '${data.vendor_ID}' not found.`);
    }
    if (vendor.status === 'BLOCKED') {
      throw new Error(`Vendor '${vendor.name}' is BLOCKED and cannot receive new purchase orders.`);
    }
    if (vendor.status === 'INACTIVE') {
      throw new Error(`Vendor '${vendor.name}' is INACTIVE and cannot receive new purchase orders.`);
    }

    // 2. Line Item Validation (Local)
    if (!data.items || data.items.length === 0) {
      throw new Error(`A purchase order must contain at least one line item.`);
    }
    const seenMaterials = new Set<string>();
    for (const item of data.items) {
      if (item.quantity <= 0) {
        throw new Error(`Quantity must be greater than 0 for material '${item.materialId}'.`);
      }
      if (item.unitPrice !== undefined && item.unitPrice <= 0) {
        throw new Error(`Unit price must be greater than 0 for material '${item.materialId}'.`);
      }
      if (seenMaterials.has(item.materialId)) {
        throw new Error(`Duplicate material '${item.materialId}' in purchase order.`);
      }
      seenMaterials.add(item.materialId);
    }

    // 3. Material Lookup
    const resolvedItems = [];
    for (const item of data.items) {
      const inventoryItem = await this.inventoryService.checkInventory(item.materialId);
      if (!inventoryItem) {
        throw new Error(`Material '${item.materialId}' not found in inventory.`);
      }

      let finalPrice = item.unitPrice;
      if (finalPrice === undefined) {
        finalPrice = await this.pricingService.resolveBestPrice(data.vendor_ID, inventoryItem.ID);
        if (finalPrice === undefined) {
          throw new Error(`No pricing info record or historical price found for material '${item.materialId}'. Please specify a unitPrice explicitly.`);
        }
      }

      resolvedItems.push({
        material_ID: inventoryItem.ID,
        quantity: item.quantity,
        unitPrice: finalPrice
      });
    }

    const payload: any = {
      vendor_ID: data.vendor_ID,
      currency: data.currency,
      poNumber: `PO-${Date.now()}`,
      orderDate: new Date().toISOString().split('T')[0],
      status: 'CREATED',
      totalAmount: resolvedItems.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0),
      lineItems: resolvedItems
    };

    return this.client.post<PurchaseOrder>('/PurchaseOrders', payload);
  }

  async addPOLineItem(poId: string, materialId: string, quantity: number, unitPrice: number): Promise<POLineItem> {
    return this.client.post<POLineItem>('/POLineItems', {
      purchaseOrder_ID: poId,
      material_ID: materialId,
      quantity,
      unitPrice
    });
  }

  async releasePurchaseOrder(id: string): Promise<PurchaseOrder> {
    return this.client.patch<PurchaseOrder>(`/PurchaseOrders(${escapeOData(id)})`, {
      status: 'RELEASED'
    });
  }

  async cancelPurchaseOrder(id: string): Promise<PurchaseOrder> {
    return this.client.patch<PurchaseOrder>(`/PurchaseOrders(${escapeOData(id)})`, {
      status: 'CANCELLED'
    });
  }

  async receiveGoods(id: string): Promise<PurchaseOrder> {
    const po = await this.getPurchaseOrder(id);
    if (!po) {
      throw new Error(`Purchase order not found.`);
    }
    if (po.status === 'RECEIVED' || po.status === 'CANCELLED') {
      throw new Error(`Cannot receive goods for purchase order in status ${po.status}.`);
    }

    // TODO: Reserved for future enhancement: Partial Receiving
    // e.g. receiveGoods(poId, receivedItems) -> sets status to PARTIALLY_RECEIVED

    if (po.lineItems && po.lineItems.length > 0) {
      for (const item of po.lineItems) {
        await this.inventoryService.addStock(item.material_ID, item.quantity);
      }
    }

    return this.client.patch<PurchaseOrder>(`/PurchaseOrders(${escapeOData(id)})`, {
      status: 'RECEIVED'
    });
  }
}
