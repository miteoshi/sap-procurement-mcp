import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const addRetailInteractionMessageInputSchema = z.object({
  interactionId: z.string().uuid(),
  role: z.enum(['USER', 'ASSISTANT', 'SYSTEM']),
  content: z.string().min(1).max(12000),
});

export const addRetailInteractionMessageTool = {
  name: 'add_retail_interaction_message',
  description: 'Persist one user, assistant, or system message in an existing retail interaction. Save messages as the conversation progresses.',
  inputSchema: addRetailInteractionMessageInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof addRetailInteractionMessageInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'add_retail_interaction_message', input }, 'tool call');
    return service.addInteractionMessage(input);
  },
};
