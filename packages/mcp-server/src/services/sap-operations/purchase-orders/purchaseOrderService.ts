import type { CapClient } from '../../../clients/capClient.js';
import type { ODataResponse, PurchaseOrder, PurchaseOrderFilters, POLineItem } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class PurchaseOrderService {
  constructor(private readonly client: CapClient) {}

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

  async createPurchaseOrder(data: { vendor_ID: string; currency: string; items?: Array<{ material_ID: string, quantity: number, unitPrice: number }> }): Promise<PurchaseOrder> {
    const payload: any = {
      vendor_ID: data.vendor_ID,
      currency: data.currency,
      poNumber: `PO-${Date.now()}`,
      orderDate: new Date().toISOString().split('T')[0],
      status: 'PENDING',
      totalAmount: 0
    };
    if (data.items && data.items.length > 0) {
      payload.lineItems = data.items;
      payload.totalAmount = data.items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
    }
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

  async approvePurchaseOrder(id: string): Promise<PurchaseOrder> {
    return this.client.patch<PurchaseOrder>(`/PurchaseOrders(${escapeOData(id)})`, {
      status: 'APPROVED'
    });
  }

  async cancelPurchaseOrder(id: string): Promise<PurchaseOrder> {
    return this.client.patch<PurchaseOrder>(`/PurchaseOrders(${escapeOData(id)})`, {
      status: 'CANCELLED'
    });
  }

  async receiveGoods(id: string): Promise<PurchaseOrder> {
    return this.client.patch<PurchaseOrder>(`/PurchaseOrders(${escapeOData(id)})`, {
      status: 'RECEIVED'
    });
  }
}
