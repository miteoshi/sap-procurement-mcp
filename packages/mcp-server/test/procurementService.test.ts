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
    const client = mockClient({ value: [{ ID: 'po-uuid', poNumber: 'PO-1000', status: 'ACTIVE', name: 'Test Vendor' }] });
    const service = new ProcurementService(client);
    // Note: mockClient.post will also return { value: ... } which is weird, but result.ID comes from it? 
    // Wait, the client.post in mockClient is mockResolvedValue(returnValue).
    // Let's redefine post for this test specifically.
    (client.post as any).mockResolvedValue({ ID: 'po-uuid', poNumber: 'PO-1000' });
    (client.post as any).mockResolvedValue({ ID: 'po-uuid', poNumber: 'PO-1000' });
    (client.get as any).mockImplementation((path: string) => {
      if (path === '/Vendors') {
        return Promise.resolve({ value: [{ ID: 'po-uuid', poNumber: 'PO-1000', status: 'ACTIVE', name: 'Test Vendor' }] });
      }
      return Promise.resolve({ value: [{ ID: 'mat-1' }] });
    });

    const result = await service.createPurchaseOrder({ 
      vendor_ID: 'v1', 
      currency: 'USD',
      items: [{ materialId: 'M1', quantity: 1, unitPrice: 10 }]
    });

    expect(client.post).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({ vendor_ID: 'v1', currency: 'USD' }),
    );
    expect(result.ID).toBe('po-uuid');
  });

  it('createPurchaseOrder with items maps to lineItems and calculates total', async () => {
    const client = mockClient({ value: [{ ID: 'po-uuid', status: 'ACTIVE', name: 'Test Vendor' }] });
    const service = new ProcurementService(client);
    (client.post as any).mockResolvedValue({ ID: 'po-uuid' });

    await service.createPurchaseOrder({
      vendor_ID: 'v1',
      currency: 'USD',
      items: [
        { materialId: 'M1', quantity: 2, unitPrice: 50 },
        { materialId: 'M2', quantity: 1, unitPrice: 100 }
      ]
    });

    expect(client.post).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({
        vendor_ID: 'v1',
        currency: 'USD',
        totalAmount: 200,
        lineItems: [
          { material_ID: 'po-uuid', quantity: 2, unitPrice: 50 },
          { material_ID: 'po-uuid', quantity: 1, unitPrice: 100 }
        ]
      }),
    );
  });

  it('createPurchaseOrder auto-resolves missing prices via pricingService', async () => {
    const client = mockClient({ value: [{ ID: 'po-uuid', status: 'ACTIVE', name: 'Test Vendor' }] });
    const service = new ProcurementService(client);
    (client.post as any).mockResolvedValue({ ID: 'po-uuid' });
    (client.get as any).mockImplementation((path: string) => {
      if (path === '/Vendors') {
        return Promise.resolve({ value: [{ ID: 'v1', status: 'ACTIVE' }] });
      }
      if (path === '/InventoryItems') {
        return Promise.resolve({ value: [{ ID: 'mat-1', materialId: 'M1' }] });
      }
      if (path === '/PurchasingInfoRecords') {
        return Promise.resolve({ value: [{ price: 150 }] });
      }
      return Promise.resolve({ value: [] });
    });

    await service.createPurchaseOrder({
      vendor_ID: 'v1',
      currency: 'USD',
      items: [
        { materialId: 'M1', quantity: 2 } // unitPrice omitted
      ]
    });

    expect(client.post).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({
        totalAmount: 300,
        lineItems: [
          { material_ID: 'mat-1', quantity: 2, unitPrice: 150 }
        ]
      }),
    );
  });

  it('createPurchaseOrderFromQuotation creates PO and accepts quote', async () => {
    const client = mockClient({ value: [{ ID: 'po-uuid' }] });
    const service = new ProcurementService(client);
    
    (client.get as any).mockImplementation((path: string) => {
      if (path.includes('/Quotations')) {
        return Promise.resolve({ value: [{ ID: 'q-1', vendor_ID: 'v1', material_ID: 'mat-1', quantity: 10, price: 50, status: 'OPEN', validUntil: '2099-12-31' }] });
      }
      if (path.includes('/InventoryItems')) {
        return Promise.resolve({ value: [{ ID: 'mat-1', materialId: 'M1' }] });
      }
      if (path.includes('/Vendors')) {
        return Promise.resolve({ value: [{ ID: 'v1', status: 'ACTIVE' }] });
      }
      return Promise.resolve({ value: [] });
    });

    (client.post as any).mockResolvedValue({ ID: 'po-uuid' });
    (client.patch as any).mockResolvedValue({ ID: 'q-1', status: 'ACCEPTED' });

    await service.createPurchaseOrderFromQuotation('q-1');

    expect(client.post).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({
        vendor_ID: 'v1',
        totalAmount: 500,
        lineItems: [
          { material_ID: 'mat-1', quantity: 10, unitPrice: 50 }
        ]
      })
    );
    expect(client.patch).toHaveBeenCalledWith(
      "/Quotations(q-1)",
      expect.objectContaining({ status: 'ACCEPTED' })
    );
  });

  it('searchQuotations dynamically applies filters', async () => {
    const client = mockClient({ value: [{ ID: 'q-uuid' }] });
    const service = new ProcurementService(client);
    await service.searchQuotations({ vendorId: 'v1', status: 'OPEN' });

    expect(client.get).toHaveBeenCalledWith(
      '/Quotations',
      expect.objectContaining({
        $filter: "vendor_ID eq 'v1' and status eq 'OPEN'",
        $top: '50',
      }),
    );
  });

  it('addPOLineItem sends POST request to /POLineItems', async () => {
    const client = mockClient({ ID: 'li-uuid' });
    const service = new ProcurementService(client);

    const result = await service.addPOLineItem('po-uuid', 'mat-1', 5, 20);

    expect(client.post).toHaveBeenCalledWith(
      '/POLineItems',
      { purchaseOrder_ID: 'po-uuid', material_ID: 'mat-1', quantity: 5, unitPrice: 20 }
    );
    expect(result.ID).toBe('li-uuid');
  });

  it('releasePurchaseOrder updates status to RELEASED', async () => {
    const client = mockClient({ ID: 'po-uuid', status: 'RELEASED' });
    const service = new ProcurementService(client);

    const result = await service.releasePurchaseOrder('po-uuid');

    expect(client.patch).toHaveBeenCalledWith(
      "/PurchaseOrders(po-uuid)",
      expect.objectContaining({ status: 'RELEASED' }),
    );
    expect(result.status).toBe('RELEASED');
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

  it('receiveGoods updates status to RECEIVED and adds stock', async () => {
    const client = mockClient({ value: [{ ID: 'po-uuid', status: 'RELEASED', lineItems: [{ ID: 'li-1', material_ID: 'mat-1', quantity: 5, receivedQuantity: 0 }] }] });
    const service = new ProcurementService(client);
    
    (client.get as any).mockImplementation((path: string) => {
      if (path === '/PurchaseOrders') {
        return Promise.resolve({ value: [{ ID: 'po-uuid', status: 'RELEASED', lineItems: [{ ID: 'li-1', material_ID: 'mat-1', quantity: 5, receivedQuantity: 0 }] }] });
      }
      return Promise.resolve({ quantityOnHand: 10 });
    });
    
    (client.patch as any).mockResolvedValue({ ID: 'po-uuid', status: 'RECEIVED' });

    const result = await service.receiveGoods('po-uuid');

    expect(client.patch).toHaveBeenCalledWith(
      "/InventoryItems(mat-1)",
      expect.objectContaining({ quantityOnHand: 15 }),
    );
    expect(client.patch).toHaveBeenCalledWith(
      "/POLineItems(li-1)",
      expect.objectContaining({ receivedQuantity: 5 }),
    );
    expect(client.patch).toHaveBeenCalledWith(
      "/PurchaseOrders(po-uuid)",
      expect.objectContaining({ status: 'RECEIVED' }),
    );
    expect(result.status).toBe('RECEIVED');
  });

  it('receiveGoods with partial items sets status to PARTIALLY_RECEIVED', async () => {
    const client = mockClient({ value: [{ ID: 'po-uuid', status: 'RELEASED', lineItems: [{ ID: 'li-1', material_ID: 'mat-1', quantity: 10, receivedQuantity: 2 }] }] });
    const service = new ProcurementService(client);
    
    (client.get as any).mockImplementation((path: string) => {
      if (path === '/PurchaseOrders') {
        return Promise.resolve({ value: [{ ID: 'po-uuid', status: 'RELEASED', lineItems: [{ ID: 'li-1', material_ID: 'mat-1', quantity: 10, receivedQuantity: 2 }] }] });
      }
      if (path.startsWith('/InventoryItems(')) {
        return Promise.resolve({ ID: 'mat-1', materialId: 'M1', quantityOnHand: 5 });
      }
      if (path.includes('InventoryItems')) {
        return Promise.resolve({ value: [{ ID: 'mat-1', materialId: 'M1', quantityOnHand: 5 }] });
      }
      return Promise.resolve({ value: [{ ID: 'mat-1', materialId: 'M1', quantityOnHand: 5 }] });
    });
    
    (client.patch as any).mockResolvedValue({ ID: 'po-uuid', status: 'PARTIALLY_RECEIVED' });

    const result = await service.receiveGoods('po-uuid', [{ materialId: 'M1', quantity: 3 }]);

    expect(client.patch).toHaveBeenCalledWith(
      "/InventoryItems(mat-1)",
      expect.objectContaining({ quantityOnHand: 8 }),
    );
    expect(client.patch).toHaveBeenCalledWith(
      "/POLineItems(li-1)",
      expect.objectContaining({ receivedQuantity: 5 }),
    );
    expect(client.patch).toHaveBeenCalledWith(
      "/PurchaseOrders(po-uuid)",
      expect.objectContaining({ status: 'PARTIALLY_RECEIVED' }),
    );
    expect(result.status).toBe('PARTIALLY_RECEIVED');
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
        { status: 'CREATED' },
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

  it('listInventory returns paginated items', async () => {
    const client = mockClient({ value: [{ materialId: 'M1' }, { materialId: 'M2' }] });
    const service = new ProcurementService(client);

    const result = await service.listInventory(10);
    expect(client.get).toHaveBeenCalledWith(
      '/InventoryItems',
      expect.objectContaining({ $top: '10' })
    );
    expect(result).toHaveLength(2);
  });

  it('getLowStockItems filters correctly', async () => {
    const client = mockClient({ value: [{ materialId: 'M1', quantityOnHand: 2, reorderPoint: 10 }] });
    const service = new ProcurementService(client);

    const result = await service.getLowStockItems();
    expect(client.get).toHaveBeenCalledWith(
      '/InventoryItems',
      expect.objectContaining({ $filter: 'quantityOnHand le reorderPoint' })
    );
    expect(result[0].materialId).toBe('M1');
  });

  it('issueGoods deducts stock correctly', async () => {
    const client = mockClient({ value: [{ ID: 'item-uuid', materialId: 'M1', quantityOnHand: 50 }] });
    const service = new ProcurementService(client);
    (client.patch as any).mockResolvedValue({ ID: 'item-uuid', quantityOnHand: 40 });

    const result = await service.issueGoods('M1', 10);
    expect(client.patch).toHaveBeenCalledWith(
      "/InventoryItems(item-uuid)",
      expect.objectContaining({ quantityOnHand: 40 })
    );
    expect(result.quantityOnHand).toBe(40);
  });

  // --- Supplier Invoice Tests ---
  it('createInvoice validates PO status and currency before creation', async () => {
    const client = mockClient({ value: [{ ID: 'po-1', poNumber: 'PO-100', status: 'RECEIVED', currency: 'USD', vendor_ID: 'v1' }] });
    const service = new ProcurementService(client);
    (client.post as any).mockResolvedValue({ ID: 'inv-1', invoiceNumber: 'INV-001' });

    // Mock duplicate check returning empty
    (client.get as any).mockImplementation((path: string, options: any) => {
      if (path === '/PurchaseOrders') {
        return Promise.resolve({ value: [{ ID: 'po-1', poNumber: 'PO-100', status: 'RECEIVED', currency: 'USD', vendor_ID: 'v1' }] });
      }
      if (path === '/SupplierInvoices') {
        return Promise.resolve({ value: [] });
      }
      return Promise.resolve({ value: [] });
    });

    const result = await service.createInvoice({
      purchaseOrderId: 'po-1',
      invoiceNumber: 'INV-001',
      invoiceDate: '2026-07-24',
      postingDate: '2026-07-24',
      currency: 'USD',
      totalAmount: 500
    });

    expect(client.post).toHaveBeenCalledWith('/SupplierInvoices', expect.objectContaining({
      invoiceNumber: 'INV-001',
      purchaseOrder_ID: 'po-1',
      totalAmount: 500,
      status: 'CREATED'
    }));
    expect(result.ID).toBe('inv-1');
  });

  it('verifyInvoice transitions to VERIFIED when 3-way match passes', async () => {
    const client = mockClient({ value: [] });
    const service = new ProcurementService(client);
    
    (client.get as any).mockImplementation((path: string) => {
      if (path === '/SupplierInvoices') {
        return Promise.resolve({
          value: [{
            ID: 'inv-1',
            invoiceNumber: 'INV-001',
            status: 'CREATED',
            vendor_ID: 'v1',
            currency: 'USD',
            totalAmount: 1000,
            purchaseOrder: {
              vendor_ID: 'v1',
              currency: 'USD',
              lineItems: [
                { receivedQuantity: 10, unitPrice: 50 },
                { receivedQuantity: 5, unitPrice: 100 }
              ]
            }
          }]
        });
      }
      return Promise.resolve({ value: [] });
    });

    const result = await service.verifyInvoice('inv-1');

    expect(result.success).toBe(true);
    expect(result.status).toBe('VERIFIED');
    expect(client.patch).toHaveBeenCalledWith('/SupplierInvoices(inv-1)', { status: 'VERIFIED' });
  });

  it('verifyInvoice transitions to BLOCKED when amount exceeds received value', async () => {
    const client = mockClient({ value: [] });
    const service = new ProcurementService(client);
    
    (client.get as any).mockImplementation((path: string) => {
      if (path === '/SupplierInvoices') {
        return Promise.resolve({
          value: [{
            ID: 'inv-1',
            invoiceNumber: 'INV-001',
            status: 'CREATED',
            vendor_ID: 'v1',
            currency: 'USD',
            totalAmount: 1500, // over-billing!
            purchaseOrder: {
              vendor_ID: 'v1',
              currency: 'USD',
              lineItems: [
                { receivedQuantity: 10, unitPrice: 50 },
                { receivedQuantity: 5, unitPrice: 100 }
              ]
            }
          }]
        });
      }
      return Promise.resolve({ value: [] });
    });

    const result = await service.verifyInvoice('inv-1');

    expect(result.success).toBe(false);
    expect(result.status).toBe('BLOCKED');
    expect(client.patch).toHaveBeenCalledWith('/SupplierInvoices(inv-1)', { status: 'BLOCKED' });
  });
});
