import { CapClient } from '../clients/capClient.js';
import type { InventoryItem, ODataResponse, PurchaseOrder, Vendor } from '../types/procurement.js';

/**
 * Tools stay thin (parse input, call this, format output). All actual
 * business logic - filters, OData query shaping - lives here, so it
 * can be unit tested without spinning up an MCP server at all.
 */
export class ProcurementService {
  constructor(private readonly client: CapClient = new CapClient()) {}

  async findVendorByName(name: string): Promise<Vendor[]> {
    const result = await this.client.get<ODataResponse<Vendor>>('/Vendors', {
      $filter: `contains(name,'${this.escapeOData(name)}')`,
      $top: '5',
    });
    return result.value;
  }

  async listRecentOrders(vendorId: string, limit = 10): Promise<PurchaseOrder[]> {
    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `vendor_ID eq '${this.escapeOData(vendorId)}'`,
      $orderby: 'orderDate desc',
      $top: String(limit),
    });
    return result.value;
  }

  async getPoStatus(poNumber: string): Promise<PurchaseOrder | undefined> {
    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `poNumber eq '${this.escapeOData(poNumber)}'`,
      $top: '1',
    });
    return result.value[0];
  }

  async checkInventory(materialId: string): Promise<InventoryItem | undefined> {
    const result = await this.client.get<ODataResponse<InventoryItem>>('/InventoryItems', {
      $filter: `materialId eq '${this.escapeOData(materialId)}'`,
      $top: '1',
    });
    return result.value[0];
  }

  // OData $filter string literals need single quotes escaped - basic
  // injection hygiene since these values ultimately come from LLM input.
  private escapeOData(value: string): string {
    return value.replace(/'/g, "''");
  }
}
