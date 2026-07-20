import { z } from 'zod';
import type { ProcurementService } from '../services/procurementService.js';
import { withCorrelation } from '../config/logger.js';
import { randomUUID } from 'node:crypto';

export const blockVendorInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to block"),
});

export const blockVendorTool = {
  name: 'block_vendor',
  description: "Blocks a vendor from further activity. Use this when the user explicitly asks to block or suspend a vendor.",
  inputSchema: blockVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof blockVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'block_vendor', input }, 'tool call');

    const blockedVendor = await service.blockVendor(input.vendor_id);

    return {
      success: true,
      message: `Vendor ${blockedVendor.name} has been blocked.`,
      vendor: blockedVendor,
    };
  },
};
