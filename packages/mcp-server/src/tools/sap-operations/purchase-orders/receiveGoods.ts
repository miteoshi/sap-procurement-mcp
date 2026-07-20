import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const receiveGoodsInputSchema = z.object({
  id: z.string().uuid().describe("The UUID of the purchase order to receive goods for"),
});

export const receiveGoodsTool = {
  name: 'receive_goods',
  description: "Marks goods as received for a purchase order (moving it to RECEIVED status).",
  inputSchema: receiveGoodsInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof receiveGoodsInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'receive_goods', input }, 'tool call');

    const receivedPo = await service.receiveGoods(input.id);

    return {
      success: true,
      message: `Goods received for purchase order ${receivedPo.poNumber || receivedPo.ID}.`,
      purchaseOrder: receivedPo,
    };
  },
};
