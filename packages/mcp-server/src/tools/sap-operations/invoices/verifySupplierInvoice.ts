import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const verifySupplierInvoiceTool = {
  name: 'verify_supplier_invoice',
  description: "Performs SAP-style three-way invoice verification by comparing the Supplier Invoice against the Purchase Order and received quantities. Validates vendor, currency, material, received quantity, and unit price. Updates the invoice status to VERIFIED or BLOCKED.",
  inputSchema: z.object({
    invoiceId: z.string().describe('UUID or invoice number')
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.verifyInvoice(args.invoiceId);
  }
};
