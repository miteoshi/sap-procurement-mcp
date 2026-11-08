import type { ToolApprovalStatus } from "ai"

/**
 * Tools that may run without asking the user. EVERYTHING ELSE requires approval,
 * so a tool you add to the MCP server later is gated until you consciously list
 * it here. (The MCP server doesn't send readOnlyHint annotations, and the SDK
 * treats annotations as untrusted hints anyway.)
 */
const READ_ONLY = new Set([
  "search_vendors",
  "get_vendor",
  "search_purchase_orders",
  "get_purchase_order",
  "check_inventory",
  "list_inventory",
  "check_low_stock",
  "search_quotations",
  "search_supplier_invoices",
  "get_supplier_invoice",
  "get_last_purchase_price",
  "get_vendor_material_price",
  "vendor_summary",
  "supplier_performance",
  "supplier_spend_summary",
  "compare_supplier_quotes",
  "summarize_invoice_discrepancies",
  "procurement_health_check",
  "procurement_timeline",
  "explain_purchase_order",
  "search_fmcg_products",
  "get_fmcg_product_details",
  "get_active_fmcg_schemes",
  "search_fmcg_retailers",
  "list_retail_interactions",
  "get_retail_interaction",
])

/**
 * Writes that are safe to run unprompted: they only log the retailer
 * conversation itself (the MCP server is designed for the assistant to persist
 * each message), and none touches stock, orders, or money. Confirming each one
 * would make a voice conversation unusable.
 */
const CONVERSATION_LOGGING = new Set([
  "start_retail_interaction",
  "add_retail_interaction_message",
  "capture_fmcg_product_interest",
  "create_retail_follow_up",
  "complete_retail_interaction",
])

const AUTO = new Set([...READ_ONLY, ...CONVERSATION_LOGGING])

const REASONS: Record<string, string> = {
  cancel_purchase_order: "Cancels a purchase order in SAP.",
  cancel_supplier_invoice: "Cancels a supplier invoice.",
  post_supplier_invoice: "Posts a supplier invoice (financial posting).",
  receive_goods: "Books a goods receipt against a purchase order.",
  issue_goods: "Books a goods issue and reduces stock.",
  release_purchase_order: "Releases a purchase order for processing.",
  create_purchase_order: "Creates a new purchase order.",
  create_purchase_order_from_quote:
    "Creates a purchase order from a supplier quotation.",
  add_po_line_item: "Adds a line item to a purchase order.",
  create_supplier_invoice: "Creates a supplier invoice.",
  verify_supplier_invoice:
    "Runs three-way verification and sets the invoice to VERIFIED or BLOCKED.",
  create_vendor: "Creates a new vendor record.",
  update_vendor: "Changes a vendor record.",
  block_vendor: "Blocks a vendor from further transactions.",
  unblock_vendor: "Unblocks a vendor.",
  deactivate_vendor: "Deactivates a vendor.",
}

// Takes only the fields it needs, so it is assignable to the SDK's generic
// approval callback without wrestling its type parameters.
export function toolApproval({
  toolCall,
}: {
  toolCall: { toolName: string }
}): ToolApprovalStatus {
  if (AUTO.has(toolCall.toolName)) return "not-applicable"
  return {
    type: "user-approval",
    reason:
      REASONS[toolCall.toolName] ?? "This action changes data in your systems.",
  }
}
