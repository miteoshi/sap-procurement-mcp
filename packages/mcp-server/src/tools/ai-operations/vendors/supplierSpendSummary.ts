import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const supplierSpendSummaryInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to summarize spend for"),
});

export const supplierSpendSummaryTool = {
  name: 'supplier_spend_summary',
  description: "Analyzes a vendor's total historical spend.",
  inputSchema: supplierSpendSummaryInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof supplierSpendSummaryInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'supplier_spend_summary', input }, 'tool call');

    const spend = await service.getSupplierSpend(input.vendor_id);

    return {
      success: true,
      spend,
    };
  },
};
