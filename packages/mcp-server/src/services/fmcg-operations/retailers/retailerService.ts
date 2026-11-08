import type { CapClient } from "../../../clients/capClient.js";
import type {
  FmcgRetailer,
  ODataList,
  RetailerSearchFilters,
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

export class RetailerService {
  constructor(private readonly client: CapClient) {}

  async searchRetailers(
    filters: RetailerSearchFilters = {}
  ): Promise<FmcgRetailer[]> {
    const clauses = ["status eq 'ACTIVE'"];
    if (filters.query) {
      clauses.push(
        ...wordClauses(filters.query, ["name", "retailerCode", "contactName"])
      );
    }
    if (filters.city) clauses.push(`city eq '${escapeOData(filters.city)}'`);
    if (filters.channel) clauses.push(`channel eq '${filters.channel}'`);
    const result = await this.client.get<ODataList<FmcgRetailer>>(
      "/Retailers",
      {
        $filter: clauses.join(" and "),
        $orderby: "name asc",
        $top: String(filters.limit ?? 30),
      }
    );
    return result.value;
  }
}
