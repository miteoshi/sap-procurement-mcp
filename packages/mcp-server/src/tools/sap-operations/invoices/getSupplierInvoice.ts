import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const getSupplierInvoiceTool = {
  name: 'get_supplier_invoice',
  description: 'Get details of a specific supplier invoice (e.g. INV-1002 or UUID)',
  inputSchema: z.object({
    invoiceIdOrNumber: z.string()
  }),
  handler: async (service: ProcurementService, args: any) => {
    const invoice = await service.getInvoice(args.invoiceIdOrNumber);
    if (!invoice) throw new Error(`Invoice ${args.invoiceIdOrNumber} not found.`);
    return invoice;
  }
};
