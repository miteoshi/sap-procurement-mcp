import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const explainPurchaseOrderTool = {
  name: 'explain_purchase_order',
  description: 'Fetches relevant contextual data about a purchase order so you can explain why it is in its current state (e.g. why it is still open, blocked, or partially received).',
  inputSchema: z.object({
    poNumberOrId: z.string().describe('The ID or PO number to explain')
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.explainPurchaseOrder(args.poNumberOrId);
  }
};
