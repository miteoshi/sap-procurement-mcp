import { z } from 'zod';
import { VendorStatus } from '../../../types/procurement.js';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const searchVendorsInputSchema = z.object({
  name: z.string().optional().describe("Filter by vendor name (partial match)"),
  country: z.string().length(2).optional().describe("Filter by 2-letter country code"),
  status: z.nativeEnum(VendorStatus).optional().describe("Filter by vendor status"),
  limit: z.number().int().min(1).max(100).default(50).describe("Maximum number of results to return"),
});

export const searchVendorsTool = {
  name: 'search_vendors',
  description:
    "Search for vendors by name, country, or status and return a list of matching vendors. " +
    "Call this FIRST when the user refers to a vendor by name rather than ID to get the vendor_id. " +
    "The returned vendor_id is required input for list_recent_orders and get_vendor.",
  inputSchema: searchVendorsInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof searchVendorsInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'search_vendors', input }, 'tool call');

    const vendors = await service.searchVendors(input);

    if (vendors.length === 0) {
      return { found: false, message: `No vendors found matching the criteria` };
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
