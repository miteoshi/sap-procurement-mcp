import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const searchFmcgRetailersInputSchema = z.object({
  query: z.string().optional(),
  city: z.string().optional(),
  channel: z.enum(['KIRANA', 'SUPERMARKET', 'WHOLESALER']).optional(),
  limit: z.number().int().min(1).max(100).optional(),
});

export const searchRetailersTool = {
  name: 'search_fmcg_retailers',
  description: 'Find active retailer records by retailer name, retailer code, contact, city, or channel.',
  inputSchema: searchFmcgRetailersInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof searchFmcgRetailersInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'search_fmcg_retailers', input }, 'tool call');
    return service.searchRetailers(input);
  },
};
