import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getRetailInteractionInputSchema = z.object({
  interactionId: z.string().uuid(),
});

export const getRetailInteractionTool = {
  name: 'get_retail_interaction',
  description: 'Get the saved header and summary for one retail interaction by its UUID.',
  inputSchema: getRetailInteractionInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof getRetailInteractionInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_retail_interaction', input }, 'tool call');
    return service.getInteraction(input.interactionId);
  },
};
