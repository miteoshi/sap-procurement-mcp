namespace procurement;

using { cuid, managed } from '@sap/cds/common';

/**
 * Vendors (suppliers). `cuid` gives a UUID key, `managed` gives
 * createdAt/createdBy/modifiedAt/modifiedBy automatically — standard
 * SAP CAP convention, don't hand-roll these fields.
 */
entity Vendors : cuid, managed {
  name          : String(120) @mandatory;
  taxId         : String(30);
  country       : String(2);   // ISO 3166-1 alpha-2
  email         : String(120);
  status        : String(20) default 'ACTIVE'; // ACTIVE | BLOCKED | INACTIVE
  purchaseOrders : Association to many PurchaseOrders on purchaseOrders.vendor = $self;
}

entity PurchaseOrders : cuid, managed {
  poNumber      : String(20) @mandatory;
  vendor        : Association to Vendors @mandatory;
  orderDate     : Date;
  status        : String(20) default 'CREATED'; // CREATED | RELEASED | PARTIALLY_RECEIVED | RECEIVED | CANCELLED
  currency      : String(3) default 'USD';
  totalAmount   : Decimal(15,2);
  lineItems     : Composition of many POLineItems on lineItems.purchaseOrder = $self;
}

entity POLineItems : cuid {
  purchaseOrder : Association to PurchaseOrders @mandatory;
  material      : Association to InventoryItems @mandatory;
  quantity      : Integer @mandatory;
  receivedQuantity : Integer default 0;
  unitPrice     : Decimal(15,2);
}

entity InventoryItems : cuid, managed {
  materialId    : String(30) @mandatory;
  description   : String(200);
  quantityOnHand: Integer default 0;
  reorderPoint  : Integer default 10;
  unit          : String(10) default 'EA';
  warehouse     : String(50);
}

entity PurchasingInfoRecords : cuid, managed {
  vendor        : Association to Vendors @mandatory;
  material      : Association to InventoryItems @mandatory;
  price         : Decimal(15,2) @mandatory;
  currency      : String(3) default 'USD';
  validFrom     : Date @mandatory;
  validTo       : Date @mandatory;
}

entity Quotations : cuid, managed {
  quotationId   : String(30) @mandatory;
  vendor        : Association to Vendors @mandatory;
  material      : Association to InventoryItems @mandatory;
  quantity      : Integer @mandatory;
  price         : Decimal(15,2) @mandatory;
  currency      : String(3) default 'USD';
  validUntil    : Date @mandatory;
  status        : String(20) default 'OPEN'; // OPEN | ACCEPTED | REJECTED
}

entity SupplierInvoices : cuid, managed {
  invoiceNumber : String(30) @mandatory;
  purchaseOrder : Association to PurchaseOrders @mandatory;
  vendor        : Association to Vendors @mandatory;
  invoiceDate   : Date;
  postingDate   : Date;
  currency      : String(3) default 'USD';
  totalAmount   : Decimal(15,2) @mandatory;
  status        : String(20) default 'CREATED'; // CREATED | VERIFIED | POSTED | BLOCKED | CANCELLED
}
