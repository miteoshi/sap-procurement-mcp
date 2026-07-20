import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const approvePurchaseOrderInputSchema = z.object({
  id: z.string().uuid().describe("The UUID of the purchase order to approve"),
});

export const approvePurchaseOrderTool = {
  name: 'approve_purchase_order',
  description: "Approves a purchase order, moving it to the APPROVED status.",
  inputSchema: approvePurchaseOrderInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof approvePurchaseOrderInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'approve_purchase_order', input }, 'tool call');

    const approvedPo = await service.approvePurchaseOrder(input.id);

    return {
      success: true,
      message: `Purchase order ${approvedPo.poNumber || approvedPo.ID} has been approved.`,
      purchaseOrder: approvedPo,
    };
  },
};
