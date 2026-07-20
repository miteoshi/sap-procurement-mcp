import { CapClient } from '../clients/capClient.js';
import type { InventoryItem, PurchaseOrder, Vendor, VendorFilters } from '../types/procurement.js';
import { VendorService } from './sap-operations/vendors/vendorService.js';
import { PurchaseOrderService } from './sap-operations/purchase-orders/purchaseOrderService.js';
import { InventoryService } from './sap-operations/inventory/inventoryService.js';
import { AiVendorService } from './ai-operations/vendors/aiVendorService.js';

/**
 * Facade service that delegates to domain-specific services.
 * This keeps the existing MCP tools intact while segregating 
 * backend logic into smaller, maintainable files.
 */
export class ProcurementService {
  private readonly vendorService: VendorService;
  private readonly purchaseOrderService: PurchaseOrderService;
  private readonly inventoryService: InventoryService;
  private readonly aiVendorService: AiVendorService;

  constructor(client: CapClient = new CapClient()) {
    this.vendorService = new VendorService(client);
    this.purchaseOrderService = new PurchaseOrderService(client);
    this.inventoryService = new InventoryService(client);
    this.aiVendorService = new AiVendorService(client);
  }

  // --- Vendor Methods ---
  async searchVendors(filters: VendorFilters): Promise<Vendor[]> {
    return this.vendorService.searchVendors(filters);
  }

  async getVendor(id: string): Promise<Vendor | undefined> {
    return this.vendorService.getVendor(id);
  }

  async createVendor(data: Omit<Vendor, 'ID'>): Promise<Vendor> {
    return this.vendorService.createVendor(data);
  }

  async updateVendor(id: string, data: Partial<Vendor>): Promise<Vendor> {
    return this.vendorService.updateVendor(id, data);
  }

  async deactivate_vendor(id: string): Promise<Vendor> {
    return this.vendorService.deactivate_vendor(id);
  }

  async blockVendor(id: string): Promise<Vendor> {
    return this.vendorService.blockVendor(id);
  }

  async unblockVendor(id: string): Promise<Vendor> {
    return this.vendorService.unblockVendor(id);
  }

  async getSupplierSpend(vendorId: string): Promise<{ totalSpend: number; currency: string }> {
    return this.aiVendorService.getSupplierSpend(vendorId);
  }

  async getVendorPerformance(vendorId: string): Promise<{ totalOrders: number; fulfilledOrders: number; cancelledOrders: number }> {
    return this.aiVendorService.getVendorPerformance(vendorId);
  }

  // --- Purchase Order Methods ---
  async listRecentOrders(vendorId: string, limit = 10): Promise<PurchaseOrder[]> {
    return this.purchaseOrderService.listRecentOrders(vendorId, limit);
  }

  async getPoStatus(poNumber: string): Promise<PurchaseOrder | undefined> {
    return this.purchaseOrderService.getPoStatus(poNumber);
  }

  // --- Inventory Methods ---
  async checkInventory(materialId: string): Promise<InventoryItem | undefined> {
    return this.inventoryService.checkInventory(materialId);
  }
}
