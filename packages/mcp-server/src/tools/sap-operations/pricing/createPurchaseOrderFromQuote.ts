import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const createPurchaseOrderFromQuoteInputSchema = z.object({
  quotationId: z.string().describe("The ID of the vendor quotation to convert into a purchase order"),
});

export const createPurchaseOrderFromQuoteTool = {
  name: 'create_purchase_order_from_quote',
  description: "Automatically builds and creates a Purchase Order based on an existing Vendor Quotation.",
  inputSchema: createPurchaseOrderFromQuoteInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof createPurchaseOrderFromQuoteInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'create_purchase_order_from_quote', input }, 'tool call');

    const quotation = await service.getPricingService().getQuotation(input.quotationId);
    if (!quotation) {
      throw new Error(`Quotation '${input.quotationId}' not found.`);
    }

    if (quotation.status !== 'OPEN') {
      throw new Error(`Quotation '${input.quotationId}' cannot be used because its status is ${quotation.status}.`);
    }

    const today = new Date().toISOString().substring(0, 10);
    if (quotation.validUntil < today) {
      throw new Error(`Quotation '${input.quotationId}' expired on ${quotation.validUntil}.`);
    }

    // Find the material to get its human-readable materialId (which createPurchaseOrder expects).
    // Actually, createPurchaseOrder currently expects materialId (string) and resolves it to UUID.
    // Wait, the quotation has material_ID (which is the UUID).
    // Let's pass the UUID and modify createPurchaseOrder to handle it, or lookup the material here.
    // Let's lookup the material so we can pass the correct materialId string.
    // Better yet, we can bypass createPurchaseOrder or update it to accept materialId (which we already know it handles, we just need the string).
    // Actually, wait, `quotation.material_ID` is the UUID. 
    // InventoryService doesn't currently expose a `getInventoryById` method, it has `checkInventory(materialId)`.
    // Let's just create the PO payload with the material UUID but pass it as materialId, because checkInventory checks `materialId eq X`.
    // Ah! Our checkInventory method takes `materialId` (the human readable one).
    // Let's just create a quick direct OData POST here to avoid duplicate lookups, or we can use createPurchaseOrder if we modify checkInventory to also check ID.
    // For simplicity, let's just make the OData POST directly, mimicking createPurchaseOrder.
    
    // Better: let's add an expand to the getQuotation call in PricingService to fetch the material, 
    // but we can also just fetch it here.
    const matResult = await (service as any).client.get('/InventoryItems', {
      $filter: `ID eq '${quotation.material_ID}'`,
      $top: '1'
    });
    
    if (!matResult.value || matResult.value.length === 0) {
      throw new Error(`Material for quotation not found in inventory.`);
    }
    const humanMaterialId = matResult.value[0].materialId;

    // Use the robust domain logic in PurchaseOrderService
    const po = await service.createPurchaseOrder({
      vendor_ID: quotation.vendor_ID,
      currency: quotation.currency,
      items: [
        {
          materialId: humanMaterialId,
          quantity: quotation.quantity,
          unitPrice: quotation.price
        }
      ]
    });

    // Mark quotation as ACCEPTED
    await (service as any).client.patch(`/Quotations(${quotation.ID})`, {
      status: 'ACCEPTED'
    });

    return {
      success: true,
      message: `Successfully created Purchase Order ${po.poNumber || po.ID} from Quotation ${input.quotationId}.`,
      purchaseOrder: po,
    };
  },
};
