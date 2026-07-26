import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const procurementTimelineTool = {
  name: 'procurement_timeline',
  description: 'Fetches the complete lifecycle timeline of a purchase order, including associated quotations, PO status, goods receipts, and invoices.',
  inputSchema: z.object({
    poNumberOrId: z.string().describe('The ID or PO number to fetch the timeline for')
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.getProcurementTimeline(args.poNumberOrId);
  }
};
