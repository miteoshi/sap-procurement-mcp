import type { CapClient } from '../../../clients/capClient.js';
import type { FmcgScheme, ODataList, SchemeProduct } from '../../../types/fmcg.js';
import { ProductService } from '../products/productService.js';

export class SchemeService {
  constructor(
    private readonly client: CapClient,
    private readonly products: ProductService,
  ) {}

  async getActiveSchemes(sku?: string): Promise<FmcgScheme[]> {
    const today = new Date().toISOString().slice(0, 10);
    if (sku) {
      const product = await this.products.getProductBySku(sku);
      if (!product) return [];
      const links = await this.client.get<ODataList<SchemeProduct>>('/SchemeProducts', {
        '$filter': `product_ID eq ${product.ID}`, '$expand': 'scheme',
      });
      return links.value
        .map((link) => link.scheme)
        .filter((scheme): scheme is FmcgScheme =>
          Boolean(scheme && scheme.isActive && scheme.validFrom <= today && scheme.validTo >= today));
    }
    const schemes = await this.client.get<ODataList<FmcgScheme>>('/Schemes', {
      '$filter': `isActive eq true and validFrom le ${today} and validTo ge ${today}`,
      '$orderby': 'validTo asc', '$top': '50',
    });
    return schemes.value;
  }
}
