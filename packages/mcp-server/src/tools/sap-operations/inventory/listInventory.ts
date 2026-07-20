import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const listInventoryInputSchema = z.object({
  limit: z.number().int().positive().optional().describe("Maximum number of items to return (default 50)"),
});

export const listInventoryTool = {
  name: 'list_inventory',
  description: "Retrieves a paginated list of all inventory items and their stock levels.",
  inputSchema: listInventoryInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof listInventoryInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'list_inventory', input }, 'tool call');

    const items = await service.listInventory(input.limit);

    return {
      success: true,
      count: items.length,
      items: items.map(item => ({
        material_id: item.materialId,
        description: item.description,
        quantity_on_hand: item.quantityOnHand ?? 0,
        reorder_point: item.reorderPoint ?? 10,
        warehouse: item.warehouse,
      }))
    };
  },
};
