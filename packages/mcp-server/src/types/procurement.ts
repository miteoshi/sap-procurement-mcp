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
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  SHIPPED = 'SHIPPED',
  RECEIVED = 'RECEIVED',
  CANCELLED = 'CANCELLED'
}

export interface POLineItem {
  ID: string;
  purchaseOrder_ID: string;
  material_ID: string;
  quantity: number;
  unitPrice: number;
}

export interface PurchaseOrder {
  ID: string;
  poNumber: string;
  vendor_ID: string;
  orderDate: string;
  status: PurchaseOrderStatus;
  currency: string;
  totalAmount: number;
  lineItems?: POLineItem[];
}

export interface InventoryItem {
  ID: string;
  materialId: string;
  description: string;
  quantityOnHand: number;
  reorderPoint: number;
  unit: string;
  warehouse: string;
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
