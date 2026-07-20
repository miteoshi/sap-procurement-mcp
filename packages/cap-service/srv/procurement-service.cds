using procurement as db from '../db/schema';

/**
 * Public-facing service. Never expose db entities directly — project
 * only the fields/associations the MCP layer actually needs, and
 * annotate authorization here rather than in handler code.
 */
@path: '/odata/v4/procurement'
service ProcurementService {

  @requires: 'authenticated-user'
  entity Vendors as projection on db.Vendors {
    ID, name, taxId, country, email, status
  };

  @requires: 'authenticated-user'
  entity PurchaseOrders as projection on db.PurchaseOrders {
    ID, poNumber, vendor, orderDate, status, currency, totalAmount, lineItems
  };

  @requires: 'authenticated-user'
  entity POLineItems as projection on db.POLineItems {
    ID, purchaseOrder, material, quantity, unitPrice
  };

  @requires: 'authenticated-user'
  entity InventoryItems as projection on db.InventoryItems {
    ID, materialId, description, quantityOnHand, reorderPoint, unit, warehouse
  };

  @requires: 'authenticated-user'
  entity PurchasingInfoRecords as projection on db.PurchasingInfoRecords {
    ID, vendor, material, price, currency, validFrom, validTo
  };

  @requires: 'authenticated-user'
  entity Quotations as projection on db.Quotations {
    ID, quotationId, vendor, material, quantity, price, currency, validUntil, status
  };

  // Bound function: encapsulates "is this material low on stock" logic
  // server-side instead of leaving that decision to every client.
  function isLowStock(materialId: String) returns Boolean;
}
