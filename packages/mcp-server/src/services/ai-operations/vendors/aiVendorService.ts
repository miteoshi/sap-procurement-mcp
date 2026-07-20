import type { CapClient } from '../../../clients/capClient.js';
import type { ODataResponse, PurchaseOrder } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class AiVendorService {
  constructor(private readonly client: CapClient) {}

  async getSupplierSpend(vendorId: string): Promise<{ totalSpend: number; currency: string }> {
    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `vendor_ID eq '${escapeOData(vendorId)}' and status ne 'CANCELLED'`,
      $top: '1000',
    });

    let totalSpend = 0;
    let currency = 'USD'; // default
    for (const order of result.value) {
      totalSpend += Number(order.totalAmount || 0);
      if (order.currency) currency = order.currency;
    }

    return { totalSpend, currency };
  }

  async getVendorPerformance(vendorId: string): Promise<{ totalOrders: number; fulfilledOrders: number; cancelledOrders: number }> {
    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `vendor_ID eq '${escapeOData(vendorId)}'`,
      $top: '1000',
    });

    let fulfilledOrders = 0;
    let cancelledOrders = 0;

    for (const order of result.value) {
      if (order.status === 'RECEIVED') {
        fulfilledOrders++;
      } else if (order.status === 'CANCELLED') {
        cancelledOrders++;
      }
    }

    return {
      totalOrders: result.value.length,
      fulfilledOrders,
      cancelledOrders
    };
  }
}
