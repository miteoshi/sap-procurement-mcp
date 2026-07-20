import { CapClient } from '../clients/capClient.js';
import type { InventoryItem, PurchaseOrder, Vendor, VendorFilters } from '../types/procurement.js';
import { VendorService } from './vendorService.js';
import { PurchaseOrderService } from './purchaseOrderService.js';
import { InventoryService } from './inventoryService.js';

/**
 * Facade service that delegates to domain-specific services.
 * This keeps the existing MCP tools intact while segregating 
 * backend logic into smaller, maintainable files.
 */
export class ProcurementService {
  private readonly vendorService: VendorService;
  private readonly purchaseOrderService: PurchaseOrderService;
  private readonly inventoryService: InventoryService;

  constructor(client: CapClient = new CapClient()) {
    this.vendorService = new VendorService(client);
    this.purchaseOrderService = new PurchaseOrderService(client);
    this.inventoryService = new InventoryService(client);
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

  async blockVendor(id: string): Promise<Vendor> {
    return this.vendorService.blockVendor(id);
  }

  async getSupplierSpend(vendorId: string): Promise<{ totalSpend: number; currency: string }> {
    return this.vendorService.getSupplierSpend(vendorId);
  }

  async getVendorPerformance(vendorId: string): Promise<{ totalOrders: number; fulfilledOrders: number; cancelledOrders: number }> {
    return this.vendorService.getVendorPerformance(vendorId);
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
