import type { CapClient } from '../../../clients/capClient.js';
import type { ODataResponse, PurchaseOrder } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class PurchaseOrderService {
  constructor(private readonly client: CapClient) {}

  async listRecentOrders(vendorId: string, limit = 10): Promise<PurchaseOrder[]> {
    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `vendor_ID eq '${escapeOData(vendorId)}'`,
      $orderby: 'orderDate desc',
      $top: String(limit),
    });
    return result.value;
  }

  async getPoStatus(poNumber: string): Promise<PurchaseOrder | undefined> {
    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `poNumber eq '${escapeOData(poNumber)}'`,
      $top: '1',
    });
    return result.value[0];
  }
}
