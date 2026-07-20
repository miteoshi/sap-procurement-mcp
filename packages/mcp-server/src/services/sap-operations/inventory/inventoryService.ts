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
    return result.value[0];
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
