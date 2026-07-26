import type { CapClient } from '../../../clients/capClient.js';
import type { ODataResponse, PurchaseOrder, SupplierInvoice, Quotation } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class AiProcurementService {
  constructor(private readonly client: CapClient) {}

  async getProcurementHealth(): Promise<{
    blockedInvoices: number;
    partiallyReceivedPOs: number;
    unreleasedPOs: number;
    expiredQuotations: number;
  }> {
    const today = new Date().toISOString().substring(0, 10);

    // 1. Blocked Invoices
    const blockedInvoicesResult = await this.client.get<ODataResponse<SupplierInvoice>>('/SupplierInvoices', {
      $filter: `status eq 'BLOCKED'`,
      $top: '1',
      $count: 'true'
    });

    // 2. Partially Received POs
    const partiallyReceivedPOsResult = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `status eq 'PARTIALLY_RECEIVED'`,
      $top: '1',
      $count: 'true'
    });

    // 3. Unreleased POs (CREATED)
    const unreleasedPOsResult = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `status eq 'CREATED'`,
      $top: '1',
      $count: 'true'
    });

    // 4. Expired Quotations
    const expiredQuotationsResult = await this.client.get<ODataResponse<Quotation>>('/Quotations', {
      $filter: `validUntil lt ${today} and status eq 'OPEN'`,
      $top: '1',
      $count: 'true'
    });

    return {
      blockedInvoices: (blockedInvoicesResult as any)['@odata.count'] ?? 0,
      partiallyReceivedPOs: (partiallyReceivedPOsResult as any)['@odata.count'] ?? 0,
      unreleasedPOs: (unreleasedPOsResult as any)['@odata.count'] ?? 0,
      expiredQuotations: (expiredQuotationsResult as any)['@odata.count'] ?? 0,
    };
  }

  async getProcurementTimeline(poNumberOrId: string): Promise<any> {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(poNumberOrId);
    const filterField = isUuid ? 'ID' : 'poNumber';

    const poResult = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `${filterField} eq '${escapeOData(poNumberOrId)}'`,
      $top: '1',
      $expand: 'lineItems($expand=material)'
    });

    const po = poResult.value[0];
    if (!po) {
      throw new Error(`Purchase order ${poNumberOrId} not found.`);
    }

    const invoicesResult = await this.client.get<ODataResponse<SupplierInvoice>>('/SupplierInvoices', {
      $filter: `purchaseOrder_ID eq '${po.ID}'`,
      $top: '100'
    });
    
    const quotationsResult = await this.client.get<ODataResponse<Quotation>>('/Quotations', {
      $filter: `vendor_ID eq '${po.vendor_ID}'`,
      $top: '100'
    });

    // To link quotes, we see if a quotation exists for the materials in the PO
    const poMaterials = (po.lineItems || []).map(li => li.material_ID);
    const linkedQuotes = quotationsResult.value.filter(q => poMaterials.includes(q.material_ID));

    return {
      purchaseOrder: {
        id: po.ID,
        poNumber: po.poNumber,
        status: po.status,
        orderDate: po.orderDate,
        totalAmount: po.totalAmount,
        currency: po.currency
      },
      quotations: linkedQuotes.map(q => ({
        id: q.ID,
        status: q.status,
        price: q.price,
        quantity: q.quantity,
        validUntil: q.validUntil
      })),
      goodsReceipts: po.lineItems?.map(item => ({
        materialId: item.material?.materialId || item.material_ID,
        orderedQuantity: item.quantity,
        receivedQuantity: item.receivedQuantity ?? 0
      })),
      invoices: invoicesResult.value.map(inv => ({
        invoiceNumber: inv.invoiceNumber,
        status: inv.status,
        totalAmount: inv.totalAmount,
        invoiceDate: inv.invoiceDate,
        postingDate: inv.postingDate
      }))
    };
  }

  async explainPurchaseOrder(poNumberOrId: string): Promise<any> {
    return this.getProcurementTimeline(poNumberOrId);
  }
}
