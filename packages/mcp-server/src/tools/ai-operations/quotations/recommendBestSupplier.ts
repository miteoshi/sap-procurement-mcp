import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const recommendBestSupplierInputSchema = z.object({
  materialId: z.string().describe("The human-readable material ID to recommend a supplier for, e.g. MAT-1001"),
  requiredQuantity: z.number().int().positive().describe("The total quantity required for the upcoming order")
});

export const recommendBestSupplierTool = {
  name: 'recommend_best_supplier',
  description: "An AI Operation tool that aggregates quotations, vendor history, and inventory constraints for a required quantity of a material. Returns rich data so the LLM can recommend the best supplier to award the PO to.",
  inputSchema: recommendBestSupplierInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof recommendBestSupplierInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'recommend_best_supplier', input }, 'tool call');

    const inventoryItem = await service.checkInventory(input.materialId);
    if (!inventoryItem) {
      throw new Error(`Material '${input.materialId}' not found.`);
    }

    const quotations = await service.searchQuotations({ materialId: inventoryItem.ID, status: 'OPEN' });

    const aggregatedData = [];
    for (const quote of quotations) {
      const vendor = await service.getVendor(quote.vendor_ID);
      const performance = await service.getVendorPerformance(quote.vendor_ID);
      const contractPrice = await service.getPricingService().getVendorMaterialPrice(quote.vendor_ID, inventoryItem.ID);

      aggregatedData.push({
        quotation: quote,
        vendor: {
          name: vendor?.name,
          status: vendor?.status,
        },
        vendorPerformance: performance,
        activeContractPrice: contractPrice,
        canFulfillEntireQuantity: quote.quantity >= input.requiredQuantity
      });
    }

    return {
      success: true,
      material: inventoryItem,
      requiredQuantity: input.requiredQuantity,
      totalOpenQuotes: quotations.length,
      aggregatedData,
      instructionForLLM: "Evaluate the aggregated data and recommend the absolute best supplier for the required quantity. If no single quote can fulfill the entire quantity, recommend splitting the order or requesting more quotes. Base your decision heavily on vendor performance metrics alongside unit price."
    };
  },
};
