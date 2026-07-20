import { z } from 'zod';
import type { ProcurementService } from '../services/procurementService.js';
import { withCorrelation } from '../config/logger.js';
import { randomUUID } from 'node:crypto';

export const findVendorInputSchema = z.object({
  name: z.string().min(2).describe("Vendor name or partial name, e.g. 'Bosch'"),
});

export const findVendorTool = {
  name: 'find_vendor',
  description:
    "Look up a vendor by name and return its vendor_id. Call this FIRST when the " +
    "user refers to a vendor by name rather than ID - the returned vendor_id is " +
    "required input for list_recent_orders.",
  inputSchema: findVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof findVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'find_vendor', input }, 'tool call');

    const vendors = await service.findVendorByName(input.name);

    if (vendors.length === 0) {
      return { found: false, message: `No vendor found matching "${input.name}"` };
    }

    return {
      found: true,
      vendors: vendors.map((v) => ({
        vendor_id: v.ID,
        name: v.name,
        country: v.country,
        status: v.status,
      })),
    };
  },
};
