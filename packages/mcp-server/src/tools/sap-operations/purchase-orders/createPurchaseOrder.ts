import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const createPurchaseOrderInputSchema = z.object({
  vendor_ID: z.string().uuid().describe("The UUID of the vendor"),
  currency: z.string().length(3).default('USD').describe("3-letter currency code, e.g. 'USD'"),
  items: z.array(z.object({
    materialId: z.string().describe("The material ID, e.g. 'MAT-1001'"),
    quantity: z.number().int().positive().describe("Quantity of the material"),
    unitPrice: z.number().positive().describe("Price per unit")
  })).optional().describe("Array of line items to create with the PO"),
});

export const createPurchaseOrderTool = {
  name: 'create_purchase_order',
  description: "Creates a new purchase order for a vendor.",
  inputSchema: createPurchaseOrderInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof createPurchaseOrderInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'create_purchase_order', input }, 'tool call');

    const createdPo = await service.createPurchaseOrder(input);

    return {
      success: true,
      message: `Purchase order created successfully with ID: ${createdPo.ID}`,
      purchaseOrder: createdPo,
    };
  },
};
