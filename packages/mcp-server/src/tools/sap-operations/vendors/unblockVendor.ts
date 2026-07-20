import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const unblockVendorInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to unblock"),
});

export const unblockVendorTool = {
  name: 'unblock_vendor',
  description: "Unblocks a vendor, returning them to ACTIVE status.",
  inputSchema: unblockVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof unblockVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'unblock_vendor', input }, 'tool call');

    const unblockedVendor = await service.unblockVendor(input.vendor_id);

    return {
      success: true,
      message: `Vendor ${unblockedVendor.name} has been unblocked.`,
      vendor: unblockedVendor,
    };
  },
};
