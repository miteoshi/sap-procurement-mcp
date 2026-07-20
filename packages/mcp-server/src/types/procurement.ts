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


export interface PurchaseOrder {
  ID: string;
  poNumber: string;
  vendor_ID: string;
  orderDate: string;
  status: 'PENDING' | 'APPROVED' | 'SHIPPED' | 'RECEIVED' | 'CANCELLED';
  currency: string;
  totalAmount: number;
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
  status?: string;
  limit?: number;
}
