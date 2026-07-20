import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getVendorMaterialPriceInputSchema = z.object({
  vendorId: z.string().describe("The ID of the vendor"),
  materialId: z.string().describe("The human-readable material ID (e.g. MAT-1001)"),
});

export const getVendorMaterialPriceTool = {
  name: 'get_vendor_material_price',
  description: "Checks active Purchasing Info Records (PIR) for current negotiated rates for a material from a specific vendor.",
  inputSchema: getVendorMaterialPriceInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof getVendorMaterialPriceInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_vendor_material_price', input }, 'tool call');

    const inventoryItem = await service.checkInventory(input.materialId);
    if (!inventoryItem) {
      throw new Error(`Material '${input.materialId}' not found in inventory.`);
    }

    const price = await service.getPricingService().getVendorMaterialPrice(input.vendorId, inventoryItem.ID);

    return {
      success: true,
      price: price !== undefined ? price : null,
      message: price !== undefined 
        ? `The active negotiated contract price for ${input.materialId} from vendor ${input.vendorId} is ${price}.`
        : `No active Purchasing Info Record found for ${input.materialId} from vendor ${input.vendorId}.`
    };
  },
};
