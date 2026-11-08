import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const startRetailInteractionInputSchema = z.object({
  retailerId: z.string().uuid().optional(),
  channel: z.enum(['VOICE', 'TEXT']),
});

export const startRetailInteractionTool = {
  name: "start_retail_interaction",
  description:
    "Start and persist a new retailer sales interaction. Always explicitly specify the channel: use TEXT when the interaction takes place through text chat, and VOICE when it takes place through a voice session. Never guess or assume the channel.",
  inputSchema: startRetailInteractionInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof startRetailInteractionInputSchema>
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: "start_retail_interaction", input }, "tool call");
    return service.startInteraction(input);
  },
};
