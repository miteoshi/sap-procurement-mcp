import type { CapClient } from '../../../clients/capClient.js';
import type { InventoryItem, ODataResponse } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class InventoryService {
  constructor(private readonly client: CapClient) {}

  async checkInventory(materialId: string): Promise<InventoryItem | undefined> {
    const result = await this.client.get<ODataResponse<InventoryItem>>('/InventoryItems', {
      $filter: `materialId eq '${escapeOData(materialId)}'`,
      $top: '1',
    });
    return result.value ? result.value[0] : undefined;
  }

  /**
   * Retrieves a list of all inventory items (paginated).
   */
  async listInventory(limit: number = 50): Promise<InventoryItem[]> {
    const result = await this.client.get<ODataResponse<InventoryItem>>('/InventoryItems', {
      $top: limit.toString(),
      $orderby: 'materialId asc'
    });
    return result.value;
  }

  /**
   * Scans all inventory items to identify materials where quantityOnHand <= reorderPoint.
   */
  async getLowStockItems(): Promise<InventoryItem[]> {
    const filteredResult = await this.client.get<ODataResponse<InventoryItem>>('/InventoryItems', {
      $filter: 'quantityOnHand le reorderPoint'
    });
    return filteredResult.value;
  }

  /**
   * Deducts stock from an inventory item when materials are consumed.
   */
  async issueGoods(materialId: string, quantity: number): Promise<InventoryItem> {
    const item = await this.checkInventory(materialId);
    if (!item) {
      throw new Error(`Material '${materialId}' not found.`);
    }

    const currentStock = item.quantityOnHand ?? 0;
    if (currentStock < quantity) {
      throw new Error(`Insufficient stock for material '${materialId}'. Requested: ${quantity}, Available: ${currentStock}.`);
    }

    const newQuantity = currentStock - quantity;

    const result = await this.client.patch<InventoryItem>(`/InventoryItems(${item.ID})`, {
      quantityOnHand: newQuantity
    });
    return result;
  }

  async addStock(id: string, quantityToAdd: number): Promise<InventoryItem> {
    // First fetch to get current stock
    const item = await this.client.get<InventoryItem>(`/InventoryItems(${escapeOData(id)})`);
    const newQuantity = (item.quantityOnHand || 0) + quantityToAdd;
    
    return this.client.patch<InventoryItem>(`/InventoryItems(${escapeOData(id)})`, {
      quantityOnHand: newQuantity
    });
  }
}
