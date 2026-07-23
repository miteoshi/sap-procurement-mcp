import type { CapClient } from '../../../clients/capClient.js';
import type { Quotation, ODataResponse } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export interface QuotationFilters {
  vendorId?: string;
  materialId?: string;
  status?: 'OPEN' | 'ACCEPTED' | 'REJECTED';
  limit?: number;
}

export class QuotationService {
  constructor(private readonly client: CapClient) { }

  async searchQuotations(filters: QuotationFilters = {}): Promise<Quotation[]> {
    const filterClauses: string[] = [];
    if (filters.vendorId) {
      filterClauses.push(`vendor_ID eq '${escapeOData(filters.vendorId)}'`);
    }
    if (filters.materialId) {
      filterClauses.push(`material_ID eq '${escapeOData(filters.materialId)}'`);
    }
    if (filters.status) {
      filterClauses.push(`status eq '${escapeOData(filters.status)}'`);
    }

    const queryParams: Record<string, string> = {
      $orderby: 'validUntil asc',
      $top: String(filters.limit || 50),
    };

    if (filterClauses.length > 0) {
      queryParams.$filter = filterClauses.join(' and ');
    }

    const result = await this.client.get<ODataResponse<Quotation>>('/Quotations', queryParams);
    return result.value;
  }

  async getQuotation(quotationId: string): Promise<Quotation | undefined> {
    const result = await this.client.get<ODataResponse<Quotation>>('/Quotations', {
      $filter: `quotationId eq '${escapeOData(quotationId)}'`,
      $top: '1'
    });
    return result.value ? result.value[0] : undefined;
  }

  async getOpenQuotations(materialId?: string): Promise<Quotation[]> {
    return this.searchQuotations({ status: 'OPEN', materialId });
  }

  async acceptQuotation(id: string): Promise<Quotation> {
    return this.client.patch<Quotation>(`/Quotations(${escapeOData(id)})`, {
      status: 'ACCEPTED'
    });
  }

  async rejectQuotation(id: string): Promise<Quotation> {
    return this.client.patch<Quotation>(`/Quotations(${escapeOData(id)})`, {
      status: 'REJECTED'
    });
  }
}
