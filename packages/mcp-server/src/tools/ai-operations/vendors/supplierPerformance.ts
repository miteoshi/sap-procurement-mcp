import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const supplierPerformanceInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to analyze"),
});

export const supplierPerformanceTool = {
  name: 'supplier_performance',
  description: "Analyzes a vendor's performance metrics (total orders, fulfilled, cancelled).",
  inputSchema: supplierPerformanceInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof supplierPerformanceInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'supplier_performance', input }, 'tool call');

    const performance = await service.getVendorPerformance(input.vendor_id);

    return {
      success: true,
      performance,
    };
  },
};
