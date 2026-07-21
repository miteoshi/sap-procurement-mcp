import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const checkInventoryInputSchema = z.object({
  material_id: z.string().min(3).describe("Material ID, e.g. 'MAT-1001'"),
});

export const checkInventoryTool = {
  name: 'check_inventory',
  description:
    'Check current stock level for a material. Useful after get_po_status to ' +
    'confirm whether ordered items are in stock, or standalone for a direct ' +
    'material lookup.',
  inputSchema: checkInventoryInputSchema,
  handler: async (
    service: ProcurementService,
    input: z.infer<typeof checkInventoryInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'check_inventory', input }, 'tool call');

    const item = await service.checkInventory(input.material_id);

    if (!item) {
      return { found: false, message: `No material found with ID ${input.material_id}` };
    }

    return {
      found: true,
      material_id: item.materialId,
      description: item.description,
      quantityOnHand: item.quantityOnHand ?? 0,
      low_stock: (item.quantityOnHand ?? 0) <= (item.reorderPoint ?? 10),
      warehouse: item.warehouse,
    };
  },
};
