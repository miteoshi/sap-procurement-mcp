import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const postSupplierInvoiceTool = {
  name: 'post_supplier_invoice',
  description: 'Post a VERIFIED invoice to accounting. Transitions status from VERIFIED to POSTED.',
  inputSchema: z.object({
    invoiceId: z.string().describe('UUID or invoice number')
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.postInvoice(args.invoiceId);
  }
};
