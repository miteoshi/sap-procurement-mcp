import { CapClient } from '../clients/capClient.js';
import type { InventoryItem, PurchaseOrder, Vendor, VendorFilters, PurchaseOrderFilters, POLineItem, Quotation, SupplierInvoice, SupplierInvoiceFilters } from '../types/procurement.js';
import { VendorService } from './sap-operations/vendors/vendorService.js';
import { PurchaseOrderService } from './sap-operations/purchase-orders/purchaseOrderService.js';
import { InventoryService } from './sap-operations/inventory/inventoryService.js';
import { AiVendorService } from './ai-operations/vendors/aiVendorService.js';
import { PricingService } from './sap-operations/pricing/pricingService.js';
import { QuotationService, QuotationFilters } from './sap-operations/quotations/quotationService.js';
import { InvoiceService } from './sap-operations/invoices/invoiceService.js';


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
  private readonly quotationService: QuotationService;
  private readonly invoiceService: InvoiceService;

  constructor(private readonly client: CapClient = new CapClient()) {
    this.vendorService = new VendorService(this.client);
    this.inventoryService = new InventoryService(this.client);
    this.pricingService = new PricingService(this.client);
    this.quotationService = new QuotationService(this.client);
    this.invoiceService = new InvoiceService(this.client);
    this.purchaseOrderService = new PurchaseOrderService(this.client, this.vendorService, this.inventoryService, this.pricingService, this.quotationService);
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

  async createPurchaseOrderFromQuotation(quotationId: string): Promise<PurchaseOrder> {
    return this.purchaseOrderService.createPurchaseOrderFromQuotation(quotationId);
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

  async receiveGoods(idOrPoNumber: string, partialItems?: Array<{ materialId: string, quantity: number }>): Promise<PurchaseOrder> {
    return this.purchaseOrderService.receiveGoods(idOrPoNumber, partialItems);
  }

  // --- Inventory Methods ---
  async checkInventory(materialId: string): Promise<InventoryItem | undefined> {
    return this.inventoryService.checkInventory(materialId);
  }

  async listInventory(limit?: number): Promise<InventoryItem[]> {
    return this.inventoryService.listInventory(limit);
  }

  async getLowStockItems(): Promise<InventoryItem[]> {
    return this.inventoryService.getLowStockItems();
  }

  async issueGoods(materialId: string, quantity: number): Promise<InventoryItem> {
    return this.inventoryService.issueGoods(materialId, quantity);
  }

  // --- Pricing Methods ---
  getPricingService(): PricingService {
    return this.pricingService;
  }

  // --- Quotation Methods ---
  async searchQuotations(filters?: QuotationFilters): Promise<Quotation[]> {
    return this.quotationService.searchQuotations(filters);
  }

  async getQuotation(id: string): Promise<Quotation | undefined> {
    return this.quotationService.getQuotation(id);
  }

  async acceptQuotation(id: string): Promise<Quotation> {
    return this.quotationService.acceptQuotation(id);
  }

  async rejectQuotation(id: string): Promise<Quotation> {
    return this.quotationService.rejectQuotation(id);
  }

  // --- Supplier Invoice Methods ---
  async searchInvoices(filters?: SupplierInvoiceFilters): Promise<SupplierInvoice[]> {
    return this.invoiceService.searchInvoices(filters);
  }

  async getInvoice(idOrInvoiceNumber: string): Promise<SupplierInvoice | undefined> {
    return this.invoiceService.getInvoice(idOrInvoiceNumber);
  }

  async createInvoice(data: {
    purchaseOrderId: string;
    invoiceNumber: string;
    invoiceDate: string;
    postingDate: string;
    currency: string;
    totalAmount: number;
    items: Array<{ materialId: string; quantity: number; unitPrice: number }>;
  }): Promise<SupplierInvoice> {
    return this.invoiceService.createInvoice(data);
  }

  async verifyInvoice(invoiceId: string): Promise<{ success: boolean; status: string; checks: import('../types/procurement.js').InvoiceVerificationChecks; failures: string[] }> {
    return this.invoiceService.verifyInvoice(invoiceId);
  }

  async postInvoice(invoiceId: string): Promise<SupplierInvoice> {
    return this.invoiceService.postInvoice(invoiceId);
  }

  async cancelInvoice(invoiceId: string): Promise<SupplierInvoice> {
    return this.invoiceService.cancelInvoice(invoiceId);
  }
}
