import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const issueGoodsInputSchema = z.object({
  materialId: z.string().describe("The human-readable material ID (e.g. MAT-1001)"),
  quantity: z.number().int().positive().describe("The quantity of goods to issue/consume"),
});

export const issueGoodsTool = {
  name: 'issue_goods',
  description: "Deducts stock from an inventory item when materials are consumed for production, sales, or other purposes.",
  inputSchema: issueGoodsInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof issueGoodsInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'issue_goods', input }, 'tool call');

    const updatedItem = await service.issueGoods(input.materialId, input.quantity);

    return {
      success: true,
      message: `Successfully issued ${input.quantity} units of ${input.materialId}.`,
      remaining_quantity: updatedItem.quantityOnHand
    };
  },
};
