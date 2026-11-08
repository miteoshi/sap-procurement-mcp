import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const createRetailFollowUpInputSchema = z.object({
  interactionId: z.string().uuid(),
  requirement: z.string().min(1).max(500),
  followUpDate: z.string().date().optional(),
  assignedTo: z.string().max(100).optional(),
});

export const createRetailFollowUpTool = {
  name: 'create_retail_follow_up',
  description: 'Create a follow-up task for an existing retail interaction, such as confirming an order, delivery slot, or scheme details.',
  inputSchema: createRetailFollowUpInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof createRetailFollowUpInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'create_retail_follow_up', input }, 'tool call');
    return service.createFollowUp(input);
  },
};
