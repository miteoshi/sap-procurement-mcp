import type { CapClient } from '../../../clients/capClient.js';
import type { RetailPrice, ODataList } from '../../../types/fmcg.js';

export class RetailPriceService {
  constructor(private readonly client: CapClient) {}

  async getCurrentPrice(productId: string): Promise<RetailPrice | undefined> {
    const result = await this.client.get<ODataList<RetailPrice>>('/RetailPrices', {
      '$filter': `product_ID eq ${productId}`,
      '$orderby': 'validFrom desc', '$top': '20',
    });
    const today = new Date().toISOString().slice(0, 10);
    return result.value.find((price) => price.validFrom <= today && price.validTo >= today);
  }
}
