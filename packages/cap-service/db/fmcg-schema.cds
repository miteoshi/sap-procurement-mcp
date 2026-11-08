namespace FMCGDATA;

using { cuid, managed } from '@sap/cds/common';

entity Products : cuid, managed {
  sku           : String(30) @mandatory;
  name          : String(120) @mandatory;
  brand         : String(80);
  category      : String(60);
  description   : String(500);
  packSize      : String(40);
  unit          : String(20) default 'EA';
  stockQuantity : Integer default 0;
  reorderLevel  : Integer default 0;
  isActive      : Boolean default true;
}

entity RetailPrices : cuid, managed {
  product       : Association to Products @mandatory;
  mrp           : Decimal(12,2) @mandatory;
  retailerPrice : Decimal(12,2) @mandatory;
  currency      : String(3) default 'INR';
  validFrom     : Date @mandatory;
  validTo       : Date @mandatory;
}

entity Schemes : cuid, managed {
  schemeCode    : String(30) @mandatory;
  name          : String(120) @mandatory;
  description   : String(500);
  discountType  : String(20); // PERCENTAGE | FIXED_AMOUNT | FREE_UNITS
  discountValue : Decimal(12,2);
  minQuantity   : Integer default 1;
  validFrom     : Date @mandatory;
  validTo       : Date @mandatory;
  isActive      : Boolean default true;
}

entity SchemeProducts : cuid {
  scheme        : Association to Schemes @mandatory;
  product       : Association to Products @mandatory;
}

entity Retailers : cuid, managed {
  retailerCode  : String(30) @mandatory;
  name          : String(120) @mandatory;
  contactName   : String(100);
  phone         : String(25);
  email         : String(120);
  city          : String(80);
  state         : String(80);
  channel       : String(30); // KIRANA | SUPERMARKET | WHOLESALER
  status        : String(20) default 'ACTIVE';
}

entity Interactions : cuid, managed {
  interactionNumber : String(30) @mandatory;
  retailer          : Association to Retailers;
  channel           : String(20) default 'VOICE';
  status            : String(20) default 'IN_PROGRESS';
  startedAt         : Timestamp;
  endedAt           : Timestamp;
  summary           : LargeString;
  outcome           : String(40);
  followUpRequired  : Boolean default false;
  messages          : Association to many InteractionMessages on messages.interaction = $self;
  items             : Association to many InteractionItems on items.interaction = $self;
  followUps         : Association to many FollowUps on followUps.interaction = $self;
}

entity InteractionMessages : cuid {
  interaction : Association to Interactions @mandatory;
  role        : String(20) @mandatory; // USER | ASSISTANT | SYSTEM
  content     : LargeString @mandatory;
  createdAt   : Timestamp;
}

entity InteractionItems : cuid {
  interaction       : Association to Interactions @mandatory;
  product           : Association to Products @mandatory;
  requestedQuantity : Integer @mandatory;
  unit              : String(20);
  interestStatus    : String(30) default 'INTERESTED';
  notes             : String(500);
}

entity FollowUps : cuid, managed {
  interaction  : Association to Interactions @mandatory;
  followUpDate : Date;
  requirement  : String(500) @mandatory;
  status       : String(20) default 'OPEN';
  assignedTo   : String(100);
}
