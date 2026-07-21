import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const addPoLineItemInputSchema = z.object({
  poId: z.string().uuid().describe("The UUID of the existing purchase order"),
  materialId: z.string().describe("The material ID, e.g. 'MAT-1001'"),
  quantity: z.number().int().positive().describe("Quantity of the material to add"),
  unitPrice: z.number().positive().describe("Price per unit of the material")
});

export const addPoLineItemTool = {
  name: 'add_po_line_item',
  description: 
    "Adds a new line item (material, quantity, price) to an existing Purchase Order. " +
    "NOTE: Use create_purchase_order with an 'items' array as the primary method to build a PO. " +
    "This tool is only for later modifications/editing of an existing PO.",
  inputSchema: addPoLineItemInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof addPoLineItemInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'add_po_line_item', input }, 'tool call');

    const lineItem = await service.addPOLineItem(input.poId, input.materialId, input.quantity, input.unitPrice);

    return {
      success: true,
      message: `Line item added successfully to PO.`,
      lineItem,
    };
  },
};
