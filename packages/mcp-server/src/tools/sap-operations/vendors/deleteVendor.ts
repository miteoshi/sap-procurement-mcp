import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const deleteVendorInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to delete"),
});

export const deleteVendorTool = {
  name: 'delete_vendor',
  description: "Deletes a vendor by setting their status to INACTIVE. True deletion is not allowed in SAP.",
  inputSchema: deleteVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof deleteVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'delete_vendor', input }, 'tool call');

    const deletedVendor = await service.deleteVendor(input.vendor_id);

    return {
      success: true,
      message: `Vendor ${deletedVendor.name} has been deleted (marked INACTIVE).`,
      vendor: deletedVendor,
    };
  },
};
