import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getLastPurchasePriceInputSchema = z.object({
  vendorId: z.string().describe("The ID of the vendor"),
  materialId: z.string().describe("The human-readable material ID (e.g. MAT-1001)"),
});

export const getLastPurchasePriceTool = {
  name: 'get_last_purchase_price',
  description: "Finds the most recent unit price paid for a specific material from a specific vendor based on historical purchase orders.",
  inputSchema: getLastPurchasePriceInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof getLastPurchasePriceInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_last_purchase_price', input }, 'tool call');

    const inventoryItem = await service.checkInventory(input.materialId);
    if (!inventoryItem) {
      throw new Error(`Material '${input.materialId}' not found in inventory.`);
    }

    const price = await service.getPricingService().getLastPurchasePrice(input.vendorId, inventoryItem.ID);

    return {
      success: true,
      price: price !== undefined ? price : null,
      message: price !== undefined 
        ? `The last purchase price for ${input.materialId} from vendor ${input.vendorId} was ${price}.`
        : `No historical purchase records found for ${input.materialId} from vendor ${input.vendorId}.`
    };
  },
};
