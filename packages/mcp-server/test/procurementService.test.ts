import { describe, it, expect, vi } from 'vitest';
import { ProcurementService } from '../src/services/procurementService.js';
import type { CapClient } from '../src/clients/capClient.js';

function mockClient(returnValue: unknown): CapClient {
  return { get: vi.fn().mockResolvedValue(returnValue) } as unknown as CapClient;
}

describe('ProcurementService', () => {
  it('findVendorByName filters and caps results', async () => {
    const client = mockClient({ value: [{ ID: 'v1', name: 'Bosch GmbH' }] });
    const service = new ProcurementService(client);

    const result = await service.findVendorByName('Bosch');

    expect(client.get).toHaveBeenCalledWith(
      '/Vendors',
      expect.objectContaining({ $filter: expect.stringContaining('Bosch') }),
    );
    expect(result).toHaveLength(1);
  });

  it('listRecentOrders orders by date descending', async () => {
    const client = mockClient({ value: [] });
    const service = new ProcurementService(client);

    await service.listRecentOrders('vendor-123', 5);

    expect(client.get).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({ $orderby: 'orderDate desc', $top: '5' }),
    );
  });

  it('escapes single quotes in OData filter values', async () => {
    const client = mockClient({ value: [] });
    const service = new ProcurementService(client);

    await service.getPoStatus("PO-O'Brien-01");

    const callArgs = (client.get as any).mock.calls[0][1];
    expect(callArgs.$filter).toContain("PO-O''Brien-01");
  });

  it('checkInventory returns undefined when material not found', async () => {
    const client = mockClient({ value: [] });
    const service = new ProcurementService(client);

    const result = await service.checkInventory('UNKNOWN');

    expect(result).toBeUndefined();
  });
});
