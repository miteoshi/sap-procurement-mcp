import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const listRetailInteractionsInputSchema = z.object({
  retailerId: z.string().uuid().optional(),
  limit: z.number().int().min(1).max(100).optional(),
});

export const listRetailInteractionsTool = {
  name: 'list_retail_interactions',
  description: 'Review recent FMCG retailer conversations, optionally filtered to a retailer ID. Returns interaction summaries and outcomes.',
  inputSchema: listRetailInteractionsInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof listRetailInteractionsInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'list_retail_interactions', input }, 'tool call');
    return service.listInteractions(input);
  },
};
