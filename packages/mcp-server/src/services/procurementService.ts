import { CapClient } from '../clients/capClient.js';
import type { InventoryItem, PurchaseOrder, Vendor, VendorFilters, PurchaseOrderFilters, POLineItem } from '../types/procurement.js';
import { VendorService } from './sap-operations/vendors/vendorService.js';
import { PurchaseOrderService } from './sap-operations/purchase-orders/purchaseOrderService.js';
import { InventoryService } from './sap-operations/inventory/inventoryService.js';
import { AiVendorService } from './ai-operations/vendors/aiVendorService.js';
import { PricingService } from './sap-operations/pricing/pricingService.js';

/**
 * Facade service that delegates to domain-specific services.
 * This keeps the existing MCP tools intact while segregating 
 * backend logic into smaller, maintainable files.
 */
export class ProcurementService {
  private readonly vendorService: VendorService;
  private readonly purchaseOrderService: PurchaseOrderService;
  private readonly inventoryService: InventoryService;
  private readonly pricingService: PricingService;
  private readonly aiVendorService: AiVendorService;

  constructor(private readonly client: CapClient = new CapClient()) {
    this.vendorService = new VendorService(this.client);
    this.inventoryService = new InventoryService(this.client);
    this.pricingService = new PricingService(this.client);
    this.purchaseOrderService = new PurchaseOrderService(this.client, this.vendorService, this.inventoryService, this.pricingService);
    this.aiVendorService = new AiVendorService(this.client);
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

  async searchPurchaseOrders(filters: PurchaseOrderFilters): Promise<PurchaseOrder[]> {
    return this.purchaseOrderService.searchPurchaseOrders(filters);
  }

  async getPurchaseOrder(idOrPoNumber: string): Promise<PurchaseOrder | undefined> {
    return this.purchaseOrderService.getPurchaseOrder(idOrPoNumber);
  }

  async createPurchaseOrder(data: { vendor_ID: string; currency: string; items?: Array<{ materialId: string, quantity: number, unitPrice?: number }> }): Promise<PurchaseOrder> {
    return this.purchaseOrderService.createPurchaseOrder(data);
  }

  async addPOLineItem(poId: string, materialId: string, quantity: number, unitPrice: number): Promise<POLineItem> {
    return this.purchaseOrderService.addPOLineItem(poId, materialId, quantity, unitPrice);
  }

  async releasePurchaseOrder(id: string): Promise<PurchaseOrder> {
    return this.purchaseOrderService.releasePurchaseOrder(id);
  }

  async cancelPurchaseOrder(id: string): Promise<PurchaseOrder> {
    return this.purchaseOrderService.cancelPurchaseOrder(id);
  }

  async receiveGoods(id: string): Promise<PurchaseOrder> {
    return this.purchaseOrderService.receiveGoods(id);
  }

  // --- Inventory Methods ---
  async checkInventory(materialId: string): Promise<InventoryItem | undefined> {
    return this.inventoryService.checkInventory(materialId);
  }

  // --- Pricing Methods ---
  getPricingService(): PricingService {
    return this.pricingService;
  }
}
