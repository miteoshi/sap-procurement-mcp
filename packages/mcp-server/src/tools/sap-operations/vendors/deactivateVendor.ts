import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const deactivateVendorInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to deactivate"),
});

export const deactivateVendorTool = {
  name: 'deactivate_vendor',
  description: "Deactivate a vendor by setting their status to INACTIVE.",
  inputSchema: deactivateVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof deactivateVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'deactivate_vendor', input }, 'tool call');

    const deactivatedVendor = await service.deactivate_vendor(input.vendor_id);

    return {
      success: true,
      message: `Vendor ${deactivatedVendor.name} has been deactivated.`,
      vendor: deactivatedVendor,
    };
  },
};
