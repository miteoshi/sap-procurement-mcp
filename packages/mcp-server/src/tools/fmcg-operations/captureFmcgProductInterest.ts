import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const captureFmcgProductInterestInputSchema = z.object({
  interactionId: z.string().uuid(),
  sku: z.string().min(1),
  quantity: z.number().int().positive(),
  unit: z.string().optional(),
  notes: z.string().max(500).optional(),
});

export const captureProductInterestTool = {
  name: 'capture_fmcg_product_interest',
  description: 'Record a retailer’s expressed interest in a product and requested quantity. Use only after the retailer has expressed interest; this does not place or confirm an order.',
  inputSchema: captureFmcgProductInterestInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof captureFmcgProductInterestInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'capture_fmcg_product_interest', input }, 'tool call');
    return service.captureProductInterest(input);
  },
};
