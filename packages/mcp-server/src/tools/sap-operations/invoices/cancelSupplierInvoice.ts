import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const cancelSupplierInvoiceTool = {
  name: 'cancel_supplier_invoice',
  description: 'Cancel a supplier invoice. Valid from CREATED, VERIFIED, or POSTED states. BLOCKED invoices cannot be cancelled directly.',
  inputSchema: z.object({
    invoiceId: z.string().describe('UUID or invoice number')
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.cancelInvoice(args.invoiceId);
  }
};
