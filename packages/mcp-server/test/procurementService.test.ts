import { describe, it, expect, vi } from 'vitest';
import { ProcurementService } from '../src/services/procurementService.js';
import type { CapClient } from '../src/clients/capClient.js';

function mockClient(returnValue: unknown): CapClient {
  return { 
    get: vi.fn().mockResolvedValue(returnValue),
    post: vi.fn().mockResolvedValue(returnValue),
    patch: vi.fn().mockResolvedValue(returnValue)
  } as unknown as CapClient;
}

describe('ProcurementService', () => {
  it('searchVendors filters and caps results', async () => {
    const client = mockClient({ value: [{ ID: 'v1', name: 'Bosch GmbH' }] });
    const service = new ProcurementService(client);

    const result = await service.searchVendors({ name: 'Bosch', country: 'DE', limit: 5 });

    expect(client.get).toHaveBeenCalledWith(
      '/Vendors',
      expect.objectContaining({ 
        $filter: "contains(name,'Bosch') and country eq 'DE'",
        $top: '5'
      }),
    );
    expect(result).toHaveLength(1);
  });

  it('getVendor returns a single vendor by ID', async () => {
    const client = mockClient({ value: [{ ID: 'v1', name: 'Bosch' }] });
    const service = new ProcurementService(client);

    const result = await service.getVendor('v1');

    expect(client.get).toHaveBeenCalledWith(
      '/Vendors',
      expect.objectContaining({ $filter: "ID eq 'v1'", $top: '1' }),
    );
    expect(result?.name).toBe('Bosch');
  });

  it('createVendor sends POST request', async () => {
    const client = mockClient({ ID: 'new-uuid', name: 'New Vendor' });
    const service = new ProcurementService(client);

    const result = await service.createVendor({ name: 'New Vendor', country: 'US', taxId: '123', email: 'test@test.com', status: 'ACTIVE' });

    expect(client.post).toHaveBeenCalledWith(
      '/Vendors',
      expect.objectContaining({ name: 'New Vendor', country: 'US' }),
    );
    expect(result.ID).toBe('new-uuid');
  });

  it('updateVendor sends PATCH request', async () => {
    const client = mockClient({ ID: 'v1', name: 'Updated Vendor' });
    const service = new ProcurementService(client);

    const result = await service.updateVendor('v1', { name: 'Updated Vendor' });

    expect(client.patch).toHaveBeenCalledWith(
      '/Vendors(v1)',
      expect.objectContaining({ name: 'Updated Vendor' }),
    );
    expect(result.name).toBe('Updated Vendor');
  });

  it('blockVendor calls updateVendor with BLOCKED status', async () => {
    const client = mockClient({ ID: 'v1', status: 'BLOCKED' });
    const service = new ProcurementService(client);

    const result = await service.blockVendor('v1');

    expect(client.patch).toHaveBeenCalledWith(
      '/Vendors(v1)',
      expect.objectContaining({ status: 'BLOCKED' }),
    );
    expect(result.status).toBe('BLOCKED');
  });

  it('searchPurchaseOrders dynamically applies filters', async () => {
    const client = mockClient({ value: [] });
    const service = new ProcurementService(client);

    await service.searchPurchaseOrders({ vendorId: 'vendor-123', limit: 5 });

    expect(client.get).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({ $filter: "vendor_ID eq 'vendor-123'", $orderby: 'orderDate desc', $top: '5' }),
    );
  });

  it('getPurchaseOrder retrieves by poNumber', async () => {
    const client = mockClient({ value: [{ poNumber: 'PO-123' }] });
    const service = new ProcurementService(client);

    const result = await service.getPurchaseOrder('PO-123');

    expect(client.get).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({ $filter: "poNumber eq 'PO-123'", $top: '1' }),
    );
    expect(result?.poNumber).toBe('PO-123');
  });

  it('createPurchaseOrder sends POST request', async () => {
    const client = mockClient({ ID: 'po-uuid', poNumber: 'PO-1000' });
    const service = new ProcurementService(client);

    const result = await service.createPurchaseOrder({ vendor_ID: 'v1', currency: 'USD' });

    expect(client.post).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({ vendor_ID: 'v1', currency: 'USD' }),
    );
    expect(result.ID).toBe('po-uuid');
  });

  it('approvePurchaseOrder updates status to APPROVED', async () => {
    const client = mockClient({ ID: 'po-uuid', status: 'APPROVED' });
    const service = new ProcurementService(client);

    const result = await service.approvePurchaseOrder('po-uuid');

    expect(client.patch).toHaveBeenCalledWith(
      "/PurchaseOrders(po-uuid)",
      expect.objectContaining({ status: 'APPROVED' }),
    );
    expect(result.status).toBe('APPROVED');
  });

  it('cancelPurchaseOrder updates status to CANCELLED', async () => {
    const client = mockClient({ ID: 'po-uuid', status: 'CANCELLED' });
    const service = new ProcurementService(client);

    const result = await service.cancelPurchaseOrder('po-uuid');

    expect(client.patch).toHaveBeenCalledWith(
      "/PurchaseOrders(po-uuid)",
      expect.objectContaining({ status: 'CANCELLED' }),
    );
    expect(result.status).toBe('CANCELLED');
  });

  it('receiveGoods updates status to RECEIVED', async () => {
    const client = mockClient({ ID: 'po-uuid', status: 'RECEIVED' });
    const service = new ProcurementService(client);

    const result = await service.receiveGoods('po-uuid');

    expect(client.patch).toHaveBeenCalledWith(
      "/PurchaseOrders(po-uuid)",
      expect.objectContaining({ status: 'RECEIVED' }),
    );
    expect(result.status).toBe('RECEIVED');
  });

  it('getSupplierSpend aggregates total amount correctly', async () => {
    const client = mockClient({
      value: [
        { totalAmount: 100, currency: 'USD', status: 'RECEIVED' },
        { totalAmount: 250, currency: 'USD', status: 'PENDING' },
      ],
    });
    const service = new ProcurementService(client);

    const result = await service.getSupplierSpend('v1');
    expect(result.totalSpend).toBe(350);
    expect(result.currency).toBe('USD');
  });

  it('getVendorPerformance computes metrics correctly', async () => {
    const client = mockClient({
      value: [
        { status: 'RECEIVED' },
        { status: 'RECEIVED' },
        { status: 'PENDING' },
        { status: 'CANCELLED' },
      ],
    });
    const service = new ProcurementService(client);

    const result = await service.getVendorPerformance('v1');
    expect(result.totalOrders).toBe(4);
    expect(result.fulfilledOrders).toBe(2);
    expect(result.cancelledOrders).toBe(1);
  });

  it('escapes single quotes in OData filter values', async () => {
    const client = mockClient({ value: [] });
    const service = new ProcurementService(client);

    await service.getPurchaseOrder("PO-O'Brien-01");

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
