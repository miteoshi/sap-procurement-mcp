import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getActiveFmcgSchemesInputSchema = z.object({
  sku: z.string().optional(),
});

export const getActiveFmcgSchemesTool = {
  name: 'get_active_fmcg_schemes',
  description: 'List currently valid FMCG retailer schemes, optionally limited to schemes applicable to an exact product SKU. Check minimum quantity and validity before explaining an offer.',
  inputSchema: getActiveFmcgSchemesInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof getActiveFmcgSchemesInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_active_fmcg_schemes', input }, 'tool call');
    return service.getActiveSchemes(input.sku);
  },
};
