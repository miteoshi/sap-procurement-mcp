import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const searchQuotationsInputSchema = z.object({
  vendorId: z.string().optional().describe("Filter by vendor UUID or readable ID"),
  materialId: z.string().optional().describe("Filter by material UUID or readable ID"),
  status: z.enum(['OPEN', 'ACCEPTED', 'REJECTED']).optional().describe("Filter by quotation status"),
  limit: z.number().int().positive().optional().describe("Maximum number of quotations to return")
});

export const searchQuotationsTool = {
  name: 'search_quotations',
  description: "Searches for vendor quotations based on various filters like vendor, material, or status.",
  inputSchema: searchQuotationsInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof searchQuotationsInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'search_quotations', input }, 'tool call');

    const quotations = await service.searchQuotations(input);

    return {
      success: true,
      count: quotations.length,
      quotations
    };
  },
};
