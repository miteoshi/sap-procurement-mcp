import type { CapClient } from '../../../clients/capClient.js';
import type { SupplierInvoice, SupplierInvoiceFilters, ODataResponse, PurchaseOrder, InvoiceVerificationChecks } from '../../../types/procurement.js';
import { PurchaseOrderStatus } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class InvoiceService {
  constructor(private readonly client: CapClient) { }

  async searchInvoices(filters: SupplierInvoiceFilters = {}): Promise<SupplierInvoice[]> {
    const filterClauses: string[] = [];
    if (filters.purchaseOrderId) {
      filterClauses.push(`purchaseOrder_ID eq '${escapeOData(filters.purchaseOrderId)}'`);
    }
    if (filters.vendorId) {
      filterClauses.push(`vendor_ID eq '${escapeOData(filters.vendorId)}'`);
    }
    if (filters.status) {
      filterClauses.push(`status eq '${escapeOData(filters.status)}'`);
    }
    if (filters.fromDate) {
      filterClauses.push(`invoiceDate ge ${escapeOData(filters.fromDate)}`);
    }
    if (filters.toDate) {
      filterClauses.push(`invoiceDate le ${escapeOData(filters.toDate)}`);
    }

    const queryParams: Record<string, string> = {
      $orderby: 'invoiceDate desc',
      $top: String(filters.limit || 50),
      $expand: 'vendor,purchaseOrder'
    };

    if (filterClauses.length > 0) {
      queryParams.$filter = filterClauses.join(' and ');
    }

    const result = await this.client.get<ODataResponse<SupplierInvoice>>('/SupplierInvoices', queryParams);
    return result.value;
  }

  async getInvoice(idOrInvoiceNumber: string): Promise<SupplierInvoice | undefined> {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(idOrInvoiceNumber);
    const filterField = isUuid ? 'ID' : 'invoiceNumber';

    const result = await this.client.get<ODataResponse<SupplierInvoice>>('/SupplierInvoices', {
      $filter: `${filterField} eq '${escapeOData(idOrInvoiceNumber)}'`,
      $top: '1',
      $expand: 'vendor,lineItems($expand=material),purchaseOrder($expand=lineItems($expand=material))'
    });
    return result.value[0];
  }

  async createInvoice(data: {
    purchaseOrderId: string;
    invoiceNumber: string;
    invoiceDate: string;
    postingDate: string;
    currency: string;
    totalAmount: number;
    items: Array<{ materialId: string; quantity: number; unitPrice: number }>;
  }): Promise<SupplierInvoice> {

    // 1. Validate PO exists and is received
    const poResult = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `ID eq '${escapeOData(data.purchaseOrderId)}' or poNumber eq '${escapeOData(data.purchaseOrderId)}'`,
      $top: '1',
      $expand: 'lineItems($expand=material)'
    });

    const po = poResult.value[0];
    if (!po) {
      throw new Error(`Purchase order ${data.purchaseOrderId} not found.`);
    }

    if (po.status !== 'RECEIVED' && po.status !== 'PARTIALLY_RECEIVED') {
      throw new Error(`Purchase order ${po.poNumber} must be fully or partially received before invoicing. Current status: ${po.status}`);
    }

    if (po.currency !== data.currency) {
      throw new Error(`Invoice currency ${data.currency} does not match PO currency ${po.currency}.`);
    }

    // 2. Validate duplicate invoice number
    const dupResult = await this.client.get<ODataResponse<SupplierInvoice>>('/SupplierInvoices', {
      $filter: `invoiceNumber eq '${escapeOData(data.invoiceNumber)}'`,
      $top: '1'
    });
    if (dupResult.value.length > 0) {
      throw new Error(`Invoice number '${data.invoiceNumber}' already exists.`);
    }

    // 3. Create invoice with deep insert for line items
    const lineItems = data.items.map(item => {
      // Find the corresponding PO line item to resolve the UUID if the user passed a human-readable ID
      const poItem = po.lineItems?.find(pi => 
        pi.material_ID === item.materialId || pi.material?.materialId === item.materialId
      );

      return {
        material_ID: poItem ? poItem.material_ID : item.materialId, // Use resolved UUID if found
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        amount: item.quantity * item.unitPrice
      };
    });

    return this.client.post<SupplierInvoice>('/SupplierInvoices', {
      invoiceNumber: data.invoiceNumber,
      purchaseOrder_ID: po.ID,
      vendor_ID: po.vendor_ID,
      invoiceDate: data.invoiceDate,
      postingDate: data.postingDate,
      currency: data.currency,
      totalAmount: data.totalAmount,
      status: 'CREATED',
      lineItems
    });
  }

  async verifyInvoice(invoiceId: string): Promise<{ success: boolean; status: string; checks: InvoiceVerificationChecks; failures: string[] }> {
    const invoice = await this.getInvoice(invoiceId);


    if (!invoice) {
      throw new Error(`Invoice ${invoiceId} not found.`);
    }

    if (invoice.status !== 'CREATED') {
      throw new Error(`Invoice ${invoiceId} cannot be verified from status: ${invoice.status}.`);
    }

    const po = invoice.purchaseOrder;
    if (!po) {
      throw new Error(`Associated Purchase Order for invoice ${invoiceId} could not be loaded.`);
    }

    if (po.status !== PurchaseOrderStatus.RECEIVED && po.status !== PurchaseOrderStatus.PARTIALLY_RECEIVED) {
      throw new Error(`Purchase Order ${po.poNumber} has not received goods yet.`);
    }

    const failures: string[] = [];

    // Three-way match checks
    const checks: InvoiceVerificationChecks = {
      vendor: invoice.vendor_ID === po.vendor_ID,
      currency: invoice.currency === po.currency,
      quantity: true,
      price: true,
      material: true,
    };

    // Calculate if invoice item quantities exceed received quantities
    if (!invoice.lineItems || invoice.lineItems.length === 0) {
      throw new Error("Invoice contains no line items.");
    }




    for (const invItem of invoice.lineItems) {
      // Robust matching: Try to match by UUID or fallback to the human-readable materialId
      const matchingPoItem = (po.lineItems || []).find(pi => 
        pi.material_ID === invItem.material_ID || 
        (pi.material && pi.material.materialId === invItem.material_ID) ||
        (invItem.material && pi.material && pi.material.materialId === invItem.material.materialId)
      );

      if (!matchingPoItem) {
        checks.material = false;
        failures.push(
          `Material ${invItem.material_ID} not found on Purchase Order.`
        );
        continue;
      }

      const receivedQty = matchingPoItem.receivedQuantity ?? 0;

      if (invItem.quantity > receivedQty) {
        checks.quantity = false;
      }

      // Production-style cents comparison to avoid floating-point issues
      const invCents = Math.round(Number(invItem.unitPrice) * 100);
      const poCents = Math.round(Number(matchingPoItem.unitPrice) * 100);

      if (invCents !== poCents) {
        checks.price = false;
      }
    }

    if (!checks.vendor)
      failures.push("Vendor mismatch");

    if (!checks.currency)
      failures.push("Currency mismatch");

    if (!checks.quantity)
      failures.push("Invoice quantity exceeds received quantity");

    if (!checks.price)
      failures.push("Invoice unit price differs from Purchase Order");





    const allPassed = checks.vendor && checks.currency && checks.material && checks.quantity && checks.price;
    const newStatus = allPassed ? 'VERIFIED' : 'BLOCKED';

    await this.client.patch(`/SupplierInvoices(${invoice.ID})`, {
      status: newStatus
    });

    return {
      success: allPassed,
      status: newStatus,
      checks,
      failures
    };
  }

  async postInvoice(invoiceId: string): Promise<SupplierInvoice> {
    const invoice = await this.getInvoice(invoiceId);
    if (!invoice) {
      throw new Error(`Invoice ${invoiceId} not found.`);
    }

    if (invoice.status !== 'VERIFIED') {
      throw new Error(`Only VERIFIED invoices can be posted. Current status: ${invoice.status}`);
    }

    return this.client.patch<SupplierInvoice>(`/SupplierInvoices(${invoice.ID})`, {
      status: 'POSTED'
    });
  }

  async cancelInvoice(invoiceId: string): Promise<SupplierInvoice> {
    const invoice = await this.getInvoice(invoiceId);
    if (!invoice) {
      throw new Error(`Invoice ${invoiceId} not found.`);
    }

    if (invoice.status === 'BLOCKED') {
      throw new Error(`BLOCKED invoices cannot be cancelled without verification.`);
    }

    return this.client.patch<SupplierInvoice>(`/SupplierInvoices(${invoice.ID})`, {
      status: 'CANCELLED'
    });
  }
}
