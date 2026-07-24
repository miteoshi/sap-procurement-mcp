import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const createSupplierInvoiceTool = {
  name: 'create_supplier_invoice',
  description: 'Create a new supplier invoice against a purchase order. Leaves the invoice in CREATED status.',
  inputSchema: z.object({
    purchaseOrderId: z.string().describe('PO number or UUID being invoiced'),
    invoiceNumber: z.string().describe('Supplier-provided invoice number'),
    invoiceDate: z.string().describe('YYYY-MM-DD'),
    postingDate: z.string().describe('YYYY-MM-DD'),
    currency: z.string().max(3),
    totalAmount: z.number().positive().describe('Total amount being invoiced'),
    items: z.array(z.object({
      materialId: z.string(),
      quantity: z.number().positive(),
      unitPrice: z.number().positive()
    })).describe('Line items on the invoice')
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.createInvoice(args);
  }
};
