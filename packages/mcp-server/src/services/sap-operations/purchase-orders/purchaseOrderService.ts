import type { CapClient } from '../../../clients/capClient.js';
import type { ODataResponse, PurchaseOrder, PurchaseOrderFilters, POLineItem } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

import { VendorService } from '../vendors/vendorService.js';
import { InventoryService } from '../inventory/inventoryService.js';
import { PricingService } from '../pricing/pricingService.js';
import { QuotationService } from '../quotations/quotationService.js';

export class PurchaseOrderService {
  constructor(
    private readonly client: CapClient,
    private readonly vendorService: VendorService,
    private readonly inventoryService: InventoryService,
    private readonly pricingService: PricingService,
    private readonly quotationService: QuotationService
  ) { }

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

    //expand on lineItems, and show POLineItems fields, compositioned on it
    const queryParams: Record<string, string> = {
      $orderby: 'orderDate desc',
      $top: String(filters.limit || 50),
      $expand: 'vendor,lineItems($expand=material)',
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
      $expand: 'vendor,lineItems($expand=material)',
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

  async createPurchaseOrderFromQuotation(quotationId: string): Promise<PurchaseOrder> {
    const quotation = await this.quotationService.getQuotation(quotationId);
    if (!quotation) {
      throw new Error(`Quotation '${quotationId}' not found.`);
    }

    if (quotation.status !== 'OPEN') {
      throw new Error(`Quotation '${quotationId}' cannot be used because its status is ${quotation.status}.`);
    }

    const today = new Date().toISOString().substring(0, 10);
    if (quotation.validUntil < today) {
      throw new Error(`Quotation '${quotationId}' expired on ${quotation.validUntil}.`);
    }

    const material = await this.inventoryService.getMaterialById(quotation.material_ID);
    if (!material) {
      throw new Error(`Material for quotation not found in inventory.`);
    }

    const po = await this.createPurchaseOrder({
      vendor_ID: quotation.vendor_ID,
      currency: quotation.currency,
      items: [
        {
          materialId: material.materialId,
          quantity: quotation.quantity,
          unitPrice: quotation.price
        }
      ]
    });

    await this.quotationService.acceptQuotation(quotation.ID);

    return po;
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

  //GR
  //Receive Goods
  //Find Purchase Order
  //Validate
  //Determine quantities
  //Increase Inventory
  //Update PO Line Items
  //Update PO Status
  //Done


  async receiveGoods(idOrPoNumber: string, partialItems?: Array<{ materialId: string, quantity: number }>): Promise<PurchaseOrder> {
    const po = await this.getPurchaseOrder(idOrPoNumber);
    if (!po) {
      throw new Error(`Purchase order ${idOrPoNumber} not found.`);
    }

    if (po.status === 'RECEIVED' || po.status === 'CANCELLED') {
      throw new Error(`Cannot receive goods for a purchase order in ${po.status} status.`);
    }

    if (!po.lineItems || po.lineItems.length === 0) {
      throw new Error(`Purchase order ${idOrPoNumber} has no line items to receive.`);
    }

    // Map partialItems to a dictionary for fast lookup if provided
    const partialMap = new Map<string, number>();
    if (partialItems) {
      for (const p of partialItems) {
        // Resolve materialId to UUID
        const inventoryItem = await this.inventoryService.checkInventory(p.materialId);
        if (!inventoryItem) {
          throw new Error(`Material '${p.materialId}' not found in inventory.`);
        }
        partialMap.set(inventoryItem.ID, p.quantity);
      }
    }

    let allFullyReceived = true;

    for (const item of po.lineItems) {
      let qtyToReceive = 0;

      const currentReceived = item.receivedQuantity ?? 0;
      const remaining = item.quantity - currentReceived;

      if (partialItems) {
        // Only receive what was explicitly requested for this line item
        const requestedQty = partialMap.get(item.material_ID) ?? 0;
        if (requestedQty > remaining) {
          throw new Error(`Cannot receive ${requestedQty} for material UUID ${item.material_ID}. Only ${remaining} pending.`);
        }
        qtyToReceive = requestedQty;
      } else {
        // Receive everything remaining, since no partialItems are provided
        qtyToReceive = remaining;
      }

      if (qtyToReceive > 0) {
        // Update Inventory
        await this.inventoryService.addStock(item.material_ID, qtyToReceive);

        // Update Line Item
        await this.client.patch(`/POLineItems(${item.ID})`, {
          receivedQuantity: currentReceived + qtyToReceive
        });
      }

      //Check if all line items are received

      const newReceived = currentReceived + qtyToReceive;
      if (newReceived < item.quantity) {
        allFullyReceived = false;
      }
    }

    const newStatus = allFullyReceived ? 'RECEIVED' : 'PARTIALLY_RECEIVED';

    const result = await this.client.patch<PurchaseOrder>(`/PurchaseOrders(${po.ID})`, {
      status: newStatus
    });

    return result;
  }
}
