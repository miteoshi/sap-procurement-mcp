import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const procurementHealthCheckTool = {
  name: 'procurement_health_check',
  description: 'Returns a high-level summary of procurement issues needing attention: blocked invoices, partially received POs, unreleased POs, and expired quotations.',
  inputSchema: z.object({}),
  handler: async (service: ProcurementService) => {
    return service.getProcurementHealth();
  }
};
