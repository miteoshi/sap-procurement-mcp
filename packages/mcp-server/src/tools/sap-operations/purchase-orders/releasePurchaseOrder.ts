import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const releasePurchaseOrderInputSchema = z.object({
  id: z.string().describe("The UUID or PO Number of the purchase order to release"),
});

export const releasePurchaseOrderTool = {
  name: 'release_purchase_order',
  description: "Releases a Purchase Order, changing its status to RELEASED.",
  inputSchema: releasePurchaseOrderInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof releasePurchaseOrderInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'release_purchase_order', input }, 'tool call');

    let poId = input.id;
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(input.id)) {
      const po = await service.getPurchaseOrder(input.id);
      if (!po) {
        throw new Error(`Purchase order ${input.id} not found.`);
      }
      poId = po.ID;
    }

    const purchaseOrder = await service.releasePurchaseOrder(poId);

    return {
      success: true,
      message: `Purchase order ${input.id} successfully released.`,
      purchaseOrder: purchaseOrder,
    };
  },
};
