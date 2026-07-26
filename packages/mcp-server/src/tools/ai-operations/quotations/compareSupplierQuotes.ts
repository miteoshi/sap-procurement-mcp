import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const compareSupplierQuotesInputSchema = z.object({
  materialId: z.string().describe("The human-readable material ID to compare quotes for, e.g. MAT-1001"),
});

interface SupplierComparisonResult {
  quotation: any;
  vendor: {
    ID?: string;
    name?: string;
    status?: string;
  };
  vendorPerformance: any;
  activeContractPrice?: number;
}

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

    // 3. For each vendor that has a quotation, fetch their Vendor Performance and Info Records in parallel
    const aggregatedData: SupplierComparisonResult[] = await Promise.all(
      quotations.map(async (quote) => {
        const [vendor, performance, contractPrice] = await Promise.all([
          service.getVendor(quote.vendor_ID),
          service.getVendorPerformance(quote.vendor_ID),
          service.getVendorMaterialPrice(quote.vendor_ID, inventoryItem.ID)
        ]);

        return {
          quotation: quote,
          vendor: {
            ID: vendor?.ID,
            name: vendor?.name,
            status: vendor?.status,
          },
          vendorPerformance: performance,
          activeContractPrice: contractPrice,
        };
      })
    );

    // Sort by price ascending
    aggregatedData.sort((a, b) => a.quotation.price - b.quotation.price);

    return {
      success: true,
      material: inventoryItem,
      totalOpenQuotes: quotations.length,
      aggregatedData,
      analysisContext: {
        sortedBy: "priceAscending",
        includesContractPrices: true,
        includesPerformanceMetrics: true
      }
    };
  },
};
