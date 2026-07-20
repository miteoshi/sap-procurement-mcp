import { z } from 'zod';
import { VendorStatus } from '../../../types/procurement.js';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const createVendorInputSchema = z.object({
  name: z.string().min(2).describe("Vendor name"),
  taxId: z.string().min(2).describe("Vendor tax ID"),
  country: z.string().length(2).describe("2-letter country code, e.g. 'US' or 'DE'"),
  email: z.string().email().describe("Vendor contact email"),
  status: z.nativeEnum(VendorStatus).default(VendorStatus.ACTIVE).describe("Initial status"),
});

export const createVendorTool = {
  name: 'create_vendor',
  description: "Creates a new vendor in the system. Use this when the user asks to add or onboard a new vendor.",
  inputSchema: createVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof createVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'create_vendor', input }, 'tool call');

    const newVendor = await service.createVendor(input);

    return {
      success: true,
      message: `Vendor ${newVendor.name} created successfully.`,
      vendor: newVendor,
    };
  },
};
