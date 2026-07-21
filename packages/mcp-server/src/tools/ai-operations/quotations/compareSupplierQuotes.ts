import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const compareSupplierQuotesInputSchema = z.object({
  materialId: z.string().describe("The human-readable material ID to compare quotes for, e.g. MAT-1001"),
});

export const compareSupplierQuotesTool = {
  name: 'compare_supplier_quotes',
  description: "An AI Operation tool that aggregates all OPEN quotations, active info records, and vendor performance history for a specific material. It returns this rich data structure so the calling LLM can intelligently compare quotes.",
  inputSchema: compareSupplierQuotesInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof compareSupplierQuotesInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'compare_supplier_quotes', input }, 'tool call');

    // 1. Resolve material UUID
    const inventoryItem = await service.checkInventory(input.materialId);
    if (!inventoryItem) {
      throw new Error(`Material '${input.materialId}' not found in inventory.`);
    }

    // 2. Fetch OPEN Quotations for this material
    const quotations = await service.searchQuotations({ materialId: inventoryItem.ID, status: 'OPEN' });

    // 3. For each vendor that has a quotation, fetch their Vendor Performance and Info Records
    const aggregatedData = [];
    for (const quote of quotations) {
      const vendor = await service.getVendor(quote.vendor_ID);
      const performance = await service.getVendorPerformance(quote.vendor_ID);
      
      // We don't have a direct "list all info records for vendor" on the facade, 
      // but we can query the pricing service directly if needed, or just let the LLM use the performance data.
      // We can do a quick check via PricingService.getVendorMaterialPrice to see if they have an active contract.
      const contractPrice = await service.getPricingService().getVendorMaterialPrice(quote.vendor_ID, inventoryItem.ID);

      aggregatedData.push({
        quotation: quote,
        vendor: {
          ID: vendor?.ID,
          name: vendor?.name,
          status: vendor?.status,
        },
        vendorPerformance: performance,
        activeContractPrice: contractPrice,
      });
    }

    // Sort by price ascending
    aggregatedData.sort((a, b) => a.quotation.price - b.quotation.price);

    return {
      success: true,
      material: inventoryItem,
      totalOpenQuotes: quotations.length,
      aggregatedData,
      instructionForLLM: "Use the above aggregated data to provide a comprehensive comparison to the user, weighing price against vendor performance (on-time delivery, defect rate) and any existing contract prices."
    };
  },
};
