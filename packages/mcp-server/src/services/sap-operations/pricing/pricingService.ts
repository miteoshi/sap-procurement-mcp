import type { CapClient } from '../../../clients/capClient.js';
import type { ODataResponse, POLineItem, PurchasingInfoRecord, Quotation } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class PricingService {
  constructor(private readonly client: CapClient) { }

  /**
   * Scans historical POLineItems to find the most recent unit price paid for a material from a specific vendor.
   */
  //expands gives more field to work with. it gives all the details of the purchase order
  async getLastPurchasePrice(vendorId: string, materialId: string): Promise<number | undefined> {
    const result = await this.client.get<ODataResponse<POLineItem>>('/POLineItems', {
      $filter: `purchaseOrder/vendor_ID eq '${escapeOData(vendorId)}' and material_ID eq '${escapeOData(materialId)}'`,
      $expand: 'purchaseOrder',
      $orderby: 'purchaseOrder/orderDate desc',
      $top: '1'
    });

    if (result.value && result.value[0] && result.value[0].unitPrice) {
      return Number(result.value[0].unitPrice);
    }
    return undefined;
  }

  /**
   * Scans PurchasingInfoRecords for active negotiated prices.
   * gives latest negotiated price for vendor material
   */
  async getVendorMaterialPrice(vendorId: string, materialId: string): Promise<number | undefined> {
    const today = new Date().toISOString().substring(0, 10);
    const result = await this.client.get<ODataResponse<PurchasingInfoRecord>>('/PurchasingInfoRecords', {
      $filter: `vendor_ID eq '${escapeOData(vendorId)}' and material_ID eq '${escapeOData(materialId)}' and validFrom <= ${today} and validTo >= ${today}`,
      $orderby: 'validFrom desc',
      $top: '1'
    });

    if (result.value && result.value[0] && result.value[0].price) {
      return Number(result.value[0].price);
    }
    return undefined;
  }

  /**
   * Retrieves a specific quotation by ID.
   */
  async getQuotation(quotationId: string): Promise<Quotation | undefined> {
    const result = await this.client.get<ODataResponse<Quotation>>('/Quotations', {
      $filter: `quotationId eq '${escapeOData(quotationId)}'`,
      $top: '1'
    });
    return result.value ? result.value[0] : undefined;
  }

  /**
   * Auto-resolves the best price by checking active info records first, then falling back to historical POs.
   */
  async resolveBestPrice(vendorId: string, materialId: string): Promise<number | undefined> {
    const contractPrice = await this.getVendorMaterialPrice(vendorId, materialId);
    if (contractPrice !== undefined) {
      return contractPrice;
    }
    return this.getLastPurchasePrice(vendorId, materialId);
  }
}
