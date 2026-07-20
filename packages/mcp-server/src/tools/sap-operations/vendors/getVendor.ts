import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getVendorInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to retrieve"),
});

export const getVendorTool = {
  name: 'get_vendor',
  description:
    "Retrieve complete details about a specific vendor by their ID. " +
    "Use this when the user asks for detailed information about a vendor (e.g. tax ID, email, etc.).",
  inputSchema: getVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof getVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_vendor', input }, 'tool call');

    const vendor = await service.getVendor(input.vendor_id);

    if (!vendor) {
      return { found: false, message: `No vendor found with ID "${input.vendor_id}"` };
    }

    return {
      found: true,
      vendor,
    };
  },
};
