import type { CapClient } from '../../../clients/capClient.js';
import type {
  AddInteractionMessageInput, CompleteInteractionInput, Interaction, InteractionMessage,
  InteractionItem, ListInteractionsInput, ODataList, StartInteractionInput,
} from '../../../types/fmcg.js';

export class InteractionService {
  constructor(private readonly client: CapClient) {}

  async startInteraction(input: StartInteractionInput): Promise<Interaction> {
    const stamp = new Date();
    const number = `FMCG-${stamp
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, "")}-${stamp.getTime().toString().slice(-6)}`;

    return this.client.post<Interaction>("/Interactions", {
      interactionNumber: number,
      ...(input.retailerId ? { retailer_ID: input.retailerId } : {}),
      channel: input.channel,
      status: "IN_PROGRESS",
      startedAt: stamp.toISOString(),
    });
  }

  async addMessage(
    input: AddInteractionMessageInput
  ): Promise<InteractionMessage> {
    return this.client.post<InteractionMessage>("/InteractionMessages", {
      interaction_ID: input.interactionId,
      role: input.role,
      content: input.content,
      createdAt: new Date().toISOString(),
    });
  }

  async captureProductInterest(input: {
    interactionId: string;
    productId: string;
    quantity: number;
    unit?: string;
    notes?: string;
  }): Promise<InteractionItem> {
    if (!Number.isInteger(input.quantity) || input.quantity <= 0) {
      throw new Error("quantity must be a positive integer");
    }
    return this.client.post<InteractionItem>("/InteractionItems", {
      interaction_ID: input.interactionId,
      product_ID: input.productId,
      requestedQuantity: input.quantity,
      unit: input.unit ?? "EA",
      interestStatus: "INTERESTED",
      notes: input.notes ?? "",
    });
  }

  async completeInteraction(
    input: CompleteInteractionInput
  ): Promise<Interaction> {
    return this.client.patch<Interaction>(
      `/Interactions(${input.interactionId})`,
      {
        status: "COMPLETED",
        endedAt: new Date().toISOString(),
        summary: input.summary,
        outcome: input.outcome,
        followUpRequired: input.followUpRequired ?? false,
      }
    );
  }

  async listInteractions(
    input: ListInteractionsInput = {}
  ): Promise<Interaction[]> {
    const params: Record<string, string> = {
      $orderby: "startedAt desc",
      $top: String(input.limit ?? 20),
      $expand: "retailer",
    };
    if (input.retailerId)
      params["$filter"] = `retailer_ID eq ${input.retailerId}`;
    const result = await this.client.get<ODataList<Interaction>>(
      "/Interactions",
      params
    );
    return result.value;
  }

  async getInteraction(interactionId: string): Promise<unknown> {
    return this.client.get<Interaction>(`/Interactions(${interactionId})`, {
      $expand: "retailer,messages,items,followUps",
    });
  }
}
