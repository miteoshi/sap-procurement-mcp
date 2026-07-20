import { z } from 'zod';
import type { ProcurementService } from '../services/procurementService.js';
import { withCorrelation } from '../config/logger.js';
import { randomUUID } from 'node:crypto';

export const updateVendorInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to update"),
  name: z.string().min(2).optional().describe("Vendor name"),
  taxId: z.string().min(2).optional().describe("Vendor tax ID"),
  country: z.string().length(2).optional().describe("2-letter country code, e.g. 'US' or 'DE'"),
  email: z.string().email().optional().describe("Vendor contact email"),
  status: z.enum(['ACTIVE', 'BLOCKED', 'INACTIVE']).optional().describe("Vendor status"),
});

export const updateVendorTool = {
  name: 'update_vendor',
  description: "Updates an existing vendor's details. Only provide the fields that need to be changed.",
  inputSchema: updateVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof updateVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'update_vendor', input }, 'tool call');

    const { vendor_id, ...updates } = input;
    
    if (Object.keys(updates).length === 0) {
      return { success: false, message: 'No fields provided to update.' };
    }

    const updatedVendor = await service.updateVendor(vendor_id, updates);

    return {
      success: true,
      message: `Vendor updated successfully.`,
      vendor: updatedVendor,
    };
  },
};
