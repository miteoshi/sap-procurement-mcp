import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const createPurchaseOrderFromQuoteInputSchema = z.object({
  quotationId: z.string().describe("The ID of the vendor quotation to convert into a purchase order"),
});

export const createPurchaseOrderFromQuoteTool = {
  name: 'create_purchase_order_from_quote',
  description: "Automatically builds and creates a Purchase Order based on an existing Vendor Quotation.",
  inputSchema: createPurchaseOrderFromQuoteInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof createPurchaseOrderFromQuoteInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'create_purchase_order_from_quote', input }, 'tool call');

    const po = await service.createPurchaseOrderFromQuotation(input.quotationId);

    return {
      success: true,
      message: `Successfully created Purchase Order ${po.poNumber || po.ID} from Quotation ${input.quotationId}.`,
      purchaseOrder: po,
    };
  },
};
