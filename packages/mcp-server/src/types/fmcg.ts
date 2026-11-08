export type RetailChannel = 'VOICE' | 'TEXT';
export type RetailerChannel = 'KIRANA' | 'SUPERMARKET' | 'WHOLESALER';
export type InteractionRole = 'USER' | 'ASSISTANT' | 'SYSTEM';
export type InteractionOutcome =
  | 'INFORMATION_PROVIDED'
  | 'INTEREST_CAPTURED'
  | 'FOLLOW_UP_REQUIRED'
  | 'NO_INTEREST'
  | 'ORDER_ENQUIRY';

export interface ODataList<T> { value: T[]; }

export interface FmcgProduct {
  ID: string;
  sku: string;
  name: string;
  brand?: string;
  category?: string;
  description?: string;
  packSize?: string;
  unit?: string;
  stockQuantity?: number;
  reorderLevel?: number;
  isActive?: boolean;
}

export interface FmcgRetailer {
  ID: string;
  retailerCode: string;
  name: string;
  contactName?: string;
  phone?: string;
  email?: string;
  city?: string;
  state?: string;
  channel?: RetailerChannel;
  status?: string;
}

export interface RetailPrice {
  ID: string;
  product_ID: string;
  mrp: number;
  retailerPrice: number;
  currency: string;
  validFrom: string;
  validTo: string;
}

export interface FmcgScheme {
  ID: string;
  schemeCode: string;
  name: string;
  description?: string;
  discountType?: 'PERCENTAGE' | 'FIXED_AMOUNT' | 'FREE_UNITS';
  discountValue?: number;
  minQuantity?: number;
  validFrom: string;
  validTo: string;
  isActive?: boolean;
}

export interface SchemeProduct {
  ID: string;
  scheme_ID: string;
  product_ID: string;
  scheme?: FmcgScheme;
}

export interface Interaction {
  ID: string;
  interactionNumber: string;
  retailer_ID?: string;
  channel: RetailChannel;
  status: string;
  startedAt?: string;
  endedAt?: string;
  summary?: string;
  outcome?: InteractionOutcome | string;
  followUpRequired?: boolean;
}

export interface InteractionMessage {
  ID: string;
  interaction_ID: string;
  role: InteractionRole;
  content: string;
  createdAt?: string;
}

export interface InteractionItem {
  ID: string;
  interaction_ID: string;
  product_ID: string;
  requestedQuantity: number;
  unit?: string;
  interestStatus?: string;
  notes?: string;
}

export interface FollowUp {
  ID: string;
  interaction_ID: string;
  followUpDate?: string;
  requirement: string;
  status: string;
  assignedTo?: string;
}

export interface ProductSearchFilters {
  query?: string;
  category?: string;
  brand?: string;
  limit?: number;
}

export interface RetailerSearchFilters {
  query?: string;
  city?: string;
  channel?: RetailerChannel;
  limit?: number;
}

export interface StartInteractionInput {
  retailerId?: string;
  channel: RetailChannel;
}

export interface AddInteractionMessageInput {
  interactionId: string;
  role: InteractionRole;
  content: string;
}

export interface CaptureProductInterestInput {
  interactionId: string;
  sku: string;
  quantity: number;
  unit?: string;
  notes?: string;
}

export interface CreateFollowUpInput {
  interactionId: string;
  requirement: string;
  followUpDate?: string;
  assignedTo?: string;
}

export interface CompleteInteractionInput {
  interactionId: string;
  summary: string;
  outcome: InteractionOutcome;
  followUpRequired?: boolean;
}

export interface ListInteractionsInput {
  retailerId?: string;
  limit?: number;
}
