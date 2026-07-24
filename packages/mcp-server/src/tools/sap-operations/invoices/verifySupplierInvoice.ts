import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const verifySupplierInvoiceTool = {
  name: 'verify_supplier_invoice',
  description: 'Perform a 3-way match (Invoice vs PO vs Goods Receipt). Checks vendor, currency, and ensures invoice amount <= received quantity value. Transitions status to VERIFIED or BLOCKED.',
  inputSchema: z.object({
    invoiceId: z.string().describe('UUID or invoice number')
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.verifyInvoice(args.invoiceId);
  }
};
