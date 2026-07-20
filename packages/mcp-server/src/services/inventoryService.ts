import type { CapClient } from '../clients/capClient.js';
import type { InventoryItem, ODataResponse } from '../types/procurement.js';
import { escapeOData } from '../utils/odataUtils.js';

export class InventoryService {
  constructor(private readonly client: CapClient) {}

  async checkInventory(materialId: string): Promise<InventoryItem | undefined> {
    const result = await this.client.get<ODataResponse<InventoryItem>>('/InventoryItems', {
      $filter: `materialId eq '${escapeOData(materialId)}'`,
      $top: '1',
    });
    return result.value[0];
  }
}
