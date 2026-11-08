import type { CapClient } from '../../../clients/capClient.js';
import type { CreateFollowUpInput, FollowUp } from '../../../types/fmcg.js';

export class FollowUpService {
  constructor(private readonly client: CapClient) {}

  async createFollowUp(input: CreateFollowUpInput): Promise<FollowUp> {
    return this.client.post<FollowUp>('/FollowUps', {
      interaction_ID: input.interactionId, requirement: input.requirement,
      ...(input.followUpDate ? { followUpDate: input.followUpDate } : {}),
      ...(input.assignedTo ? { assignedTo: input.assignedTo } : {}),
      status: 'OPEN',
    });
  }
}
