import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getPurchaseOrderInputSchema = z.object({
  idOrPoNumber: z.string().describe("The UUID or PO Number (e.g. 'PO-10001') of the purchase order to retrieve"),
});

export const getPurchaseOrderTool = {
  name: 'get_purchase_order',
  description: "Retrieves a single purchase order by its ID or PO Number.",
  inputSchema: getPurchaseOrderInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof getPurchaseOrderInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_purchase_order', input }, 'tool call');

    const po = await service.getPurchaseOrder(input.idOrPoNumber);

    if (!po) {
      return { success: false, message: `Purchase order ${input.idOrPoNumber} not found.` };
    }

    return {
      success: true,
      purchaseOrder: po,
    };
  },
};
