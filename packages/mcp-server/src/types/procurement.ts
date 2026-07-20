export interface Vendor {
  ID: string;
  name: string;
  taxId: string;
  country: string;
  email: string;
  status: 'ACTIVE' | 'BLOCKED' | 'INACTIVE';
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
