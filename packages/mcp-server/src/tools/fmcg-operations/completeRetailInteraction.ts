import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const completeRetailInteractionInputSchema = z.object({
  interactionId: z.string().uuid(),
  summary: z.string().min(1).max(4000),
  outcome: z.enum(['INFORMATION_PROVIDED', 'INTEREST_CAPTURED', 'FOLLOW_UP_REQUIRED', 'NO_INTEREST', 'ORDER_ENQUIRY']),
  followUpRequired: z.boolean().optional(),
});

export const completeRetailInteractionTool = {
  name: 'complete_retail_interaction',
  description: 'Close a retail interaction and save its concise summary, outcome, and whether follow-up is required. Do this at the end of the conversation.',
  inputSchema: completeRetailInteractionInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof completeRetailInteractionInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'complete_retail_interaction', input }, 'tool call');
    return service.completeInteraction(input);
  },
};
