import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const summarizeInvoiceDiscrepanciesTool = {
  name: 'summarize_invoice_discrepancies',
  description: 'Gathers rich context around a BLOCKED invoice to explain why it failed the 3-way match, aggregating invoice data and PO receiving history.',
  inputSchema: z.object({
    invoiceId: z.string().describe('UUID or invoice number of the BLOCKED invoice')
  }),
  handler: async (service: ProcurementService, args: any) => {
    const invoice = await service.getInvoice(args.invoiceId);
    if (!invoice) throw new Error(`Invoice ${args.invoiceId} not found.`);
    
    if (invoice.status !== 'BLOCKED') {
      return `Invoice ${invoice.invoiceNumber} is currently in status ${invoice.status}, not BLOCKED.`;
    }

    const po = invoice.purchaseOrder;
    if (!po) {
      return `Invoice ${invoice.invoiceNumber} has no associated Purchase Order to compare against.`;
    }

    // Calculate maximum expected amount
    let expectedMaxAmount = 0;
    const receivingDetails = (po.lineItems || []).map(item => {
      const allowedAmount = (item.receivedQuantity || 0) * (item.unitPrice || 0);
      expectedMaxAmount += allowedAmount;
      return {
        materialId: item.material_ID,
        orderedQty: item.quantity,
        receivedQty: item.receivedQuantity,
        unitPrice: item.unitPrice,
        allowedBillingAmount: allowedAmount
      };
    });

    return {
      discrepancySummary: `Invoice ${invoice.invoiceNumber} is blocked. The invoice total amount was ${invoice.totalAmount} ${invoice.currency}, but based on goods received, the maximum allowed billing amount is ${expectedMaxAmount} ${po.currency}.`,
      invoiceDetails: {
        invoiceNumber: invoice.invoiceNumber,
        vendor: invoice.vendor_ID,
        currency: invoice.currency,
        totalAmount: invoice.totalAmount
      },
      purchaseOrderDetails: {
        poNumber: po.poNumber,
        vendor: po.vendor_ID,
        currency: po.currency,
        receivingDetails
      }
    };
  }
};
