import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getPoStatusInputSchema = z.object({
  po_number: z.string().min(3).describe("PO number, e.g. 'PO-2026-0001'"),
});

export const getPoStatusTool = {
  name: 'get_po_status',
  description:
    'Get the status and details of a specific purchase order by PO number. ' +
    'po_number typically comes from list_recent_orders output.',
  inputSchema: getPoStatusInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof getPoStatusInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_po_status', input }, 'tool call');

    const po = await service.getPoStatus(input.po_number);

    if (!po) {
      return { found: false, message: `No purchase order found with number ${input.po_number}` };
    }

    return {
      found: true,
      po_number: po.poNumber,
      status: po.status,
      order_date: po.orderDate,
      total_amount: po.totalAmount,
      currency: po.currency,
    };
  },
};
