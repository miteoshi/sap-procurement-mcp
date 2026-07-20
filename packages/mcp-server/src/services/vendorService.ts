import type { CapClient } from '../clients/capClient.js';
import type { ODataResponse, PurchaseOrder, Vendor, VendorFilters } from '../types/procurement.js';
import { escapeOData } from '../utils/odataUtils.js';

export class VendorService {
  constructor(private readonly client: CapClient) {}

  async searchVendors(filters: VendorFilters): Promise<Vendor[]> {
    const odataFilters: string[] = [];
    if (filters.name) {
      odataFilters.push(`contains(name,'${escapeOData(filters.name)}')`);
    }
    if (filters.country) {
      odataFilters.push(`country eq '${escapeOData(filters.country)}'`);
    }
    if (filters.status) {
      odataFilters.push(`status eq '${escapeOData(filters.status)}'`);
    }

    const $filter = odataFilters.length > 0 ? odataFilters.join(' and ') : undefined;
    const queryParams: Record<string, string> = {
      $top: String(filters.limit ?? 10),
    };
    if ($filter) {
      queryParams.$filter = $filter;
    }

    const result = await this.client.get<ODataResponse<Vendor>>('/Vendors', queryParams);
    return result.value;
  }

  async getVendor(id: string): Promise<Vendor | undefined> {
    const result = await this.client.get<ODataResponse<Vendor>>('/Vendors', {
      $filter: `ID eq '${escapeOData(id)}'`,
      $top: '1',
    });
    return result.value[0];
  }

  async createVendor(data: Omit<Vendor, 'ID'>): Promise<Vendor> {
    return this.client.post<Vendor>('/Vendors', data);
  }

  async updateVendor(id: string, data: Partial<Vendor>): Promise<Vendor> {
    return this.client.patch<Vendor>(`/Vendors(${escapeOData(id)})`, data);
  }

  async blockVendor(id: string): Promise<Vendor> {
    return this.updateVendor(id, { status: 'BLOCKED' });
  }

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
