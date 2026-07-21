import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const cancelPurchaseOrderInputSchema = z.object({
  id: z.string().uuid().describe("The UUID of the purchase order to cancel"),
});

export const cancelPurchaseOrderTool = {
  name: 'cancel_purchase_order',
  description: "Cancels a purchase order, moving it to the CANCELLED status.",
  inputSchema: cancelPurchaseOrderInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof cancelPurchaseOrderInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'cancel_purchase_order', input }, 'tool call');

    const cancelledPo = await service.cancelPurchaseOrder(input.id);

    return {
      success: true,
      message: `Purchase order ${cancelledPo.poNumber || cancelledPo.ID} has been cancelled.`,
      purchaseOrder: cancelledPo,
    };
  },
};
