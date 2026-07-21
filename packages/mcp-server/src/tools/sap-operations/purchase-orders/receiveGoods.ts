import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const receiveGoodsInputSchema = z.object({
  id: z.string().describe("The UUID or PO Number of the purchase order"),
  items: z.array(z.object({
    materialId: z.string().describe("The human-readable material ID, e.g. MAT-1001"),
    quantity: z.number().int().positive().describe("The quantity received")
  })).optional().describe("Optional: Provide specific materials and quantities for a partial receipt. If omitted, the system will assume all remaining pending quantities have been fully received.")
});

export const receiveGoodsTool = {
  name: 'receive_goods',
  description: "Marks goods as received for a Purchase Order. If no items are specified, it fully receives all pending quantities. Automatically increments inventory stock.",
  inputSchema: receiveGoodsInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof receiveGoodsInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'receive_goods', input }, 'tool call');

    const result = await service.receiveGoods(input.id, input.items);

    return {
      success: true,
      message: `Goods receipt processed for Purchase Order ${input.id}. New Status: ${result.status}`,
      purchaseOrder: result,
    };
  },
};
