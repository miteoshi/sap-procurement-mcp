import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { SupplierInvoiceStatus } from '../../../types/procurement.js';

export const searchSupplierInvoicesTool = {
  name: 'search_supplier_invoices',
  description: 'Search for supplier invoices by PO, vendor, or status',
  inputSchema: z.object({
    purchaseOrderId: z.string().optional(),
    vendorId: z.string().optional(),
    status: z.nativeEnum(SupplierInvoiceStatus).optional(),
    fromDate: z.string().optional(),
    toDate: z.string().optional(),
    limit: z.number().optional()
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.searchInvoices(args);
  }
};
