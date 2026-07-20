import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const checkLowStockInputSchema = z.object({});

export const checkLowStockTool = {
  name: 'check_low_stock',
  description: "Scans all inventory items to identify materials where the quantity on hand has fallen to or below the reorder point.",
  inputSchema: checkLowStockInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof checkLowStockInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'check_low_stock', input }, 'tool call');

    const items = await service.getLowStockItems();

    return {
      success: true,
      count: items.length,
      low_stock_items: items.map(item => ({
        material_id: item.materialId,
        description: item.description,
        quantity_on_hand: item.quantityOnHand ?? 0,
        reorder_point: item.reorderPoint ?? 10,
        deficit: (item.reorderPoint ?? 10) - (item.quantityOnHand ?? 0)
      }))
    };
  },
};
