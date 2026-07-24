export enum VendorStatus {
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED',
  INACTIVE = 'INACTIVE',
}

export interface Vendor {
  ID: string;
  name: string;
  taxId: string;
  country: string;
  email: string;
  status: VendorStatus;
}


export enum PurchaseOrderStatus {
  CREATED = 'CREATED',
  RELEASED = 'RELEASED',
  PARTIALLY_RECEIVED = 'PARTIALLY_RECEIVED',
  RECEIVED = 'RECEIVED',
  CANCELLED = 'CANCELLED'
}

export enum SupplierInvoiceStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
  POSTED = 'POSTED',
  BLOCKED = 'BLOCKED',
  CANCELLED = 'CANCELLED'
}

export interface POLineItem {
  ID: string;
  purchaseOrder_ID: string;
  material_ID: string;
  quantity: number;
  receivedQuantity?: number;
  unitPrice: number;
  material?: InventoryItem;
}

export interface PurchaseOrder {
  ID: string;
  poNumber: string;
  vendor_ID: string;
  orderDate: string;
  status: PurchaseOrderStatus;
  currency: string;
  totalAmount: number;
  vendor?: Vendor;
  lineItems?: POLineItem[];
}

export interface InventoryItem {
  ID: string;
  materialId: string;
  description?: string;
  quantityOnHand?: number;
  reorderPoint?: number;
  unit?: string;
  warehouse?: string;
}

export interface PurchasingInfoRecord {
  ID: string;
  vendor_ID: string;
  material_ID: string;
  price: number;
  currency: string;
  validFrom: string;
  validTo: string;
}

//Qutation is considered as an external data, it is not present in SAP.
//It is sent by the vendor to the buyer and it is stored in the database.
//It is used to compare the prices of different vendors.
//When the buyer accepts the quotation, it is converted into a purchase order.
//It is also used to track the status of the quotation.

export interface Quotation {
  ID: string;
  quotationId: string;
  vendor_ID: string;
  material_ID: string;
  quantity: number;
  price: number;
  currency: string;
  validUntil: string;
  status: 'OPEN' | 'ACCEPTED' | 'REJECTED';
}

export interface SupplierInvoiceItem {
  ID: string;
  invoice_ID: string;
  material_ID: string;
  quantity: number;
  unitPrice?: number;
  amount?: number;
  
  material?: InventoryItem;
}

export interface SupplierInvoice {
  ID: string;
  invoiceNumber: string;
  purchaseOrder_ID: string;
  vendor_ID: string;
  invoiceDate: string;
  postingDate: string;
  currency: string;
  totalAmount: number;
  status: SupplierInvoiceStatus;
  
  // Expanded associations
  purchaseOrder?: PurchaseOrder;
  vendor?: Vendor;
  lineItems?: SupplierInvoiceItem[];
}

export interface InvoiceVerificationChecks {
  vendor: boolean;
  currency: boolean;
  amountWithinReceived: boolean;
}

export interface ODataResponse<T> {
  value: T[];
}



//Filters
export interface VendorFilters {
  name?: string;
  country?: string;
  status?: VendorStatus;
  limit?: number;
}

export interface PurchaseOrderFilters {
  vendorId?: string;
  status?: PurchaseOrderStatus;
  fromDate?: string;
  toDate?: string;
  limit?: number;
}

export interface SupplierInvoiceFilters {
  purchaseOrderId?: string;
  vendorId?: string;
  status?: SupplierInvoiceStatus;
  fromDate?: string;
  toDate?: string;
  limit?: number;
}
