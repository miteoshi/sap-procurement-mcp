import { z } from 'zod';
import { PurchaseOrderStatus } from '../../../types/procurement.js';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const searchPurchaseOrdersInputSchema = z.object({
  vendorId: z.string().uuid().optional().describe("Filter by Vendor UUID"),
  status: z.nativeEnum(PurchaseOrderStatus).optional().describe("Filter by PO status"),
  fromDate: z.string().optional().describe("Start date (YYYY-MM-DD)"),
  toDate: z.string().optional().describe("End date (YYYY-MM-DD)"),
  limit: z.number().int().min(1).max(100).default(50).describe("Maximum number of results to return"),
});

export const searchPurchaseOrdersTool = {
  name: 'search_purchase_orders',
  description: "Search purchase orders using vendor, status, or date filters. Returns purchase order headers together with expanded vendor information and line items (including material details) when available. Use this tool to list purchase orders; use get_purchase_order only when detailed information for a single purchase order is required.",
  inputSchema: searchPurchaseOrdersInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof searchPurchaseOrdersInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'search_purchase_orders', input }, 'tool call');

    const orders = await service.searchPurchaseOrders(input);

    return {
      success: true,
      count: orders.length,
      orders,
    };
  },
};
