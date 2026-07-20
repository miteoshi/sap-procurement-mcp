/**
 * OData $filter string literals need single quotes escaped - basic
 * injection hygiene since these values ultimately come from LLM input.
 */
export function escapeOData(value: string): string {
  return value.replace(/'/g, "''");
}
