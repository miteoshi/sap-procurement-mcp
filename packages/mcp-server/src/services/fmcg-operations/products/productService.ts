import type { CapClient } from "../../../clients/capClient.js";
import type {
  FmcgProduct,
  ProductSearchFilters,
  ODataList,
} from "../../../types/fmcg.js";
import { escapeOData } from "../../../utils/odataUtils.js";

/** Case-insensitive, word-by-word match: every word must appear in one field. */
function wordClauses(query: string, fields: string[]): string[] {
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 5)
    .map((word) => {
      const w = escapeOData(word);
      return `(${fields
        .map((f) => `contains(tolower(${f}),'${w}')`)
        .join(" or ")})`;
    });
}

export class ProductService {
  constructor(private readonly client: CapClient) {}

  async searchProducts(
    filters: ProductSearchFilters = {}
  ): Promise<FmcgProduct[]> {
    const clauses = ["isActive eq true"];
    if (filters.query) {
      clauses.push(...wordClauses(filters.query, ["name", "sku", "brand"]));
    }
    if (filters.category)
      clauses.push(`category eq '${escapeOData(filters.category)}'`);
    if (filters.brand) clauses.push(`brand eq '${escapeOData(filters.brand)}'`);
    const result = await this.client.get<ODataList<FmcgProduct>>("/Products", {
      $filter: clauses.join(" and "),
      $orderby: "name asc",
      $top: String(filters.limit ?? 30),
    });
    return result.value;
  }

  async getProductBySku(sku: string): Promise<FmcgProduct | undefined> {
    const result = await this.client.get<ODataList<FmcgProduct>>("/Products", {
      $filter: `sku eq '${escapeOData(sku)}'`,
      $top: "1",
    });
    return result.value[0];
  }
}
