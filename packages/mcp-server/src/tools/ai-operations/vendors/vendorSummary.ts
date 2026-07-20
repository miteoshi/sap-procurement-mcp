import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const vendorSummaryInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to summarize"),
});

export const vendorSummaryTool = {
  name: 'vendor_summary',
  description:
    "Provides a comprehensive summary of a vendor, including their details, recent orders, " +
    "total spend, and performance metrics. Use this when you need a holistic view of a vendor.",
  inputSchema: vendorSummaryInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof vendorSummaryInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'vendor_summary', input }, 'tool call');

    const vendor = await service.getVendor(input.vendor_id);
    if (!vendor) {
      return { found: false, message: `No vendor found with ID "${input.vendor_id}"` };
    }

    const [recentOrders, spend, performance] = await Promise.all([
      service.listRecentOrders(input.vendor_id, 5),
      service.getSupplierSpend(input.vendor_id),
      service.getVendorPerformance(input.vendor_id)
    ]);

    return {
      found: true,
      summary: {
        vendor,
        performance,
        spend,
        recent_orders: recentOrders.map(o => ({
          po_number: o.poNumber,
          status: o.status,
          order_date: o.orderDate,
          total_amount: o.totalAmount,
          currency: o.currency
        }))
      }
    };
  },
};
