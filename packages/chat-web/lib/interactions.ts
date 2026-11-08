/**
 * The retail tools return JSON whose exact shape belongs to the CAP service.
 * These helpers read it defensively so the pages work with reasonable shapes
 * (array, { value: [...] }, { interactions: [...] }, etc.).
 */
export type Obj = Record<string, unknown>

export const isObj = (v: unknown): v is Obj =>
  typeof v === "object" && v !== null && !Array.isArray(v)

export function extractList(data: unknown): Obj[] {
  if (Array.isArray(data)) return data.filter(isObj)
  if (isObj(data)) {
    for (const v of Object.values(data)) {
      if (Array.isArray(v) && v.every(isObj) && v.length > 0) return v as Obj[]
    }
    for (const v of Object.values(data)) {
      if (Array.isArray(v)) return v.filter(isObj)
    }
  }
  return []
}

/** First non-empty scalar among keys (case-insensitive exact match). */
export function pick(obj: Obj, keys: string[]): string | undefined {
  const lower = new Map(Object.keys(obj).map((k) => [k.toLowerCase(), k]))
  for (const key of keys) {
    const real = lower.get(key.toLowerCase())
    const v = real ? obj[real] : undefined
    if (typeof v === "string" && v.trim()) return v
    if (typeof v === "number" || typeof v === "boolean") return String(v)
  }
  return undefined
}

export const ID_KEYS = ["interactionId", "ID", "id", "interaction_id"]
export const RETAILER_KEYS = ["retailerName", "retailer_name", "customerName"]
export const NUMBER_KEYS = ["interactionNumber", "interaction_number", "number"]
export const SUMMARY_KEYS = ["summary", "conversationSummary"]
export const OUTCOME_KEYS = ["outcome", "result"]
export const STATUS_KEYS = ["status", "state"]
export const CHANNEL_KEYS = ["channel"]
export const DATE_KEYS = [
  "startedAt",
  "createdAt",
  "started_at",
  "created_at",
  "date",
  "modifiedAt",
]

export function formatDate(value: string | undefined) {
  if (!value) return undefined
  const d = new Date(value)
  return Number.isNaN(d.getTime())
    ? value
    : d.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })
}

export function humanizeKey(key: string) {
  return key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/^./, (c) => c.toUpperCase())
}

/** Retailer name from a flat field or the expanded `retailer` object. */
export function retailerNameOf(obj: Obj): string | undefined {
  const flat = pick(obj, RETAILER_KEYS)
  if (flat) return flat
  const nested = Object.entries(obj).find(
    ([k]) => k.toLowerCase() === "retailer"
  )?.[1]
  return isObj(nested) ? pick(nested, ["name", "retailerName"]) : undefined
}
