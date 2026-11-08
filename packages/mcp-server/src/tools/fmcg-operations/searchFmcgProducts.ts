import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const searchFmcgProductsInputSchema = z.object({
  query: z.string().optional(),
  brand: z.string().optional(),
  category: z.string().optional(),
  limit: z.number().int().min(1).max(100).optional(),
});

export const searchFmcgProductsTool = {
  name: 'search_fmcg_products',
  description: 'Search the FMCG retail product catalogue by name, SKU, brand, or category. Returns product availability quantities and identifiers.',
  inputSchema: searchFmcgProductsInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof searchFmcgProductsInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'search_fmcg_products', input }, 'tool call');
    return service.searchProducts(input);
  },
};
