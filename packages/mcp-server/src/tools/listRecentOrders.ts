import { z } from 'zod';
import type { ProcurementService } from '../services/procurementService.js';
import { withCorrelation } from '../config/logger.js';
import { randomUUID } from 'node:crypto';

export const listRecentOrdersInputSchema = z.object({
  vendor_id: z
    .string()
    .uuid()
    .describe('vendor_id obtained from find_vendor - do not guess this value'),
  limit: z.number().int().min(1).max(50).default(10),
});

export const listRecentOrdersTool = {
  name: 'list_recent_orders',
  description:
    'List recent purchase orders for a vendor. Requires vendor_id - if you only ' +
    'have a vendor name, call find_vendor first to get the vendor_id. Returns ' +
    'po_number values usable with get_po_status.',
  inputSchema: listRecentOrdersInputSchema,
  handler: async (
    service: ProcurementService,
    input: z.infer<typeof listRecentOrdersInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'list_recent_orders', input }, 'tool call');

    const orders = await service.listRecentOrders(input.vendor_id, input.limit);

    return {
      count: orders.length,
      orders: orders.map((o) => ({
        po_number: o.poNumber,
        status: o.status,
        order_date: o.orderDate,
        total_amount: o.totalAmount,
        currency: o.currency,
      })),
    };
  },
};
