import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getFmcgProductDetailsInputSchema = z.object({
  sku: z.string().min(1),
});

export const getFmcgProductDetailsTool = {
  name: 'get_fmcg_product_details',
  description: 'Get a product by exact SKU, including current retail price, MRP, stock availability, and active schemes.',
  inputSchema: getFmcgProductDetailsInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof getFmcgProductDetailsInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_fmcg_product_details', input }, 'tool call');
    return (await service.getProductDetails(input.sku)) ?? { found: false, sku: input.sku };
  },
};
