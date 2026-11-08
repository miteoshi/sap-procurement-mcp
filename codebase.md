# .gitignore

```
# =========================
# Dependencies
# =========================
node_modules/

# pnpm
.pnpm-store/

# =========================
# Build Output
# =========================
dist/
build/
coverage/
*.tsbuildinfo

# =========================
# Environment Variables
# =========================
.env
.env.*
!.env.example

# =========================
# Logs
# =========================
logs/
*.log
npm-debug.log*
pnpm-debug.log*
yarn-debug.log*
yarn-error.log*

# =========================
# SQLite / Local Databases
# =========================
*.sqlite
*.sqlite3
db.sqlite
*.db

# =========================
# SAP CAP
# =========================
gen/
srv/_i18n/
default-env.json

# =========================
# IDE
# =========================
.vscode/
.idea/

# macOS
.DS_Store

# Windows
Thumbs.db

# =========================
# Docker
# =========================
.docker/

# =========================
# Temporary Files
# =========================
tmp/
temp/
.cache/

# =========================
# Testing
# =========================
.nyc_output/

# =========================
# Claude / MCP Local Config
# =========================
claude_desktop_config.json

# =========================
# Misc
# =========================
*.pid
*.seed


# SQLite
*.db
*.sqlite
*.sqlite-shm
*.sqlite-wal

```

# package.json

```json
{
	"dependencies": {
		"pnpm": "^11.15.0",
		"zod": "^4.4.3"
	},
	"devDependencies": {
		"@sap/cds-dk": "10.0.5"
	}
}

```

# packages/cap-service/db.sqlite

This is a binary file of the type: Binary

# packages/cap-service/db.sqlite-shm

This is a binary file of the type: Binary

# packages/cap-service/db.sqlite-wal

This is a binary file of the type: Binary

# packages/cap-service/db/data/FMCGDATA-FollowUps.csv

```csv
ID,interaction_ID,followUpDate,requirement,status,assignedTo
f9000000-0000-4000-8000-000000000001,f6000000-0000-4000-8000-000000000001,2026-11-08,Confirm order quantity and delivery slot for 20 Sunrise Sunflower Oil 1L bottles.,OPEN,Sales Team West

```

# packages/cap-service/db/data/FMCGDATA-InteractionItems.csv

```csv
ID,interaction_ID,product_ID,requestedQuantity,unit,interestStatus,notes
f8000000-0000-4000-8000-000000000001,f6000000-0000-4000-8000-000000000001,f1000000-0000-4000-8000-000000000001,20,BOTTLE,INTERESTED,Retailer requested callback to confirm delivery slot.

```

# packages/cap-service/db/data/FMCGDATA-InteractionMessages.csv

```csv
ID,interaction_ID,role,content,createdAt
f7000000-0000-4000-8000-000000000001,f6000000-0000-4000-8000-000000000001,USER,Do you have the Sunrise sunflower oil 1 litre pack and what is the current retailer price?,2026-11-06T10:30:10Z
f7000000-0000-4000-8000-000000000002,f6000000-0000-4000-8000-000000000001,ASSISTANT,The 1 litre pack is available. The current retailer price is INR 128 and MRP is INR 145.,2026-11-06T10:30:20Z
f7000000-0000-4000-8000-000000000003,f6000000-0000-4000-8000-000000000001,USER,I may take 20 bottles. Is there any scheme?,2026-11-06T10:31:00Z
f7000000-0000-4000-8000-000000000004,f6000000-0000-4000-8000-000000000001,ASSISTANT,The November oil scheme gives 5% off at 10 units. I can record your interest in 20 bottles.,2026-11-06T10:31:15Z

```

# packages/cap-service/db/data/FMCGDATA-Interactions.csv

```csv
ID,interactionNumber,retailer_ID,channel,status,startedAt,endedAt,summary,outcome,followUpRequired
f6000000-0000-4000-8000-000000000001,INT-2026-0001,f5000000-0000-4000-8000-000000000001,VOICE,COMPLETED,2026-11-06T10:30:00Z,2026-11-06T10:34:00Z,Retailer asked about the November sunflower oil offer and availability of 1L bottles. Interested in 20 bottles; requested a callback to confirm delivery slot.,FOLLOW_UP_REQUIRED,true

```

# packages/cap-service/db/data/FMCGDATA-Products.csv

```csv
ID,sku,name,brand,category,description,packSize,unit,stockQuantity,reorderLevel,isActive
f1000000-0000-4000-8000-000000000001,FMCG-001,Sunrise Refined Sunflower Oil 1L,Sunrise,Edible Oil,Refined sunflower oil for everyday cooking.,1 L,BOTTLE,840,120,true
f1000000-0000-4000-8000-000000000002,FMCG-002,Sunrise Refined Sunflower Oil 5L,Sunrise,Edible Oil,Family pack refined sunflower oil.,5 L,JAR,260,40,true
f1000000-0000-4000-8000-000000000003,FMCG-003,DailyGold Atta 5kg,DailyGold,Staples,"Whole wheat flour, chakki fresh style.",5 kg,BAG,520,80,true
f1000000-0000-4000-8000-000000000004,FMCG-004,DailyGold Toor Dal 1kg,DailyGold,Pulses,Premium split pigeon peas.,1 kg,BAG,390,60,true
f1000000-0000-4000-8000-000000000005,FMCG-005,FizzUp Cola 750ml,FizzUp,Beverages,Carbonated cola soft drink.,750 ml,BOTTLE,1800,300,true
f1000000-0000-4000-8000-000000000006,FMCG-006,FizzUp Orange 250ml,FizzUp,Beverages,Orange flavoured carbonated drink.,250 ml,CAN,2400,400,true
f1000000-0000-4000-8000-000000000007,FMCG-007,FreshDrop Dishwash Liquid 500ml,FreshDrop,Home Care,Lemon dishwashing liquid.,500 ml,BOTTLE,610,100,true
f1000000-0000-4000-8000-000000000008,FMCG-008,FreshDrop Detergent Powder 2kg,FreshDrop,Home Care,Everyday detergent powder.,2 kg,PACK,430,75,true
f1000000-0000-4000-8000-000000000009,FMCG-009,GlowCare Bath Soap 4x100g,GlowCare,Personal Care,Value pack of four bathing soaps.,4 x 100 g,PACK,950,150,true
f1000000-0000-4000-8000-000000000010,FMCG-010,GlowCare Shampoo 180ml,GlowCare,Personal Care,Daily care shampoo.,180 ml,BOTTLE,275,50,true
f1000000-0000-4000-8000-000000000011,FMCG-011,Crunchies Salted Chips 52g,Crunchies,Snacks,Crispy salted potato chips.,52 g,PACK,1500,250,true
f1000000-0000-4000-8000-000000000012,FMCG-012,Crunchies Masala Chips 52g,Crunchies,Snacks,Spicy masala potato chips.,52 g,PACK,1320,220,true

```

# packages/cap-service/db/data/FMCGDATA-README.md

```md
# FMCGDATA seed dataset

All records in this folder with the `FMCGDATA-` prefix seed the separate
`FMCGDATA` CDS namespace. They are fictional demonstration data in INR.

| File | Entity | Rows | Relationship |
|---|---|---:|---|
| FMCGDATA-Products.csv | Products | 12 | Product catalogue and stock |
| FMCGDATA-RetailPrices.csv | RetailPrices | 12 | `product_ID` -> Products.ID |
| FMCGDATA-Schemes.csv | Schemes | 6 | Retail promotions |
| FMCGDATA-SchemeProducts.csv | SchemeProducts | 12 | `scheme_ID` -> Schemes.ID; `product_ID` -> Products.ID |
| FMCGDATA-Retailers.csv | Retailers | 5 | Fictional retailer master |
| FMCGDATA-Interactions.csv | Interactions | 1 | `retailer_ID` -> Retailers.ID |
| FMCGDATA-InteractionMessages.csv | InteractionMessages | 4 | `interaction_ID` -> Interactions.ID |
| FMCGDATA-InteractionItems.csv | InteractionItems | 1 | `interaction_ID` -> Interactions.ID; `product_ID` -> Products.ID |
| FMCGDATA-FollowUps.csv | FollowUps | 1 | `interaction_ID` -> Interactions.ID |

The `procurement-*.csv` files are a separate seed set and are intentionally
left unchanged. Do not merge FMCG retail prices with supplier purchasing info
records: they represent different commercial concepts.

```

# packages/cap-service/db/data/FMCGDATA-Retailers.csv

```csv
ID,retailerCode,name,contactName,phone,email,city,state,channel,status
f5000000-0000-4000-8000-000000000001,RTL-AMD-001,Shreeji General Stores,Kunal Patel,+91-9876501001,kunal@shreejistores.example,Ahmedabad,Gujarat,KIRANA,ACTIVE
f5000000-0000-4000-8000-000000000002,RTL-MUM-002,Metro Mart Andheri,Neha Shah,+91-9876501002,neha@metromart.example,Mumbai,Maharashtra,SUPERMARKET,ACTIVE
f5000000-0000-4000-8000-000000000003,RTL-PUN-003,Patil Wholesale Depot,Sanjay Patil,+91-9876501003,sanjay@patildepot.example,Pune,Maharashtra,WHOLESALER,ACTIVE
f5000000-0000-4000-8000-000000000004,RTL-JAI-004,Pink City Kirana,Ritu Sharma,+91-9876501004,ritu@pinkcitykirana.example,Jaipur,Rajasthan,KIRANA,ACTIVE
f5000000-0000-4000-8000-000000000005,RTL-SUR-005,Udhna Super Bazaar,Amit Desai,+91-9876501005,amit@udhnabazaar.example,Surat,Gujarat,SUPERMARKET,ACTIVE

```

# packages/cap-service/db/data/FMCGDATA-RetailPrices.csv

```csv
ID,product_ID,mrp,retailerPrice,currency,validFrom,validTo
f2000000-0000-4000-8000-000000000001,f1000000-0000-4000-8000-000000000001,145,128,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000002,f1000000-0000-4000-8000-000000000002,675,610,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000003,f1000000-0000-4000-8000-000000000003,285,258,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000004,f1000000-0000-4000-8000-000000000004,168,152,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000005,f1000000-0000-4000-8000-000000000005,40,35,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000006,f1000000-0000-4000-8000-000000000006,20,17,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000007,f1000000-0000-4000-8000-000000000007,95,84,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000008,f1000000-0000-4000-8000-000000000008,210,188,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000009,f1000000-0000-4000-8000-000000000009,120,106,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000010,f1000000-0000-4000-8000-000000000010,185,164,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000011,f1000000-0000-4000-8000-000000000011,20,17,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000012,f1000000-0000-4000-8000-000000000012,20,17,INR,2026-04-01,2027-03-31

```

# packages/cap-service/db/data/FMCGDATA-SchemeProducts.csv

```csv
ID,scheme_ID,product_ID
f4000000-0000-4000-8000-000000000001,f3000000-0000-4000-8000-000000000001,f1000000-0000-4000-8000-000000000001
f4000000-0000-4000-8000-000000000002,f3000000-0000-4000-8000-000000000001,f1000000-0000-4000-8000-000000000002
f4000000-0000-4000-8000-000000000003,f3000000-0000-4000-8000-000000000002,f1000000-0000-4000-8000-000000000005
f4000000-0000-4000-8000-000000000004,f3000000-0000-4000-8000-000000000002,f1000000-0000-4000-8000-000000000006
f4000000-0000-4000-8000-000000000005,f3000000-0000-4000-8000-000000000003,f1000000-0000-4000-8000-000000000003
f4000000-0000-4000-8000-000000000006,f3000000-0000-4000-8000-000000000003,f1000000-0000-4000-8000-000000000004
f4000000-0000-4000-8000-000000000007,f3000000-0000-4000-8000-000000000004,f1000000-0000-4000-8000-000000000007
f4000000-0000-4000-8000-000000000008,f3000000-0000-4000-8000-000000000004,f1000000-0000-4000-8000-000000000008
f4000000-0000-4000-8000-000000000009,f3000000-0000-4000-8000-000000000005,f1000000-0000-4000-8000-000000000009
f4000000-0000-4000-8000-000000000010,f3000000-0000-4000-8000-000000000005,f1000000-0000-4000-8000-000000000010
f4000000-0000-4000-8000-000000000011,f3000000-0000-4000-8000-000000000006,f1000000-0000-4000-8000-000000000011
f4000000-0000-4000-8000-000000000012,f3000000-0000-4000-8000-000000000006,f1000000-0000-4000-8000-000000000012

```

# packages/cap-service/db/data/FMCGDATA-Schemes.csv

```csv
ID,schemeCode,name,description,discountType,discountValue,minQuantity,validFrom,validTo,isActive
f3000000-0000-4000-8000-000000000001,SCH-OIL-10,Oil category slab offer,Buy 10 units and get 5% off eligible oil SKUs.,PERCENTAGE,5,10,2026-11-01,2026-11-30,true
f3000000-0000-4000-8000-000000000002,SCH-COLA-CASE,FizzUp case deal,Buy 24 bottles/cans and get 2 units free.,FREE_UNITS,2,24,2026-11-01,2026-11-30,true
f3000000-0000-4000-8000-000000000003,SCH-STAPLES-3,Staples bulk order,Flat INR 75 off on orders of 20 eligible packs.,FIXED_AMOUNT,75,20,2026-11-01,2026-12-15,true
f3000000-0000-4000-8000-000000000004,SCH-HOME-5,Home care retailer offer,5% off when ordering 12 eligible units.,PERCENTAGE,5,12,2026-10-15,2026-11-30,true
f3000000-0000-4000-8000-000000000005,SCH-PERSONAL-12,Personal care combo,Buy 12 eligible packs and save INR 100.,FIXED_AMOUNT,100,12,2026-11-01,2026-11-20,true
f3000000-0000-4000-8000-000000000006,SCH-SNACKS-50,Snack display scheme,Buy 50 packs and receive 5 free packs.,FREE_UNITS,5,50,2026-11-01,2026-11-30,true

```

# packages/cap-service/db/data/procurement-InventoryItems.csv

```csv
ID,materialId,description,quantityOnHand,reorderPoint,unit,warehouse
9d2b2f3f-2222-4b2b-9b2b-000000000001,MAT-1001,Hydraulic Pump Assembly,45,10,EA,WH-MUM-01
9d2b2f3f-2222-4b2b-9b2b-000000000002,MAT-1002,Steel Sheet 2mm,8,15,KG,WH-MUM-01
9d2b2f3f-2222-4b2b-9b2b-000000000003,MAT-1003,Control Relay Module,120,25,EA,WH-PUN-02

```

# packages/cap-service/db/data/procurement-POLineItems.csv

```csv
ID,purchaseOrder_ID,material_ID,quantity,unitPrice
bf4d4a5a-4444-4d4d-ad4d-000000000001,ae3c3f4f-3333-4c3c-ac3c-000000000001,9d2b2f3f-2222-4b2b-9b2b-000000000001,25,500.00
bf4d4a5a-4444-4d4d-ad4d-000000000002,ae3c3f4f-3333-4c3c-ac3c-000000000002,9d2b2f3f-2222-4b2b-9b2b-000000000002,300,26.00

```

# packages/cap-service/db/data/procurement-PurchaseOrders.csv

```csv
ID,poNumber,vendor_ID,orderDate,status,currency,totalAmount
ae3c3f4f-3333-4c3c-ac3c-000000000001,PO-2026-0001,7c1a1e2e-1111-4a1a-8a1a-000000000001,2026-06-01,APPROVED,USD,12500.00
ae3c3f4f-3333-4c3c-ac3c-000000000002,PO-2026-0002,7c1a1e2e-1111-4a1a-8a1a-000000000001,2026-06-15,SHIPPED,USD,7800.50
ae3c3f4f-3333-4c3c-ac3c-000000000003,PO-2026-0003,7c1a1e2e-1111-4a1a-8a1a-000000000002,2026-07-01,PENDING,EUR,20400.00

```

# packages/cap-service/db/data/procurement-Quotations.csv

```csv
ID,quotationId,vendor_ID,material_ID,quantity,price,currency,validUntil,status
q-uuid-001,QT-1001,7c1a1e2e-1111-4a1a-8a1a-000000000002,9d2b2f3f-2222-4b2b-9b2b-000000000001,50,115.00,USD,2030-12-31,OPEN
q-uuid-002,QT-1002,7c1a1e2e-1111-4a1a-8a1a-000000000001,9d2b2f3f-2222-4b2b-9b2b-000000000001,50,122.50,USD,2030-12-31,OPEN
q-uuid-003,QT-2001,7c1a1e2e-1111-4a1a-8a1a-000000000003,9d2b2f3f-2222-4b2b-9b2b-000000000002,100,12.00,USD,2030-12-31,OPEN

```

# packages/cap-service/db/data/procurement-Vendors.csv

```csv
ID,name,taxId,country,email,status
7c1a1e2e-1111-4a1a-8a1a-000000000001,Bosch GmbH,DE123456789,DE,procurement@bosch.example,ACTIVE
7c1a1e2e-1111-4a1a-8a1a-000000000002,Siemens AG,DE987654321,DE,orders@siemens.example,ACTIVE
7c1a1e2e-1111-4a1a-8a1a-000000000003,Tata Steel Ltd,IN445566778,IN,sales@tatasteel.example,ACTIVE
7c1a1e2e-1111-4a1a-8a1a-000000000004,Reliance Industrial Supplies,IN998877665,IN,supply@reliance.example,BLOCKED

```

# packages/cap-service/db/fmcg-schema.cds

```cds
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

```

# packages/cap-service/db/schema.cds

```cds
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
  lineItems     : Composition of many SupplierInvoiceItems on lineItems.invoice = $self;
}

entity SupplierInvoiceItems : cuid {
  invoice   : Association to SupplierInvoices @mandatory;
  material  : Association to InventoryItems @mandatory;
  quantity  : Integer @mandatory;
  unitPrice : Decimal(15,2);
  amount    : Decimal(15,2);
}

```

# packages/cap-service/gen/db/data/FMCGDATA-README.md

```md
# FMCGDATA seed dataset

All records in this folder with the `FMCGDATA-` prefix seed the separate
`FMCGDATA` CDS namespace. They are fictional demonstration data in INR.

| File | Entity | Rows | Relationship |
|---|---|---:|---|
| FMCGDATA-Products.csv | Products | 12 | Product catalogue and stock |
| FMCGDATA-RetailPrices.csv | RetailPrices | 12 | `product_ID` -> Products.ID |
| FMCGDATA-Schemes.csv | Schemes | 6 | Retail promotions |
| FMCGDATA-SchemeProducts.csv | SchemeProducts | 12 | `scheme_ID` -> Schemes.ID; `product_ID` -> Products.ID |
| FMCGDATA-Retailers.csv | Retailers | 5 | Fictional retailer master |
| FMCGDATA-Interactions.csv | Interactions | 1 | `retailer_ID` -> Retailers.ID |
| FMCGDATA-InteractionMessages.csv | InteractionMessages | 4 | `interaction_ID` -> Interactions.ID |
| FMCGDATA-InteractionItems.csv | InteractionItems | 1 | `interaction_ID` -> Interactions.ID; `product_ID` -> Products.ID |
| FMCGDATA-FollowUps.csv | FollowUps | 1 | `interaction_ID` -> Interactions.ID |

The `procurement-*.csv` files are a separate seed set and are intentionally
left unchanged. Do not merge FMCG retail prices with supplier purchasing info
records: they represent different commercial concepts.

```

# packages/cap-service/gen/db/package.json

```json
{
  "name": "deploy",
  "dependencies": {
    "hdb": "^2.0.0",
    "@sap/hdi-deploy": "^5"
  },
  "engines": {
    "node": "^24"
  },
  "scripts": {
    "start": "node node_modules/@sap/hdi-deploy/deploy.js --use-hdb --parameter com.sap.hana.di.table/try_fast_table_migration=true"
  }
}
```

# packages/cap-service/gen/db/src/gen/.hdiconfig

```
{
  "file_suffixes": {
    "csv": {
      "plugin_name": "com.sap.hana.di.tabledata.source"
    },
    "hdbcalculationview": {
      "plugin_name": "com.sap.hana.di.calculationview"
    },
    "hdbconstraint": {
      "plugin_name": "com.sap.hana.di.constraint"
    },
    "hdbindex": {
      "plugin_name": "com.sap.hana.di.index"
    },
    "hdbtable": {
      "plugin_name": "com.sap.hana.di.table"
    },
    "hdbtabledata": {
      "plugin_name": "com.sap.hana.di.tabledata"
    },
    "hdbview": {
      "plugin_name": "com.sap.hana.di.view"
    }
  }
}
```

# packages/cap-service/gen/db/src/gen/.hdinamespace

```
{
  "name": "",
  "subfolder": "ignore"
}
```

# packages/cap-service/gen/db/src/gen/cds.outbox.Messages.hdbtable

```hdbtable
COLUMN TABLE cds_outbox_Messages (
  ID NVARCHAR(36) NOT NULL,
  "TIMESTAMP" TIMESTAMP,
  target NVARCHAR(5000),
  msg NCLOB,
  attempts INTEGER DEFAULT 0,
  partition INTEGER DEFAULT 0,
  lastError NCLOB,
  lastAttemptTimestamp TIMESTAMP,
  status NVARCHAR(23),
  task NVARCHAR(255),
  appid NVARCHAR(255),
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-FollowUps.csv

```csv
ID,interaction_ID,followUpDate,requirement,status,assignedTo
f9000000-0000-4000-8000-000000000001,f6000000-0000-4000-8000-000000000001,2026-11-08,Confirm order quantity and delivery slot for 20 Sunrise Sunflower Oil 1L bottles.,OPEN,Sales Team West

```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-FollowUps.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "FMCGDATA_FOLLOWUPS",
      "source_data": {
        "data_type": "CSV",
        "file_name": "FMCGDATA-FollowUps.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "INTERACTION_ID",
          "FOLLOWUPDATE",
          "REQUIREMENT",
          "STATUS",
          "ASSIGNEDTO"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "INTERACTION_ID": "interaction_ID",
        "FOLLOWUPDATE": "followUpDate",
        "REQUIREMENT": "requirement",
        "STATUS": "status",
        "ASSIGNEDTO": "assignedTo"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-InteractionItems.csv

```csv
ID,interaction_ID,product_ID,requestedQuantity,unit,interestStatus,notes
f8000000-0000-4000-8000-000000000001,f6000000-0000-4000-8000-000000000001,f1000000-0000-4000-8000-000000000001,20,BOTTLE,INTERESTED,Retailer requested callback to confirm delivery slot.

```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-InteractionItems.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "FMCGDATA_INTERACTIONITEMS",
      "source_data": {
        "data_type": "CSV",
        "file_name": "FMCGDATA-InteractionItems.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "INTERACTION_ID",
          "PRODUCT_ID",
          "REQUESTEDQUANTITY",
          "UNIT",
          "INTERESTSTATUS",
          "NOTES"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "INTERACTION_ID": "interaction_ID",
        "PRODUCT_ID": "product_ID",
        "REQUESTEDQUANTITY": "requestedQuantity",
        "UNIT": "unit",
        "INTERESTSTATUS": "interestStatus",
        "NOTES": "notes"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-InteractionMessages.csv

```csv
ID,interaction_ID,role,content,createdAt
f7000000-0000-4000-8000-000000000001,f6000000-0000-4000-8000-000000000001,USER,Do you have the Sunrise sunflower oil 1 litre pack and what is the current retailer price?,2026-11-06T10:30:10Z
f7000000-0000-4000-8000-000000000002,f6000000-0000-4000-8000-000000000001,ASSISTANT,The 1 litre pack is available. The current retailer price is INR 128 and MRP is INR 145.,2026-11-06T10:30:20Z
f7000000-0000-4000-8000-000000000003,f6000000-0000-4000-8000-000000000001,USER,I may take 20 bottles. Is there any scheme?,2026-11-06T10:31:00Z
f7000000-0000-4000-8000-000000000004,f6000000-0000-4000-8000-000000000001,ASSISTANT,The November oil scheme gives 5% off at 10 units. I can record your interest in 20 bottles.,2026-11-06T10:31:15Z

```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-InteractionMessages.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "FMCGDATA_INTERACTIONMESSAGES",
      "source_data": {
        "data_type": "CSV",
        "file_name": "FMCGDATA-InteractionMessages.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "INTERACTION_ID",
          "ROLE",
          "CONTENT",
          "CREATEDAT"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "INTERACTION_ID": "interaction_ID",
        "ROLE": "role",
        "CONTENT": "content",
        "CREATEDAT": "createdAt"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-Interactions.csv

```csv
ID,interactionNumber,retailer_ID,channel,status,startedAt,endedAt,summary,outcome,followUpRequired
f6000000-0000-4000-8000-000000000001,INT-2026-0001,f5000000-0000-4000-8000-000000000001,VOICE,COMPLETED,2026-11-06T10:30:00Z,2026-11-06T10:34:00Z,Retailer asked about the November sunflower oil offer and availability of 1L bottles. Interested in 20 bottles; requested a callback to confirm delivery slot.,FOLLOW_UP_REQUIRED,true

```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-Interactions.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "FMCGDATA_INTERACTIONS",
      "source_data": {
        "data_type": "CSV",
        "file_name": "FMCGDATA-Interactions.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "INTERACTIONNUMBER",
          "RETAILER_ID",
          "CHANNEL",
          "STATUS",
          "STARTEDAT",
          "ENDEDAT",
          "SUMMARY",
          "OUTCOME",
          "FOLLOWUPREQUIRED"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "INTERACTIONNUMBER": "interactionNumber",
        "RETAILER_ID": "retailer_ID",
        "CHANNEL": "channel",
        "STATUS": "status",
        "STARTEDAT": "startedAt",
        "ENDEDAT": "endedAt",
        "SUMMARY": "summary",
        "OUTCOME": "outcome",
        "FOLLOWUPREQUIRED": "followUpRequired"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-Products.csv

```csv
ID,sku,name,brand,category,description,packSize,unit,stockQuantity,reorderLevel,isActive
f1000000-0000-4000-8000-000000000001,FMCG-001,Sunrise Refined Sunflower Oil 1L,Sunrise,Edible Oil,Refined sunflower oil for everyday cooking.,1 L,BOTTLE,840,120,true
f1000000-0000-4000-8000-000000000002,FMCG-002,Sunrise Refined Sunflower Oil 5L,Sunrise,Edible Oil,Family pack refined sunflower oil.,5 L,JAR,260,40,true
f1000000-0000-4000-8000-000000000003,FMCG-003,DailyGold Atta 5kg,DailyGold,Staples,"Whole wheat flour, chakki fresh style.",5 kg,BAG,520,80,true
f1000000-0000-4000-8000-000000000004,FMCG-004,DailyGold Toor Dal 1kg,DailyGold,Pulses,Premium split pigeon peas.,1 kg,BAG,390,60,true
f1000000-0000-4000-8000-000000000005,FMCG-005,FizzUp Cola 750ml,FizzUp,Beverages,Carbonated cola soft drink.,750 ml,BOTTLE,1800,300,true
f1000000-0000-4000-8000-000000000006,FMCG-006,FizzUp Orange 250ml,FizzUp,Beverages,Orange flavoured carbonated drink.,250 ml,CAN,2400,400,true
f1000000-0000-4000-8000-000000000007,FMCG-007,FreshDrop Dishwash Liquid 500ml,FreshDrop,Home Care,Lemon dishwashing liquid.,500 ml,BOTTLE,610,100,true
f1000000-0000-4000-8000-000000000008,FMCG-008,FreshDrop Detergent Powder 2kg,FreshDrop,Home Care,Everyday detergent powder.,2 kg,PACK,430,75,true
f1000000-0000-4000-8000-000000000009,FMCG-009,GlowCare Bath Soap 4x100g,GlowCare,Personal Care,Value pack of four bathing soaps.,4 x 100 g,PACK,950,150,true
f1000000-0000-4000-8000-000000000010,FMCG-010,GlowCare Shampoo 180ml,GlowCare,Personal Care,Daily care shampoo.,180 ml,BOTTLE,275,50,true
f1000000-0000-4000-8000-000000000011,FMCG-011,Crunchies Salted Chips 52g,Crunchies,Snacks,Crispy salted potato chips.,52 g,PACK,1500,250,true
f1000000-0000-4000-8000-000000000012,FMCG-012,Crunchies Masala Chips 52g,Crunchies,Snacks,Spicy masala potato chips.,52 g,PACK,1320,220,true

```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-Products.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "FMCGDATA_PRODUCTS",
      "source_data": {
        "data_type": "CSV",
        "file_name": "FMCGDATA-Products.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "SKU",
          "NAME",
          "BRAND",
          "CATEGORY",
          "DESCRIPTION",
          "PACKSIZE",
          "UNIT",
          "STOCKQUANTITY",
          "REORDERLEVEL",
          "ISACTIVE"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "SKU": "sku",
        "NAME": "name",
        "BRAND": "brand",
        "CATEGORY": "category",
        "DESCRIPTION": "description",
        "PACKSIZE": "packSize",
        "UNIT": "unit",
        "STOCKQUANTITY": "stockQuantity",
        "REORDERLEVEL": "reorderLevel",
        "ISACTIVE": "isActive"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-Retailers.csv

```csv
ID,retailerCode,name,contactName,phone,email,city,state,channel,status
f5000000-0000-4000-8000-000000000001,RTL-AMD-001,Shreeji General Stores,Kunal Patel,+91-9876501001,kunal@shreejistores.example,Ahmedabad,Gujarat,KIRANA,ACTIVE
f5000000-0000-4000-8000-000000000002,RTL-MUM-002,Metro Mart Andheri,Neha Shah,+91-9876501002,neha@metromart.example,Mumbai,Maharashtra,SUPERMARKET,ACTIVE
f5000000-0000-4000-8000-000000000003,RTL-PUN-003,Patil Wholesale Depot,Sanjay Patil,+91-9876501003,sanjay@patildepot.example,Pune,Maharashtra,WHOLESALER,ACTIVE
f5000000-0000-4000-8000-000000000004,RTL-JAI-004,Pink City Kirana,Ritu Sharma,+91-9876501004,ritu@pinkcitykirana.example,Jaipur,Rajasthan,KIRANA,ACTIVE
f5000000-0000-4000-8000-000000000005,RTL-SUR-005,Udhna Super Bazaar,Amit Desai,+91-9876501005,amit@udhnabazaar.example,Surat,Gujarat,SUPERMARKET,ACTIVE

```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-Retailers.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "FMCGDATA_RETAILERS",
      "source_data": {
        "data_type": "CSV",
        "file_name": "FMCGDATA-Retailers.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "RETAILERCODE",
          "NAME",
          "CONTACTNAME",
          "PHONE",
          "EMAIL",
          "CITY",
          "STATE",
          "CHANNEL",
          "STATUS"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "RETAILERCODE": "retailerCode",
        "NAME": "name",
        "CONTACTNAME": "contactName",
        "PHONE": "phone",
        "EMAIL": "email",
        "CITY": "city",
        "STATE": "state",
        "CHANNEL": "channel",
        "STATUS": "status"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-RetailPrices.csv

```csv
ID,product_ID,mrp,retailerPrice,currency,validFrom,validTo
f2000000-0000-4000-8000-000000000001,f1000000-0000-4000-8000-000000000001,145,128,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000002,f1000000-0000-4000-8000-000000000002,675,610,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000003,f1000000-0000-4000-8000-000000000003,285,258,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000004,f1000000-0000-4000-8000-000000000004,168,152,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000005,f1000000-0000-4000-8000-000000000005,40,35,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000006,f1000000-0000-4000-8000-000000000006,20,17,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000007,f1000000-0000-4000-8000-000000000007,95,84,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000008,f1000000-0000-4000-8000-000000000008,210,188,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000009,f1000000-0000-4000-8000-000000000009,120,106,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000010,f1000000-0000-4000-8000-000000000010,185,164,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000011,f1000000-0000-4000-8000-000000000011,20,17,INR,2026-04-01,2027-03-31
f2000000-0000-4000-8000-000000000012,f1000000-0000-4000-8000-000000000012,20,17,INR,2026-04-01,2027-03-31

```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-RetailPrices.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "FMCGDATA_RETAILPRICES",
      "source_data": {
        "data_type": "CSV",
        "file_name": "FMCGDATA-RetailPrices.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "PRODUCT_ID",
          "MRP",
          "RETAILERPRICE",
          "CURRENCY",
          "VALIDFROM",
          "VALIDTO"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "PRODUCT_ID": "product_ID",
        "MRP": "mrp",
        "RETAILERPRICE": "retailerPrice",
        "CURRENCY": "currency",
        "VALIDFROM": "validFrom",
        "VALIDTO": "validTo"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-SchemeProducts.csv

```csv
ID,scheme_ID,product_ID
f4000000-0000-4000-8000-000000000001,f3000000-0000-4000-8000-000000000001,f1000000-0000-4000-8000-000000000001
f4000000-0000-4000-8000-000000000002,f3000000-0000-4000-8000-000000000001,f1000000-0000-4000-8000-000000000002
f4000000-0000-4000-8000-000000000003,f3000000-0000-4000-8000-000000000002,f1000000-0000-4000-8000-000000000005
f4000000-0000-4000-8000-000000000004,f3000000-0000-4000-8000-000000000002,f1000000-0000-4000-8000-000000000006
f4000000-0000-4000-8000-000000000005,f3000000-0000-4000-8000-000000000003,f1000000-0000-4000-8000-000000000003
f4000000-0000-4000-8000-000000000006,f3000000-0000-4000-8000-000000000003,f1000000-0000-4000-8000-000000000004
f4000000-0000-4000-8000-000000000007,f3000000-0000-4000-8000-000000000004,f1000000-0000-4000-8000-000000000007
f4000000-0000-4000-8000-000000000008,f3000000-0000-4000-8000-000000000004,f1000000-0000-4000-8000-000000000008
f4000000-0000-4000-8000-000000000009,f3000000-0000-4000-8000-000000000005,f1000000-0000-4000-8000-000000000009
f4000000-0000-4000-8000-000000000010,f3000000-0000-4000-8000-000000000005,f1000000-0000-4000-8000-000000000010
f4000000-0000-4000-8000-000000000011,f3000000-0000-4000-8000-000000000006,f1000000-0000-4000-8000-000000000011
f4000000-0000-4000-8000-000000000012,f3000000-0000-4000-8000-000000000006,f1000000-0000-4000-8000-000000000012

```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-SchemeProducts.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "FMCGDATA_SCHEMEPRODUCTS",
      "source_data": {
        "data_type": "CSV",
        "file_name": "FMCGDATA-SchemeProducts.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "SCHEME_ID",
          "PRODUCT_ID"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "SCHEME_ID": "scheme_ID",
        "PRODUCT_ID": "product_ID"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-Schemes.csv

```csv
ID,schemeCode,name,description,discountType,discountValue,minQuantity,validFrom,validTo,isActive
f3000000-0000-4000-8000-000000000001,SCH-OIL-10,Oil category slab offer,Buy 10 units and get 5% off eligible oil SKUs.,PERCENTAGE,5,10,2026-11-01,2026-11-30,true
f3000000-0000-4000-8000-000000000002,SCH-COLA-CASE,FizzUp case deal,Buy 24 bottles/cans and get 2 units free.,FREE_UNITS,2,24,2026-11-01,2026-11-30,true
f3000000-0000-4000-8000-000000000003,SCH-STAPLES-3,Staples bulk order,Flat INR 75 off on orders of 20 eligible packs.,FIXED_AMOUNT,75,20,2026-11-01,2026-12-15,true
f3000000-0000-4000-8000-000000000004,SCH-HOME-5,Home care retailer offer,5% off when ordering 12 eligible units.,PERCENTAGE,5,12,2026-10-15,2026-11-30,true
f3000000-0000-4000-8000-000000000005,SCH-PERSONAL-12,Personal care combo,Buy 12 eligible packs and save INR 100.,FIXED_AMOUNT,100,12,2026-11-01,2026-11-20,true
f3000000-0000-4000-8000-000000000006,SCH-SNACKS-50,Snack display scheme,Buy 50 packs and receive 5 free packs.,FREE_UNITS,5,50,2026-11-01,2026-11-30,true

```

# packages/cap-service/gen/db/src/gen/data/FMCGDATA-Schemes.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "FMCGDATA_SCHEMES",
      "source_data": {
        "data_type": "CSV",
        "file_name": "FMCGDATA-Schemes.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "SCHEMECODE",
          "NAME",
          "DESCRIPTION",
          "DISCOUNTTYPE",
          "DISCOUNTVALUE",
          "MINQUANTITY",
          "VALIDFROM",
          "VALIDTO",
          "ISACTIVE"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "SCHEMECODE": "schemeCode",
        "NAME": "name",
        "DESCRIPTION": "description",
        "DISCOUNTTYPE": "discountType",
        "DISCOUNTVALUE": "discountValue",
        "MINQUANTITY": "minQuantity",
        "VALIDFROM": "validFrom",
        "VALIDTO": "validTo",
        "ISACTIVE": "isActive"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/data/procurement-InventoryItems.csv

```csv
ID,materialId,description,quantityOnHand,reorderPoint,unit,warehouse
9d2b2f3f-2222-4b2b-9b2b-000000000001,MAT-1001,Hydraulic Pump Assembly,45,10,EA,WH-MUM-01
9d2b2f3f-2222-4b2b-9b2b-000000000002,MAT-1002,Steel Sheet 2mm,8,15,KG,WH-MUM-01
9d2b2f3f-2222-4b2b-9b2b-000000000003,MAT-1003,Control Relay Module,120,25,EA,WH-PUN-02

```

# packages/cap-service/gen/db/src/gen/data/procurement-InventoryItems.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "PROCUREMENT_INVENTORYITEMS",
      "source_data": {
        "data_type": "CSV",
        "file_name": "procurement-InventoryItems.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "MATERIALID",
          "DESCRIPTION",
          "QUANTITYONHAND",
          "REORDERPOINT",
          "UNIT",
          "WAREHOUSE"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "MATERIALID": "materialId",
        "DESCRIPTION": "description",
        "QUANTITYONHAND": "quantityOnHand",
        "REORDERPOINT": "reorderPoint",
        "UNIT": "unit",
        "WAREHOUSE": "warehouse"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/data/procurement-POLineItems.csv

```csv
ID,purchaseOrder_ID,material_ID,quantity,unitPrice
bf4d4a5a-4444-4d4d-ad4d-000000000001,ae3c3f4f-3333-4c3c-ac3c-000000000001,9d2b2f3f-2222-4b2b-9b2b-000000000001,25,500.00
bf4d4a5a-4444-4d4d-ad4d-000000000002,ae3c3f4f-3333-4c3c-ac3c-000000000002,9d2b2f3f-2222-4b2b-9b2b-000000000002,300,26.00

```

# packages/cap-service/gen/db/src/gen/data/procurement-POLineItems.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "PROCUREMENT_POLINEITEMS",
      "source_data": {
        "data_type": "CSV",
        "file_name": "procurement-POLineItems.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "PURCHASEORDER_ID",
          "MATERIAL_ID",
          "QUANTITY",
          "UNITPRICE"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "PURCHASEORDER_ID": "purchaseOrder_ID",
        "MATERIAL_ID": "material_ID",
        "QUANTITY": "quantity",
        "UNITPRICE": "unitPrice"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/data/procurement-PurchaseOrders.csv

```csv
ID,poNumber,vendor_ID,orderDate,status,currency,totalAmount
ae3c3f4f-3333-4c3c-ac3c-000000000001,PO-2026-0001,7c1a1e2e-1111-4a1a-8a1a-000000000001,2026-06-01,APPROVED,USD,12500.00
ae3c3f4f-3333-4c3c-ac3c-000000000002,PO-2026-0002,7c1a1e2e-1111-4a1a-8a1a-000000000001,2026-06-15,SHIPPED,USD,7800.50
ae3c3f4f-3333-4c3c-ac3c-000000000003,PO-2026-0003,7c1a1e2e-1111-4a1a-8a1a-000000000002,2026-07-01,PENDING,EUR,20400.00

```

# packages/cap-service/gen/db/src/gen/data/procurement-PurchaseOrders.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "PROCUREMENT_PURCHASEORDERS",
      "source_data": {
        "data_type": "CSV",
        "file_name": "procurement-PurchaseOrders.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "PONUMBER",
          "VENDOR_ID",
          "ORDERDATE",
          "STATUS",
          "CURRENCY",
          "TOTALAMOUNT"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "PONUMBER": "poNumber",
        "VENDOR_ID": "vendor_ID",
        "ORDERDATE": "orderDate",
        "STATUS": "status",
        "CURRENCY": "currency",
        "TOTALAMOUNT": "totalAmount"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/data/procurement-Quotations.csv

```csv
ID,quotationId,vendor_ID,material_ID,quantity,price,currency,validUntil,status
q-uuid-001,QT-1001,7c1a1e2e-1111-4a1a-8a1a-000000000002,9d2b2f3f-2222-4b2b-9b2b-000000000001,50,115.00,USD,2030-12-31,OPEN
q-uuid-002,QT-1002,7c1a1e2e-1111-4a1a-8a1a-000000000001,9d2b2f3f-2222-4b2b-9b2b-000000000001,50,122.50,USD,2030-12-31,OPEN
q-uuid-003,QT-2001,7c1a1e2e-1111-4a1a-8a1a-000000000003,9d2b2f3f-2222-4b2b-9b2b-000000000002,100,12.00,USD,2030-12-31,OPEN

```

# packages/cap-service/gen/db/src/gen/data/procurement-Quotations.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "PROCUREMENT_QUOTATIONS",
      "source_data": {
        "data_type": "CSV",
        "file_name": "procurement-Quotations.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "QUOTATIONID",
          "VENDOR_ID",
          "MATERIAL_ID",
          "QUANTITY",
          "PRICE",
          "CURRENCY",
          "VALIDUNTIL",
          "STATUS"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "QUOTATIONID": "quotationId",
        "VENDOR_ID": "vendor_ID",
        "MATERIAL_ID": "material_ID",
        "QUANTITY": "quantity",
        "PRICE": "price",
        "CURRENCY": "currency",
        "VALIDUNTIL": "validUntil",
        "STATUS": "status"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/data/procurement-Vendors.csv

```csv
ID,name,taxId,country,email,status
7c1a1e2e-1111-4a1a-8a1a-000000000001,Bosch GmbH,DE123456789,DE,procurement@bosch.example,ACTIVE
7c1a1e2e-1111-4a1a-8a1a-000000000002,Siemens AG,DE987654321,DE,orders@siemens.example,ACTIVE
7c1a1e2e-1111-4a1a-8a1a-000000000003,Tata Steel Ltd,IN445566778,IN,sales@tatasteel.example,ACTIVE
7c1a1e2e-1111-4a1a-8a1a-000000000004,Reliance Industrial Supplies,IN998877665,IN,supply@reliance.example,BLOCKED

```

# packages/cap-service/gen/db/src/gen/data/procurement-Vendors.hdbtabledata

```hdbtabledata
{
  "format_version": 1,
  "imports": [
    {
      "target_table": "PROCUREMENT_VENDORS",
      "source_data": {
        "data_type": "CSV",
        "file_name": "procurement-Vendors.csv",
        "has_header": true,
        "type_config": {
          "delimiter": ","
        }
      },
      "import_settings": {
        "import_columns": [
          "ID",
          "NAME",
          "TAXID",
          "COUNTRY",
          "EMAIL",
          "STATUS"
        ],
        "include_filter": []
      },
      "column_mappings": {
        "ID": "ID",
        "NAME": "name",
        "TAXID": "taxId",
        "COUNTRY": "country",
        "EMAIL": "email",
        "STATUS": "status"
      }
    }
  ]
}
```

# packages/cap-service/gen/db/src/gen/FMCGDATA.FollowUps.hdbtable

```hdbtable
COLUMN TABLE FMCGDATA_FollowUps (
  ID NVARCHAR(36) NOT NULL,
  createdAt TIMESTAMP,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP,
  modifiedBy NVARCHAR(255),
  interaction_ID NVARCHAR(36),
  followUpDate DATE,
  requirement NVARCHAR(500),
  status NVARCHAR(20) DEFAULT 'OPEN',
  assignedTo NVARCHAR(100),
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/FMCGDATA.InteractionItems.hdbtable

```hdbtable
COLUMN TABLE FMCGDATA_InteractionItems (
  ID NVARCHAR(36) NOT NULL,
  interaction_ID NVARCHAR(36),
  product_ID NVARCHAR(36),
  requestedQuantity INTEGER,
  unit NVARCHAR(20),
  interestStatus NVARCHAR(30) DEFAULT 'INTERESTED',
  notes NVARCHAR(500),
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/FMCGDATA.InteractionMessages.hdbtable

```hdbtable
COLUMN TABLE FMCGDATA_InteractionMessages (
  ID NVARCHAR(36) NOT NULL,
  interaction_ID NVARCHAR(36),
  role NVARCHAR(20),
  content NCLOB,
  createdAt TIMESTAMP,
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/FMCGDATA.Interactions.hdbtable

```hdbtable
COLUMN TABLE FMCGDATA_Interactions (
  ID NVARCHAR(36) NOT NULL,
  createdAt TIMESTAMP,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP,
  modifiedBy NVARCHAR(255),
  interactionNumber NVARCHAR(30),
  retailer_ID NVARCHAR(36),
  channel NVARCHAR(20) DEFAULT 'VOICE',
  status NVARCHAR(20) DEFAULT 'IN_PROGRESS',
  startedAt TIMESTAMP,
  endedAt TIMESTAMP,
  summary NCLOB,
  outcome NVARCHAR(40),
  followUpRequired BOOLEAN DEFAULT FALSE,
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/FMCGDATA.Products.hdbtable

```hdbtable
COLUMN TABLE FMCGDATA_Products (
  ID NVARCHAR(36) NOT NULL,
  createdAt TIMESTAMP,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP,
  modifiedBy NVARCHAR(255),
  sku NVARCHAR(30),
  name NVARCHAR(120),
  brand NVARCHAR(80),
  category NVARCHAR(60),
  description NVARCHAR(500),
  packSize NVARCHAR(40),
  unit NVARCHAR(20) DEFAULT 'EA',
  stockQuantity INTEGER DEFAULT 0,
  reorderLevel INTEGER DEFAULT 0,
  isActive BOOLEAN DEFAULT TRUE,
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/FMCGDATA.Retailers.hdbtable

```hdbtable
COLUMN TABLE FMCGDATA_Retailers (
  ID NVARCHAR(36) NOT NULL,
  createdAt TIMESTAMP,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP,
  modifiedBy NVARCHAR(255),
  retailerCode NVARCHAR(30),
  name NVARCHAR(120),
  contactName NVARCHAR(100),
  phone NVARCHAR(25),
  email NVARCHAR(120),
  city NVARCHAR(80),
  state NVARCHAR(80),
  channel NVARCHAR(30),
  status NVARCHAR(20) DEFAULT 'ACTIVE',
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/FMCGDATA.RetailPrices.hdbtable

```hdbtable
COLUMN TABLE FMCGDATA_RetailPrices (
  ID NVARCHAR(36) NOT NULL,
  createdAt TIMESTAMP,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP,
  modifiedBy NVARCHAR(255),
  product_ID NVARCHAR(36),
  mrp DECIMAL(12, 2),
  retailerPrice DECIMAL(12, 2),
  currency NVARCHAR(3) DEFAULT 'INR',
  validFrom DATE,
  validTo DATE,
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/FMCGDATA.SchemeProducts.hdbtable

```hdbtable
COLUMN TABLE FMCGDATA_SchemeProducts (
  ID NVARCHAR(36) NOT NULL,
  scheme_ID NVARCHAR(36),
  product_ID NVARCHAR(36),
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/FMCGDATA.Schemes.hdbtable

```hdbtable
COLUMN TABLE FMCGDATA_Schemes (
  ID NVARCHAR(36) NOT NULL,
  createdAt TIMESTAMP,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP,
  modifiedBy NVARCHAR(255),
  schemeCode NVARCHAR(30),
  name NVARCHAR(120),
  description NVARCHAR(500),
  discountType NVARCHAR(20),
  discountValue DECIMAL(12, 2),
  minQuantity INTEGER DEFAULT 1,
  validFrom DATE,
  validTo DATE,
  isActive BOOLEAN DEFAULT TRUE,
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/procurement.InventoryItems.hdbtable

```hdbtable
COLUMN TABLE procurement_InventoryItems (
  ID NVARCHAR(36) NOT NULL,
  createdAt TIMESTAMP,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP,
  modifiedBy NVARCHAR(255),
  materialId NVARCHAR(30),
  description NVARCHAR(200),
  quantityOnHand INTEGER DEFAULT 0,
  reorderPoint INTEGER DEFAULT 10,
  unit NVARCHAR(10) DEFAULT 'EA',
  warehouse NVARCHAR(50),
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/procurement.POLineItems.hdbtable

```hdbtable
COLUMN TABLE procurement_POLineItems (
  ID NVARCHAR(36) NOT NULL,
  purchaseOrder_ID NVARCHAR(36),
  material_ID NVARCHAR(36),
  quantity INTEGER,
  receivedQuantity INTEGER DEFAULT 0,
  unitPrice DECIMAL(15, 2),
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/procurement.PurchaseOrders.hdbtable

```hdbtable
COLUMN TABLE procurement_PurchaseOrders (
  ID NVARCHAR(36) NOT NULL,
  createdAt TIMESTAMP,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP,
  modifiedBy NVARCHAR(255),
  poNumber NVARCHAR(20),
  vendor_ID NVARCHAR(36),
  orderDate DATE,
  status NVARCHAR(20) DEFAULT 'CREATED',
  currency NVARCHAR(3) DEFAULT 'USD',
  totalAmount DECIMAL(15, 2),
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/procurement.PurchasingInfoRecords.hdbtable

```hdbtable
COLUMN TABLE procurement_PurchasingInfoRecords (
  ID NVARCHAR(36) NOT NULL,
  createdAt TIMESTAMP,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP,
  modifiedBy NVARCHAR(255),
  vendor_ID NVARCHAR(36),
  material_ID NVARCHAR(36),
  price DECIMAL(15, 2),
  currency NVARCHAR(3) DEFAULT 'USD',
  validFrom DATE,
  validTo DATE,
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/procurement.Quotations.hdbtable

```hdbtable
COLUMN TABLE procurement_Quotations (
  ID NVARCHAR(36) NOT NULL,
  createdAt TIMESTAMP,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP,
  modifiedBy NVARCHAR(255),
  quotationId NVARCHAR(30),
  vendor_ID NVARCHAR(36),
  material_ID NVARCHAR(36),
  quantity INTEGER,
  price DECIMAL(15, 2),
  currency NVARCHAR(3) DEFAULT 'USD',
  validUntil DATE,
  status NVARCHAR(20) DEFAULT 'OPEN',
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/procurement.SupplierInvoiceItems.hdbtable

```hdbtable
COLUMN TABLE procurement_SupplierInvoiceItems (
  ID NVARCHAR(36) NOT NULL,
  invoice_ID NVARCHAR(36),
  material_ID NVARCHAR(36),
  quantity INTEGER,
  unitPrice DECIMAL(15, 2),
  amount DECIMAL(15, 2),
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/procurement.SupplierInvoices.hdbtable

```hdbtable
COLUMN TABLE procurement_SupplierInvoices (
  ID NVARCHAR(36) NOT NULL,
  createdAt TIMESTAMP,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP,
  modifiedBy NVARCHAR(255),
  invoiceNumber NVARCHAR(30),
  purchaseOrder_ID NVARCHAR(36),
  vendor_ID NVARCHAR(36),
  invoiceDate DATE,
  postingDate DATE,
  currency NVARCHAR(3) DEFAULT 'USD',
  totalAmount DECIMAL(15, 2),
  status NVARCHAR(20) DEFAULT 'CREATED',
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/procurement.Vendors.hdbtable

```hdbtable
COLUMN TABLE procurement_Vendors (
  ID NVARCHAR(36) NOT NULL,
  createdAt TIMESTAMP,
  createdBy NVARCHAR(255),
  modifiedAt TIMESTAMP,
  modifiedBy NVARCHAR(255),
  name NVARCHAR(120),
  taxId NVARCHAR(30),
  country NVARCHAR(2),
  email NVARCHAR(120),
  status NVARCHAR(20) DEFAULT 'ACTIVE',
  PRIMARY KEY(ID)
)
```

# packages/cap-service/gen/db/src/gen/ProcurementService.InventoryItems.hdbview

```hdbview
VIEW ProcurementService_InventoryItems AS SELECT
  InventoryItems_0.ID,
  InventoryItems_0.materialId,
  InventoryItems_0.description,
  InventoryItems_0.quantityOnHand,
  InventoryItems_0.reorderPoint,
  InventoryItems_0.unit,
  InventoryItems_0.warehouse
FROM procurement_InventoryItems AS InventoryItems_0
```

# packages/cap-service/gen/db/src/gen/ProcurementService.POLineItems.hdbview

```hdbview
VIEW ProcurementService_POLineItems AS SELECT
  POLineItems_0.ID,
  POLineItems_0.purchaseOrder_ID,
  POLineItems_0.material_ID,
  POLineItems_0.quantity,
  POLineItems_0.receivedQuantity,
  POLineItems_0.unitPrice
FROM procurement_POLineItems AS POLineItems_0
```

# packages/cap-service/gen/db/src/gen/ProcurementService.PurchaseOrders.hdbview

```hdbview
VIEW ProcurementService_PurchaseOrders AS SELECT
  PurchaseOrders_0.ID,
  PurchaseOrders_0.poNumber,
  PurchaseOrders_0.vendor_ID,
  PurchaseOrders_0.orderDate,
  PurchaseOrders_0.status,
  PurchaseOrders_0.currency,
  PurchaseOrders_0.totalAmount
FROM procurement_PurchaseOrders AS PurchaseOrders_0
```

# packages/cap-service/gen/db/src/gen/ProcurementService.PurchasingInfoRecords.hdbview

```hdbview
VIEW ProcurementService_PurchasingInfoRecords AS SELECT
  PurchasingInfoRecords_0.ID,
  PurchasingInfoRecords_0.vendor_ID,
  PurchasingInfoRecords_0.material_ID,
  PurchasingInfoRecords_0.price,
  PurchasingInfoRecords_0.currency,
  PurchasingInfoRecords_0.validFrom,
  PurchasingInfoRecords_0.validTo
FROM procurement_PurchasingInfoRecords AS PurchasingInfoRecords_0
```

# packages/cap-service/gen/db/src/gen/ProcurementService.Quotations.hdbview

```hdbview
VIEW ProcurementService_Quotations AS SELECT
  Quotations_0.ID,
  Quotations_0.quotationId,
  Quotations_0.vendor_ID,
  Quotations_0.material_ID,
  Quotations_0.quantity,
  Quotations_0.price,
  Quotations_0.currency,
  Quotations_0.validUntil,
  Quotations_0.status
FROM procurement_Quotations AS Quotations_0
```

# packages/cap-service/gen/db/src/gen/ProcurementService.SupplierInvoiceItems.hdbview

```hdbview
VIEW ProcurementService_SupplierInvoiceItems AS SELECT
  SupplierInvoiceItems_0.ID,
  SupplierInvoiceItems_0.invoice_ID,
  SupplierInvoiceItems_0.material_ID,
  SupplierInvoiceItems_0.quantity,
  SupplierInvoiceItems_0.unitPrice,
  SupplierInvoiceItems_0.amount
FROM procurement_SupplierInvoiceItems AS SupplierInvoiceItems_0
```

# packages/cap-service/gen/db/src/gen/ProcurementService.SupplierInvoices.hdbview

```hdbview
VIEW ProcurementService_SupplierInvoices AS SELECT
  SupplierInvoices_0.ID,
  SupplierInvoices_0.invoiceNumber,
  SupplierInvoices_0.purchaseOrder_ID,
  SupplierInvoices_0.vendor_ID,
  SupplierInvoices_0.invoiceDate,
  SupplierInvoices_0.postingDate,
  SupplierInvoices_0.currency,
  SupplierInvoices_0.totalAmount,
  SupplierInvoices_0.status
FROM procurement_SupplierInvoices AS SupplierInvoices_0
```

# packages/cap-service/gen/db/src/gen/ProcurementService.Vendors.hdbview

```hdbview
VIEW ProcurementService_Vendors AS SELECT
  Vendors_0.ID,
  Vendors_0.name,
  Vendors_0.taxId,
  Vendors_0.country,
  Vendors_0.email,
  Vendors_0.status
FROM procurement_Vendors AS Vendors_0
```

# packages/cap-service/gen/db/src/gen/RetailService.FollowUps.hdbview

```hdbview
VIEW RetailService_FollowUps AS SELECT
  FollowUps_0.ID,
  FollowUps_0.interaction_ID,
  FollowUps_0.followUpDate,
  FollowUps_0.requirement,
  FollowUps_0.status,
  FollowUps_0.assignedTo
FROM FMCGDATA_FollowUps AS FollowUps_0
```

# packages/cap-service/gen/db/src/gen/RetailService.InteractionItems.hdbview

```hdbview
VIEW RetailService_InteractionItems AS SELECT
  InteractionItems_0.ID,
  InteractionItems_0.interaction_ID,
  InteractionItems_0.product_ID,
  InteractionItems_0.requestedQuantity,
  InteractionItems_0.unit,
  InteractionItems_0.interestStatus,
  InteractionItems_0.notes
FROM FMCGDATA_InteractionItems AS InteractionItems_0
```

# packages/cap-service/gen/db/src/gen/RetailService.InteractionMessages.hdbview

```hdbview
VIEW RetailService_InteractionMessages AS SELECT
  InteractionMessages_0.ID,
  InteractionMessages_0.interaction_ID,
  InteractionMessages_0.role,
  InteractionMessages_0.content,
  InteractionMessages_0.createdAt
FROM FMCGDATA_InteractionMessages AS InteractionMessages_0
```

# packages/cap-service/gen/db/src/gen/RetailService.Interactions.hdbview

```hdbview
VIEW RetailService_Interactions AS SELECT
  Interactions_0.ID,
  Interactions_0.interactionNumber,
  Interactions_0.retailer_ID,
  Interactions_0.channel,
  Interactions_0.status,
  Interactions_0.startedAt,
  Interactions_0.endedAt,
  Interactions_0.summary,
  Interactions_0.outcome,
  Interactions_0.followUpRequired
FROM FMCGDATA_Interactions AS Interactions_0
```

# packages/cap-service/gen/db/src/gen/RetailService.Products.hdbview

```hdbview
VIEW RetailService_Products AS SELECT
  Products_0.ID,
  Products_0.sku,
  Products_0.name,
  Products_0.brand,
  Products_0.category,
  Products_0.description,
  Products_0.packSize,
  Products_0.unit,
  Products_0.stockQuantity,
  Products_0.reorderLevel,
  Products_0.isActive
FROM FMCGDATA_Products AS Products_0
```

# packages/cap-service/gen/db/src/gen/RetailService.Retailers.hdbview

```hdbview
VIEW RetailService_Retailers AS SELECT
  Retailers_0.ID,
  Retailers_0.retailerCode,
  Retailers_0.name,
  Retailers_0.contactName,
  Retailers_0.phone,
  Retailers_0.email,
  Retailers_0.city,
  Retailers_0.state,
  Retailers_0.channel,
  Retailers_0.status
FROM FMCGDATA_Retailers AS Retailers_0
```

# packages/cap-service/gen/db/src/gen/RetailService.RetailPrices.hdbview

```hdbview
VIEW RetailService_RetailPrices AS SELECT
  RetailPrices_0.ID,
  RetailPrices_0.product_ID,
  RetailPrices_0.mrp,
  RetailPrices_0.retailerPrice,
  RetailPrices_0.currency,
  RetailPrices_0.validFrom,
  RetailPrices_0.validTo
FROM FMCGDATA_RetailPrices AS RetailPrices_0
```

# packages/cap-service/gen/db/src/gen/RetailService.SchemeProducts.hdbview

```hdbview
VIEW RetailService_SchemeProducts AS SELECT
  SchemeProducts_0.ID,
  SchemeProducts_0.scheme_ID,
  SchemeProducts_0.product_ID
FROM FMCGDATA_SchemeProducts AS SchemeProducts_0
```

# packages/cap-service/gen/db/src/gen/RetailService.Schemes.hdbview

```hdbview
VIEW RetailService_Schemes AS SELECT
  Schemes_0.ID,
  Schemes_0.schemeCode,
  Schemes_0.name,
  Schemes_0.description,
  Schemes_0.discountType,
  Schemes_0.discountValue,
  Schemes_0.minQuantity,
  Schemes_0.validFrom,
  Schemes_0.validTo,
  Schemes_0.isActive
FROM FMCGDATA_Schemes AS Schemes_0
```

# packages/cap-service/gen/db/undeploy.json

```json
[
  "src/gen/**/*.hdbview",
  "src/gen/**/*.hdbindex",
  "src/gen/**/*.hdbconstraint",
  "src/gen/**/*_drafts.hdbtable",
  "src/gen/**/*.hdbcalculationview"
]
```

# packages/cap-service/gen/srv/package.json

```json
{
  "name": "cap-service",
  "version": "1.0.0",
  "private": true,
  "description": "Procurement CAP service - Vendors, PurchaseOrders, Inventory",
  "engines": {
    "node": "^24"
  },
  "dependencies": {
    "@sap/cds": "^10",
    "@sap/xssec": "^4",
    "express": "^4"
  },
  "devDependencies": {
    "@cap-js/sqlite": "^2"
  },
  "scripts": {
    "watch": "cds watch",
    "build": "cds build --production",
    "deploy": "cf push"
  },
  "cds": {
    "requires": {
      "db": {
        "kind": "sqlite",
        "credentials": {
          "url": "db.sqlite"
        }
      },
      "[production]": {
        "db": {
          "kind": "hana"
        },
        "auth": {
          "kind": "xsuaa"
        }
      },
      "[development]": {
        "auth": {
          "kind": "mocked"
        }
      }
    }
  }
}
```

# packages/cap-service/gen/srv/srv/_i18n/i18n.json

```json
{
  "": {
    "CreatedBy": "Created By",
    "CreatedAt": "Created On",
    "ChangedBy": "Changed By",
    "ChangedAt": "Changed On",
    "Currency": "Currency",
    "CurrencyCode": "Currency Code",
    "CurrencyCode.Description": "Currency code as specified by ISO 4217",
    "CurrencySymbol": "Currency Symbol",
    "CurrencyMinorUnit": "Currency Minor Unit Fractions",
    "Country": "Country/Region",
    "CountryCode": "Country/Region Code",
    "CountryCode.Description": "Country/region code as specified by ISO 3166-1",
    "Language": "Language",
    "LanguageCode": "Language Code",
    "LanguageCode.Description": "Language code as specified by ISO 639-1",
    "TimeZoneCode": "Time Zone Code",
    "UserID": "User ID",
    "Name": "Name",
    "Description": "Description",
    "UserID.Description": "User's unique ID",
    "Draft_DraftAdministrativeData": "Draft Administrative Data",
    "Draft_DraftUUID": "Draft (Technical ID)",
    "Draft_CreationDateTime": "Draft Created On",
    "Draft_CreatedByUser": "Draft Created By",
    "Draft_DraftIsCreatedByMe": "Draft Created By Me",
    "Draft_LastChangeDateTime": "Draft Last Changed On",
    "Draft_LastChangedByUser": "Draft Last Changed By",
    "Draft_InProcessByUser": "Draft In Process By",
    "Draft_DraftIsProcessedByMe": "Draft In Process By Me"
  },
  "ar": {
    "CreatedBy": "تم الإنشاء بواسطة",
    "CreatedAt": "تاريخ الإنشاء",
    "ChangedBy": "تم التغيير بواسطة",
    "ChangedAt": "تاريخ التغيير",
    "Currency": "العملة",
    "CurrencyCode": "رمز العملة",
    "CurrencyCode.Description": "رمز العملة المحدد حسب ISO 4217",
    "CurrencySymbol": "رمز العملة",
    "CurrencyMinorUnit": "كسور وحدات ثانوية للعملة",
    "Country": "الدولة/المنطقة",
    "CountryCode": "رمز الدولة/المنطقة",
    "CountryCode.Description": "رمز الدولة/المنطقة المحدد حسب ISO 4217",
    "Language": "اللغة",
    "LanguageCode": "رمز اللغة",
    "LanguageCode.Description": "رمز الدولة المحدد حسب ISO 639-1",
    "TimeZoneCode": "رمز المنطقة الزمنية",
    "UserID": "معرف المستخدم",
    "Name": "الاسم",
    "Description": "الوصف",
    "UserID.Description": "معرف المستخدم الفريد",
    "Draft_DraftAdministrativeData": "البيانات الإدارية للمسودة",
    "Draft_DraftUUID": "مسودة (المعرف التقني)",
    "Draft_CreationDateTime": "تاريخ إنشاء المسودة",
    "Draft_CreatedByUser": "منشئ المسودة",
    "Draft_DraftIsCreatedByMe": "تم إنشاء المسودة بواسطتي",
    "Draft_LastChangeDateTime": "تاريخ آخر تغيير للمسودة",
    "Draft_LastChangedByUser": "آخر تغيير للمسودة بواسطة",
    "Draft_InProcessByUser": "المسودة قيد المعالجة بواسطة",
    "Draft_DraftIsProcessedByMe": "المسودة قيد المعالجة بواسطتي"
  },
  "bg": {
    "CreatedBy": "Създадено от",
    "CreatedAt": "Създадено на",
    "ChangedBy": "Променил",
    "ChangedAt": "Дата на промяна",
    "Currency": "Валута",
    "CurrencyCode": "Код на валута",
    "CurrencyCode.Description": "Код на валута съгласно ISO 4217",
    "CurrencySymbol": "Символ на валута",
    "CurrencyMinorUnit": "Валута – Части от спомагателна единица",
    "Country": "Държава/регион",
    "CountryCode": "Код на държава/регион",
    "CountryCode.Description": "Код на държава/регион съгласно ISO 3166-1",
    "Language": "Език",
    "LanguageCode": "Езиков код",
    "LanguageCode.Description": "Езиков код съгласно ISO 639-1",
    "TimeZoneCode": "Код на часови пояс",
    "UserID": "ИД на потребител",
    "Name": "Име",
    "Description": "Описание",
    "UserID.Description": "Еднозначен ИД на потребител",
    "Draft_DraftAdministrativeData": "Чернова на административни данни",
    "Draft_DraftUUID": "Чернова (Технически ИД)",
    "Draft_CreationDateTime": "Дата на създаване на чернова",
    "Draft_CreatedByUser": "Създател на чернова",
    "Draft_DraftIsCreatedByMe": "Чернова, създадена от мен",
    "Draft_LastChangeDateTime": "Дата на последна промяна на чернова",
    "Draft_LastChangedByUser": "Автор на последна промяна на чернова",
    "Draft_InProcessByUser": "Черновата се обработва от",
    "Draft_DraftIsProcessedByMe": "Черновата се обработва от мен"
  },
  "cs": {
    "CreatedBy": "Vytvořil",
    "CreatedAt": "Vytvořeno",
    "ChangedBy": "Změnil",
    "ChangedAt": "Změněno",
    "Currency": "Měna",
    "CurrencyCode": "Kód měny",
    "CurrencyCode.Description": "Kód měny zadaný dle ISO 4217",
    "CurrencySymbol": "Symbol měny",
    "CurrencyMinorUnit": "Zlomky pomocné jednotky měny",
    "Country": "Stát/region",
    "CountryCode": "Kód státu/regionu",
    "CountryCode.Description": "Kód státu/regionu zadaný dle ISO 3166-1",
    "Language": "Jazyk",
    "LanguageCode": "Kód jazyka",
    "LanguageCode.Description": "Kód jazyka zadaný dle ISO 639-1",
    "TimeZoneCode": "Kód časového pásma",
    "UserID": "ID uživatele",
    "Name": "Jméno",
    "Description": "Popis",
    "UserID.Description": "Jedinečné ID uživatele",
    "Draft_DraftAdministrativeData": "Správní data návrhu",
    "Draft_DraftUUID": "Návrh (technické ID)",
    "Draft_CreationDateTime": "Návrh vytvořen",
    "Draft_CreatedByUser": "Návrh vytvořil",
    "Draft_DraftIsCreatedByMe": "Návrh vytvořen mnou",
    "Draft_LastChangeDateTime": "Návrh naposledy změněn",
    "Draft_LastChangedByUser": "Návrh naposledy změnil",
    "Draft_InProcessByUser": "Návrh zpracovává",
    "Draft_DraftIsProcessedByMe": "Návrh zpracovávaný mnou"
  },
  "da": {
    "CreatedBy": "Oprettet af",
    "CreatedAt": "Oprettet den",
    "ChangedBy": "Ændret af",
    "ChangedAt": "Ændret den",
    "Currency": "Valuta",
    "CurrencyCode": "Valutakode",
    "CurrencyCode.Description": "Valutakode som angivet af ISO 4217",
    "CurrencySymbol": "Valutasymbol",
    "CurrencyMinorUnit": "Valutahjælpeenhedsandele",
    "Country": "Land/region",
    "CountryCode": "Lande-/regionskode",
    "CountryCode.Description": "Lande-/regionskode som angivet af ISO 3166-1",
    "Language": "Sprog",
    "LanguageCode": "Sprogkode",
    "LanguageCode.Description": "Sprogkode som angivet af ISO 639-1",
    "TimeZoneCode": "Tidszonekode",
    "UserID": "Bruger-ID",
    "Name": "Navn",
    "Description": "Beskrivelse",
    "UserID.Description": "Brugers entydige ID",
    "Draft_DraftAdministrativeData": "Udkast administrationsdata",
    "Draft_DraftUUID": "Udkast (teknisk ID)",
    "Draft_CreationDateTime": "Udkast oprettet den",
    "Draft_CreatedByUser": "Udkast oprettet af",
    "Draft_DraftIsCreatedByMe": "Udkast oprettet af mig",
    "Draft_LastChangeDateTime": "Udkast senest ændret den",
    "Draft_LastChangedByUser": "Udkast senest ændret af",
    "Draft_InProcessByUser": "Udkast behandles af",
    "Draft_DraftIsProcessedByMe": "Udkast behandles af mig"
  },
  "de": {
    "CreatedBy": "Angelegt von",
    "CreatedAt": "Angelegt am",
    "ChangedBy": "Geändert von",
    "ChangedAt": "Geändert am",
    "Currency": "Währung",
    "CurrencyCode": "Währungscode",
    "CurrencyCode.Description": "Währungscode gemäß ISO 4217",
    "CurrencySymbol": "Währungssymbol",
    "CurrencyMinorUnit": "Bruchteile Währungsuntereinheit",
    "Country": "Land/Region",
    "CountryCode": "Länder-/Regionscode",
    "CountryCode.Description": "Länder-/Regionscode gemäß ISO 3166-1",
    "Language": "Sprache",
    "LanguageCode": "Sprachencode",
    "LanguageCode.Description": "Sprachencode gemäß ISO 639-1",
    "TimeZoneCode": "Zeitzonencode",
    "UserID": "Benutzer-ID",
    "Name": "Name",
    "Description": "Beschreibung",
    "UserID.Description": "Die eindeutige ID eines Benutzers",
    "Draft_DraftAdministrativeData": "Verwaltungsdaten des Entwurfs",
    "Draft_DraftUUID": "Entwurf (technische ID)",
    "Draft_CreationDateTime": "Entwurf angelegt am",
    "Draft_CreatedByUser": "Entwurf angelegt von",
    "Draft_DraftIsCreatedByMe": "Entwurf angelegt von mir",
    "Draft_LastChangeDateTime": "Entwurf zuletzt geändert am",
    "Draft_LastChangedByUser": "Entwurf zuletzt geändert von",
    "Draft_InProcessByUser": "Entwurf in Bearbeitung durch",
    "Draft_DraftIsProcessedByMe": "Entwurf in Bearbeitung durch mich"
  },
  "el": {
    "CreatedBy": "Δημιουργήθηκε Από",
    "CreatedAt": "Δημιουργήθηκε Στις",
    "ChangedBy": "Άλλαξε Από",
    "ChangedAt": "Αλλαξε Στις",
    "Currency": "Νόμισμα",
    "CurrencyCode": "Κωδικός Νομίσματος",
    "CurrencyCode.Description": "Κωδικός νομίσματος όπως καθορίζεται από ISO 4217",
    "CurrencySymbol": "Σύμβολο Νομίσματος",
    "CurrencyMinorUnit": "Κλάσματα Μικρής Μονάδας Νομίσματος",
    "Country": "Χώρα/Περιοχή",
    "CountryCode": "Κωδικός Χώρας/Περιοχής",
    "CountryCode.Description": "Κωδικός χώρας/περιοχής όπως ορίζεται από ISO 3166-1",
    "Language": "Γλώσσα",
    "LanguageCode": "Κωδικός Γλώσσας",
    "LanguageCode.Description": "Κωδικός χώρας όπως ορίζεται από ISO 639-1",
    "TimeZoneCode": "Κωδικός Ζώνης Ώρας",
    "UserID": "ΙD χρήστη",
    "Name": "Όνομα",
    "Description": "Περιγραφή",
    "UserID.Description": "Μοναδικό ID χρήστη",
    "Draft_DraftAdministrativeData": "Πρόχειρα Διαχειριστικά Δεδομένα",
    "Draft_DraftUUID": "Πρόχειρο (Τεχνικό ID)",
    "Draft_CreationDateTime": "Ημ/νία Δημιουργίας Πρόχειρου",
    "Draft_CreatedByUser": "Πρόχειρο Δημιουργήθηκε Από",
    "Draft_DraftIsCreatedByMe": "Πρόχειρο Δημιουργήθηκε Από Εμένα",
    "Draft_LastChangeDateTime": "Ημ/νία Τελευταίας Αλλαγής Πρόχειρου",
    "Draft_LastChangedByUser": "Τελευταία Αλλαγή Πρόχειρου Από",
    "Draft_InProcessByUser": "Πρόχειρο Σε Επεξεργασία Από",
    "Draft_DraftIsProcessedByMe": "Πρόχειρο Σε Επεξεργασία Από Εμένα"
  },
  "en": {
    "CreatedBy": "Created By",
    "CreatedAt": "Created On",
    "ChangedBy": "Changed By",
    "ChangedAt": "Changed On",
    "Currency": "Currency",
    "CurrencyCode": "Currency Code",
    "CurrencyCode.Description": "Currency code as specified by ISO 4217",
    "CurrencySymbol": "Currency Symbol",
    "CurrencyMinorUnit": "Currency Minor Unit Fractions",
    "Country": "Country/Region",
    "CountryCode": "Country/Region Code",
    "CountryCode.Description": "Country/region code as specified by ISO 3166-1",
    "Language": "Language",
    "LanguageCode": "Language Code",
    "LanguageCode.Description": "Language code as specified by ISO 639-1",
    "TimeZoneCode": "Time Zone Code",
    "UserID": "User ID",
    "Name": "Name",
    "Description": "Description",
    "UserID.Description": "User's unique ID",
    "Draft_DraftAdministrativeData": "Draft Administrative Data",
    "Draft_DraftUUID": "Draft (Technical ID)",
    "Draft_CreationDateTime": "Draft Created On",
    "Draft_CreatedByUser": "Draft Created By",
    "Draft_DraftIsCreatedByMe": "Draft Created By Me",
    "Draft_LastChangeDateTime": "Draft Last Changed On",
    "Draft_LastChangedByUser": "Draft Last Changed By",
    "Draft_InProcessByUser": "Draft In Process By",
    "Draft_DraftIsProcessedByMe": "Draft In Process By Me"
  },
  "en_US_saptrc": {
    "CreatedBy": "Vg1HzrBypRYWNh1gSd/gZg_Created By",
    "CreatedAt": "TdVCaJbLYaksvO9ilZ9EMw_Created On",
    "ChangedBy": "SlNw9yAapCyH7mCx6KMsBg_Changed By",
    "ChangedAt": "wxoWPp0oQgzSB/LThxyOtQ_Changed On",
    "Currency": "XaZR/2qs4Fe3lzneW28iXA_Currency",
    "CurrencyCode": "M26TN6XcefOaXypLKaSUHA_Currency Code",
    "CurrencyCode.Description": "lKqtyn273nJTw30zQooRzA_Currency code as specified by ISO 4217",
    "CurrencySymbol": "c8WKtWBk/s5qumRpQPJ9yg_Currency Symbol",
    "CurrencyMinorUnit": "OnTQT58ildR0WfxSEQ5ELw_Currency Minor Unit Fractions",
    "Country": "cvof0hyaQaIeZr0kyHeEaA_Country/Region",
    "CountryCode": "jQvAaJpGXfLN9Wlge/Gxrw_Country/Region Code",
    "CountryCode.Description": "GJ5TpjbCxNl4pH2bc9ABhA_Country/region code as specified by ISO 3166-1",
    "Language": "Xobwu9IzZyWNNvUnJKtApQ_Language",
    "LanguageCode": "02wYImIG6WMIj95Rt/aywA_Language Code",
    "LanguageCode.Description": "zifghMW/wdMiOrG5E0RQOQ_Language code as specified by ISO 639-1",
    "TimeZoneCode": "onlkoHzIy1ssvbUyuh1YvQ_Time Zone Code",
    "UserID": "/OlWbNXj8Tw5H68P3+5oSg_User ID",
    "Name": "z7x7qsIlJDwwrmKvO7+Zhw_Name",
    "Description": "N0xp38X+3sgSs6ICBiZBZg_Description",
    "UserID.Description": "B8B7n8ZZg7zaaMyXiT8oAg_User's unique ID",
    "Draft_DraftAdministrativeData": "BQixJwfGqkcX8t7mWaKiNg_Draft Administrative Data",
    "Draft_DraftUUID": "drZWx3GS6hwwngtYCE4OgA_Draft (Technical ID)",
    "Draft_CreationDateTime": "Jr0VHfL73Av2o3bLVVbvHQ_Draft Created On",
    "Draft_CreatedByUser": "YfjmFzjFedIaGrah0hWofg_Draft Created By",
    "Draft_DraftIsCreatedByMe": "sIrWDvYNXlmJ7iefa1eIgQ_Draft Created By Me",
    "Draft_LastChangeDateTime": "A49kXnowrYyACnw5IqOZ8w_Draft Last Changed On",
    "Draft_LastChangedByUser": "PLgtmAAClPb1xEq4MS1owg_Draft Last Changed By",
    "Draft_InProcessByUser": "l/EJnTW0CWZMKnfsXtDyYQ_Draft In Process By",
    "Draft_DraftIsProcessedByMe": "T9AdfzCDGThS3eUxVOS3xw_Draft In Process By Me"
  },
  "es": {
    "CreatedBy": "Autor",
    "CreatedAt": "Fecha de creación",
    "ChangedBy": "Autor de modificación",
    "ChangedAt": "Fecha de modificación",
    "Currency": "Moneda",
    "CurrencyCode": "Código de moneda",
    "CurrencyCode.Description": "Código de moneda según especificado por ISO 4217",
    "CurrencySymbol": "Símbolo de moneda",
    "CurrencyMinorUnit": "Fracciones unidad secundaria de moneda",
    "Country": "País/Región",
    "CountryCode": "Código de país/región",
    "CountryCode.Description": "Código de país/región según especificado por ISO 3166-1",
    "Language": "Idioma",
    "LanguageCode": "Código de idioma",
    "LanguageCode.Description": "Código de idioma según especificado por ISO 639-1",
    "TimeZoneCode": "Código de zona horaria",
    "UserID": "ID de usuario",
    "Name": "Nombre",
    "Description": "Descripción",
    "UserID.Description": "ID único de usuario",
    "Draft_DraftAdministrativeData": "Datos administrativos en borrador",
    "Draft_DraftUUID": "Borrador (ID técnico)",
    "Draft_CreationDateTime": "Borrador creado el",
    "Draft_CreatedByUser": "Borrador creado por",
    "Draft_DraftIsCreatedByMe": "Borrador creado por mí",
    "Draft_LastChangeDateTime": "Fecha del último cambio en borrador",
    "Draft_LastChangedByUser": "Autor del último cambio en borrador",
    "Draft_InProcessByUser": "Borrador en proceso por",
    "Draft_DraftIsProcessedByMe": "Borrador en proceso por mí"
  },
  "es_MX": {
    "CreatedBy": "Autor",
    "CreatedAt": "Fecha de creación",
    "ChangedBy": "Autor de modificación",
    "ChangedAt": "Fecha de modificación",
    "Currency": "Moneda",
    "CurrencyCode": "Código de moneda",
    "CurrencyCode.Description": "Código de moneda según especificado por ISO 4217",
    "CurrencySymbol": "Símbolo de moneda",
    "CurrencyMinorUnit": "Fracciones unidad secundaria de moneda",
    "Country": "País/Región",
    "CountryCode": "Código de país/región",
    "CountryCode.Description": "Código de país/región según especificado por ISO 3166-1",
    "Language": "Idioma",
    "LanguageCode": "Código de idioma",
    "LanguageCode.Description": "Código de idioma según especificado por ISO 639-1",
    "TimeZoneCode": "Código de zona horaria",
    "UserID": "ID de usuario",
    "Name": "Nombre",
    "Description": "Descripción",
    "UserID.Description": "ID único de usuario",
    "Draft_DraftAdministrativeData": "Datos administrativos en borrador",
    "Draft_DraftUUID": "Borrador (ID técnico)",
    "Draft_CreationDateTime": "Borrador creado el",
    "Draft_CreatedByUser": "Borrador creado por",
    "Draft_DraftIsCreatedByMe": "Borrador creado por mí",
    "Draft_LastChangeDateTime": "Fecha del último cambio en borrador",
    "Draft_LastChangedByUser": "Autor del último cambio en borrador",
    "Draft_InProcessByUser": "Borrador en proceso por",
    "Draft_DraftIsProcessedByMe": "Borrador en proceso por mí"
  },
  "fi": {
    "CreatedBy": "Tekijä",
    "CreatedAt": "Luontipäivämäärä",
    "ChangedBy": "Muuttaja",
    "ChangedAt": "Muutospäivämäärä",
    "Currency": "Valuutta",
    "CurrencyCode": "Valuuttakoodi",
    "CurrencyCode.Description": "ISO 4217:n mukainen valuuttakoodi",
    "CurrencySymbol": "Valuuttatunnus",
    "CurrencyMinorUnit": "Valuutan pienen yksikön murto-osat",
    "Country": "Maa/alue",
    "CountryCode": "Maa-/aluekoodi",
    "CountryCode.Description": "ISO 3166-1:n mukainen maa-/aluekoodi",
    "Language": "Kieli",
    "LanguageCode": "Kielikoodi",
    "LanguageCode.Description": "ISO 639-1:n mukainen kielikoodi",
    "TimeZoneCode": "Aikavyöhykekoodi",
    "UserID": "Käyttäjätunnus",
    "Name": "Nimi",
    "Description": "Kuvaus",
    "UserID.Description": "Käyttäjän yksiselitteinen tunnus",
    "Draft_DraftAdministrativeData": "Luonnoksen hallintatiedot",
    "Draft_DraftUUID": "Luonnos (tekninen tunnus)",
    "Draft_CreationDateTime": "Luonnos luotu",
    "Draft_CreatedByUser": "Luonnoksen tekijä",
    "Draft_DraftIsCreatedByMe": "Luonnos minun tekemäni",
    "Draft_LastChangeDateTime": "Luonnosta muutettu viimeksi",
    "Draft_LastChangedByUser": "Luonnoksen viimeisin muuttaja",
    "Draft_InProcessByUser": "Luonnos käsiteltävänä -",
    "Draft_DraftIsProcessedByMe": "Luonnos minun käsiteltävänäni"
  },
  "fr": {
    "CreatedBy": "Auteur de la création",
    "CreatedAt": "Date/Heure de création",
    "ChangedBy": "Auteur de la modification",
    "ChangedAt": "Date/Heure de modification",
    "Currency": "Devise",
    "CurrencyCode": "Code de devise",
    "CurrencyCode.Description": "Code de devise tel qu'indiqué par ISO 4217",
    "CurrencySymbol": "Symbole de devise",
    "CurrencyMinorUnit": "Fractions de l'unité secondaire de la devise",
    "Country": "Pays/Région",
    "CountryCode": "Code pays/région",
    "CountryCode.Description": "Code pays/région tel qu'indiqué par ISO 3166-1",
    "Language": "Langue",
    "LanguageCode": "Code langue",
    "LanguageCode.Description": "Code langue tel qu'indiqué par ISO 639-1",
    "TimeZoneCode": "Code du fuseau horaire",
    "UserID": "ID utilisateur",
    "Name": "Nom",
    "Description": "Description",
    "UserID.Description": "ID unique de l'utilisateur",
    "Draft_DraftAdministrativeData": "Données administratives préliminaires",
    "Draft_DraftUUID": "Version préliminaire (ID technique)",
    "Draft_CreationDateTime": "Version préliminaire créée le",
    "Draft_CreatedByUser": "Version préliminaire créée par",
    "Draft_DraftIsCreatedByMe": "Version préliminaire créée par moi",
    "Draft_LastChangeDateTime": "Dernière modification de la version préliminaire le",
    "Draft_LastChangedByUser": "Dernière modification de la version préliminaire par",
    "Draft_InProcessByUser": "Version préliminaire en cours de traitement par",
    "Draft_DraftIsProcessedByMe": "Version préliminaire en cours de traitement par moi"
  },
  "he": {
    "CreatedBy": "נוצר על-ידי",
    "CreatedAt": "נוצר בתאריך",
    "ChangedBy": "שונה על-ידי",
    "ChangedAt": "שונה בתאריך",
    "Currency": "מטבע",
    "CurrencyCode": "קוד מטבע",
    "CurrencyCode.Description": "קוד מטבע כפי שצוין על-ידי ISO 4217",
    "CurrencySymbol": "סמל מטבע",
    "CurrencyMinorUnit": "חלקי יחידה משנית של מטבע",
    "Country": "מדינה/אזור",
    "CountryCode": "קוד מדינה/אזור",
    "CountryCode.Description": "מדינה/אזור כפי שצוין על-ידי ISO 3166-1",
    "Language": "שפה",
    "LanguageCode": "קוד שפה",
    "LanguageCode.Description": "קוד שפה כפי שצוין על-ידי ISO 639-1",
    "TimeZoneCode": "קוד אזור זמן",
    "UserID": "זיהוי משתמש",
    "Name": "שם",
    "Description": "תיאור",
    "UserID.Description": "זיהוי ייחודי של משתמש",
    "Draft_DraftAdministrativeData": "נתוני מנהליים של טיוטה",
    "Draft_DraftUUID": "טיוטה (זיהוי טכני)",
    "Draft_CreationDateTime": "טיוטה נוצרה בתאריך",
    "Draft_CreatedByUser": "טיוטה נוצרה על-ידי",
    "Draft_DraftIsCreatedByMe": "טיוטה נוצרי על-ידי",
    "Draft_LastChangeDateTime": "טיוטה שונתה לאחרונה בתאריך",
    "Draft_LastChangedByUser": "טיוטה שונתה לאחרונה על-ידי",
    "Draft_InProcessByUser": "טיוטה בתהליך על-ידי",
    "Draft_DraftIsProcessedByMe": "טיוטה בתהליך על-ידי"
  },
  "hr": {
    "CreatedBy": "Stvorio",
    "CreatedAt": "Stvoreno",
    "ChangedBy": "Promijenio",
    "ChangedAt": "Promijenjeno",
    "Currency": "Valuta",
    "CurrencyCode": "Šifra valute",
    "CurrencyCode.Description": "Šifra valute kako navodi ISO 4217",
    "CurrencySymbol": "Simbol valute",
    "CurrencyMinorUnit": "Manji dijelovi valute",
    "Country": "Država/regija",
    "CountryCode": "Šifra države/regije",
    "CountryCode.Description": "Šifra države/regije kako navodi ISO 3166-1",
    "Language": "Jezik",
    "LanguageCode": "Šifra jezika",
    "LanguageCode.Description": "Šifra jezika kako navodi ISO 639-1",
    "TimeZoneCode": "Šifra vremenske zone",
    "UserID": "ID korisnika",
    "Name": "Ime",
    "Description": "Opis",
    "UserID.Description": "Jedinstveni ID korisnika",
    "Draft_DraftAdministrativeData": "Nacrt administrativnih podataka",
    "Draft_DraftUUID": "Nacrt (tehnički ID)",
    "Draft_CreationDateTime": "Nacrt stvoren",
    "Draft_CreatedByUser": "Nacrt stvorio",
    "Draft_DraftIsCreatedByMe": "Ja sam stvorio nacrt",
    "Draft_LastChangeDateTime": "Nacrt zadnji put promijenjen",
    "Draft_LastChangedByUser": "Nacrt zadnji promijenio",
    "Draft_InProcessByUser": "Nacrt obrađuje",
    "Draft_DraftIsProcessedByMe": "Ja obrađujem nacrt"
  },
  "hu": {
    "CreatedBy": "Létrehozó:",
    "CreatedAt": "Létrehozás dátuma",
    "ChangedBy": "Módosító",
    "ChangedAt": "Módosítás dátuma",
    "Currency": "Pénznem",
    "CurrencyCode": "Pénznem kódja",
    "CurrencyCode.Description": "Pénznem kódja ISO 4217 szerint",
    "CurrencySymbol": "Pénznem szimbóluma",
    "CurrencyMinorUnit": "Pénznem segédegység-hányadok",
    "Country": "Ország/régió",
    "CountryCode": "Ország/régió kódja",
    "CountryCode.Description": "Ország/régió kódja ISO 3166-1 szerint",
    "Language": "Nyelv",
    "LanguageCode": "Nyelvkód",
    "LanguageCode.Description": "Pénznem kódja ISO 639-1 szerint",
    "TimeZoneCode": "Időzóna kódja",
    "UserID": "Felhasználóazonosító",
    "Name": "Név",
    "Description": "Leírás",
    "UserID.Description": "Felhasználó egyedi azonosítója",
    "Draft_DraftAdministrativeData": "Adminisztrációs adatok - tervezet",
    "Draft_DraftUUID": "Tervezet (műszaki azonosító)",
    "Draft_CreationDateTime": "Tervezet létrehozásának dátuma",
    "Draft_CreatedByUser": "Tervezet létrehozója",
    "Draft_DraftIsCreatedByMe": "Általam létrehozott tervezet",
    "Draft_LastChangeDateTime": "Tervezet utolsó módosításának dátuma",
    "Draft_LastChangedByUser": "Tervezet utolsó módosítója",
    "Draft_InProcessByUser": "Tervezet feldolgozás alatt, feldolgozó neve",
    "Draft_DraftIsProcessedByMe": "Tervezet feldolgozás alatt általam"
  },
  "it": {
    "CreatedBy": "Autore creazione",
    "CreatedAt": "Data di creazione",
    "ChangedBy": "Autore modifica",
    "ChangedAt": "Data di modifica",
    "Currency": "Divisa",
    "CurrencyCode": "Codice divisa",
    "CurrencyCode.Description": "Codice divisa come indicato da ISO 4217",
    "CurrencySymbol": "Simbolo divisa",
    "CurrencyMinorUnit": "Frazioni suddivisione unità monetaria",
    "Country": "Paese/regione",
    "CountryCode": "Codice paese/regione",
    "CountryCode.Description": "Codice paese/regione come indicato nell'ISO 3166-1",
    "Language": "Lingua",
    "LanguageCode": "Codice lingua",
    "LanguageCode.Description": "Codice lingua come indicato da ISO 639-1",
    "TimeZoneCode": "Codice fuso orario",
    "UserID": "ID utente",
    "Name": "Nome",
    "Description": "Descrizione",
    "UserID.Description": "ID univoco utente",
    "Draft_DraftAdministrativeData": "Dati amministrativi bozza",
    "Draft_DraftUUID": "Bozza (ID tecnico)",
    "Draft_CreationDateTime": "Data di creazione bozza",
    "Draft_CreatedByUser": "Autore creazione bozza",
    "Draft_DraftIsCreatedByMe": "Bozza creata da me",
    "Draft_LastChangeDateTime": "Ultima modifica bozza",
    "Draft_LastChangedByUser": "Autore dell'ultima modifica bozza",
    "Draft_InProcessByUser": "Bozza attualmente elaborata da",
    "Draft_DraftIsProcessedByMe": "Bozza attualmente elaborata da me"
  },
  "ja": {
    "CreatedBy": "登録者",
    "CreatedAt": "作成時間",
    "ChangedBy": "変更者",
    "ChangedAt": "変更日付",
    "Currency": "通貨",
    "CurrencyCode": "通貨コード",
    "CurrencyCode.Description": "ISO 4217 で指定されている通貨コード",
    "CurrencySymbol": "通貨シンボル",
    "CurrencyMinorUnit": "通貨補助単位の分数",
    "Country": "国/地域",
    "CountryCode": "国/地域コード",
    "CountryCode.Description": "ISO 3166-1 で指定されている国/地域コード",
    "Language": "言語",
    "LanguageCode": "言語コード",
    "LanguageCode.Description": "ISO 639-1 で指定されている言語コード",
    "TimeZoneCode": "タイムゾーンコード",
    "UserID": "ユーザ ID",
    "Name": "名前",
    "Description": "説明",
    "UserID.Description": "ユーザの一意の ID",
    "Draft_DraftAdministrativeData": "ドラフト管理データ",
    "Draft_DraftUUID": "ドラフト (技術 ID)",
    "Draft_CreationDateTime": "ドラフト作成日付",
    "Draft_CreatedByUser": "ドラフト作成者",
    "Draft_DraftIsCreatedByMe": "自分が作成したドラフト",
    "Draft_LastChangeDateTime": "ドラフト最終変更日付",
    "Draft_LastChangedByUser": "ドラフト最終変更者",
    "Draft_InProcessByUser": "処理中ドラフトの処理者",
    "Draft_DraftIsProcessedByMe": "自分が処理しているドラフト"
  },
  "kk": {
    "CreatedBy": "Жасаған",
    "CreatedAt": "Жасалған күні",
    "ChangedBy": "Өзгерткен",
    "ChangedAt": "Өзгертілген күні",
    "Currency": "Валюта",
    "CurrencyCode": "Валюта коды",
    "CurrencyCode.Description": "ISO 4217 стандарты бойынша валюта коды",
    "CurrencySymbol": "Валюта белгісі",
    "CurrencyMinorUnit": "Валютаның шағын бірлік бөліктері",
    "Country": "Ел/аймақ",
    "CountryCode": "Ел/аймақ коды",
    "CountryCode.Description": "ISO 3166-1 бойынша ел/аймақ коды",
    "Language": "Тіл",
    "LanguageCode": "Тіл коды",
    "LanguageCode.Description": "ISO 639-1 стандарты бойынша тіл коды",
    "TimeZoneCode": "Уақыт белдеуінің коды",
    "UserID": "Пайдаланушы ид.",
    "Name": "Аты",
    "Description": "Сипаттама",
    "UserID.Description": "Пайдаланушының бірегей ид.",
    "Draft_DraftAdministrativeData": "Нобайдың әкімшілік дерегі",
    "Draft_DraftUUID": "Нобай (техникалық ид.)",
    "Draft_CreationDateTime": "Нобай жасалған күні",
    "Draft_CreatedByUser": "Нобайды жасаған",
    "Draft_DraftIsCreatedByMe": "Мен жасаған нобай",
    "Draft_LastChangeDateTime": "Нобайдың соңғы өзгертілген күні",
    "Draft_LastChangedByUser": "Нобайды соңғы өзгерткен",
    "Draft_InProcessByUser": "Нобайды орындаушы",
    "Draft_DraftIsProcessedByMe": "Мен орындап жатқан нобай"
  },
  "ko": {
    "CreatedBy": "생성자",
    "CreatedAt": "생성일",
    "ChangedBy": "변경자",
    "ChangedAt": "변경일",
    "Currency": "통화",
    "CurrencyCode": "통화 코드",
    "CurrencyCode.Description": "ISO 4217에서 지정한 통화 코드",
    "CurrencySymbol": "통화 기호",
    "CurrencyMinorUnit": "통화 보조 단위 소수 자리",
    "Country": "국가/지역",
    "CountryCode": "국가/지역 코드",
    "CountryCode.Description": "ISO 3166-1에서 지정한 국가/지역 코드",
    "Language": "언어",
    "LanguageCode": "언어 코드",
    "LanguageCode.Description": "ISO 639-1에서 지정한 언어 코드",
    "TimeZoneCode": "시간대 코드",
    "UserID": "사용자 ID",
    "Name": "이름",
    "Description": "내역",
    "UserID.Description": "사용자 고유 ID",
    "Draft_DraftAdministrativeData": "드래프트 관리 데이터",
    "Draft_DraftUUID": "드래프트(기술 ID)",
    "Draft_CreationDateTime": "드래프트 생성일",
    "Draft_CreatedByUser": "드래프트 생성자",
    "Draft_DraftIsCreatedByMe": "내가 생성한 드래프트",
    "Draft_LastChangeDateTime": "드래프트 최종 변경일",
    "Draft_LastChangedByUser": "드래프트 최종 변경자",
    "Draft_InProcessByUser": "드래프트 처리 중인 사용자",
    "Draft_DraftIsProcessedByMe": "내가 처리 중인 드래프트"
  },
  "ms": {
    "CreatedBy": "Dicipta oleh",
    "CreatedAt": "Dicipta pada",
    "ChangedBy": "Diubah oleh",
    "ChangedAt": "Diubah pada",
    "Currency": "Mata Wang",
    "CurrencyCode": "Kod Mata Wang",
    "CurrencyCode.Description": "Kod mata wang seperti yang dinyatakan dalam ISO 4217",
    "CurrencySymbol": "Simbol Mata Wang",
    "CurrencyMinorUnit": "Pecahan Unit Kecil Mata Wang",
    "Country": "Negara/Wilayah",
    "CountryCode": "Kod Negara/Wilayah",
    "CountryCode.Description": "Kod negara/wilayah seperti yang dinyatakan dalam ISO 3166-1",
    "Language": "Bahasa",
    "LanguageCode": "Kod Bahasa",
    "LanguageCode.Description": "Kod bahasa seperti yang dinyatakan dalam ISO 639-1",
    "TimeZoneCode": "Kod Zon Waktu",
    "UserID": "ID Pengguna",
    "Name": "Nama",
    "Description": "Perihalan",
    "UserID.Description": "ID unik pengguna",
    "Draft_DraftAdministrativeData": "Data Pentadbiran Draf",
    "Draft_DraftUUID": "Draf (ID Teknikal)",
    "Draft_CreationDateTime": "Draf Dicipta pada",
    "Draft_CreatedByUser": "Draf Dicipta oleh",
    "Draft_DraftIsCreatedByMe": "Draf Dicipta oleh Saya",
    "Draft_LastChangeDateTime": "Draf Terakhir Diubah pada",
    "Draft_LastChangedByUser": "Draf Terakhir Diubah oleh",
    "Draft_InProcessByUser": "Draf Sedang Diproses oleh",
    "Draft_DraftIsProcessedByMe": "Draf Sedang Diproses oleh Saya"
  },
  "nl": {
    "CreatedBy": "Gecreëerd door",
    "CreatedAt": "Gecreëerd op",
    "ChangedBy": "Gewijzigd door",
    "ChangedAt": "Gewijzigd op",
    "Currency": "Valuta",
    "CurrencyCode": "Valutacode",
    "CurrencyCode.Description": "Valutacode zoals gespecificeerd door ISO 4217",
    "CurrencySymbol": "Valutasymbool",
    "CurrencyMinorUnit": "Breuken kleinste eenheid valuta",
    "Country": "Land/regio",
    "CountryCode": "Land-/regiocode",
    "CountryCode.Description": "Land-/regiocode zoals gespecificeerd door ISO 3166-1",
    "Language": "Taal",
    "LanguageCode": "Taalcode",
    "LanguageCode.Description": "Taalcode zoals gespecificeerd door ISO 639-1",
    "TimeZoneCode": "Code tijdzone",
    "UserID": "Gebruikers-ID",
    "Name": "Naam",
    "Description": "Omschrijving",
    "UserID.Description": "Unieke ID van gebruiker",
    "Draft_DraftAdministrativeData": "Conceptbeheergegevens",
    "Draft_DraftUUID": "Concept (technische ID)",
    "Draft_CreationDateTime": "Concept gecreëerd op",
    "Draft_CreatedByUser": "Concept gecreëerd door",
    "Draft_DraftIsCreatedByMe": "Concept gecreëerd door mij",
    "Draft_LastChangeDateTime": "Concept laatst gewijzigd op",
    "Draft_LastChangedByUser": "Concept laatst gewijzigd door",
    "Draft_InProcessByUser": "Concept wordt bewerkt door",
    "Draft_DraftIsProcessedByMe": "Concept wordt bewerkt door mij"
  },
  "no": {
    "CreatedBy": "Opprettet av",
    "CreatedAt": "Opprettet den",
    "ChangedBy": "Endret av",
    "ChangedAt": "Endret den",
    "Currency": "Valuta",
    "CurrencyCode": "Valutakode",
    "CurrencyCode.Description": "Valutakode som definert i ISO 4217",
    "CurrencySymbol": "Valutasymbol",
    "CurrencyMinorUnit": "Deler for valutaunderenhet",
    "Country": "Land/region",
    "CountryCode": "Land-/regionskode",
    "CountryCode.Description": "Land-/regionskode som definert i ISO 3166-1",
    "Language": "Språk",
    "LanguageCode": "Språkkode",
    "LanguageCode.Description": "Språkkode som definert i ISO 639-1",
    "TimeZoneCode": "Kode for tidssone",
    "UserID": "Bruker-ID",
    "Name": "Navn",
    "Description": "Beskrivelse",
    "UserID.Description": "Brukerens unike ID",
    "Draft_DraftAdministrativeData": "Administrative data for utkast",
    "Draft_DraftUUID": "Utkast (teknisk ID)",
    "Draft_CreationDateTime": "Utkast opprettet den",
    "Draft_CreatedByUser": "Utkast opprettet av",
    "Draft_DraftIsCreatedByMe": "Utkast opprettet av meg",
    "Draft_LastChangeDateTime": "Utkast sist endret den",
    "Draft_LastChangedByUser": "Utkast sist endret av",
    "Draft_InProcessByUser": "Utkast under behandling av",
    "Draft_DraftIsProcessedByMe": "Utkast under behandling av meg"
  },
  "pl": {
    "CreatedBy": "Utworzone przez",
    "CreatedAt": "Data utworzenia",
    "ChangedBy": "Zmienione przez",
    "ChangedAt": "Data zmiany",
    "Currency": "Waluta",
    "CurrencyCode": "Kod waluty",
    "CurrencyCode.Description": "Kod waluty określony zgodnie z normą ISO 4217",
    "CurrencySymbol": "Symbol waluty",
    "CurrencyMinorUnit": "Wartości ułamkowe jednostki pomocniczej waluty",
    "Country": "Kraj/region",
    "CountryCode": "Kod kraju/regionu",
    "CountryCode.Description": "Kod kraju/regionu zgodny z normą ISO 3166-1",
    "Language": "Język",
    "LanguageCode": "Kod języka",
    "LanguageCode.Description": "Kod języka określony zgodnie z normą ISO 639-1",
    "TimeZoneCode": "Kod strefy czasowej",
    "UserID": "Identyfikator użytkownika",
    "Name": "Nazwa",
    "Description": "Opis",
    "UserID.Description": "Unikalny identyfikator użytkownika",
    "Draft_DraftAdministrativeData": "Dane administracyjne wersji roboczej",
    "Draft_DraftUUID": "Wersja robocza (identyfikator techniczny)",
    "Draft_CreationDateTime": "Data utworzenia wersji roboczej",
    "Draft_CreatedByUser": "Wersja robocza utworzona przez",
    "Draft_DraftIsCreatedByMe": "Wersja robocza utworzona przeze mnie",
    "Draft_LastChangeDateTime": "Data ostatniej zmiany wersji roboczej",
    "Draft_LastChangedByUser": "Wersja robocza ostatnio zmieniona przez",
    "Draft_InProcessByUser": "Wersja robocza w przetwarzaniu przez",
    "Draft_DraftIsProcessedByMe": "Wersja robocza w przetwarzaniu przeze mnie"
  },
  "pt": {
    "CreatedBy": "Criado por",
    "CreatedAt": "Criado em",
    "ChangedBy": "Modificado por",
    "ChangedAt": "Modificado em",
    "Currency": "Moeda",
    "CurrencyCode": "Código de moeda",
    "CurrencyCode.Description": "Código de moeda como especificado pelo ISO 4217",
    "CurrencySymbol": "Símbolo da moeda",
    "CurrencyMinorUnit": "Frações de unidade auxiliar de moeda",
    "Country": "País/região",
    "CountryCode": "Código do país/região",
    "CountryCode.Description": "Código do país/região como especificado pelo ISO 3166-1",
    "Language": "Idioma",
    "LanguageCode": "Código de idioma",
    "LanguageCode.Description": "Código de idioma como especificado pelo ISO 639-1",
    "TimeZoneCode": "Código de fuso horário",
    "UserID": "ID do usuário",
    "Name": "Nome",
    "Description": "Descrição",
    "UserID.Description": "ID exclusivo do usuário",
    "Draft_DraftAdministrativeData": "Dados administrativos de rascunho",
    "Draft_DraftUUID": "Rascunho (ID técnico)",
    "Draft_CreationDateTime": "Rascunho criado em",
    "Draft_CreatedByUser": "Rascunho criado por",
    "Draft_DraftIsCreatedByMe": "Rascunho criado por mim",
    "Draft_LastChangeDateTime": "Última modificação do rascunho em",
    "Draft_LastChangedByUser": "Última modificação do rascunho por",
    "Draft_InProcessByUser": "Rascunho sendo processado por",
    "Draft_DraftIsProcessedByMe": "Rascunho sendo processado por mim"
  },
  "ro": {
    "CreatedBy": "Creat de",
    "CreatedAt": "Creat pe",
    "ChangedBy": "Modificat de",
    "ChangedAt": "Modificat pe",
    "Currency": "Monedă",
    "CurrencyCode": "Cod monedă",
    "CurrencyCode.Description": "Cod monedă așa cum este specificat de ISO 4217",
    "CurrencySymbol": "Simbol monedă",
    "CurrencyMinorUnit": "Fracții subunitate de monedă",
    "Country": "Țară/regiune",
    "CountryCode": "Cod de țară/regiune",
    "CountryCode.Description": "Cod de țară/regiune așa cum este specificat de ISO 3166-1",
    "Language": "Limbă",
    "LanguageCode": "Cod de limbă",
    "LanguageCode.Description": "Cod de limbă așa cum este specificat de ISO 639-1",
    "TimeZoneCode": "Cod fus orar",
    "UserID": "ID utilizator",
    "Name": "Nume",
    "Description": "Descriere",
    "UserID.Description": "ID unic utilizator",
    "Draft_DraftAdministrativeData": "Date de administrare în versiune preliminară",
    "Draft_DraftUUID": "Versiune preliminară (ID tehnic)",
    "Draft_CreationDateTime": "Versiune preliminară creată pe",
    "Draft_CreatedByUser": "Versiune preliminară creată de",
    "Draft_DraftIsCreatedByMe": "Versiune preliminară creată de mine",
    "Draft_LastChangeDateTime": "Versiune preliminară modificată ultima dată pe",
    "Draft_LastChangedByUser": "Versiune preliminară modificată ultima dată de",
    "Draft_InProcessByUser": "Versiune preliminară în prelucrare de",
    "Draft_DraftIsProcessedByMe": "Versiune preliminară în prelucrare de mine"
  },
  "ru": {
    "CreatedBy": "Создал",
    "CreatedAt": "Дата создания",
    "ChangedBy": "Автор изменения",
    "ChangedAt": "Дата изменения",
    "Currency": "Валюта",
    "CurrencyCode": "Код валюты",
    "CurrencyCode.Description": "Код валюты в соответствии с ISO 4217",
    "CurrencySymbol": "Символ валюты",
    "CurrencyMinorUnit": "Доли вспомогательной валютной единицы",
    "Country": "Страна/регион",
    "CountryCode": "Код страны/региона",
    "CountryCode.Description": "Код страны/региона в соответствии с ISO 3166-1",
    "Language": "Язык",
    "LanguageCode": "Код языка",
    "LanguageCode.Description": "Код языка в соответствии с ISO 639-1",
    "TimeZoneCode": "Код часового пояса",
    "UserID": "Ид. пользователя",
    "Name": "Имя",
    "Description": "Описание",
    "UserID.Description": "Уникальный ид. пользователя",
    "Draft_DraftAdministrativeData": "Черновик административных данных",
    "Draft_DraftUUID": "Черновик (технический ид.)",
    "Draft_CreationDateTime": "Дата создания черновика",
    "Draft_CreatedByUser": "Создал черновик",
    "Draft_DraftIsCreatedByMe": "Черновик создан мной",
    "Draft_LastChangeDateTime": "Дата последнего изменения черновика",
    "Draft_LastChangedByUser": "Изменил черновик",
    "Draft_InProcessByUser": "Обрабатывает черновик",
    "Draft_DraftIsProcessedByMe": "Черновик обрабатывается мной"
  },
  "sh": {
    "CreatedBy": "Kreirao",
    "CreatedAt": "Kreirano",
    "ChangedBy": "Promenio",
    "ChangedAt": "Promenjeno",
    "Currency": "Valuta",
    "CurrencyCode": "Šifra valute",
    "CurrencyCode.Description": "Šifra valute određena prema ISO 4217",
    "CurrencySymbol": "Simbol valute",
    "CurrencyMinorUnit": "Manja jedinica valute",
    "Country": "Zemlja/regija",
    "CountryCode": "Šifra zemlje/regije",
    "CountryCode.Description": "Šifra zemlje/regije određena prema ISO 3166-1",
    "Language": "Jezik",
    "LanguageCode": "Šifra jezika",
    "LanguageCode.Description": "Šifra jezika određena prema ISO 639-1",
    "TimeZoneCode": "Šifra vremenske zone",
    "UserID": "ID korisnika",
    "Name": "Ime",
    "Description": "Opis",
    "UserID.Description": "Jedinstveni ID korisnika",
    "Draft_DraftAdministrativeData": "Nacrt administrativnih podataka",
    "Draft_DraftUUID": "Nacrt (tehnički ID)",
    "Draft_CreationDateTime": "Nacrt kreiran",
    "Draft_CreatedByUser": "Nacrt kreirao",
    "Draft_DraftIsCreatedByMe": "Nacrt čiji sam autor",
    "Draft_LastChangeDateTime": "Nacrt poslednji put promenjen",
    "Draft_LastChangedByUser": "Nacrt poslednji put promenio",
    "Draft_InProcessByUser": "Nacrt koji obrađuje",
    "Draft_DraftIsProcessedByMe": "Nacrt koji obrađujem"
  },
  "sk": {
    "CreatedBy": "Vytvoril",
    "CreatedAt": "Vytvorené dňa",
    "ChangedBy": "Zmenil",
    "ChangedAt": "Zmenené dňa",
    "Currency": "Mena",
    "CurrencyCode": "Kód meny",
    "CurrencyCode.Description": "Kód meny podľa normy ISO 4217",
    "CurrencySymbol": "Symbol meny",
    "CurrencyMinorUnit": "Menové menšie jednotkové zlomky",
    "Country": "Štát/región",
    "CountryCode": "Kód štátu/regiónu",
    "CountryCode.Description": "Kód štátu/regiónu podľa normy ISO 3166-1",
    "Language": "Jazyk",
    "LanguageCode": "Kód jazyka",
    "LanguageCode.Description": "Kód jazyka podľa normy ISO 639-1",
    "TimeZoneCode": "Kód časového pásma",
    "UserID": "ID používateľa",
    "Name": "Názov",
    "Description": "Popis",
    "UserID.Description": "Jedinečné ID používateľa",
    "Draft_DraftAdministrativeData": "Návrh administratívnych údajov",
    "Draft_DraftUUID": "Návrh (technické ID)",
    "Draft_CreationDateTime": "Návrh vytvorený dňa",
    "Draft_CreatedByUser": "Návrh vytvoril",
    "Draft_DraftIsCreatedByMe": "Návrh vytvoril mnou",
    "Draft_LastChangeDateTime": "Návrh naposledy zmenený dňa",
    "Draft_LastChangedByUser": "Návrh naposledy zmenil",
    "Draft_InProcessByUser": "Návrh v spracovaní od (meno)",
    "Draft_DraftIsProcessedByMe": "Návrh v spracovaní od (ja)"
  },
  "sl": {
    "CreatedBy": "Ustvaril uporabnik",
    "CreatedAt": "Ustvarjeno dne",
    "ChangedBy": "Spremenil uporabnik",
    "ChangedAt": "Spremenjeno dne",
    "Currency": "Valuta",
    "CurrencyCode": "Koda valute",
    "CurrencyCode.Description": "Koda valute, kot jo določa ISO 4217",
    "CurrencySymbol": "Simbol valute",
    "CurrencyMinorUnit": "Deli manjše enote valute",
    "Country": "Država/regija",
    "CountryCode": "Koda države/regije",
    "CountryCode.Description": "Koda države/regije, kot jo določa ISO 3166-1",
    "Language": "Jezik",
    "LanguageCode": "Koda jezika",
    "LanguageCode.Description": "Koda jezika, kot jo določa ISO 639-1",
    "TimeZoneCode": "Koda časovnega pasa",
    "UserID": "ID uporabnika",
    "Name": "Ime",
    "Description": "Opis",
    "UserID.Description": "Enoznačni ID uporabnika",
    "Draft_DraftAdministrativeData": "Osnutek administrativnih podatkov",
    "Draft_DraftUUID": "Osnutek (tehnični ID)",
    "Draft_CreationDateTime": "Osnutek, ki je bil kreiran dne",
    "Draft_CreatedByUser": "Osnutek, ki ga je kreiral",
    "Draft_DraftIsCreatedByMe": "Osnutek, ki sem ga kreiral jaz",
    "Draft_LastChangeDateTime": "Osnutek, ki je bil nazadnje spremenjen dne",
    "Draft_LastChangedByUser": "Osnutek, ki ga je nazadnje spremenil",
    "Draft_InProcessByUser": "Osnutek obdeluje",
    "Draft_DraftIsProcessedByMe": "Osnutek, ki ga obdelujem"
  },
  "sv": {
    "CreatedBy": "Uppläggning av",
    "CreatedAt": "Uppläggning den",
    "ChangedBy": "Ändring av",
    "ChangedAt": "Ändring den",
    "Currency": "Valuta",
    "CurrencyCode": "Valutakod",
    "CurrencyCode.Description": "Valutakod enligt ISO 4217",
    "CurrencySymbol": "Valutasymbol",
    "CurrencyMinorUnit": "Antal mindre enheter för valuta",
    "Country": "Land/region",
    "CountryCode": "Kod för land/region",
    "CountryCode.Description": "Kod för land/region enligt ISO 3166-1",
    "Language": "Språk",
    "LanguageCode": "Språkkod",
    "LanguageCode.Description": "Språkkod enligt ISO 639-1",
    "TimeZoneCode": "Tidszonskod",
    "UserID": "Användar-ID",
    "Name": "Namn",
    "Description": "Beskrivning",
    "UserID.Description": "Unik användar-ID",
    "Draft_DraftAdministrativeData": "Utkast för administrativa data",
    "Draft_DraftUUID": "Utkast (teknisk ID)",
    "Draft_CreationDateTime": "Utkast skapat den",
    "Draft_CreatedByUser": "Utkast skapat av",
    "Draft_DraftIsCreatedByMe": "Utkast skapat av mig",
    "Draft_LastChangeDateTime": "Senaste utkaständring den",
    "Draft_LastChangedByUser": "Senaste utkaständring av",
    "Draft_InProcessByUser": "Utkast under bearbetning av",
    "Draft_DraftIsProcessedByMe": "Utkast under bearbetning av mig"
  },
  "th": {
    "CreatedBy": "สร้างโดย",
    "CreatedAt": "สร้างเมื่อ",
    "ChangedBy": "เปลี่ยนแปลงโดย",
    "ChangedAt": "เปลี่ยนแปลงเมื่อ",
    "Currency": "สกุลเงิน",
    "CurrencyCode": "รหัสสกุลเงิน",
    "CurrencyCode.Description": "รหัสสกุลเงินตามที่ระบุใน ISO 4217",
    "CurrencySymbol": "สัญลักษณ์สกุลเงิน",
    "CurrencyMinorUnit": "เศษส่วนหน่วยรองของสกุลเงิน",
    "Country": "ประเทศ/ภูมิภาค",
    "CountryCode": "รหัสประเทศ/ภูมิภาค",
    "CountryCode.Description": "รหัสประเทศ/ภูมิภาคตามที่ระบุใน ISO 3166-1",
    "Language": "ภาษา",
    "LanguageCode": "รหัสภาษา",
    "LanguageCode.Description": "รหัสภาษาตามที่ระบุใน ISO 639-1",
    "TimeZoneCode": "รหัสเขตเวลา",
    "UserID": "ID ผู้ใช้",
    "Name": "ชื่อ",
    "Description": "คำอธิบาย",
    "UserID.Description": "ID ที่ไม่ซ้ำของผู้ใช้",
    "Draft_DraftAdministrativeData": "ข้อมูลด้านการบริหารสำหรับแบบร่าง",
    "Draft_DraftUUID": "แบบร่าง (ID ทางเทคนิค)",
    "Draft_CreationDateTime": "สร้างแบบร่างเมื่อ",
    "Draft_CreatedByUser": "สร้างแบบร่างโดย",
    "Draft_DraftIsCreatedByMe": "แบบร่างที่ฉันสร้างขึ้น",
    "Draft_LastChangeDateTime": "เปลี่ยนแปลงแบบร่างครั้งล่าสุดเมื่อ",
    "Draft_LastChangedByUser": "เปลี่ยนแปลงแบบร่างครั้งล่าสุดโดย",
    "Draft_InProcessByUser": "แบบร่างอยู่ระหว่างดำเนินการโดย",
    "Draft_DraftIsProcessedByMe": "แบบร่างที่ฉันกำลังดำเนินการ"
  },
  "tr": {
    "CreatedBy": "Oluşturan",
    "CreatedAt": "Oluşturma tarihi",
    "ChangedBy": "Değiştiren",
    "ChangedAt": "Değişiklik tarihi",
    "Currency": "Para birimi",
    "CurrencyCode": "Para birimi kodu",
    "CurrencyCode.Description": "ISO 4217'ye göre belirtilen para birimi kodu",
    "CurrencySymbol": "Para birimi sembolü",
    "CurrencyMinorUnit": "Para biriminin küçük birim kesirleri",
    "Country": "Ülke/bölge",
    "CountryCode": "Ülke/bölge kodu",
    "CountryCode.Description": "ISO 3166-1'e göre belirtilen ülke/bölge kodu",
    "Language": "Dil",
    "LanguageCode": "Dil kodu",
    "LanguageCode.Description": "ISO 639-1'e göre belirtilen dil kodu",
    "TimeZoneCode": "Saat dilimi kodu",
    "UserID": "Kullanıcı tanıtıcısı",
    "Name": "Ad",
    "Description": "Tanım",
    "UserID.Description": "Kullanıcının benzersiz tanıtıcısı",
    "Draft_DraftAdministrativeData": "Taslak yönetim verileri",
    "Draft_DraftUUID": "Taslak (teknik tanıtıcı)",
    "Draft_CreationDateTime": "Taslak oluşturma tarihi",
    "Draft_CreatedByUser": "Taslağı oluşturan",
    "Draft_DraftIsCreatedByMe": "Tarafımdan oluşturulan taslak",
    "Draft_LastChangeDateTime": "Taslağın son değişiklik tarihi",
    "Draft_LastChangedByUser": "Taslağı son değiştiren",
    "Draft_InProcessByUser": "Taslağı işleyen",
    "Draft_DraftIsProcessedByMe": "Tarafımdan işlenen taslak"
  },
  "uk": {
    "CreatedBy": "Автор створення",
    "CreatedAt": "Дата створення",
    "ChangedBy": "Автор зміни",
    "ChangedAt": "Дата змінення",
    "Currency": "Валюта",
    "CurrencyCode": "Код валюти",
    "CurrencyCode.Description": "Код валюти, як вказано в ISO 4217",
    "CurrencySymbol": "Символ валюти",
    "CurrencyMinorUnit": "Менші частки одиниці валюти",
    "Country": "Країна/регіон",
    "CountryCode": "Код країни/регіону",
    "CountryCode.Description": "Код країни/регіону, як вказано в ISO 3166-1",
    "Language": "Мова",
    "LanguageCode": "Код мови",
    "LanguageCode.Description": "Код мови, як вказано в ISO 639-1",
    "TimeZoneCode": "Код часового поясу",
    "UserID": "ІД користувача",
    "Name": "Ім’я",
    "Description": "Опис",
    "UserID.Description": "Унікальний ІД користувача",
    "Draft_DraftAdministrativeData": "Адміністративні дані чернетки",
    "Draft_DraftUUID": "Чернетка (технічний ІД)",
    "Draft_CreationDateTime": "Дата створення чернетки",
    "Draft_CreatedByUser": "Автор створення чернетки",
    "Draft_DraftIsCreatedByMe": "Чернетка, створена мною",
    "Draft_LastChangeDateTime": "Дата останньої зміни чернетки",
    "Draft_LastChangedByUser": "Автор останньої зміни чернетки",
    "Draft_InProcessByUser": "Поточний автор обробки чернетки",
    "Draft_DraftIsProcessedByMe": "Чернетка, яку наразі обробляю я"
  },
  "vi": {
    "CreatedBy": "Tạo bởi",
    "CreatedAt": "Tạo vào",
    "ChangedBy": "Thay đổi bởi",
    "ChangedAt": "Thay đổi vào ngày",
    "Currency": "Tiền tệ",
    "CurrencyCode": "Mã tiền tệ",
    "CurrencyCode.Description": "Mã tiền tệ theo ISO 4217",
    "CurrencySymbol": "Ký hiệu tiền tệ",
    "CurrencyMinorUnit": "Phân số đơn vị tối thiểu của tiền tệ",
    "Country": "Quốc gia/Vùng",
    "CountryCode": "Mã quốc gia/vùng",
    "CountryCode.Description": "Mã quốc gia/vùng theo ISO 3166-1",
    "Language": "Ngôn ngữ",
    "LanguageCode": "Mã ngôn ngữ",
    "LanguageCode.Description": "Mã ngôn ngữ theo ISO 639-1",
    "TimeZoneCode": "Mã múi giờ",
    "UserID": "ID người dùng",
    "Name": "Tên",
    "Description": "Mô tả",
    "UserID.Description": "ID duy nhất của người dùng",
    "Draft_DraftAdministrativeData": "Dữ liệu quản trị ở dạng nháp",
    "Draft_DraftUUID": "Bản nháp (ID kỹ thuật)",
    "Draft_CreationDateTime": "Ngày tạo bản nháp",
    "Draft_CreatedByUser": "Người tạo bản nháp",
    "Draft_DraftIsCreatedByMe": "Bản nháp do tôi tạo",
    "Draft_LastChangeDateTime": "Ngày thay đổi lần cuối bản nháp",
    "Draft_LastChangedByUser": "Người thay đổi lần cuối bản nháp",
    "Draft_InProcessByUser": "Người đang xử lý bản nháp",
    "Draft_DraftIsProcessedByMe": "Bản nháp đang do tôi xử lý"
  },
  "zh_CN": {
    "CreatedBy": "创建人",
    "CreatedAt": "创建日期",
    "ChangedBy": "更改人",
    "ChangedAt": "更改日期",
    "Currency": "货币",
    "CurrencyCode": "货币代码",
    "CurrencyCode.Description": "ISO 4217 指定的货币代码",
    "CurrencySymbol": "货币符号",
    "CurrencyMinorUnit": "货币次要单位部分",
    "Country": "国家/地区",
    "CountryCode": "国家/地区代码",
    "CountryCode.Description": "ISO 3166-1 指定的国家/地区代码",
    "Language": "语言",
    "LanguageCode": "语言代码",
    "LanguageCode.Description": "ISO 639-1 指定的语言代码",
    "TimeZoneCode": "时区代码",
    "UserID": "用户标识",
    "Name": "名称",
    "Description": "描述",
    "UserID.Description": "用户的唯一标识",
    "Draft_DraftAdministrativeData": "草稿管理数据",
    "Draft_DraftUUID": "草稿（技术标识）",
    "Draft_CreationDateTime": "草稿创建日期",
    "Draft_CreatedByUser": "草稿创建人",
    "Draft_DraftIsCreatedByMe": "草稿由我创建",
    "Draft_LastChangeDateTime": "草稿上次更改日期",
    "Draft_LastChangedByUser": "草稿上次更改人",
    "Draft_InProcessByUser": "正在处理草稿人",
    "Draft_DraftIsProcessedByMe": "草稿正在由我处理"
  },
  "zh_TW": {
    "CreatedBy": "建立者",
    "CreatedAt": "建立日期",
    "ChangedBy": "更改者",
    "ChangedAt": "更改日期",
    "Currency": "幣別",
    "CurrencyCode": "幣別代碼",
    "CurrencyCode.Description": "已按 ISO 4217 指定公司代碼",
    "CurrencySymbol": "幣別符號",
    "CurrencyMinorUnit": "幣別次要單位分數",
    "Country": "國家/地區",
    "CountryCode": "國家/地區代碼",
    "CountryCode.Description": "已按 ISO 3166-1 指定國家/地區代碼",
    "Language": "語言",
    "LanguageCode": "語言代碼",
    "LanguageCode.Description": "已按 ISO 639-1 指定公司代碼",
    "TimeZoneCode": "時區代碼",
    "UserID": "使用者 ID",
    "Name": "名稱",
    "Description": "說明",
    "UserID.Description": "使用者專屬 ID",
    "Draft_DraftAdministrativeData": "草稿管理資料",
    "Draft_DraftUUID": "草稿 (技術 ID)",
    "Draft_CreationDateTime": "草稿建立日期",
    "Draft_CreatedByUser": "草稿建立者",
    "Draft_DraftIsCreatedByMe": "我所建立的草稿",
    "Draft_LastChangeDateTime": "草稿的上次更改日期",
    "Draft_LastChangedByUser": "草稿的上次更改者",
    "Draft_InProcessByUser": "正在處理草稿的人員",
    "Draft_DraftIsProcessedByMe": "我正在處理的草稿"
  }
}
```

# packages/cap-service/gen/srv/srv/_i18n/messages_ar.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=أدخل قيمة بين {1} و{2}.
ASSERT_FORMAT=أدخل قيمة تتطابق النمط {1}.
ASSERT_ENUM=أدخل قيمة من القيم المسموح بها: {1}.
ASSERT_MANDATORY=قم بتوفير القيمة المفقودة.
ASSERT_TARGET=الهدف بهذا المفتاح غير موجود.
MULTIPLE_ERRORS=حدثت عدة أخطاء، انظر التفاصيل أدناه.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=الإجراء "{0}" يتطلب "{1}" ليكون "{2}".
INVALID_FLOW_TRANSITION_MULTI=الإجراء "{0}" يتطلب "{1}" ليكون إحدى القيم التالية: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_bg.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Въведете стойност между {1} и {2}.
ASSERT_FORMAT=Въведете стойност, която съответства на модела {1}.
ASSERT_ENUM=Въведете една от позволените стойности: {1}.
ASSERT_MANDATORY=Въведете липсващата стойност.
ASSERT_TARGET=Не съществува цел с този ключ.
MULTIPLE_ERRORS=Възникнаха няколко грешки, вижте детайлите по-долу.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Действие „{0}“ изисква „{1}“ да бъде „{2}“.
INVALID_FLOW_TRANSITION_MULTI=Действие „{0}“ изисква „{1}“ да бъде една от следните стойности: „{2}“.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_cs.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Zadejte hodnotu mezi {1} a {2}.
ASSERT_FORMAT=Zadejte hodnotu odpovídající vzoru {1}.
ASSERT_ENUM=Zadejte některou z povolených hodnot: {1}.
ASSERT_MANDATORY=Zadejte chybějící hodnotu.
ASSERT_TARGET=Cíl s tímto klíčem neexistuje.
MULTIPLE_ERRORS=Došlo k více chybám, viz detaily níže.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Akce "{0}" vyžaduje, aby "{1}" bylo "{2}".
INVALID_FLOW_TRANSITION_MULTI=Akce "{0}" vyžaduje, aby "{1}" mělo některou z následujících hodnot: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_da.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Indtast en værdi mellem {1} og {2}.
ASSERT_FORMAT=Indtast en værdi, der stemmer overens med mønstret {1}.
ASSERT_ENUM=Indtast en af de tilladte værdier: {1}.
ASSERT_MANDATORY=Angiv den manglende værdi.
ASSERT_TARGET=Målet med denne nøgle findes ikke.
MULTIPLE_ERRORS=Der opstod flere fejl. Se detaljer nedenfor.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Handling "{0}" kræver, at "{1}" skal være "{2}".
INVALID_FLOW_TRANSITION_MULTI=Handling "{0}" kræver, at "{1}" skal være en af følgende værdier: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_de.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Geben Sie einen Wert zwischen {1} und {2} ein.
ASSERT_FORMAT=Geben Sie einen Wert im Format {1} ein.
ASSERT_ENUM=Geben Sie einen der folgenden Werte ein: {1}
ASSERT_MANDATORY=Geben Sie den fehlenden Wert ein.
ASSERT_TARGET=Kein Ziel mit dieser ID gefunden
MULTIPLE_ERRORS=Mehrere Fehler aufgetreten; Details siehe unten
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Aktion "{0}" benötigt "{1}", um "{2}" zu sein.
INVALID_FLOW_TRANSITION_MULTI=Aktion "{0}" benötigt "{1}", um einer der beiden folgenden Werte zu sein: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_el.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Εισάγετε τιμή μεταξύ {1} και {2}.
ASSERT_FORMAT=Εισάγετε τιμή που ταιριάζει με τον τύπο {1}.
ASSERT_ENUM=Εισάγετε μία από τις επιτρεπόμενες τιμές: {1}.
ASSERT_MANDATORY=Εισάγετε την τιμή που λείπει.
ASSERT_TARGET=Στόχος με αυτό το κλειδί δεν υπάρχει.
MULTIPLE_ERRORS=Παρουσιάστηκαν πολλαπλά σφάλματα, δείτε τις λεπτομέρειες παρακάτω.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Ενέργεια "{0}" απαιτεί "{1}" να είναι "{2}".
INVALID_FLOW_TRANSITION_MULTI=Ενέργεια "{0}" απαιτεί "{1}" να είναι μία από τις ακόλουθες τιμές: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_en_US_saptrc.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=syj7Wpf4N+RNutJnPkFc/g_Enter a value between {1} and {2}.
ASSERT_FORMAT=Zlrh1FMgIgi0aCPZ7tBHQQ_Enter a value matching the pattern {1}.
ASSERT_ENUM=JBWpKLzHB1PTDu5SU8nvbg_Enter one of the allowed values: {1}.
ASSERT_MANDATORY=48oasEaiU6vWNSsb5xSd8g_Provide the missing value.
ASSERT_TARGET=RsEpRI9ql0CTLYA1Lxw5yg_Target with this key doesn't exist.
MULTIPLE_ERRORS=ORAgmIM081lUSTauaWQL0g_Multiple errors occurred, see details below.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=HIm2LvfzQTsdztZ/yHPSAQ_Action "{0}" requires "{1}" to be "{2}".
INVALID_FLOW_TRANSITION_MULTI=pmlbN0WeaFaO14PJQux2JQ_Action "{0}" requires "{1}" to be one of the following values: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_en.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Enter a value between {1} and {2}.
ASSERT_FORMAT=Enter a value matching the pattern {1}.
ASSERT_ENUM=Enter one of the allowed values: {1}.
ASSERT_MANDATORY=Provide the missing value.
ASSERT_TARGET=Target with this key doesn't exist.
MULTIPLE_ERRORS=Multiple errors occurred, see details below.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Action "{0}" requires "{1}" to be "{2}".
INVALID_FLOW_TRANSITION_MULTI=Action "{0}" requires "{1}" to be one of the following values: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_es_MX.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Introducir un valor entre {1} y {2}.
ASSERT_FORMAT=Introduzca un valor que coincida con el patrón {1}.
ASSERT_ENUM=Introduzca uno de los valores permitidos: {1}.
ASSERT_MANDATORY=Proporcione el valor que falta.
ASSERT_TARGET=El destino con esta llave no existe.
MULTIPLE_ERRORS=Se han producido múltiples errores, consulte los detalles a continuación.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=La acción "{0}" requiere "{1}" para ser "{2}".
INVALID_FLOW_TRANSITION_MULTI=La acción "{0}" requiere "{1}" para ser uno de los siguientes valores: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_es.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Introducir un valor entre {1} y {2}.
ASSERT_FORMAT=Introduzca un valor que coincida con el patrón {1}.
ASSERT_ENUM=Introduzca uno de los valores permitidos: {1}.
ASSERT_MANDATORY=Proporcione el valor que falta.
ASSERT_TARGET=El destino con esta llave no existe.
MULTIPLE_ERRORS=Se han producido múltiples errores, consulte los detalles a continuación.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=La acción "{0}" requiere "{1}" para ser "{2}".
INVALID_FLOW_TRANSITION_MULTI=La acción "{0}" requiere "{1}" para ser uno de los siguientes valores: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_fi.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Syötä arvo, joka on väliltä {1} - {2}.
ASSERT_FORMAT=Syötä arvo, joka vastaa mallia {1}.
ASSERT_ENUM=Syötä yksi sallituista arvoista: {1}.
ASSERT_MANDATORY=Anna puuttuva arvo.
ASSERT_TARGET=Kohdella, jolla on tämä avain, eile ole olemassa.
MULTIPLE_ERRORS=Moninkertaisia virheitä ilmeni. Katso lisätiedot alla.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Toimi "{0}" edellyttää, että "{1}" on "{2}".
INVALID_FLOW_TRANSITION_MULTI=Toimi "{0}" edellyttää, että "{1}" on yksi seuraavista arvoista: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_fr.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Saisissez une valeur comprise entre {1} et {2}.
ASSERT_FORMAT=Saisissez une valeur correspondant au modèle {1}.
ASSERT_ENUM=Saisissez l'une des valeurs autorisées : {1}.
ASSERT_MANDATORY=Indiquez la valeur manquante.
ASSERT_TARGET=Aucune valeur cible avec cette clé n'existe.
MULTIPLE_ERRORS=Plusieurs erreurs se sont produites, voir les détails ci-dessous.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Pour l'action "{0}", "{1}" doit être "{2}".
INVALID_FLOW_TRANSITION_MULTI=Pour l'action "{0}", "{1}" doit avoir l'une des valeurs suivantes : {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_he.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=הזן ערך בין {1} ל-{2}.
ASSERT_FORMAT=הזן ערך שמתאים לדפוס {1}.
ASSERT_ENUM=הזן אחד מהערכים המותרים: {1}.
ASSERT_MANDATORY=ספק את הערך החסר.
ASSERT_TARGET=יעד עם מפתח זה לא קיים.
MULTIPLE_ERRORS=אירעו מספר שגיאות, ראה פרטים להלן.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=פעולה "{0}" דורשת מ-"{1}" להיות "{2}".
INVALID_FLOW_TRANSITION_MULTI=פעולה "{0}" דורשת מ-"{1}" להיות אחד מהערכים הבאים: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_hr.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Unesite vrijednost između {1} i {2}.
ASSERT_FORMAT=Unesite vrijednost koja odgovara uzorku {1}.
ASSERT_ENUM=Unesite jednu od dopuštenih vrijednosti: {1}.
ASSERT_MANDATORY=Navedite vrijednost koja nedostaje.
ASSERT_TARGET=Cilj s ovim ključem ne postoji.
MULTIPLE_ERRORS=Došlo je do višestrukih pogrešaka, pogledajte pojedinosti u nastavku.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Za radnju "{0}" potrebno je da "{1}" bude "{2}".
INVALID_FLOW_TRANSITION_MULTI=Za radnju "{0}" potrebno je da "{1}" bude jedna od sljedećih vrijednosti: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_hu.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Adjon meg egy {1} és {2} közötti értéket.
ASSERT_FORMAT=Olyan értéket adjon meg, amely a(z) {1} mintához illeszkedik.
ASSERT_ENUM=A megengedett értékek egyikét adja meg: {1}.
ASSERT_MANDATORY=Adja meg a hiányzó értéket.
ASSERT_TARGET=Nem létezik cél ezzel a kulccsal.
MULTIPLE_ERRORS=Több hiba lépett fel, lásd az alábbi részleteket.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=A(z) "{0}" műveletnél a(z) "{1}" kötelezően "{2}".
INVALID_FLOW_TRANSITION_MULTI=A(z) "{0}" műveletnél a(z) "{1}" kötelezően a következő értékek egyike: "{2}".

```

# packages/cap-service/gen/srv/srv/_i18n/messages_it.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Inserire un valore compreso tra {1} e {2}.
ASSERT_FORMAT=Inserire un valore corrispondente al modello {1}.
ASSERT_ENUM=Inserire uno dei valori consentiti: {1}.
ASSERT_MANDATORY=Fornire il valore mancante.
ASSERT_TARGET=La destinazione con questa chiave non esiste.
MULTIPLE_ERRORS=Si sono verificati più errori, vedere i dettagli sotto.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=L'azione "{0}" richiede che "{1}" sia "{2}".
INVALID_FLOW_TRANSITION_MULTI=L'azione "{0}" richiede che "{1}" sia uno dei seguenti valori: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_ja.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE={1} から {2} までの値を入力します。
ASSERT_FORMAT=パターン {1} と一致する値を入力します。
ASSERT_ENUM=使用可能な値のいずれかを入力します ({1})。
ASSERT_MANDATORY=未入力の値を入力します。
ASSERT_TARGET=このキーを含む対象は存在しません。
MULTIPLE_ERRORS=複数のエラーが発生しました。詳細は以下を参照してください。
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=アクション "{0}" では、"{1}" を "{2}" にする必要があります。
INVALID_FLOW_TRANSITION_MULTI=アクション "{0}" では、"{1}" を次のいずれかの値にする必要があります ({2})。

```

# packages/cap-service/gen/srv/srv/_i18n/messages_kk.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE={1} – {2} аралығындағы мәнді енгізіңіз.
ASSERT_FORMAT={1} үлгісіне сәйкес келетін мәнді енгізіңіз.
ASSERT_ENUM=Рұқсат етілген мәндердің бірін енгізіңіз: {1}.
ASSERT_MANDATORY=Жетіспейтін мәнді көрсетіңіз.
ASSERT_TARGET=Бұл кілтпен мақсат жоқ.
MULTIPLE_ERRORS=Бірнеше қате орын алды, төмендегі мәліметтерді қараңыз.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE="{0}" операциясы "{1}" "{2}" болуын талап етеді.
INVALID_FLOW_TRANSITION_MULTI="{0}" операциясы "{1}" келесі мәндердің бірі болуын талап етеді: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_ko.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE={1}과(와) {2}.사이의 값을 입력하십시오.
ASSERT_FORMAT={1} 패턴과 일치하는 값을 입력하십시오.
ASSERT_ENUM=허용된 값 {1} 중 하나를 입력하십시오.
ASSERT_MANDATORY=누락된 값을 입력하십시오.
ASSERT_TARGET=이 키를 가진 대상이 없습니다.
MULTIPLE_ERRORS=중복 오류가 발생했습니다. 아래 세부사항을 확인하십시오.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=액션 "{0}"에는 "{1}"이(가) "{2}"이(가) 되어야 합니다.
INVALID_FLOW_TRANSITION_MULTI=액션 "{0}"에는 "{1}"이(가) 다음 값 {2} 중 하나여야 합니다.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_ms.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Masukkan nilai antara {1} dan {2}.
ASSERT_FORMAT=Masukkan nilai yang sepadan dengan corak {1}.
ASSERT_ENUM=Masukkan salah satu nilai yang dibenarkan: {1}.
ASSERT_MANDATORY=Sediakan nilai yang tiada.
ASSERT_TARGET=Sasaran dengan kod ini tidak wujud.
MULTIPLE_ERRORS=Berbilang ralat berlaku, lihat butiran di bawah.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Tindakan "{0}" memerlukan "{1}" menjadi "{2}".
INVALID_FLOW_TRANSITION_MULTI=Tindakan "{0}" memerlukan "{1}" menjadi salah satu nilai berikut: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_nl.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Voer een waarde in tussen {1} en {2}.
ASSERT_FORMAT=Voer een waarde in die overeenkomt met patroon {1}.
ASSERT_ENUM=Voer een van de toegestane waarden in: {1}.
ASSERT_MANDATORY=Geef de ontbrekende waarde op.
ASSERT_TARGET=Doel met deze key bestaat niet.
MULTIPLE_ERRORS=Meerdere fouten opgetreden; zie details hieronder.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Voor actie "{0}" is vereist dat "{1}" "{2}" is.
INVALID_FLOW_TRANSITION_MULTI=Voor actie "{0}" is vereist dat "{1}" een van de volgende waarden is: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_no.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Oppgi en verdi mellom {1} og {2}.
ASSERT_FORMAT=Oppgi en verdi som samsvarer med mønsteret {1}.
ASSERT_ENUM=Oppgi en av de tillatte verdiene: {1}.
ASSERT_MANDATORY=Oppgi den manglende verdien.
ASSERT_TARGET=Mål med denne nøkkelen finnes ikke.
MULTIPLE_ERRORS=Det oppstod flere feil, se detaljer nedenfor.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Aktiviteten "{0}" krever at "{1}" skal være "{2}".
INVALID_FLOW_TRANSITION_MULTI=Aktiviteten "{0}" krever at "{1}" skal være en av følgende verdier: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_pl.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Wprowadź wartość z zakresu między {1} a {2}.
ASSERT_FORMAT=Wprowadź wartość odpowiadającą wzorcowi {1}.
ASSERT_ENUM=Wprowadź jedną z dozwolonych wartości: {1}.
ASSERT_MANDATORY=Podaj brakującą wartość.
ASSERT_TARGET=Obiekt docelowy z tym kluczem nie istnieje.
MULTIPLE_ERRORS=Wystąpiło wiele błędów; zobacz szczegóły poniżej.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Czynność "{0}" wymaga, aby element "{1}" miał wartość "{2}".
INVALID_FLOW_TRANSITION_MULTI=Czynność "{0}" wymaga, aby element "{1}" miał jedną z następujących wartości: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_pt.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Insira um valor entre {1} e {2}.
ASSERT_FORMAT=Insira um valor que corresponda ao padrão {1}.
ASSERT_ENUM=Insira um dos valores permitidos: {1}.
ASSERT_MANDATORY=Forneça o valor ausente.
ASSERT_TARGET=Não existe o destino com essa chave.
MULTIPLE_ERRORS=Ocorreram vários erros, veja os detalhes abaixo.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=A ação "{0}" exige que "{1}" seja "{2}".
INVALID_FLOW_TRANSITION_MULTI=A ação "{0}" exige que "{1}" seja um dos seguintes valores: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_ro.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Introduceți o valoare între {1} și {2}.
ASSERT_FORMAT=Introduceți o valoare care corespunde cu modelul {1}.
ASSERT_ENUM=Introduceți una dintre valorile permise: {1}.
ASSERT_MANDATORY=Furnizați valoarea lipsă.
ASSERT_TARGET=Ținta cu această cheie nu există.
MULTIPLE_ERRORS=Au apărut mai multe erori, consultați detaliile mai jos.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Acțiunea "{0}" necesită ca "{1}" să fie "{2}".
INVALID_FLOW_TRANSITION_MULTI=Acțiunea "{0}" necesită ca "{1}" să fie una dintre următoarele valori: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_ru.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Введите значение в интервале от {1} до {2}.
ASSERT_FORMAT=Введите значение, соответствующее шаблону {1}.
ASSERT_ENUM=Введите одно из разрешенных значений: {1}.
ASSERT_MANDATORY=Укажите недостающее значение.
ASSERT_TARGET=Цель с этим ключом не существует.
MULTIPLE_ERRORS=Произошло несколько ошибок, подробности см. ниже.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Для операции "{0}" требуется, чтобы "{1}" было равно "{2}".
INVALID_FLOW_TRANSITION_MULTI=Для операции "{0}" требуется, чтобы "{1}" имело одно из следующих значений: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_sh.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Unesite vrednost između {1} i {2}.
ASSERT_FORMAT=Unesite vrednost koja odgovara šablonu {1}.
ASSERT_ENUM=Unesite jednu od dozvoljenih vrednosti: {1}.
ASSERT_MANDATORY=Navedite vrednost koja nedostaje.
ASSERT_TARGET=Cilj sa ovim ključem ne postoji.
MULTIPLE_ERRORS=Višestruke greške; pogledajte detalje u nastavku.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Radnja "{0}" zahteva da "{1}" bude "{2}".
INVALID_FLOW_TRANSITION_MULTI=Radnja "{0}" zahteva da "{1}" bude jedna od sledećih vrednosti: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_sk.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Zadajte hodnotu medzi {1} a {2}.
ASSERT_FORMAT=Zadajte hodnotu, ktorá sa zhoduje so šablónou {1}.
ASSERT_ENUM=Zadajte jednu z povolených hodnôt: {1}.
ASSERT_MANDATORY=Zadajte chýbajúcu hodnotu.
ASSERT_TARGET=Cieľ s týmto kľúčom neexistuje.
MULTIPLE_ERRORS=Vyskytli sa viaceré chyby, podrobnosti nájdete dolu.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Akcia "{0}" vyžaduje, aby "{1}" bolo "{2}".
INVALID_FLOW_TRANSITION_MULTI=Akcia "{0}" vyžaduje, aby "{1}" bola jedna z nasledovných hodnôt: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_sl.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Vnesite vrednost med {1} in {2}.
ASSERT_FORMAT=Vnesite vrednost, ki ustreza vzorcu {1}.
ASSERT_ENUM=Vnesite eno od dovoljenih vrednosti: {1}.
ASSERT_MANDATORY=Navedite manjkajočo vrednost.
ASSERT_TARGET=Cilj s tem ključem ne obstaja.
MULTIPLE_ERRORS=Prišlo je do več napak; detajli so na voljo spodaj.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Za akcijo "{0}" mora biti "{1}" "{2}".
INVALID_FLOW_TRANSITION_MULTI=Za akcijo "{0}" mora biti "{1}" ena od naslednjih vrednosti: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_sv.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Ange ett värde mellan {1} och {2}.
ASSERT_FORMAT=Ange ett värde som matchar mönstret {1}.
ASSERT_ENUM=Ange ett av de tillåtna värdena: {1}.
ASSERT_MANDATORY=Ange saknat värde.
ASSERT_TARGET=Mål med den här nyckeln finns inte.
MULTIPLE_ERRORS=Flera fel uppstod, se detaljerna nedan.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Åtgärd "{0}" kräver att "{1}" är "{2}".
INVALID_FLOW_TRANSITION_MULTI=Åtgärd "{0}" kräver att "{1}" är ett av följande värden: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_th.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=ป้อนค่าระหว่าง {1} ถึง {2}
ASSERT_FORMAT=ป้อนค่าที่ตรงกับรูปแบบ {1}
ASSERT_ENUM=ป้อนค่าที่อนุญาตหนึ่งค่า: {1}
ASSERT_MANDATORY=ระบุค่าที่ขาดหายไป
ASSERT_TARGET=ไม่มีเป้าหมายที่มีคีย์นี้
MULTIPLE_ERRORS=มีข้อผิดพลาดเกิดขึ้นหลายรายการ กรุณาดูรายละเอียดด้านล่าง
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=การดำเนินการ "{0}" ต้องมี "{1}" เป็น "{2}"
INVALID_FLOW_TRANSITION_MULTI=การดำเนินการ "{0}" ต้องมี "{1}" เป็นค่าใดค่าหนึ่งต่อไปนี้: {2}

```

# packages/cap-service/gen/srv/srv/_i18n/messages_tr.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE={1} ile {2} arasında bir değer girin.
ASSERT_FORMAT={1} örneğiyle eşleşen bir değer girin.
ASSERT_ENUM=İzin verilen değerlerden birini girin: {1}.
ASSERT_MANDATORY=Eksik değeri sağlayın.
ASSERT_TARGET=Bu anahtara sahip hedef mevcut değil.
MULTIPLE_ERRORS=Birden fazla hata oluştu, aşağıdaki ayrıntılara göz atın.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE="{0}" işlemi için "{1}", "{2}" olmalı.
INVALID_FLOW_TRANSITION_MULTI="{0}" işlemi için "{1}" şu değerlerden biri olmalı: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_uk.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Введіть значення між {1} і {2}.
ASSERT_FORMAT=Введіть значення, яке відповідає шаблону {1}.
ASSERT_ENUM=Введіть одне з дозволених значень: {1}.
ASSERT_MANDATORY=Вкажіть відсутнє значення.
ASSERT_TARGET=Ціль з цим ключем не існує.
MULTIPLE_ERRORS=Сталися численні помилки, див. подробиці нижче.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Операція "{0}" вимагає, щоб "{1}" був "{2}".
INVALID_FLOW_TRANSITION_MULTI=Операція "{0}" вимагає, щоб "{1}" мав одне з наступних значень: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_vi.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Nhập một số nằm trong khoảng từ {1} đến {2}.
ASSERT_FORMAT=Nhập một giá trị khớp với mẫu {1}.
ASSERT_ENUM=Nhập một trong các giá trị được phép: {1}.
ASSERT_MANDATORY=Cung cấp giá trị bị thiếu.
ASSERT_TARGET=Phiên bản đích có khóa này không tồn tại.
MULTIPLE_ERRORS=Đã xảy ra nhiều lỗi, xem chi tiết bên dưới.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Hành động "{0}" yêu cầu "{1}" phải là "{2}".
INVALID_FLOW_TRANSITION_MULTI=Hành động "{0}" yêu cầu "{1}" phải là một trong các giá trị sau đây: {2}.

```

# packages/cap-service/gen/srv/srv/_i18n/messages_zh_CN.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=输入一个介于 {1} 和 {2} 之间的值。
ASSERT_FORMAT=输入一个符合模式 {1} 的值。
ASSERT_ENUM=输入其中一个允许的值：{1}。
ASSERT_MANDATORY=提供缺少的值。
ASSERT_TARGET=具有此键值的目标不存在。
MULTIPLE_ERRORS=出现多个错误，请参阅下面的详细信息。
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=操作 "{0}" 要求 "{1}" 必须为 "{2}"。
INVALID_FLOW_TRANSITION_MULTI=操作 "{0}" 要求 "{1}" 必须为以下值之一：{2}。

```

# packages/cap-service/gen/srv/srv/_i18n/messages_zh_TW.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=請輸入介於 {1} 到 {2} 之間的值。
ASSERT_FORMAT=請輸入符合模式 {1} 的值。
ASSERT_ENUM=請輸入其中一個允許的值：{1}。
ASSERT_MANDATORY=請提供缺少的值。
ASSERT_TARGET=含有此鍵值的目標不存在。
MULTIPLE_ERRORS=發生多個錯誤，請查看下方詳細資料。
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=動作 "{0}" 需要 "{1}" 是 "{2}"。
INVALID_FLOW_TRANSITION_MULTI=動作 "{0}" 需要 "{1}" 是下列其中一個值：{2}。

```

# packages/cap-service/gen/srv/srv/_i18n/messages.properties

```properties
400=Bad Request
401=Unauthorized
403=Forbidden
404=Not Found
405=Method Not Allowed
406=Not Acceptable
407=Proxy Authentication Required
408=Request Timeout
409=Conflict
410=Gone
411=Length Required
412=Precondition Failed
413=Payload Too Large
414=URI Too Long
415=Unsupported Media Type
416=Range Not Satisfiable
417=Expectation Failed
422=Unprocessable Content
424=Failed Dependency
428=Precondition Required
429=Too Many Requests
431=Request Header Fields Too Large
451=Unavailable For Legal Reasons
500=Internal Server Error
501=The server does not support the functionality required to fulfill the request
502=Bad Gateway
503=Service Unavailable
504=Gateway Timeout
ASSERT_RANGE=Enter a value between {1} and {2}.
ASSERT_FORMAT=Enter a value matching the pattern {1}.
ASSERT_ENUM=Enter one of the allowed values: {1}.
ASSERT_MANDATORY=Provide the missing value.
ASSERT_TARGET=Target with this key doesn't exist.
MULTIPLE_ERRORS=Multiple errors occurred, see details below.
ASSERT_VALID_ELEMENT=Element is not valid
ASSERT_DATA_TYPE=Value {0} is not a valid {1}
ASSERT_ARRAY=Value must be an array
ENTITY=entity
TYPE=type
FUNCTION=function
ACTION=action
NO_DATABASE_CONNECTION=No database connection
ENTITY_ALREADY_EXISTS=Entity already exists
ENTITY_LOCKED=Entity locked
UNIQUE_CONSTRAINT_VIOLATION=Unique constraint violation
FK_CONSTRAINT_VIOLATION=Foreign key constraint violation
INVALID_CONTENT_TYPE_ONLY_JSON=Invalid content type. Only "application/json" is supported.
INSERTABLE=insertable
READABLE=readable
UPDATABLE=updatable
DELETABLE=deletable
ENTITY_IS_INSERT_ONLY=Entity "{0}" is insert-only
ENTITY_IS_READ_ONLY=Entity "{0}" is read-only
ENTITY_IS_NOT_CRUD=Entity "{0}" is not {1}
ENTITY_IS_NOT_CRUD_VIA_NAVIGATION=Entity "{0}" is not {1} via navigation "{2}"
ENTITY_IS_AUTOEXPOSED=Entity "{0}" is not explicitly exposed as part of the service
ENTITY_IS_AUTOEXPOSE_READONLY=Entity "{0}" is explicitly exposed as readonly
EXPAND_IS_RESTRICTED=Navigation property "{0}" is not allowed for expand operation
EXPAND_MAX_LEVELS_EXCEEDED=Expand depth exceeds the maximum allowed level of {0}
INVALID_RESOURCE="{0}" is not a valid resource
INVALID_PARAMETER="{0}" is not a valid parameter
INVALID_PARAMETER_VALUE_TYPE=Parameter value for "{0}" must be of type "{1}"
INVALID_OPERATION_FOR_ENTITY=Entity "{0}" has no {1} "{2}"
NO_MATCHING_RESOURCE=The server has not found a resource matching the requested URI
INVALID_POST=POST is only allowed on resource collections and actions
INVALID_PUT=PUT is only allowed on a specific resource
INVALID_PATCH=PATCH is only allowed on a specific resource
INVALID_DELETE=DELETE is only supported on a specific resource
CRUD_VIA_NAVIGATION_NOT_SUPPORTED=CRUD via navigations is not yet supported
BATCH_TOO_MANY_REQ=Batch request contains too many requests
DRAFT_LOCKED_BY_ANOTHER_USER=The entity is locked by user "{0}"
DRAFT_ALREADY_EXISTS=A draft for this entity already exists
DRAFT_NOT_EXISTING=No draft for this entity exists
DRAFT_MODIFICATION_ONLY_VIA_ROOT=A draft-enabled entity can only be modified via its root entity
ACTIVE_MODIFICATION_VIA_DRAFT=Active entities cannot be modified via draft request
DRAFT_ACTIVE_DELETE_FORBIDDEN_DRAFT_EXISTS=Entity cannot be deleted because a draft exists
SINGLETON_NOT_NULLABLE=The singleton entity is not nullable
INVALID_FLOW_TRANSITION_SINGLE=Action "{0}" requires "{1}" to be "{2}".
INVALID_FLOW_TRANSITION_MULTI=Action "{0}" requires "{1}" to be one of the following values: {2}.

```

# packages/cap-service/gen/srv/srv/csn.json

```json
{
  "namespace": "FMCGDATA",
  "definitions": {
    "FMCGDATA.Products": {
      "kind": "entity",
      "includes": [
        "cuid",
        "managed"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "createdAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "createdBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "modifiedAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@cds.on.update": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "modifiedBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@cds.on.update": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "sku": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "name": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 120
        },
        "brand": {
          "type": "cds.String",
          "length": 80
        },
        "category": {
          "type": "cds.String",
          "length": 60
        },
        "description": {
          "type": "cds.String",
          "length": 500
        },
        "packSize": {
          "type": "cds.String",
          "length": 40
        },
        "unit": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "EA"
          }
        },
        "stockQuantity": {
          "type": "cds.Integer",
          "default": {
            "val": 0
          }
        },
        "reorderLevel": {
          "type": "cds.Integer",
          "default": {
            "val": 0
          }
        },
        "isActive": {
          "type": "cds.Boolean",
          "default": {
            "val": true
          }
        }
      }
    },
    "FMCGDATA.RetailPrices": {
      "kind": "entity",
      "includes": [
        "cuid",
        "managed"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "createdAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "createdBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "modifiedAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@cds.on.update": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "modifiedBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@cds.on.update": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "product": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "FMCGDATA.Products",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "mrp": {
          "@mandatory": true,
          "type": "cds.Decimal",
          "precision": 12,
          "scale": 2
        },
        "retailerPrice": {
          "@mandatory": true,
          "type": "cds.Decimal",
          "precision": 12,
          "scale": 2
        },
        "currency": {
          "type": "cds.String",
          "length": 3,
          "default": {
            "val": "INR"
          }
        },
        "validFrom": {
          "@mandatory": true,
          "type": "cds.Date"
        },
        "validTo": {
          "@mandatory": true,
          "type": "cds.Date"
        }
      }
    },
    "FMCGDATA.Schemes": {
      "kind": "entity",
      "includes": [
        "cuid",
        "managed"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "createdAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "createdBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "modifiedAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@cds.on.update": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "modifiedBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@cds.on.update": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "schemeCode": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "name": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 120
        },
        "description": {
          "type": "cds.String",
          "length": 500
        },
        "discountType": {
          "type": "cds.String",
          "length": 20
        },
        "discountValue": {
          "type": "cds.Decimal",
          "precision": 12,
          "scale": 2
        },
        "minQuantity": {
          "type": "cds.Integer",
          "default": {
            "val": 1
          }
        },
        "validFrom": {
          "@mandatory": true,
          "type": "cds.Date"
        },
        "validTo": {
          "@mandatory": true,
          "type": "cds.Date"
        },
        "isActive": {
          "type": "cds.Boolean",
          "default": {
            "val": true
          }
        }
      }
    },
    "FMCGDATA.SchemeProducts": {
      "kind": "entity",
      "includes": [
        "cuid"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "scheme": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "FMCGDATA.Schemes",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "product": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "FMCGDATA.Products",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        }
      }
    },
    "FMCGDATA.Retailers": {
      "kind": "entity",
      "includes": [
        "cuid",
        "managed"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "createdAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "createdBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "modifiedAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@cds.on.update": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "modifiedBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@cds.on.update": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "retailerCode": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "name": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 120
        },
        "contactName": {
          "type": "cds.String",
          "length": 100
        },
        "phone": {
          "type": "cds.String",
          "length": 25
        },
        "email": {
          "type": "cds.String",
          "length": 120
        },
        "city": {
          "type": "cds.String",
          "length": 80
        },
        "state": {
          "type": "cds.String",
          "length": 80
        },
        "channel": {
          "type": "cds.String",
          "length": 30
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "ACTIVE"
          }
        }
      }
    },
    "FMCGDATA.Interactions": {
      "kind": "entity",
      "includes": [
        "cuid",
        "managed"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "createdAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "createdBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "modifiedAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@cds.on.update": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "modifiedBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@cds.on.update": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "interactionNumber": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "retailer": {
          "type": "cds.Association",
          "target": "FMCGDATA.Retailers",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "channel": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "VOICE"
          }
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "IN_PROGRESS"
          }
        },
        "startedAt": {
          "type": "cds.Timestamp"
        },
        "endedAt": {
          "type": "cds.Timestamp"
        },
        "summary": {
          "type": "cds.LargeString"
        },
        "outcome": {
          "type": "cds.String",
          "length": 40
        },
        "followUpRequired": {
          "type": "cds.Boolean",
          "default": {
            "val": false
          }
        },
        "messages": {
          "type": "cds.Association",
          "cardinality": {
            "max": "*"
          },
          "target": "FMCGDATA.InteractionMessages",
          "on": [
            {
              "ref": [
                "messages",
                "interaction"
              ]
            },
            "=",
            {
              "ref": [
                "$self"
              ]
            }
          ]
        },
        "items": {
          "type": "cds.Association",
          "cardinality": {
            "max": "*"
          },
          "target": "FMCGDATA.InteractionItems",
          "on": [
            {
              "ref": [
                "items",
                "interaction"
              ]
            },
            "=",
            {
              "ref": [
                "$self"
              ]
            }
          ]
        },
        "followUps": {
          "type": "cds.Association",
          "cardinality": {
            "max": "*"
          },
          "target": "FMCGDATA.FollowUps",
          "on": [
            {
              "ref": [
                "followUps",
                "interaction"
              ]
            },
            "=",
            {
              "ref": [
                "$self"
              ]
            }
          ]
        }
      }
    },
    "FMCGDATA.InteractionMessages": {
      "kind": "entity",
      "includes": [
        "cuid"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "interaction": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "FMCGDATA.Interactions",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "role": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 20
        },
        "content": {
          "@mandatory": true,
          "type": "cds.LargeString"
        },
        "createdAt": {
          "type": "cds.Timestamp"
        }
      }
    },
    "FMCGDATA.InteractionItems": {
      "kind": "entity",
      "includes": [
        "cuid"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "interaction": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "FMCGDATA.Interactions",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "product": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "FMCGDATA.Products",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "requestedQuantity": {
          "@mandatory": true,
          "type": "cds.Integer"
        },
        "unit": {
          "type": "cds.String",
          "length": 20
        },
        "interestStatus": {
          "type": "cds.String",
          "length": 30,
          "default": {
            "val": "INTERESTED"
          }
        },
        "notes": {
          "type": "cds.String",
          "length": 500
        }
      }
    },
    "FMCGDATA.FollowUps": {
      "kind": "entity",
      "includes": [
        "cuid",
        "managed"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "createdAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "createdBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "modifiedAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@cds.on.update": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "modifiedBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@cds.on.update": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "interaction": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "FMCGDATA.Interactions",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "followUpDate": {
          "type": "cds.Date"
        },
        "requirement": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 500
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "OPEN"
          }
        },
        "assignedTo": {
          "type": "cds.String",
          "length": 100
        }
      }
    },
    "procurement.Vendors": {
      "kind": "entity",
      "includes": [
        "cuid",
        "managed"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "createdAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "createdBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "modifiedAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@cds.on.update": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "modifiedBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@cds.on.update": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "name": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 120
        },
        "taxId": {
          "type": "cds.String",
          "length": 30
        },
        "country": {
          "type": "cds.String",
          "length": 2
        },
        "email": {
          "type": "cds.String",
          "length": 120
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "ACTIVE"
          }
        },
        "purchaseOrders": {
          "type": "cds.Association",
          "cardinality": {
            "max": "*"
          },
          "target": "procurement.PurchaseOrders",
          "on": [
            {
              "ref": [
                "purchaseOrders",
                "vendor"
              ]
            },
            "=",
            {
              "ref": [
                "$self"
              ]
            }
          ]
        }
      }
    },
    "procurement.PurchaseOrders": {
      "kind": "entity",
      "includes": [
        "cuid",
        "managed"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "createdAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "createdBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "modifiedAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@cds.on.update": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "modifiedBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@cds.on.update": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "poNumber": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 20
        },
        "vendor": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "procurement.Vendors",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "orderDate": {
          "type": "cds.Date"
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "CREATED"
          }
        },
        "currency": {
          "type": "cds.String",
          "length": 3,
          "default": {
            "val": "USD"
          }
        },
        "totalAmount": {
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        },
        "lineItems": {
          "type": "cds.Composition",
          "cardinality": {
            "max": "*"
          },
          "target": "procurement.POLineItems",
          "on": [
            {
              "ref": [
                "lineItems",
                "purchaseOrder"
              ]
            },
            "=",
            {
              "ref": [
                "$self"
              ]
            }
          ]
        }
      }
    },
    "procurement.POLineItems": {
      "kind": "entity",
      "includes": [
        "cuid"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "purchaseOrder": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "procurement.PurchaseOrders",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "material": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "procurement.InventoryItems",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "quantity": {
          "@mandatory": true,
          "type": "cds.Integer"
        },
        "receivedQuantity": {
          "type": "cds.Integer",
          "default": {
            "val": 0
          }
        },
        "unitPrice": {
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        }
      }
    },
    "procurement.InventoryItems": {
      "kind": "entity",
      "includes": [
        "cuid",
        "managed"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "createdAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "createdBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "modifiedAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@cds.on.update": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "modifiedBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@cds.on.update": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "materialId": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "description": {
          "type": "cds.String",
          "length": 200
        },
        "quantityOnHand": {
          "type": "cds.Integer",
          "default": {
            "val": 0
          }
        },
        "reorderPoint": {
          "type": "cds.Integer",
          "default": {
            "val": 10
          }
        },
        "unit": {
          "type": "cds.String",
          "length": 10,
          "default": {
            "val": "EA"
          }
        },
        "warehouse": {
          "type": "cds.String",
          "length": 50
        }
      }
    },
    "procurement.PurchasingInfoRecords": {
      "kind": "entity",
      "includes": [
        "cuid",
        "managed"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "createdAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "createdBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "modifiedAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@cds.on.update": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "modifiedBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@cds.on.update": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "vendor": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "procurement.Vendors",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "material": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "procurement.InventoryItems",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "price": {
          "@mandatory": true,
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        },
        "currency": {
          "type": "cds.String",
          "length": 3,
          "default": {
            "val": "USD"
          }
        },
        "validFrom": {
          "@mandatory": true,
          "type": "cds.Date"
        },
        "validTo": {
          "@mandatory": true,
          "type": "cds.Date"
        }
      }
    },
    "procurement.Quotations": {
      "kind": "entity",
      "includes": [
        "cuid",
        "managed"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "createdAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "createdBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "modifiedAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@cds.on.update": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "modifiedBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@cds.on.update": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "quotationId": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "vendor": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "procurement.Vendors",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "material": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "procurement.InventoryItems",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "quantity": {
          "@mandatory": true,
          "type": "cds.Integer"
        },
        "price": {
          "@mandatory": true,
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        },
        "currency": {
          "type": "cds.String",
          "length": 3,
          "default": {
            "val": "USD"
          }
        },
        "validUntil": {
          "@mandatory": true,
          "type": "cds.Date"
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "OPEN"
          }
        }
      }
    },
    "procurement.SupplierInvoices": {
      "kind": "entity",
      "includes": [
        "cuid",
        "managed"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "createdAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "createdBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "modifiedAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@cds.on.update": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "modifiedBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@cds.on.update": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "invoiceNumber": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "purchaseOrder": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "procurement.PurchaseOrders",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "vendor": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "procurement.Vendors",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "invoiceDate": {
          "type": "cds.Date"
        },
        "postingDate": {
          "type": "cds.Date"
        },
        "currency": {
          "type": "cds.String",
          "length": 3,
          "default": {
            "val": "USD"
          }
        },
        "totalAmount": {
          "@mandatory": true,
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "CREATED"
          }
        },
        "lineItems": {
          "type": "cds.Composition",
          "cardinality": {
            "max": "*"
          },
          "target": "procurement.SupplierInvoiceItems",
          "on": [
            {
              "ref": [
                "lineItems",
                "invoice"
              ]
            },
            "=",
            {
              "ref": [
                "$self"
              ]
            }
          ]
        }
      }
    },
    "procurement.SupplierInvoiceItems": {
      "kind": "entity",
      "includes": [
        "cuid"
      ],
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "invoice": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "procurement.SupplierInvoices",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "material": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "procurement.InventoryItems",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "quantity": {
          "@mandatory": true,
          "type": "cds.Integer"
        },
        "unitPrice": {
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        },
        "amount": {
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        }
      }
    },
    "ProcurementService": {
      "@source": "srv/procurement-service.cds",
      "kind": "service",
      "@path": "/odata/v4/procurement"
    },
    "ProcurementService.Vendors": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "procurement.Vendors"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "name"
            ]
          },
          {
            "ref": [
              "taxId"
            ]
          },
          {
            "ref": [
              "country"
            ]
          },
          {
            "ref": [
              "email"
            ]
          },
          {
            "ref": [
              "status"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "name": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 120
        },
        "taxId": {
          "type": "cds.String",
          "length": 30
        },
        "country": {
          "type": "cds.String",
          "length": 2
        },
        "email": {
          "type": "cds.String",
          "length": 120
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "ACTIVE"
          }
        }
      }
    },
    "ProcurementService.PurchaseOrders": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "procurement.PurchaseOrders"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "poNumber"
            ]
          },
          {
            "ref": [
              "vendor"
            ]
          },
          {
            "ref": [
              "orderDate"
            ]
          },
          {
            "ref": [
              "status"
            ]
          },
          {
            "ref": [
              "currency"
            ]
          },
          {
            "ref": [
              "totalAmount"
            ]
          },
          {
            "ref": [
              "lineItems"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "poNumber": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 20
        },
        "vendor": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "ProcurementService.Vendors",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "orderDate": {
          "type": "cds.Date"
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "CREATED"
          }
        },
        "currency": {
          "type": "cds.String",
          "length": 3,
          "default": {
            "val": "USD"
          }
        },
        "totalAmount": {
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        },
        "lineItems": {
          "type": "cds.Composition",
          "cardinality": {
            "max": "*"
          },
          "target": "ProcurementService.POLineItems",
          "on": [
            {
              "ref": [
                "lineItems",
                "purchaseOrder"
              ]
            },
            "=",
            {
              "ref": [
                "$self"
              ]
            }
          ]
        }
      }
    },
    "ProcurementService.POLineItems": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "procurement.POLineItems"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "purchaseOrder"
            ]
          },
          {
            "ref": [
              "material"
            ]
          },
          {
            "ref": [
              "quantity"
            ]
          },
          {
            "ref": [
              "receivedQuantity"
            ]
          },
          {
            "ref": [
              "unitPrice"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "purchaseOrder": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "ProcurementService.PurchaseOrders",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "material": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "ProcurementService.InventoryItems",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "quantity": {
          "@mandatory": true,
          "type": "cds.Integer"
        },
        "receivedQuantity": {
          "type": "cds.Integer",
          "default": {
            "val": 0
          }
        },
        "unitPrice": {
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        }
      }
    },
    "ProcurementService.SupplierInvoices": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "procurement.SupplierInvoices"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "invoiceNumber"
            ]
          },
          {
            "ref": [
              "purchaseOrder"
            ]
          },
          {
            "ref": [
              "vendor"
            ]
          },
          {
            "ref": [
              "invoiceDate"
            ]
          },
          {
            "ref": [
              "postingDate"
            ]
          },
          {
            "ref": [
              "currency"
            ]
          },
          {
            "ref": [
              "totalAmount"
            ]
          },
          {
            "ref": [
              "status"
            ]
          },
          {
            "ref": [
              "lineItems"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "invoiceNumber": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "purchaseOrder": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "ProcurementService.PurchaseOrders",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "vendor": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "ProcurementService.Vendors",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "invoiceDate": {
          "type": "cds.Date"
        },
        "postingDate": {
          "type": "cds.Date"
        },
        "currency": {
          "type": "cds.String",
          "length": 3,
          "default": {
            "val": "USD"
          }
        },
        "totalAmount": {
          "@mandatory": true,
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "CREATED"
          }
        },
        "lineItems": {
          "type": "cds.Composition",
          "cardinality": {
            "max": "*"
          },
          "target": "ProcurementService.SupplierInvoiceItems",
          "on": [
            {
              "ref": [
                "lineItems",
                "invoice"
              ]
            },
            "=",
            {
              "ref": [
                "$self"
              ]
            }
          ]
        }
      }
    },
    "ProcurementService.SupplierInvoiceItems": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "procurement.SupplierInvoiceItems"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "invoice"
            ]
          },
          {
            "ref": [
              "material"
            ]
          },
          {
            "ref": [
              "quantity"
            ]
          },
          {
            "ref": [
              "unitPrice"
            ]
          },
          {
            "ref": [
              "amount"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "invoice": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "ProcurementService.SupplierInvoices",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "material": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "ProcurementService.InventoryItems",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "quantity": {
          "@mandatory": true,
          "type": "cds.Integer"
        },
        "unitPrice": {
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        },
        "amount": {
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        }
      }
    },
    "ProcurementService.InventoryItems": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "procurement.InventoryItems"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "materialId"
            ]
          },
          {
            "ref": [
              "description"
            ]
          },
          {
            "ref": [
              "quantityOnHand"
            ]
          },
          {
            "ref": [
              "reorderPoint"
            ]
          },
          {
            "ref": [
              "unit"
            ]
          },
          {
            "ref": [
              "warehouse"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "materialId": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "description": {
          "type": "cds.String",
          "length": 200
        },
        "quantityOnHand": {
          "type": "cds.Integer",
          "default": {
            "val": 0
          }
        },
        "reorderPoint": {
          "type": "cds.Integer",
          "default": {
            "val": 10
          }
        },
        "unit": {
          "type": "cds.String",
          "length": 10,
          "default": {
            "val": "EA"
          }
        },
        "warehouse": {
          "type": "cds.String",
          "length": 50
        }
      }
    },
    "ProcurementService.PurchasingInfoRecords": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "procurement.PurchasingInfoRecords"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "vendor"
            ]
          },
          {
            "ref": [
              "material"
            ]
          },
          {
            "ref": [
              "price"
            ]
          },
          {
            "ref": [
              "currency"
            ]
          },
          {
            "ref": [
              "validFrom"
            ]
          },
          {
            "ref": [
              "validTo"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "vendor": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "ProcurementService.Vendors",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "material": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "ProcurementService.InventoryItems",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "price": {
          "@mandatory": true,
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        },
        "currency": {
          "type": "cds.String",
          "length": 3,
          "default": {
            "val": "USD"
          }
        },
        "validFrom": {
          "@mandatory": true,
          "type": "cds.Date"
        },
        "validTo": {
          "@mandatory": true,
          "type": "cds.Date"
        }
      }
    },
    "ProcurementService.Quotations": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "procurement.Quotations"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "quotationId"
            ]
          },
          {
            "ref": [
              "vendor"
            ]
          },
          {
            "ref": [
              "material"
            ]
          },
          {
            "ref": [
              "quantity"
            ]
          },
          {
            "ref": [
              "price"
            ]
          },
          {
            "ref": [
              "currency"
            ]
          },
          {
            "ref": [
              "validUntil"
            ]
          },
          {
            "ref": [
              "status"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "quotationId": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "vendor": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "ProcurementService.Vendors",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "material": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "ProcurementService.InventoryItems",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "quantity": {
          "@mandatory": true,
          "type": "cds.Integer"
        },
        "price": {
          "@mandatory": true,
          "type": "cds.Decimal",
          "precision": 15,
          "scale": 2
        },
        "currency": {
          "type": "cds.String",
          "length": 3,
          "default": {
            "val": "USD"
          }
        },
        "validUntil": {
          "@mandatory": true,
          "type": "cds.Date"
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "OPEN"
          }
        }
      }
    },
    "ProcurementService.isLowStock": {
      "kind": "function",
      "params": {
        "materialId": {
          "type": "cds.String"
        }
      },
      "returns": {
        "type": "cds.Boolean"
      }
    },
    "RetailService": {
      "@source": "srv/retail-service.cds",
      "kind": "service",
      "@path": "/odata/v4/retail"
    },
    "RetailService.Products": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "FMCGDATA.Products"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "sku"
            ]
          },
          {
            "ref": [
              "name"
            ]
          },
          {
            "ref": [
              "brand"
            ]
          },
          {
            "ref": [
              "category"
            ]
          },
          {
            "ref": [
              "description"
            ]
          },
          {
            "ref": [
              "packSize"
            ]
          },
          {
            "ref": [
              "unit"
            ]
          },
          {
            "ref": [
              "stockQuantity"
            ]
          },
          {
            "ref": [
              "reorderLevel"
            ]
          },
          {
            "ref": [
              "isActive"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "sku": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "name": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 120
        },
        "brand": {
          "type": "cds.String",
          "length": 80
        },
        "category": {
          "type": "cds.String",
          "length": 60
        },
        "description": {
          "type": "cds.String",
          "length": 500
        },
        "packSize": {
          "type": "cds.String",
          "length": 40
        },
        "unit": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "EA"
          }
        },
        "stockQuantity": {
          "type": "cds.Integer",
          "default": {
            "val": 0
          }
        },
        "reorderLevel": {
          "type": "cds.Integer",
          "default": {
            "val": 0
          }
        },
        "isActive": {
          "type": "cds.Boolean",
          "default": {
            "val": true
          }
        }
      }
    },
    "RetailService.RetailPrices": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "FMCGDATA.RetailPrices"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "product"
            ]
          },
          {
            "ref": [
              "mrp"
            ]
          },
          {
            "ref": [
              "retailerPrice"
            ]
          },
          {
            "ref": [
              "currency"
            ]
          },
          {
            "ref": [
              "validFrom"
            ]
          },
          {
            "ref": [
              "validTo"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "product": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "RetailService.Products",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "mrp": {
          "@mandatory": true,
          "type": "cds.Decimal",
          "precision": 12,
          "scale": 2
        },
        "retailerPrice": {
          "@mandatory": true,
          "type": "cds.Decimal",
          "precision": 12,
          "scale": 2
        },
        "currency": {
          "type": "cds.String",
          "length": 3,
          "default": {
            "val": "INR"
          }
        },
        "validFrom": {
          "@mandatory": true,
          "type": "cds.Date"
        },
        "validTo": {
          "@mandatory": true,
          "type": "cds.Date"
        }
      }
    },
    "RetailService.Schemes": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "FMCGDATA.Schemes"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "schemeCode"
            ]
          },
          {
            "ref": [
              "name"
            ]
          },
          {
            "ref": [
              "description"
            ]
          },
          {
            "ref": [
              "discountType"
            ]
          },
          {
            "ref": [
              "discountValue"
            ]
          },
          {
            "ref": [
              "minQuantity"
            ]
          },
          {
            "ref": [
              "validFrom"
            ]
          },
          {
            "ref": [
              "validTo"
            ]
          },
          {
            "ref": [
              "isActive"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "schemeCode": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "name": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 120
        },
        "description": {
          "type": "cds.String",
          "length": 500
        },
        "discountType": {
          "type": "cds.String",
          "length": 20
        },
        "discountValue": {
          "type": "cds.Decimal",
          "precision": 12,
          "scale": 2
        },
        "minQuantity": {
          "type": "cds.Integer",
          "default": {
            "val": 1
          }
        },
        "validFrom": {
          "@mandatory": true,
          "type": "cds.Date"
        },
        "validTo": {
          "@mandatory": true,
          "type": "cds.Date"
        },
        "isActive": {
          "type": "cds.Boolean",
          "default": {
            "val": true
          }
        }
      }
    },
    "RetailService.SchemeProducts": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "FMCGDATA.SchemeProducts"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "scheme"
            ]
          },
          {
            "ref": [
              "product"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "scheme": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "RetailService.Schemes",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "product": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "RetailService.Products",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        }
      }
    },
    "RetailService.Retailers": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "FMCGDATA.Retailers"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "retailerCode"
            ]
          },
          {
            "ref": [
              "name"
            ]
          },
          {
            "ref": [
              "contactName"
            ]
          },
          {
            "ref": [
              "phone"
            ]
          },
          {
            "ref": [
              "email"
            ]
          },
          {
            "ref": [
              "city"
            ]
          },
          {
            "ref": [
              "state"
            ]
          },
          {
            "ref": [
              "channel"
            ]
          },
          {
            "ref": [
              "status"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "retailerCode": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "name": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 120
        },
        "contactName": {
          "type": "cds.String",
          "length": 100
        },
        "phone": {
          "type": "cds.String",
          "length": 25
        },
        "email": {
          "type": "cds.String",
          "length": 120
        },
        "city": {
          "type": "cds.String",
          "length": 80
        },
        "state": {
          "type": "cds.String",
          "length": 80
        },
        "channel": {
          "type": "cds.String",
          "length": 30
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "ACTIVE"
          }
        }
      }
    },
    "RetailService.Interactions": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "FMCGDATA.Interactions"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "interactionNumber"
            ]
          },
          {
            "ref": [
              "retailer"
            ]
          },
          {
            "ref": [
              "channel"
            ]
          },
          {
            "ref": [
              "status"
            ]
          },
          {
            "ref": [
              "startedAt"
            ]
          },
          {
            "ref": [
              "endedAt"
            ]
          },
          {
            "ref": [
              "summary"
            ]
          },
          {
            "ref": [
              "outcome"
            ]
          },
          {
            "ref": [
              "followUpRequired"
            ]
          },
          {
            "ref": [
              "messages"
            ]
          },
          {
            "ref": [
              "items"
            ]
          },
          {
            "ref": [
              "followUps"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "interactionNumber": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 30
        },
        "retailer": {
          "type": "cds.Association",
          "target": "RetailService.Retailers",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "channel": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "VOICE"
          }
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "IN_PROGRESS"
          }
        },
        "startedAt": {
          "type": "cds.Timestamp"
        },
        "endedAt": {
          "type": "cds.Timestamp"
        },
        "summary": {
          "type": "cds.LargeString"
        },
        "outcome": {
          "type": "cds.String",
          "length": 40
        },
        "followUpRequired": {
          "type": "cds.Boolean",
          "default": {
            "val": false
          }
        },
        "messages": {
          "type": "cds.Association",
          "cardinality": {
            "max": "*"
          },
          "target": "RetailService.InteractionMessages",
          "on": [
            {
              "ref": [
                "messages",
                "interaction"
              ]
            },
            "=",
            {
              "ref": [
                "$self"
              ]
            }
          ]
        },
        "items": {
          "type": "cds.Association",
          "cardinality": {
            "max": "*"
          },
          "target": "RetailService.InteractionItems",
          "on": [
            {
              "ref": [
                "items",
                "interaction"
              ]
            },
            "=",
            {
              "ref": [
                "$self"
              ]
            }
          ]
        },
        "followUps": {
          "type": "cds.Association",
          "cardinality": {
            "max": "*"
          },
          "target": "RetailService.FollowUps",
          "on": [
            {
              "ref": [
                "followUps",
                "interaction"
              ]
            },
            "=",
            {
              "ref": [
                "$self"
              ]
            }
          ]
        }
      }
    },
    "RetailService.InteractionMessages": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "FMCGDATA.InteractionMessages"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "interaction"
            ]
          },
          {
            "ref": [
              "role"
            ]
          },
          {
            "ref": [
              "content"
            ]
          },
          {
            "ref": [
              "createdAt"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "interaction": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "RetailService.Interactions",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "role": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 20
        },
        "content": {
          "@mandatory": true,
          "type": "cds.LargeString"
        },
        "createdAt": {
          "type": "cds.Timestamp"
        }
      }
    },
    "RetailService.InteractionItems": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "FMCGDATA.InteractionItems"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "interaction"
            ]
          },
          {
            "ref": [
              "product"
            ]
          },
          {
            "ref": [
              "requestedQuantity"
            ]
          },
          {
            "ref": [
              "unit"
            ]
          },
          {
            "ref": [
              "interestStatus"
            ]
          },
          {
            "ref": [
              "notes"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "interaction": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "RetailService.Interactions",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "product": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "RetailService.Products",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "requestedQuantity": {
          "@mandatory": true,
          "type": "cds.Integer"
        },
        "unit": {
          "type": "cds.String",
          "length": 20
        },
        "interestStatus": {
          "type": "cds.String",
          "length": 30,
          "default": {
            "val": "INTERESTED"
          }
        },
        "notes": {
          "type": "cds.String",
          "length": 500
        }
      }
    },
    "RetailService.FollowUps": {
      "kind": "entity",
      "@requires": "authenticated-user",
      "projection": {
        "from": {
          "ref": [
            "FMCGDATA.FollowUps"
          ]
        },
        "columns": [
          {
            "ref": [
              "ID"
            ]
          },
          {
            "ref": [
              "interaction"
            ]
          },
          {
            "ref": [
              "followUpDate"
            ]
          },
          {
            "ref": [
              "requirement"
            ]
          },
          {
            "ref": [
              "status"
            ]
          },
          {
            "ref": [
              "assignedTo"
            ]
          }
        ]
      },
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "interaction": {
          "@mandatory": true,
          "type": "cds.Association",
          "target": "RetailService.Interactions",
          "keys": [
            {
              "ref": [
                "ID"
              ]
            }
          ]
        },
        "followUpDate": {
          "type": "cds.Date"
        },
        "requirement": {
          "@mandatory": true,
          "type": "cds.String",
          "length": 500
        },
        "status": {
          "type": "cds.String",
          "length": 20,
          "default": {
            "val": "OPEN"
          }
        },
        "assignedTo": {
          "type": "cds.String",
          "length": 100
        }
      }
    },
    "cds.outbox.Messages": {
      "kind": "entity",
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        },
        "timestamp": {
          "type": "cds.Timestamp"
        },
        "target": {
          "type": "cds.String"
        },
        "msg": {
          "type": "cds.LargeString"
        },
        "attempts": {
          "type": "cds.Integer",
          "default": {
            "val": 0
          }
        },
        "partition": {
          "type": "cds.Integer",
          "default": {
            "val": 0
          }
        },
        "lastError": {
          "type": "cds.LargeString"
        },
        "lastAttemptTimestamp": {
          "type": "cds.Timestamp"
        },
        "status": {
          "type": "cds.String",
          "length": 23
        },
        "task": {
          "type": "cds.String",
          "length": 255
        },
        "appid": {
          "type": "cds.String",
          "length": 255
        }
      }
    },
    "Language": {
      "kind": "type",
      "@title": "{i18n>Language}",
      "@description": "{i18n>LanguageCode.Description}",
      "type": "cds.Association",
      "target": "sap.common.Languages",
      "keys": [
        {
          "ref": [
            "code"
          ]
        }
      ]
    },
    "Currency": {
      "kind": "type",
      "@title": "{i18n>Currency}",
      "@description": "{i18n>CurrencyCode.Description}",
      "type": "cds.Association",
      "target": "sap.common.Currencies",
      "keys": [
        {
          "ref": [
            "code"
          ]
        }
      ]
    },
    "Country": {
      "kind": "type",
      "@title": "{i18n>Country}",
      "@description": "{i18n>CountryCode.Description}",
      "type": "cds.Association",
      "target": "sap.common.Countries",
      "keys": [
        {
          "ref": [
            "code"
          ]
        }
      ]
    },
    "Timezone": {
      "kind": "type",
      "type": "cds.Association",
      "target": "sap.common.Timezones",
      "keys": [
        {
          "ref": [
            "code"
          ]
        }
      ]
    },
    "sap.common": {
      "kind": "context"
    },
    "sap.common.Locale": {
      "kind": "type",
      "@title": "{i18n>LanguageCode}",
      "type": "cds.String",
      "length": 14
    },
    "sap.common.Languages": {
      "kind": "entity",
      "@cds.autoexpose": true,
      "@cds.persistence.skip": "if-unused",
      "@UI.Identification": [
        {
          "Value": {
            "=": "name"
          }
        }
      ],
      "@cds.odata.valuelist": true,
      "includes": [
        "sap.common.CodeList"
      ],
      "elements": {
        "name": {
          "@title": "{i18n>Name}",
          "localized": true,
          "type": "cds.String",
          "length": 255
        },
        "descr": {
          "@title": "{i18n>Description}",
          "localized": true,
          "type": "cds.String",
          "length": 1000
        },
        "code": {
          "@Common.Text": {
            "=": "name"
          },
          "@title": "{i18n>LanguageCode}",
          "key": true,
          "type": "sap.common.Locale",
          "length": 14
        },
        "texts": {
          "type": "cds.Composition",
          "cardinality": {
            "max": "*"
          },
          "target": "sap.common.Languages.texts",
          "on": [
            {
              "ref": [
                "texts",
                "code"
              ]
            },
            "=",
            {
              "ref": [
                "code"
              ]
            }
          ]
        },
        "localized": {
          "type": "cds.Association",
          "target": "sap.common.Languages.texts",
          "on": [
            {
              "ref": [
                "localized",
                "code"
              ]
            },
            "=",
            {
              "ref": [
                "code"
              ]
            },
            "and",
            {
              "ref": [
                "localized",
                "locale"
              ]
            },
            "=",
            {
              "ref": [
                "$user",
                "locale"
              ]
            }
          ]
        }
      }
    },
    "sap.common.Countries": {
      "kind": "entity",
      "@cds.autoexpose": true,
      "@cds.persistence.skip": "if-unused",
      "@UI.Identification": [
        {
          "Value": {
            "=": "name"
          }
        }
      ],
      "@cds.odata.valuelist": true,
      "includes": [
        "sap.common.CodeList"
      ],
      "elements": {
        "name": {
          "@title": "{i18n>Name}",
          "localized": true,
          "type": "cds.String",
          "length": 255
        },
        "descr": {
          "@title": "{i18n>Description}",
          "localized": true,
          "type": "cds.String",
          "length": 1000
        },
        "code": {
          "@title": "{i18n>CountryCode}",
          "@Common.Text": {
            "=": "name"
          },
          "key": true,
          "type": "cds.String",
          "length": 3
        },
        "texts": {
          "type": "cds.Composition",
          "cardinality": {
            "max": "*"
          },
          "target": "sap.common.Countries.texts",
          "on": [
            {
              "ref": [
                "texts",
                "code"
              ]
            },
            "=",
            {
              "ref": [
                "code"
              ]
            }
          ]
        },
        "localized": {
          "type": "cds.Association",
          "target": "sap.common.Countries.texts",
          "on": [
            {
              "ref": [
                "localized",
                "code"
              ]
            },
            "=",
            {
              "ref": [
                "code"
              ]
            },
            "and",
            {
              "ref": [
                "localized",
                "locale"
              ]
            },
            "=",
            {
              "ref": [
                "$user",
                "locale"
              ]
            }
          ]
        }
      }
    },
    "sap.common.Currencies": {
      "kind": "entity",
      "@cds.autoexpose": true,
      "@cds.persistence.skip": "if-unused",
      "@UI.Identification": [
        {
          "Value": {
            "=": "name"
          }
        }
      ],
      "@cds.odata.valuelist": true,
      "includes": [
        "sap.common.CodeList"
      ],
      "elements": {
        "name": {
          "@title": "{i18n>Name}",
          "localized": true,
          "type": "cds.String",
          "length": 255
        },
        "descr": {
          "@title": "{i18n>Description}",
          "localized": true,
          "type": "cds.String",
          "length": 1000
        },
        "code": {
          "@title": "{i18n>CurrencyCode}",
          "@Common.Text": {
            "=": "name"
          },
          "key": true,
          "type": "cds.String",
          "length": 3
        },
        "symbol": {
          "@title": "{i18n>CurrencySymbol}",
          "type": "cds.String",
          "length": 5
        },
        "minorUnit": {
          "@title": "{i18n>CurrencyMinorUnit}",
          "type": "cds.Int16"
        },
        "texts": {
          "type": "cds.Composition",
          "cardinality": {
            "max": "*"
          },
          "target": "sap.common.Currencies.texts",
          "on": [
            {
              "ref": [
                "texts",
                "code"
              ]
            },
            "=",
            {
              "ref": [
                "code"
              ]
            }
          ]
        },
        "localized": {
          "type": "cds.Association",
          "target": "sap.common.Currencies.texts",
          "on": [
            {
              "ref": [
                "localized",
                "code"
              ]
            },
            "=",
            {
              "ref": [
                "code"
              ]
            },
            "and",
            {
              "ref": [
                "localized",
                "locale"
              ]
            },
            "=",
            {
              "ref": [
                "$user",
                "locale"
              ]
            }
          ]
        }
      }
    },
    "sap.common.Timezones": {
      "kind": "entity",
      "@cds.autoexpose": true,
      "@cds.persistence.skip": "if-unused",
      "@UI.Identification": [
        {
          "Value": {
            "=": "name"
          }
        }
      ],
      "@cds.odata.valuelist": true,
      "includes": [
        "sap.common.CodeList"
      ],
      "elements": {
        "name": {
          "@title": "{i18n>Name}",
          "localized": true,
          "type": "cds.String",
          "length": 255
        },
        "descr": {
          "@title": "{i18n>Description}",
          "localized": true,
          "type": "cds.String",
          "length": 1000
        },
        "code": {
          "@title": "{i18n>TimeZoneCode}",
          "key": true,
          "type": "cds.String",
          "length": 100
        },
        "texts": {
          "type": "cds.Composition",
          "cardinality": {
            "max": "*"
          },
          "target": "sap.common.Timezones.texts",
          "on": [
            {
              "ref": [
                "texts",
                "code"
              ]
            },
            "=",
            {
              "ref": [
                "code"
              ]
            }
          ]
        },
        "localized": {
          "type": "cds.Association",
          "target": "sap.common.Timezones.texts",
          "on": [
            {
              "ref": [
                "localized",
                "code"
              ]
            },
            "=",
            {
              "ref": [
                "code"
              ]
            },
            "and",
            {
              "ref": [
                "localized",
                "locale"
              ]
            },
            "=",
            {
              "ref": [
                "$user",
                "locale"
              ]
            }
          ]
        }
      }
    },
    "sap.common.CodeList": {
      "kind": "aspect",
      "@cds.autoexpose": true,
      "@cds.persistence.skip": "if-unused",
      "@UI.Identification": [
        {
          "Value": {
            "=": "name"
          }
        }
      ],
      "@cds.odata.valuelist": true,
      "elements": {
        "name": {
          "@title": "{i18n>Name}",
          "localized": true,
          "type": "cds.String",
          "length": 255
        },
        "descr": {
          "@title": "{i18n>Description}",
          "localized": true,
          "type": "cds.String",
          "length": 1000
        }
      }
    },
    "sap.common.TextsAspect": {
      "kind": "aspect",
      "elements": {
        "locale": {
          "@title": "{i18n>LanguageCode}",
          "key": true,
          "type": "sap.common.Locale",
          "length": 14
        }
      }
    },
    "sap.common.FlowHistory": {
      "kind": "aspect",
      "@cds.persistence.skip": "if-unused",
      "elements": {
        "transitions_": {
          "@odata.draft.enabled": false,
          "type": "cds.Composition",
          "cardinality": {
            "max": "*"
          },
          "targetAspect": {
            "elements": {
              "timestamp": {
                "@cds.on.insert": {
                  "=": "$now"
                },
                "@UI.HiddenFilter": true,
                "@UI.ExcludeFromNavigationContext": true,
                "@Core.Immutable": true,
                "@title": "{i18n>CreatedAt}",
                "@readonly": true,
                "key": true,
                "type": {
                  "ref": [
                    "managed",
                    "createdAt"
                  ]
                }
              },
              "user": {
                "@cds.on.insert": {
                  "=": "$user"
                },
                "@UI.HiddenFilter": true,
                "@UI.ExcludeFromNavigationContext": true,
                "@Core.Immutable": true,
                "@title": "{i18n>CreatedBy}",
                "@readonly": true,
                "@description": "{i18n>UserID.Description}",
                "type": {
                  "ref": [
                    "managed",
                    "createdBy"
                  ]
                },
                "length": 255
              },
              "status": {
                "type": "cds.String"
              },
              "comment": {
                "type": "cds.String"
              }
            }
          }
        }
      }
    },
    "cuid": {
      "kind": "aspect",
      "elements": {
        "ID": {
          "key": true,
          "type": "cds.UUID"
        }
      }
    },
    "managed": {
      "kind": "aspect",
      "elements": {
        "createdAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "createdBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@Core.Immutable": true,
          "@title": "{i18n>CreatedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        },
        "modifiedAt": {
          "@cds.on.insert": {
            "=": "$now"
          },
          "@cds.on.update": {
            "=": "$now"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedAt}",
          "@readonly": true,
          "type": "cds.Timestamp"
        },
        "modifiedBy": {
          "@cds.on.insert": {
            "=": "$user"
          },
          "@cds.on.update": {
            "=": "$user"
          },
          "@UI.HiddenFilter": true,
          "@UI.ExcludeFromNavigationContext": true,
          "@title": "{i18n>ChangedBy}",
          "@readonly": true,
          "@description": "{i18n>UserID.Description}",
          "type": "User",
          "length": 255
        }
      }
    },
    "temporal": {
      "kind": "aspect",
      "elements": {
        "validFrom": {
          "@cds.valid.from": true,
          "type": "cds.Timestamp"
        },
        "validTo": {
          "@cds.valid.to": true,
          "type": "cds.Timestamp"
        }
      }
    },
    "User": {
      "kind": "type",
      "@title": "{i18n>UserID}",
      "@description": "{i18n>UserID.Description}",
      "type": "cds.String",
      "length": 255
    },
    "sap.common.Languages.texts": {
      "kind": "entity",
      "@odata.draft.enabled": false,
      "includes": [
        "sap.common.TextsAspect"
      ],
      "elements": {
        "locale": {
          "@title": "{i18n>LanguageCode}",
          "key": true,
          "type": "sap.common.Locale",
          "length": 14
        },
        "name": {
          "@title": "{i18n>Name}",
          "localized": null,
          "type": "cds.String",
          "length": 255
        },
        "descr": {
          "@title": "{i18n>Description}",
          "localized": null,
          "type": "cds.String",
          "length": 1000
        },
        "code": {
          "@odata.containment.ignore": true,
          "@Common.Text": {
            "=": "name"
          },
          "@title": "{i18n>LanguageCode}",
          "key": true,
          "type": "sap.common.Locale",
          "length": 14
        }
      }
    },
    "sap.common.Countries.texts": {
      "kind": "entity",
      "@odata.draft.enabled": false,
      "includes": [
        "sap.common.TextsAspect"
      ],
      "elements": {
        "locale": {
          "@title": "{i18n>LanguageCode}",
          "key": true,
          "type": "sap.common.Locale",
          "length": 14
        },
        "name": {
          "@title": "{i18n>Name}",
          "localized": null,
          "type": "cds.String",
          "length": 255
        },
        "descr": {
          "@title": "{i18n>Description}",
          "localized": null,
          "type": "cds.String",
          "length": 1000
        },
        "code": {
          "@odata.containment.ignore": true,
          "@title": "{i18n>CountryCode}",
          "@Common.Text": {
            "=": "name"
          },
          "key": true,
          "type": "cds.String",
          "length": 3
        }
      }
    },
    "sap.common.Currencies.texts": {
      "kind": "entity",
      "@odata.draft.enabled": false,
      "includes": [
        "sap.common.TextsAspect"
      ],
      "elements": {
        "locale": {
          "@title": "{i18n>LanguageCode}",
          "key": true,
          "type": "sap.common.Locale",
          "length": 14
        },
        "name": {
          "@title": "{i18n>Name}",
          "localized": null,
          "type": "cds.String",
          "length": 255
        },
        "descr": {
          "@title": "{i18n>Description}",
          "localized": null,
          "type": "cds.String",
          "length": 1000
        },
        "code": {
          "@odata.containment.ignore": true,
          "@title": "{i18n>CurrencyCode}",
          "@Common.Text": {
            "=": "name"
          },
          "key": true,
          "type": "cds.String",
          "length": 3
        }
      }
    },
    "sap.common.Timezones.texts": {
      "kind": "entity",
      "@odata.draft.enabled": false,
      "includes": [
        "sap.common.TextsAspect"
      ],
      "elements": {
        "locale": {
          "@title": "{i18n>LanguageCode}",
          "key": true,
          "type": "sap.common.Locale",
          "length": 14
        },
        "name": {
          "@title": "{i18n>Name}",
          "localized": null,
          "type": "cds.String",
          "length": 255
        },
        "descr": {
          "@title": "{i18n>Description}",
          "localized": null,
          "type": "cds.String",
          "length": 1000
        },
        "code": {
          "@odata.containment.ignore": true,
          "@title": "{i18n>TimeZoneCode}",
          "key": true,
          "type": "cds.String",
          "length": 100
        }
      }
    }
  },
  "meta": {
    "creator": "CDS Compiler v7.0.2",
    "compilerCsnFlavor": "inferred",
    "flavor": "inferred"
  },
  "$version": "2.0"
}
```

# packages/cap-service/gen/srv/srv/odata/v4/ProcurementService.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<edmx:Edmx Version="4.0" xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx">
  <edmx:Reference Uri="https://sap.github.io/odata-vocabularies/vocabularies/Common.xml">
    <edmx:Include Alias="Common" Namespace="com.sap.vocabularies.Common.v1"/>
  </edmx:Reference>
  <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.xml">
    <edmx:Include Alias="Core" Namespace="Org.OData.Core.V1"/>
  </edmx:Reference>
  <edmx:DataServices>
    <Schema Namespace="ProcurementService" xmlns="http://docs.oasis-open.org/odata/ns/edm">
      <Annotation Term="Core.Links">
        <Collection>
          <Record>
            <PropertyValue Property="rel" String="author"/>
            <PropertyValue Property="href" String="https://cap.cloud.sap"/>
          </Record>
        </Collection>
      </Annotation>
      <EntityContainer Name="EntityContainer">
        <EntitySet Name="Vendors" EntityType="ProcurementService.Vendors"/>
        <EntitySet Name="PurchaseOrders" EntityType="ProcurementService.PurchaseOrders">
          <NavigationPropertyBinding Path="vendor" Target="Vendors"/>
          <NavigationPropertyBinding Path="lineItems" Target="POLineItems"/>
        </EntitySet>
        <EntitySet Name="POLineItems" EntityType="ProcurementService.POLineItems">
          <NavigationPropertyBinding Path="purchaseOrder" Target="PurchaseOrders"/>
          <NavigationPropertyBinding Path="material" Target="InventoryItems"/>
        </EntitySet>
        <EntitySet Name="SupplierInvoices" EntityType="ProcurementService.SupplierInvoices">
          <NavigationPropertyBinding Path="purchaseOrder" Target="PurchaseOrders"/>
          <NavigationPropertyBinding Path="vendor" Target="Vendors"/>
          <NavigationPropertyBinding Path="lineItems" Target="SupplierInvoiceItems"/>
        </EntitySet>
        <EntitySet Name="SupplierInvoiceItems" EntityType="ProcurementService.SupplierInvoiceItems">
          <NavigationPropertyBinding Path="invoice" Target="SupplierInvoices"/>
          <NavigationPropertyBinding Path="material" Target="InventoryItems"/>
        </EntitySet>
        <EntitySet Name="InventoryItems" EntityType="ProcurementService.InventoryItems"/>
        <EntitySet Name="PurchasingInfoRecords" EntityType="ProcurementService.PurchasingInfoRecords">
          <NavigationPropertyBinding Path="vendor" Target="Vendors"/>
          <NavigationPropertyBinding Path="material" Target="InventoryItems"/>
        </EntitySet>
        <EntitySet Name="Quotations" EntityType="ProcurementService.Quotations">
          <NavigationPropertyBinding Path="vendor" Target="Vendors"/>
          <NavigationPropertyBinding Path="material" Target="InventoryItems"/>
        </EntitySet>
        <FunctionImport Name="isLowStock" Function="ProcurementService.isLowStock"/>
      </EntityContainer>
      <EntityType Name="Vendors">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <Property Name="name" Type="Edm.String" MaxLength="120"/>
        <Property Name="taxId" Type="Edm.String" MaxLength="30"/>
        <Property Name="country" Type="Edm.String" MaxLength="2"/>
        <Property Name="email" Type="Edm.String" MaxLength="120"/>
        <Property Name="status" Type="Edm.String" MaxLength="20" DefaultValue="ACTIVE"/>
      </EntityType>
      <EntityType Name="PurchaseOrders">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <Property Name="poNumber" Type="Edm.String" MaxLength="20"/>
        <NavigationProperty Name="vendor" Type="ProcurementService.Vendors">
          <ReferentialConstraint Property="vendor_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="vendor_ID" Type="Edm.Guid"/>
        <Property Name="orderDate" Type="Edm.Date"/>
        <Property Name="status" Type="Edm.String" MaxLength="20" DefaultValue="CREATED"/>
        <Property Name="currency" Type="Edm.String" MaxLength="3" DefaultValue="USD"/>
        <Property Name="totalAmount" Type="Edm.Decimal" Precision="15" Scale="2"/>
        <NavigationProperty Name="lineItems" Type="Collection(ProcurementService.POLineItems)" Partner="purchaseOrder">
          <OnDelete Action="Cascade"/>
        </NavigationProperty>
      </EntityType>
      <EntityType Name="POLineItems">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <NavigationProperty Name="purchaseOrder" Type="ProcurementService.PurchaseOrders" Partner="lineItems">
          <ReferentialConstraint Property="purchaseOrder_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="purchaseOrder_ID" Type="Edm.Guid"/>
        <NavigationProperty Name="material" Type="ProcurementService.InventoryItems">
          <ReferentialConstraint Property="material_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="material_ID" Type="Edm.Guid"/>
        <Property Name="quantity" Type="Edm.Int32"/>
        <Property Name="receivedQuantity" Type="Edm.Int32" DefaultValue="0"/>
        <Property Name="unitPrice" Type="Edm.Decimal" Precision="15" Scale="2"/>
      </EntityType>
      <EntityType Name="SupplierInvoices">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <Property Name="invoiceNumber" Type="Edm.String" MaxLength="30"/>
        <NavigationProperty Name="purchaseOrder" Type="ProcurementService.PurchaseOrders">
          <ReferentialConstraint Property="purchaseOrder_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="purchaseOrder_ID" Type="Edm.Guid"/>
        <NavigationProperty Name="vendor" Type="ProcurementService.Vendors">
          <ReferentialConstraint Property="vendor_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="vendor_ID" Type="Edm.Guid"/>
        <Property Name="invoiceDate" Type="Edm.Date"/>
        <Property Name="postingDate" Type="Edm.Date"/>
        <Property Name="currency" Type="Edm.String" MaxLength="3" DefaultValue="USD"/>
        <Property Name="totalAmount" Type="Edm.Decimal" Precision="15" Scale="2"/>
        <Property Name="status" Type="Edm.String" MaxLength="20" DefaultValue="CREATED"/>
        <NavigationProperty Name="lineItems" Type="Collection(ProcurementService.SupplierInvoiceItems)" Partner="invoice">
          <OnDelete Action="Cascade"/>
        </NavigationProperty>
      </EntityType>
      <EntityType Name="SupplierInvoiceItems">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <NavigationProperty Name="invoice" Type="ProcurementService.SupplierInvoices" Partner="lineItems">
          <ReferentialConstraint Property="invoice_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="invoice_ID" Type="Edm.Guid"/>
        <NavigationProperty Name="material" Type="ProcurementService.InventoryItems">
          <ReferentialConstraint Property="material_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="material_ID" Type="Edm.Guid"/>
        <Property Name="quantity" Type="Edm.Int32"/>
        <Property Name="unitPrice" Type="Edm.Decimal" Precision="15" Scale="2"/>
        <Property Name="amount" Type="Edm.Decimal" Precision="15" Scale="2"/>
      </EntityType>
      <EntityType Name="InventoryItems">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <Property Name="materialId" Type="Edm.String" MaxLength="30"/>
        <Property Name="description" Type="Edm.String" MaxLength="200"/>
        <Property Name="quantityOnHand" Type="Edm.Int32" DefaultValue="0"/>
        <Property Name="reorderPoint" Type="Edm.Int32" DefaultValue="10"/>
        <Property Name="unit" Type="Edm.String" MaxLength="10" DefaultValue="EA"/>
        <Property Name="warehouse" Type="Edm.String" MaxLength="50"/>
      </EntityType>
      <EntityType Name="PurchasingInfoRecords">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <NavigationProperty Name="vendor" Type="ProcurementService.Vendors">
          <ReferentialConstraint Property="vendor_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="vendor_ID" Type="Edm.Guid"/>
        <NavigationProperty Name="material" Type="ProcurementService.InventoryItems">
          <ReferentialConstraint Property="material_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="material_ID" Type="Edm.Guid"/>
        <Property Name="price" Type="Edm.Decimal" Precision="15" Scale="2"/>
        <Property Name="currency" Type="Edm.String" MaxLength="3" DefaultValue="USD"/>
        <Property Name="validFrom" Type="Edm.Date"/>
        <Property Name="validTo" Type="Edm.Date"/>
      </EntityType>
      <EntityType Name="Quotations">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <Property Name="quotationId" Type="Edm.String" MaxLength="30"/>
        <NavigationProperty Name="vendor" Type="ProcurementService.Vendors">
          <ReferentialConstraint Property="vendor_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="vendor_ID" Type="Edm.Guid"/>
        <NavigationProperty Name="material" Type="ProcurementService.InventoryItems">
          <ReferentialConstraint Property="material_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="material_ID" Type="Edm.Guid"/>
        <Property Name="quantity" Type="Edm.Int32"/>
        <Property Name="price" Type="Edm.Decimal" Precision="15" Scale="2"/>
        <Property Name="currency" Type="Edm.String" MaxLength="3" DefaultValue="USD"/>
        <Property Name="validUntil" Type="Edm.Date"/>
        <Property Name="status" Type="Edm.String" MaxLength="20" DefaultValue="OPEN"/>
      </EntityType>
      <Function Name="isLowStock" IsBound="false" IsComposable="false">
        <Parameter Name="materialId" Type="Edm.String"/>
        <ReturnType Type="Edm.Boolean"/>
      </Function>
      <Annotations Target="ProcurementService.Vendors/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="ProcurementService.Vendors/name">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.PurchaseOrders/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="ProcurementService.PurchaseOrders/poNumber">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.PurchaseOrders/vendor_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.POLineItems/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="ProcurementService.POLineItems/purchaseOrder_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.POLineItems/material_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.POLineItems/quantity">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.SupplierInvoices/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="ProcurementService.SupplierInvoices/invoiceNumber">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.SupplierInvoices/purchaseOrder_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.SupplierInvoices/vendor_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.SupplierInvoices/totalAmount">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.SupplierInvoiceItems/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="ProcurementService.SupplierInvoiceItems/invoice_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.SupplierInvoiceItems/material_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.SupplierInvoiceItems/quantity">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.InventoryItems/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="ProcurementService.InventoryItems/materialId">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.PurchasingInfoRecords/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="ProcurementService.PurchasingInfoRecords/vendor_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.PurchasingInfoRecords/material_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.PurchasingInfoRecords/price">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.PurchasingInfoRecords/validFrom">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.PurchasingInfoRecords/validTo">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.Quotations/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="ProcurementService.Quotations/quotationId">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.Quotations/vendor_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.Quotations/material_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.Quotations/quantity">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.Quotations/price">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.Quotations/validUntil">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="ProcurementService.isLowStock(Edm.String)/materialId">
        <Annotation Term="Core.OptionalParameter">
          <Record Type="Core.OptionalParameterType"/>
        </Annotation>
      </Annotations>
    </Schema>
  </edmx:DataServices>
</edmx:Edmx>
```

# packages/cap-service/gen/srv/srv/odata/v4/RetailService.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<edmx:Edmx Version="4.0" xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx">
  <edmx:Reference Uri="https://sap.github.io/odata-vocabularies/vocabularies/Common.xml">
    <edmx:Include Alias="Common" Namespace="com.sap.vocabularies.Common.v1"/>
  </edmx:Reference>
  <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.xml">
    <edmx:Include Alias="Core" Namespace="Org.OData.Core.V1"/>
  </edmx:Reference>
  <edmx:DataServices>
    <Schema Namespace="RetailService" xmlns="http://docs.oasis-open.org/odata/ns/edm">
      <Annotation Term="Core.Links">
        <Collection>
          <Record>
            <PropertyValue Property="rel" String="author"/>
            <PropertyValue Property="href" String="https://cap.cloud.sap"/>
          </Record>
        </Collection>
      </Annotation>
      <EntityContainer Name="EntityContainer">
        <EntitySet Name="Products" EntityType="RetailService.Products"/>
        <EntitySet Name="RetailPrices" EntityType="RetailService.RetailPrices">
          <NavigationPropertyBinding Path="product" Target="Products"/>
        </EntitySet>
        <EntitySet Name="Schemes" EntityType="RetailService.Schemes"/>
        <EntitySet Name="SchemeProducts" EntityType="RetailService.SchemeProducts">
          <NavigationPropertyBinding Path="scheme" Target="Schemes"/>
          <NavigationPropertyBinding Path="product" Target="Products"/>
        </EntitySet>
        <EntitySet Name="Retailers" EntityType="RetailService.Retailers"/>
        <EntitySet Name="Interactions" EntityType="RetailService.Interactions">
          <NavigationPropertyBinding Path="retailer" Target="Retailers"/>
          <NavigationPropertyBinding Path="messages" Target="InteractionMessages"/>
          <NavigationPropertyBinding Path="items" Target="InteractionItems"/>
          <NavigationPropertyBinding Path="followUps" Target="FollowUps"/>
        </EntitySet>
        <EntitySet Name="InteractionMessages" EntityType="RetailService.InteractionMessages">
          <NavigationPropertyBinding Path="interaction" Target="Interactions"/>
        </EntitySet>
        <EntitySet Name="InteractionItems" EntityType="RetailService.InteractionItems">
          <NavigationPropertyBinding Path="interaction" Target="Interactions"/>
          <NavigationPropertyBinding Path="product" Target="Products"/>
        </EntitySet>
        <EntitySet Name="FollowUps" EntityType="RetailService.FollowUps">
          <NavigationPropertyBinding Path="interaction" Target="Interactions"/>
        </EntitySet>
      </EntityContainer>
      <EntityType Name="Products">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <Property Name="sku" Type="Edm.String" MaxLength="30"/>
        <Property Name="name" Type="Edm.String" MaxLength="120"/>
        <Property Name="brand" Type="Edm.String" MaxLength="80"/>
        <Property Name="category" Type="Edm.String" MaxLength="60"/>
        <Property Name="description" Type="Edm.String" MaxLength="500"/>
        <Property Name="packSize" Type="Edm.String" MaxLength="40"/>
        <Property Name="unit" Type="Edm.String" MaxLength="20" DefaultValue="EA"/>
        <Property Name="stockQuantity" Type="Edm.Int32" DefaultValue="0"/>
        <Property Name="reorderLevel" Type="Edm.Int32" DefaultValue="0"/>
        <Property Name="isActive" Type="Edm.Boolean" DefaultValue="true"/>
      </EntityType>
      <EntityType Name="RetailPrices">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <NavigationProperty Name="product" Type="RetailService.Products">
          <ReferentialConstraint Property="product_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="product_ID" Type="Edm.Guid"/>
        <Property Name="mrp" Type="Edm.Decimal" Precision="12" Scale="2"/>
        <Property Name="retailerPrice" Type="Edm.Decimal" Precision="12" Scale="2"/>
        <Property Name="currency" Type="Edm.String" MaxLength="3" DefaultValue="INR"/>
        <Property Name="validFrom" Type="Edm.Date"/>
        <Property Name="validTo" Type="Edm.Date"/>
      </EntityType>
      <EntityType Name="Schemes">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <Property Name="schemeCode" Type="Edm.String" MaxLength="30"/>
        <Property Name="name" Type="Edm.String" MaxLength="120"/>
        <Property Name="description" Type="Edm.String" MaxLength="500"/>
        <Property Name="discountType" Type="Edm.String" MaxLength="20"/>
        <Property Name="discountValue" Type="Edm.Decimal" Precision="12" Scale="2"/>
        <Property Name="minQuantity" Type="Edm.Int32" DefaultValue="1"/>
        <Property Name="validFrom" Type="Edm.Date"/>
        <Property Name="validTo" Type="Edm.Date"/>
        <Property Name="isActive" Type="Edm.Boolean" DefaultValue="true"/>
      </EntityType>
      <EntityType Name="SchemeProducts">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <NavigationProperty Name="scheme" Type="RetailService.Schemes">
          <ReferentialConstraint Property="scheme_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="scheme_ID" Type="Edm.Guid"/>
        <NavigationProperty Name="product" Type="RetailService.Products">
          <ReferentialConstraint Property="product_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="product_ID" Type="Edm.Guid"/>
      </EntityType>
      <EntityType Name="Retailers">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <Property Name="retailerCode" Type="Edm.String" MaxLength="30"/>
        <Property Name="name" Type="Edm.String" MaxLength="120"/>
        <Property Name="contactName" Type="Edm.String" MaxLength="100"/>
        <Property Name="phone" Type="Edm.String" MaxLength="25"/>
        <Property Name="email" Type="Edm.String" MaxLength="120"/>
        <Property Name="city" Type="Edm.String" MaxLength="80"/>
        <Property Name="state" Type="Edm.String" MaxLength="80"/>
        <Property Name="channel" Type="Edm.String" MaxLength="30"/>
        <Property Name="status" Type="Edm.String" MaxLength="20" DefaultValue="ACTIVE"/>
      </EntityType>
      <EntityType Name="Interactions">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <Property Name="interactionNumber" Type="Edm.String" MaxLength="30"/>
        <NavigationProperty Name="retailer" Type="RetailService.Retailers">
          <ReferentialConstraint Property="retailer_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="retailer_ID" Type="Edm.Guid"/>
        <Property Name="channel" Type="Edm.String" MaxLength="20" DefaultValue="VOICE"/>
        <Property Name="status" Type="Edm.String" MaxLength="20" DefaultValue="IN_PROGRESS"/>
        <Property Name="startedAt" Type="Edm.DateTimeOffset" Precision="7"/>
        <Property Name="endedAt" Type="Edm.DateTimeOffset" Precision="7"/>
        <Property Name="summary" Type="Edm.String"/>
        <Property Name="outcome" Type="Edm.String" MaxLength="40"/>
        <Property Name="followUpRequired" Type="Edm.Boolean" DefaultValue="false"/>
        <NavigationProperty Name="messages" Type="Collection(RetailService.InteractionMessages)" Partner="interaction"/>
        <NavigationProperty Name="items" Type="Collection(RetailService.InteractionItems)" Partner="interaction"/>
        <NavigationProperty Name="followUps" Type="Collection(RetailService.FollowUps)" Partner="interaction"/>
      </EntityType>
      <EntityType Name="InteractionMessages">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <NavigationProperty Name="interaction" Type="RetailService.Interactions" Partner="messages">
          <ReferentialConstraint Property="interaction_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="interaction_ID" Type="Edm.Guid"/>
        <Property Name="role" Type="Edm.String" MaxLength="20"/>
        <Property Name="content" Type="Edm.String"/>
        <Property Name="createdAt" Type="Edm.DateTimeOffset" Precision="7"/>
      </EntityType>
      <EntityType Name="InteractionItems">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <NavigationProperty Name="interaction" Type="RetailService.Interactions" Partner="items">
          <ReferentialConstraint Property="interaction_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="interaction_ID" Type="Edm.Guid"/>
        <NavigationProperty Name="product" Type="RetailService.Products">
          <ReferentialConstraint Property="product_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="product_ID" Type="Edm.Guid"/>
        <Property Name="requestedQuantity" Type="Edm.Int32"/>
        <Property Name="unit" Type="Edm.String" MaxLength="20"/>
        <Property Name="interestStatus" Type="Edm.String" MaxLength="30" DefaultValue="INTERESTED"/>
        <Property Name="notes" Type="Edm.String" MaxLength="500"/>
      </EntityType>
      <EntityType Name="FollowUps">
        <Key>
          <PropertyRef Name="ID"/>
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false"/>
        <NavigationProperty Name="interaction" Type="RetailService.Interactions" Partner="followUps">
          <ReferentialConstraint Property="interaction_ID" ReferencedProperty="ID"/>
        </NavigationProperty>
        <Property Name="interaction_ID" Type="Edm.Guid"/>
        <Property Name="followUpDate" Type="Edm.Date"/>
        <Property Name="requirement" Type="Edm.String" MaxLength="500"/>
        <Property Name="status" Type="Edm.String" MaxLength="20" DefaultValue="OPEN"/>
        <Property Name="assignedTo" Type="Edm.String" MaxLength="100"/>
      </EntityType>
      <Annotations Target="RetailService.Products/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="RetailService.Products/sku">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.Products/name">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.RetailPrices/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="RetailService.RetailPrices/product_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.RetailPrices/mrp">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.RetailPrices/retailerPrice">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.RetailPrices/validFrom">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.RetailPrices/validTo">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.Schemes/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="RetailService.Schemes/schemeCode">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.Schemes/name">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.Schemes/validFrom">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.Schemes/validTo">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.SchemeProducts/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="RetailService.SchemeProducts/scheme_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.SchemeProducts/product_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.Retailers/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="RetailService.Retailers/retailerCode">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.Retailers/name">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.Interactions/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="RetailService.Interactions/interactionNumber">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.InteractionMessages/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="RetailService.InteractionMessages/interaction_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.InteractionMessages/role">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.InteractionMessages/content">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.InteractionItems/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="RetailService.InteractionItems/interaction_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.InteractionItems/product_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.InteractionItems/requestedQuantity">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.FollowUps/ID">
        <Annotation Term="Core.ComputedDefaultValue" Bool="true"/>
      </Annotations>
      <Annotations Target="RetailService.FollowUps/interaction_ID">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
      <Annotations Target="RetailService.FollowUps/requirement">
        <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
      </Annotations>
    </Schema>
  </edmx:DataServices>
</edmx:Edmx>
```

# packages/cap-service/gen/srv/srv/procurement-service.js

```js
const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const { InventoryItems } = this.entities;

  this.on('isLowStock', async (req) => {
    const { materialId } = req.data;
    const item = await SELECT.one.from(InventoryItems).where({ materialId });
    if (!item) {
      req.error(404, `Material ${materialId} not found`);
      return;
    }
    return item.quantityOnHand <= item.reorderPoint;
  });
});

```

# packages/cap-service/mta.yaml

```yaml
_schema-version: "3.1"
ID: procurement-service
version: 1.0.0

modules:
  - name: procurement-service-srv
    type: nodejs
    path: gen/srv
    parameters:
      buildpack: nodejs_buildpack
    requires:
      - name: procurement-service-auth
      - name: procurement-service-db

resources:
  - name: procurement-service-auth
    type: org.cloudfoundry.managed-service
    parameters:
      service: xsuaa
      service-plan: application
      path: ./xs-security.json

  - name: procurement-service-db
    type: org.cloudfoundry.managed-service
    parameters:
      service: hana-cloud
      service-plan: hdi-shared

```

# packages/cap-service/package.json

```json
{
  "name": "cap-service",
  "version": "1.0.0",
  "private": true,
  "description": "Procurement CAP service - Vendors, PurchaseOrders, Inventory",
  "engines": { "node": "^24" },
  "dependencies": {
    "@sap/cds": "^10",
    "@sap/xssec": "^4",
    "express": "^4"
  },
  "devDependencies": {
    "@cap-js/sqlite": "^2"
  },
  "scripts": {
    "watch": "cds watch",
    "build": "cds build --production",
    "deploy": "cf push"
  },
  "cds": {
    "requires": {
      "db": {
        "kind": "sqlite",
        "credentials": { "url": "db.sqlite" }
      },
      "[production]": {
        "db": { "kind": "hana" },
        "auth": { "kind": "xsuaa" }
      },
      "[development]": {
        "auth": { "kind": "mocked" }
      }
    }
  }
}
```

# packages/cap-service/srv/procurement-service.cds

```cds
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
    ID, purchaseOrder, material, quantity, receivedQuantity, unitPrice
  };

  @requires: 'authenticated-user'
  entity SupplierInvoices as projection on db.SupplierInvoices {
    ID, invoiceNumber, purchaseOrder, vendor, invoiceDate, postingDate, currency, totalAmount, status, lineItems
  };

  @requires: 'authenticated-user'
  entity SupplierInvoiceItems as projection on db.SupplierInvoiceItems {
    ID, invoice, material, quantity, unitPrice, amount
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

```

# packages/cap-service/srv/procurement-service.js

```js
const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const { InventoryItems } = this.entities;

  this.on('isLowStock', async (req) => {
    const { materialId } = req.data;
    const item = await SELECT.one.from(InventoryItems).where({ materialId });
    if (!item) {
      req.error(404, `Material ${materialId} not found`);
      return;
    }
    return item.quantityOnHand <= item.reorderPoint;
  });
});

```

# packages/cap-service/srv/retail-service.cds

```cds
using FMCGDATA as db from '../db/fmcg-schema';

/** Separate retailer-facing sales domain. Procurement entities remain untouched. */
@path: '/odata/v4/retail'
service RetailService {
  @requires: 'authenticated-user'
  entity Products as projection on db.Products {
    ID, sku, name, brand, category, description, packSize, unit,
    stockQuantity, reorderLevel, isActive
  };

  @requires: 'authenticated-user'
  entity RetailPrices as projection on db.RetailPrices {
    ID, product, mrp, retailerPrice, currency, validFrom, validTo
  };

  @requires: 'authenticated-user'
  entity Schemes as projection on db.Schemes {
    ID, schemeCode, name, description, discountType, discountValue,
    minQuantity, validFrom, validTo, isActive
  };

  @requires: 'authenticated-user'
  entity SchemeProducts as projection on db.SchemeProducts {
    ID, scheme, product
  };

  @requires: 'authenticated-user'
  entity Retailers as projection on db.Retailers {
    ID, retailerCode, name, contactName, phone, email, city, state, channel, status
  };

  @requires: 'authenticated-user'
  entity Interactions as projection on db.Interactions {
    ID, interactionNumber, retailer, channel, status, startedAt, endedAt,
    summary, outcome, followUpRequired, messages, items, followUps
  };

  @requires: 'authenticated-user'
  entity InteractionMessages as projection on db.InteractionMessages {
    ID, interaction, role, content, createdAt
  };

  @requires: 'authenticated-user'
  entity InteractionItems as projection on db.InteractionItems {
    ID, interaction, product, requestedQuantity, unit, interestStatus, notes
  };

  @requires: 'authenticated-user'
  entity FollowUps as projection on db.FollowUps {
    ID, interaction, followUpDate, requirement, status, assignedTo
  };
}

```

# packages/cap-service/xs-security.json

```json
{
  "xsappname": "procurement-service",
  "tenant-mode": "dedicated",
  "scopes": [
    {
      "name": "$XSAPPNAME.Read",
      "description": "Read procurement data"
    }
  ],
  "role-templates": [
    {
      "name": "ProcurementReader",
      "description": "Can read vendors, POs, inventory",
      "scope-references": ["$XSAPPNAME.Read"]
    }
  ],
  "oauth2-configuration": {
    "grant-types": ["client_credentials"]
  }
}

```

# packages/mcp-server/Dockerfile

```
FROM node:20-slim AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/package.json ./
RUN npm install --omit=dev
COPY --from=build /app/dist ./dist

# Don't run as root in production containers.
RUN useradd --create-home mcpuser
USER mcpuser

CMD ["node", "dist/server.js"]

```

# packages/mcp-server/package.json

```json
{
  "name": "mcp-server",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "description": "MCP server exposing procurement tools backed by SAP CAP",
  "engines": {
    "node": ">=22"
  },
  "main": "dist/server.js",
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc -p tsconfig.json",
    "start": "node dist/server.js",
    "test": "vitest run",
    "test:watch": "vitest",
    "lint": "eslint src --ext .ts",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.29.0",
    "dotenv": "^17.4.2",
    "p-retry": "^8.0.0",
    "pino": "^10.3.0",
    "zod": "^4.4.0"
  },
  "devDependencies": {
    "@types/node": "^24.0.0",
    "eslint": "^10.0.0",
    "pino-pretty": "^13.1.0",
    "tsx": "^4.23.0",
    "typescript": "^7.0.0",
    "vitest": "^4.1.0"
  }
}
```

# packages/mcp-server/src/clients/authTokenProvider.ts

```ts
import { env } from '../config/env.js';
import { logger } from '../config/logger.js';

interface CachedToken {
  accessToken: string;
  expiresAt: number; // epoch ms
}

/**
 * Client-credentials OAuth against XSUAA. Tokens are cached in memory
 * and refreshed with a safety margin before expiry, so we don't fetch
 * a new token on every single tool call.
 */
export class AuthTokenProvider {
  private cached: CachedToken | null = null;
  private readonly refreshMarginMs = 60_000;

  async getToken(): Promise<string> {
    if (this.cached && this.cached.expiresAt - Date.now() > this.refreshMarginMs) {
      return this.cached.accessToken;
    }
    return this.fetchNewToken();
  }

  private async fetchNewToken(): Promise<string> {
    // Local/dev mode: cap-service runs with mocked auth, no real token needed.
    if (!env.XSUAA_TOKEN_URL) {
      throw new Error(
        "AuthTokenProvider should only be used when XSUAA_TOKEN_URL is configured."
      );
    }

    const body = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: env.XSUAA_CLIENT_ID,
      client_secret: env.XSUAA_CLIENT_SECRET,
    });

    const res = await fetch(env.XSUAA_TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    if (!res.ok) {
      logger.error({ status: res.status }, 'Failed to obtain XSUAA token');
      throw new Error(`XSUAA token request failed: ${res.status}`);
    }

    const data = (await res.json()) as { access_token: string; expires_in: number };
    this.cached = {
      accessToken: data.access_token,
      expiresAt: Date.now() + data.expires_in * 1000,
    };
    return this.cached.accessToken;
  }
}

```

# packages/mcp-server/src/clients/capClient.ts

```ts
import pRetry, { AbortError } from 'p-retry';
import { env } from '../config/env.js';
import { logger } from '../config/logger.js';
import { AuthTokenProvider } from './authTokenProvider.js';

const REQUEST_TIMEOUT_MS = 8_000;

export class CapClientError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = 'CapClientError';
  }
}

/**
 * Single point of contact with the CAP OData service. Tools never
 * call fetch() directly — everything goes through here so auth,
 * retry, timeout, and error shape are consistent.
 */
export class CapClient {
  private readonly authProvider = new AuthTokenProvider();

  constructor(private readonly baseUrl: string = env.CAP_SERVICE_URL) {}

  async get<T>(path: string, params?: Record<string, string>): Promise<T> {
    return pRetry(() => this.request<T>('GET', path, { params }), {
      retries: 2,
      minTimeout: 300,
      onFailedAttempt: (err) => {
        logger.warn({ attempt: err.attemptNumber, path }, 'CAP request retrying');
      },
    });
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>('POST', path, { body });
  }

  async patch<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>('PATCH', path, { body });
  }

  private async request<T>(
    method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
    path: string,
    options?: { params?: Record<string, string>; body?: unknown }
  ): Promise<T> {
    const url = new URL(`${this.baseUrl}${path}`);

    //for get requests ->
    //eg http://localhost:4004/odata/v4/procurement/Vendors
    // http://localhost:4004/odata/v4/procurement/Vendors?$filter=country%20eq%20'DE'
    if (options?.params) {
      Object.entries(options.params).forEach(([k, v]) => url.searchParams.set(k, v));
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const headers: Record<string, string> = {
        Accept: 'application/json',
      };

      if (options?.body) {
        headers['Content-Type'] = 'application/json';
      }

      // Only send a Bearer token when using a real XSUAA server.
      // For local development with mocked CAP auth, don't send Authorization.
      if (env.XSUAA_TOKEN_URL) {
        const token = await this.authProvider.getToken();
        headers.Authorization = `Bearer ${token}`;
      }
      else {
        headers.Authorization = `Basic ${Buffer.from(
          `${env.CAP_DEV_USER}:${env.CAP_DEV_PASSWORD}`
        ).toString("base64")}`;
      }

      logger.info({ method, url: url.toString() }, "Outgoing CAP request");
      // console.error("URL:", url.toString());
      // console.error("HEADERS:", headers);


      //to replace "+" with "%20"
      const finalUrl = url.toString().replace(/\+/g, "%20");

      const fetchOptions: RequestInit = {
        method,
        headers,
        signal: controller.signal,
      };

      if (options?.body) {
        fetchOptions.body = JSON.stringify(options.body);
      }

      const res = await fetch(finalUrl, fetchOptions);

      if (!res.ok) {
        const body = await res.text();

        logger.error({
          status: res.status,
          body,
          url: url.toString(),
        }, "CAP request failed");

        //User asked something invalid.
        if (res.status >= 400 && res.status < 500) {
          throw new AbortError(
            new CapClientError(`CAP request failed: ${res.status}`, res.status),
          );
        }

        //temporary errors, like 500, 503, 504. 
        //So we retry here
        throw new CapClientError(`CAP request failed: ${res.status}`, res.status);
      }

      return (await res.json()) as T;
    } finally {
      clearTimeout(timeout);
    }
  }
}

```

# packages/mcp-server/src/config/env.ts

```ts
import { z } from 'zod';

const envSchema = z.object({
  CAP_SERVICE_URL: z.string().url(),
  RETAIL_SERVICE_URL: z.string().url().optional(),
  // Client-credentials OAuth against XSUAA. In local/dev these can be
  // dummy values because cap-service runs with mocked auth.
  XSUAA_CLIENT_ID: z.string().min(1),
  XSUAA_CLIENT_SECRET: z.string().min(1),
  XSUAA_TOKEN_URL: z.string().url().optional(),
  
  // Local CAP mocked auth
  CAP_DEV_USER: z.string().default('alice'),
  CAP_DEV_PASSWORD: z.string().default(''),
  
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

// Fail on startup, not on first request, if config is broken.
export const env = envSchema.parse(process.env);
export type Env = z.infer<typeof envSchema>;
```

# packages/mcp-server/src/config/logger.ts

```ts
import pino from 'pino';

export const logger = pino({
  enabled: false,
});

export function withCorrelation(correlationId: string) {
  return logger.child({ correlationId });
}
```

# packages/mcp-server/src/server.ts

```ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import 'dotenv/config';

import { ProcurementService } from './services/procurementService.js';
import { FmcgService } from './services/fmcg-operations/fmcgService.js';
import { searchFmcgProductsTool } from './tools/fmcg-operations/searchFmcgProducts.js';
import { getFmcgProductDetailsTool } from './tools/fmcg-operations/getFmcgProductDetails.js';
import { getActiveFmcgSchemesTool } from './tools/fmcg-operations/getActiveFmcgSchemes.js';
import { searchRetailersTool } from './tools/fmcg-operations/searchFmcgRetailers.js';
import { startRetailInteractionTool } from './tools/fmcg-operations/startRetailInteraction.js';
import { addRetailInteractionMessageTool } from './tools/fmcg-operations/addRetailInteractionMessage.js';
import { captureProductInterestTool } from './tools/fmcg-operations/captureFmcgProductInterest.js';
import { createRetailFollowUpTool } from './tools/fmcg-operations/createRetailFollowUp.js';
import { completeRetailInteractionTool } from './tools/fmcg-operations/completeRetailInteraction.js';
import { listRetailInteractionsTool } from './tools/fmcg-operations/listRetailInteractions.js';
import { getRetailInteractionTool } from './tools/fmcg-operations/getRetailInteraction.js';
import { searchVendorsTool } from './tools/sap-operations/vendors/searchVendors.js';
import { getVendorTool } from './tools/sap-operations/vendors/getVendor.js';
import { createVendorTool } from './tools/sap-operations/vendors/createVendor.js';
import { updateVendorTool } from './tools/sap-operations/vendors/updateVendor.js';
import { blockVendorTool } from './tools/sap-operations/vendors/blockVendor.js';
import { unblockVendorTool } from './tools/sap-operations/vendors/unblockVendor.js';
import { deactivateVendorTool } from './tools/sap-operations/vendors/deactivateVendor.js';
import { searchPurchaseOrdersTool } from './tools/sap-operations/purchase-orders/searchPurchaseOrders.js';
import { getPurchaseOrderTool } from './tools/sap-operations/purchase-orders/getPurchaseOrder.js';
import { createPurchaseOrderTool } from './tools/sap-operations/purchase-orders/createPurchaseOrder.js';
import { addPoLineItemTool } from './tools/sap-operations/purchase-orders/addPoLineItem.js';
import { releasePurchaseOrderTool } from './tools/sap-operations/purchase-orders/releasePurchaseOrder.js';
import { cancelPurchaseOrderTool } from './tools/sap-operations/purchase-orders/cancelPurchaseOrder.js';
import { receiveGoodsTool } from './tools/sap-operations/purchase-orders/receiveGoods.js';
import { checkInventoryTool } from './tools/sap-operations/inventory/checkInventory.js';
import { listInventoryTool } from './tools/sap-operations/inventory/listInventory.js';
import { checkLowStockTool } from './tools/sap-operations/inventory/checkLowStock.js';
import { issueGoodsTool } from './tools/sap-operations/inventory/issueGoods.js';

import { getLastPurchasePriceTool } from './tools/sap-operations/pricing/getLastPurchasePrice.js';
import { getVendorMaterialPriceTool } from './tools/sap-operations/pricing/getVendorMaterialPrice.js';
import { searchQuotationsTool } from './tools/sap-operations/quotations/searchQuotations.js';
import { createPurchaseOrderFromQuoteTool } from './tools/sap-operations/quotations/createPurchaseOrderFromQuote.js';
import { compareSupplierQuotesTool } from './tools/ai-operations/quotations/compareSupplierQuotes.js';

import { searchSupplierInvoicesTool } from './tools/sap-operations/invoices/searchSupplierInvoices.js';
import { getSupplierInvoiceTool } from './tools/sap-operations/invoices/getSupplierInvoice.js';
import { createSupplierInvoiceTool } from './tools/sap-operations/invoices/createSupplierInvoice.js';
import { verifySupplierInvoiceTool } from './tools/sap-operations/invoices/verifySupplierInvoice.js';
import { postSupplierInvoiceTool } from './tools/sap-operations/invoices/postSupplierInvoice.js';
import { cancelSupplierInvoiceTool } from './tools/sap-operations/invoices/cancelSupplierInvoice.js';
import { summarizeInvoiceDiscrepanciesTool } from './tools/ai-operations/invoices/summarizeInvoiceDiscrepancies.js';

import { vendorSummaryTool } from './tools/ai-operations/vendors/vendorSummary.js';
import { supplierPerformanceTool } from './tools/ai-operations/vendors/supplierPerformance.js';
import { supplierSpendSummaryTool } from './tools/ai-operations/vendors/supplierSpendSummary.js';

import { procurementHealthCheckTool } from './tools/ai-operations/procurement/procurementHealthCheck.js';
import { procurementTimelineTool } from './tools/ai-operations/procurement/procurementTimeline.js';
import { explainPurchaseOrderTool } from './tools/ai-operations/procurement/explainPurchaseOrder.js';
import { CapClientError } from './clients/capClient.js';
import { logger } from './config/logger.js';

const service = new ProcurementService();
const fmcgService = new FmcgService();
const tools = [
  // SAP Operations
  searchVendorsTool,
  getVendorTool,
  createVendorTool,
  updateVendorTool,
  blockVendorTool,
  unblockVendorTool,
  deactivateVendorTool,
  searchPurchaseOrdersTool,
  getPurchaseOrderTool,
  createPurchaseOrderTool,
  addPoLineItemTool,
  releasePurchaseOrderTool,
  cancelPurchaseOrderTool,
  receiveGoodsTool,
  
  // Inventory
  checkInventoryTool,
  listInventoryTool,
  checkLowStockTool,
  issueGoodsTool,

  // Quotations
  searchQuotationsTool,
  createPurchaseOrderFromQuoteTool,

  // Invoices
  searchSupplierInvoicesTool,
  getSupplierInvoiceTool,
  createSupplierInvoiceTool,
  verifySupplierInvoiceTool,
  postSupplierInvoiceTool,
  cancelSupplierInvoiceTool,

  // AI Operations
  vendorSummaryTool,
  supplierPerformanceTool,
  supplierSpendSummaryTool,
  compareSupplierQuotesTool,
  summarizeInvoiceDiscrepanciesTool,
  procurementHealthCheckTool,
  procurementTimelineTool,
  explainPurchaseOrderTool,

  // Pricing Intelligence
  getLastPurchasePriceTool,
  getVendorMaterialPriceTool,

  // FMCG retail sales domain (FMCGDATA)
  searchFmcgProductsTool,
  getFmcgProductDetailsTool,
  getActiveFmcgSchemesTool,
  searchRetailersTool,
  startRetailInteractionTool,
  addRetailInteractionMessageTool,
  captureProductInterestTool,
  createRetailFollowUpTool,
  completeRetailInteractionTool,
  listRetailInteractionsTool,
  getRetailInteractionTool,
];

const fmcgToolNames = new Set([
  'search_fmcg_products',
  'get_fmcg_product_details',
  'get_active_fmcg_schemes',
  'search_fmcg_retailers',
  'start_retail_interaction',
  'add_retail_interaction_message',
  'capture_fmcg_product_interest',
  'create_retail_follow_up',
  'complete_retail_interaction',
  'list_retail_interactions',
  'get_retail_interaction',
]);

const server = new Server(
  { name: 'procurement-mcp', version: '1.0.0' },
  { capabilities: { tools: {} } },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: tools.map((t) => ({
    name: t.name,
    description: t.description,
    inputSchema: z.toJSONSchema(t.inputSchema) as any,
  })),
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const tool = tools.find((t) => t.name === request.params.name);
  if (!tool) {
    return {
      content: [{ type: 'text', text: `Unknown tool: ${request.params.name}` }],
      isError: true,
    };
  }

  try {
    const parsedInput = tool.inputSchema.parse(request.params.arguments);
    // handler signatures differ per tool only in the schema type; cast is safe
    // because we just validated with that exact tool's schema.
    const domainService = fmcgToolNames.has(tool.name) ? fmcgService : service;
    const result = await (tool.handler as any)(domainService, parsedInput);
    return { content: [{ type: 'text', text: JSON.stringify(result) }] };
  } catch (err) {
    // Never leak raw stack traces / internal errors back to the LLM context.
    if (err instanceof CapClientError) {
      logger.error({ tool: tool.name, status: err.status }, err.message);
      return {
        content: [{ type: 'text', text: `Data source error: ${err.message}` }],
        isError: true,
      };
    }
    logger.error({ tool: tool.name, err }, 'Unhandled tool error');
    return {
      content: [{ type: 'text', text: 'Internal error processing this tool call.' }],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  logger.info('procurement-mcp server started');
}

main().catch((err) => {
  logger.error({ err }, 'Fatal startup error');
  process.exit(1);
});

```

# packages/mcp-server/src/services/ai-operations/procurement/aiProcurementService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import type { ODataResponse, PurchaseOrder, SupplierInvoice, Quotation } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class AiProcurementService {
  constructor(private readonly client: CapClient) {}

  async getProcurementHealth(): Promise<{
    blockedInvoices: number;
    partiallyReceivedPOs: number;
    unreleasedPOs: number;
    expiredQuotations: number;
  }> {
    const today = new Date().toISOString().substring(0, 10);

    // 1. Blocked Invoices
    const blockedInvoicesResult = await this.client.get<ODataResponse<SupplierInvoice>>('/SupplierInvoices', {
      $filter: `status eq 'BLOCKED'`,
      $top: '1',
      $count: 'true'
    });

    // 2. Partially Received POs
    const partiallyReceivedPOsResult = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `status eq 'PARTIALLY_RECEIVED'`,
      $top: '1',
      $count: 'true'
    });

    // 3. Unreleased POs (CREATED)
    const unreleasedPOsResult = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `status eq 'CREATED'`,
      $top: '1',
      $count: 'true'
    });

    // 4. Expired Quotations
    const expiredQuotationsResult = await this.client.get<ODataResponse<Quotation>>('/Quotations', {
      $filter: `validUntil lt ${today} and status eq 'OPEN'`,
      $top: '1',
      $count: 'true'
    });

    return {
      blockedInvoices: (blockedInvoicesResult as any)['@odata.count'] ?? 0,
      partiallyReceivedPOs: (partiallyReceivedPOsResult as any)['@odata.count'] ?? 0,
      unreleasedPOs: (unreleasedPOsResult as any)['@odata.count'] ?? 0,
      expiredQuotations: (expiredQuotationsResult as any)['@odata.count'] ?? 0,
    };
  }

  async getProcurementTimeline(poNumberOrId: string): Promise<any> {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(poNumberOrId);
    const filterField = isUuid ? 'ID' : 'poNumber';

    const poResult = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `${filterField} eq '${escapeOData(poNumberOrId)}'`,
      $top: '1',
      $expand: 'lineItems($expand=material)'
    });

    const po = poResult.value[0];
    if (!po) {
      throw new Error(`Purchase order ${poNumberOrId} not found.`);
    }

    const invoicesResult = await this.client.get<ODataResponse<SupplierInvoice>>('/SupplierInvoices', {
      $filter: `purchaseOrder_ID eq '${po.ID}'`,
      $top: '100'
    });
    
    const quotationsResult = await this.client.get<ODataResponse<Quotation>>('/Quotations', {
      $filter: `vendor_ID eq '${po.vendor_ID}'`,
      $top: '100'
    });

    // To link quotes, we see if a quotation exists for the materials in the PO
    const poMaterials = (po.lineItems || []).map(li => li.material_ID);
    const linkedQuotes = quotationsResult.value.filter(q => poMaterials.includes(q.material_ID));

    return {
      purchaseOrder: {
        id: po.ID,
        poNumber: po.poNumber,
        status: po.status,
        orderDate: po.orderDate,
        totalAmount: po.totalAmount,
        currency: po.currency
      },
      quotations: linkedQuotes.map(q => ({
        id: q.ID,
        status: q.status,
        price: q.price,
        quantity: q.quantity,
        validUntil: q.validUntil
      })),
      goodsReceipts: po.lineItems?.map(item => ({
        materialId: item.material?.materialId || item.material_ID,
        orderedQuantity: item.quantity,
        receivedQuantity: item.receivedQuantity ?? 0
      })),
      invoices: invoicesResult.value.map(inv => ({
        invoiceNumber: inv.invoiceNumber,
        status: inv.status,
        totalAmount: inv.totalAmount,
        invoiceDate: inv.invoiceDate,
        postingDate: inv.postingDate
      }))
    };
  }

  async explainPurchaseOrder(poNumberOrId: string): Promise<any> {
    return this.getProcurementTimeline(poNumberOrId);
  }
}

```

# packages/mcp-server/src/services/ai-operations/vendors/aiVendorService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import type { ODataResponse, PurchaseOrder } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class AiVendorService {
  constructor(private readonly client: CapClient) {}

  async getSupplierSpend(vendorId: string): Promise<{ totalSpend: number; currency: string }> {
    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `vendor_ID eq '${escapeOData(vendorId)}' and status ne 'CANCELLED'`,
      $top: '1000',
    });

    let totalSpend = 0;
    let currency = 'USD'; // default
    for (const order of result.value) {
      totalSpend += Number(order.totalAmount || 0);
      if (order.currency) currency = order.currency;
    }

    return { totalSpend, currency };
  }

  async getVendorPerformance(vendorId: string): Promise<{ totalOrders: number; fulfilledOrders: number; cancelledOrders: number }> {
    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `vendor_ID eq '${escapeOData(vendorId)}'`,
      $top: '1000',
    });

    let fulfilledOrders = 0;
    let cancelledOrders = 0;

    for (const order of result.value) {
      if (order.status === 'RECEIVED') {
        fulfilledOrders++;
      } else if (order.status === 'CANCELLED') {
        cancelledOrders++;
      }
    }

    return {
      totalOrders: result.value.length,
      fulfilledOrders,
      cancelledOrders
    };
  }
}

```

# packages/mcp-server/src/services/fmcg-operations/fmcgService.ts

```ts
import { CapClient } from '../../clients/capClient.js';
import { env } from '../../config/env.js';
import { ProductService } from './products/productService.js';
import { RetailPriceService } from './pricing/retailPriceService.js';
import { SchemeService } from './schemes/schemeService.js';
import { RetailerService } from './retailers/retailerService.js';
import { InteractionService } from './interactions/interactionService.js';
import { FollowUpService } from './follow-ups/followUpService.js';
import type {
  AddInteractionMessageInput, CaptureProductInterestInput, CompleteInteractionInput,
  ListInteractionsInput, ProductSearchFilters, RetailerSearchFilters, StartInteractionInput,
} from '../../types/fmcg.js';

/** Facade for FMCGDATA, following the same composition pattern as ProcurementService. */
export class FmcgService {
  private readonly productService: ProductService;
  private readonly retailPriceService: RetailPriceService;
  private readonly schemeService: SchemeService;
  private readonly retailerService: RetailerService;
  private readonly interactionService: InteractionService;
  private readonly followUpService: FollowUpService;

  constructor(
    private readonly client: CapClient = new CapClient(
      env.RETAIL_SERVICE_URL ?? env.CAP_SERVICE_URL.replace(/\/procurement\/?$/, '/retail'),
    ),
  ) {
    this.productService = new ProductService(this.client);
    this.retailPriceService = new RetailPriceService(this.client);
    this.schemeService = new SchemeService(this.client, this.productService);
    this.retailerService = new RetailerService(this.client);
    this.interactionService = new InteractionService(this.client);
    this.followUpService = new FollowUpService(this.client);
  }

  async searchProducts(filters: ProductSearchFilters = {}) {
    return this.productService.searchProducts(filters);
  }

  async getProductDetails(sku: string) {
    const product = await this.productService.getProductBySku(sku);
    if (!product) return undefined;
    const [currentPrice, activeSchemes] = await Promise.all([
      this.retailPriceService.getCurrentPrice(product.ID),
      this.schemeService.getActiveSchemes(sku),
    ]);
    return {
      ...product,
      availability: (product.stockQuantity ?? 0) > 0 ? 'IN_STOCK' : 'OUT_OF_STOCK',
      currentPrice: currentPrice ?? null,
      activeSchemes,
    };
  }

  async getActiveSchemes(sku?: string) {
    return this.schemeService.getActiveSchemes(sku);
  }

  async searchRetailers(filters: RetailerSearchFilters = {}) {
    return this.retailerService.searchRetailers(filters);
  }

  async startInteraction(input: StartInteractionInput) {
    return this.interactionService.startInteraction(input);
  }

  async addInteractionMessage(input: AddInteractionMessageInput) {
    return this.interactionService.addMessage(input);
  }

  async captureProductInterest(input: CaptureProductInterestInput) {
    const product = await this.productService.getProductBySku(input.sku);
    if (!product) throw new Error(`Unknown FMCG product SKU: ${input.sku}`);
    return this.interactionService.captureProductInterest({
      interactionId: input.interactionId, productId: product.ID,
      quantity: input.quantity, unit: input.unit ?? product.unit, notes: input.notes,
    });
  }

  async createFollowUp(input: import('../../types/fmcg.js').CreateFollowUpInput) {
    return this.followUpService.createFollowUp(input);
  }

  async completeInteraction(input: CompleteInteractionInput) {
    return this.interactionService.completeInteraction(input);
  }

  async listInteractions(input: ListInteractionsInput = {}) {
    return this.interactionService.listInteractions(input);
  }

  async getInteraction(interactionId: string) {
    return this.interactionService.getInteraction(interactionId);
  }
}

```

# packages/mcp-server/src/services/fmcg-operations/follow-ups/followUpService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import type { CreateFollowUpInput, FollowUp } from '../../../types/fmcg.js';

export class FollowUpService {
  constructor(private readonly client: CapClient) {}

  async createFollowUp(input: CreateFollowUpInput): Promise<FollowUp> {
    return this.client.post<FollowUp>('/FollowUps', {
      interaction_ID: input.interactionId, requirement: input.requirement,
      ...(input.followUpDate ? { followUpDate: input.followUpDate } : {}),
      ...(input.assignedTo ? { assignedTo: input.assignedTo } : {}),
      status: 'OPEN',
    });
  }
}

```

# packages/mcp-server/src/services/fmcg-operations/interactions/interactionService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import type {
  AddInteractionMessageInput, CompleteInteractionInput, Interaction, InteractionMessage,
  InteractionItem, ListInteractionsInput, ODataList, StartInteractionInput,
} from '../../../types/fmcg.js';

export class InteractionService {
  constructor(private readonly client: CapClient) {}

  async startInteraction(input: StartInteractionInput): Promise<Interaction> {
    const stamp = new Date();
    const number = `FMCG-${stamp
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, "")}-${stamp.getTime().toString().slice(-6)}`;

    return this.client.post<Interaction>("/Interactions", {
      interactionNumber: number,
      ...(input.retailerId ? { retailer_ID: input.retailerId } : {}),
      channel: input.channel,
      status: "IN_PROGRESS",
      startedAt: stamp.toISOString(),
    });
  }

  async addMessage(
    input: AddInteractionMessageInput
  ): Promise<InteractionMessage> {
    return this.client.post<InteractionMessage>("/InteractionMessages", {
      interaction_ID: input.interactionId,
      role: input.role,
      content: input.content,
      createdAt: new Date().toISOString(),
    });
  }

  async captureProductInterest(input: {
    interactionId: string;
    productId: string;
    quantity: number;
    unit?: string;
    notes?: string;
  }): Promise<InteractionItem> {
    if (!Number.isInteger(input.quantity) || input.quantity <= 0) {
      throw new Error("quantity must be a positive integer");
    }
    return this.client.post<InteractionItem>("/InteractionItems", {
      interaction_ID: input.interactionId,
      product_ID: input.productId,
      requestedQuantity: input.quantity,
      unit: input.unit ?? "EA",
      interestStatus: "INTERESTED",
      notes: input.notes ?? "",
    });
  }

  async completeInteraction(
    input: CompleteInteractionInput
  ): Promise<Interaction> {
    return this.client.patch<Interaction>(
      `/Interactions(${input.interactionId})`,
      {
        status: "COMPLETED",
        endedAt: new Date().toISOString(),
        summary: input.summary,
        outcome: input.outcome,
        followUpRequired: input.followUpRequired ?? false,
      }
    );
  }

  async listInteractions(
    input: ListInteractionsInput = {}
  ): Promise<Interaction[]> {
    const params: Record<string, string> = {
      $orderby: "startedAt desc",
      $top: String(input.limit ?? 20),
      $expand: "retailer",
    };
    if (input.retailerId)
      params["$filter"] = `retailer_ID eq ${input.retailerId}`;
    const result = await this.client.get<ODataList<Interaction>>(
      "/Interactions",
      params
    );
    return result.value;
  }

  async getInteraction(interactionId: string): Promise<unknown> {
    return this.client.get<Interaction>(`/Interactions(${interactionId})`, {
      $expand: "retailer,messages,items,followUps",
    });
  }
}

```

# packages/mcp-server/src/services/fmcg-operations/pricing/retailPriceService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import type { RetailPrice, ODataList } from '../../../types/fmcg.js';

export class RetailPriceService {
  constructor(private readonly client: CapClient) {}

  async getCurrentPrice(productId: string): Promise<RetailPrice | undefined> {
    const result = await this.client.get<ODataList<RetailPrice>>('/RetailPrices', {
      '$filter': `product_ID eq ${productId}`,
      '$orderby': 'validFrom desc', '$top': '20',
    });
    const today = new Date().toISOString().slice(0, 10);
    return result.value.find((price) => price.validFrom <= today && price.validTo >= today);
  }
}

```

# packages/mcp-server/src/services/fmcg-operations/products/productService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import type { FmcgProduct, ProductSearchFilters, ODataList } from '../../../types/fmcg.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class ProductService {
  constructor(private readonly client: CapClient) {}

  async searchProducts(filters: ProductSearchFilters = {}): Promise<FmcgProduct[]> {
    const clauses = ['isActive eq true'];
    if (filters.query) {
      const q = escapeOData(filters.query);
      clauses.push(`(contains(name,'${q}') or contains(sku,'${q}') or contains(brand,'${q}'))`);
    }
    if (filters.category) clauses.push(`category eq '${escapeOData(filters.category)}'`);
    if (filters.brand) clauses.push(`brand eq '${escapeOData(filters.brand)}'`);
    const result = await this.client.get<ODataList<FmcgProduct>>('/Products', {
      '$filter': clauses.join(' and '), '$orderby': 'name asc', '$top': String(filters.limit ?? 30),
    });
    return result.value;
  }

  async getProductBySku(sku: string): Promise<FmcgProduct | undefined> {
    const result = await this.client.get<ODataList<FmcgProduct>>('/Products', {
      '$filter': `sku eq '${escapeOData(sku)}'`, '$top': '1',
    });
    return result.value[0];
  }
}

```

# packages/mcp-server/src/services/fmcg-operations/retailers/retailerService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import type { FmcgRetailer, ODataList, RetailerSearchFilters } from '../../../types/fmcg.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class RetailerService {
  constructor(private readonly client: CapClient) {}

  async searchRetailers(filters: RetailerSearchFilters = {}): Promise<FmcgRetailer[]> {
    const clauses = ["status eq 'ACTIVE'"];
    if (filters.query) {
      const q = escapeOData(filters.query);
      clauses.push(`(contains(name,'${q}') or contains(retailerCode,'${q}') or contains(contactName,'${q}'))`);
    }
    if (filters.city) clauses.push(`city eq '${escapeOData(filters.city)}'`);
    if (filters.channel) clauses.push(`channel eq '${filters.channel}'`);
    const result = await this.client.get<ODataList<FmcgRetailer>>('/Retailers', {
      '$filter': clauses.join(' and '), '$orderby': 'name asc', '$top': String(filters.limit ?? 30),
    });
    return result.value;
  }
}

```

# packages/mcp-server/src/services/fmcg-operations/schemes/schemeService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import type { FmcgScheme, ODataList, SchemeProduct } from '../../../types/fmcg.js';
import { ProductService } from '../products/productService.js';

export class SchemeService {
  constructor(
    private readonly client: CapClient,
    private readonly products: ProductService,
  ) {}

  async getActiveSchemes(sku?: string): Promise<FmcgScheme[]> {
    const today = new Date().toISOString().slice(0, 10);
    if (sku) {
      const product = await this.products.getProductBySku(sku);
      if (!product) return [];
      const links = await this.client.get<ODataList<SchemeProduct>>('/SchemeProducts', {
        '$filter': `product_ID eq ${product.ID}`, '$expand': 'scheme',
      });
      return links.value
        .map((link) => link.scheme)
        .filter((scheme): scheme is FmcgScheme =>
          Boolean(scheme && scheme.isActive && scheme.validFrom <= today && scheme.validTo >= today));
    }
    const schemes = await this.client.get<ODataList<FmcgScheme>>('/Schemes', {
      '$filter': `isActive eq true and validFrom le ${today} and validTo ge ${today}`,
      '$orderby': 'validTo asc', '$top': '50',
    });
    return schemes.value;
  }
}

```

# packages/mcp-server/src/services/procurementService.ts

```ts
import { CapClient } from '../clients/capClient.js';
import type { InventoryItem, PurchaseOrder, Vendor, VendorFilters, PurchaseOrderFilters, POLineItem, Quotation, SupplierInvoice, SupplierInvoiceFilters } from '../types/procurement.js';
import { VendorService } from './sap-operations/vendors/vendorService.js';
import { PurchaseOrderService } from './sap-operations/purchase-orders/purchaseOrderService.js';
import { InventoryService } from './sap-operations/inventory/inventoryService.js';
import { AiVendorService } from './ai-operations/vendors/aiVendorService.js';
import { AiProcurementService } from './ai-operations/procurement/aiProcurementService.js';
import { PricingService } from './sap-operations/pricing/pricingService.js';
import { QuotationService, QuotationFilters } from './sap-operations/quotations/quotationService.js';
import { InvoiceService } from './sap-operations/invoices/invoiceService.js';


/**
 * Facade service that delegates to domain-specific services.
 * This keeps the existing MCP tools intact while segregating 
 * backend logic into smaller, maintainable files.
 */
export class ProcurementService {
  private readonly vendorService: VendorService;
  private readonly purchaseOrderService: PurchaseOrderService;
  private readonly inventoryService: InventoryService;
  private readonly pricingService: PricingService;
  private readonly aiVendorService: AiVendorService;
  private readonly aiProcurementService: AiProcurementService;
  private readonly quotationService: QuotationService;
  private readonly invoiceService: InvoiceService;

  constructor(private readonly client: CapClient = new CapClient()) {
    this.vendorService = new VendorService(this.client);
    this.inventoryService = new InventoryService(this.client);
    this.pricingService = new PricingService(this.client);
    this.aiVendorService = new AiVendorService(this.client);
    this.aiProcurementService = new AiProcurementService(this.client);
    this.quotationService = new QuotationService(this.client);
    this.invoiceService = new InvoiceService(this.client);
    this.purchaseOrderService = new PurchaseOrderService(this.client, this.vendorService, this.inventoryService, this.pricingService, this.quotationService);
  }

  // --- Vendor Methods ---
  async searchVendors(filters: VendorFilters): Promise<Vendor[]> {
    return this.vendorService.searchVendors(filters);
  }

  async getVendor(id: string): Promise<Vendor | undefined> {
    return this.vendorService.getVendor(id);
  }

  async createVendor(data: Omit<Vendor, 'ID'>): Promise<Vendor> {
    return this.vendorService.createVendor(data);
  }

  async updateVendor(id: string, data: Partial<Vendor>): Promise<Vendor> {
    return this.vendorService.updateVendor(id, data);
  }

  async deactivate_vendor(id: string): Promise<Vendor> {
    return this.vendorService.deactivate_vendor(id);
  }

  async blockVendor(id: string): Promise<Vendor> {
    return this.vendorService.blockVendor(id);
  }

  async unblockVendor(id: string): Promise<Vendor> {
    return this.vendorService.unblockVendor(id);
  }

  async getSupplierSpend(vendorId: string): Promise<{ totalSpend: number; currency: string }> {
    return this.aiVendorService.getSupplierSpend(vendorId);
  }

  async getVendorPerformance(vendorId: string): Promise<{ totalOrders: number; fulfilledOrders: number; cancelledOrders: number }> {
    return this.aiVendorService.getVendorPerformance(vendorId);
  }

  // --- AI Procurement Operations ---

  async getProcurementHealth(): Promise<{
    blockedInvoices: number;
    partiallyReceivedPOs: number;
    unreleasedPOs: number;
    expiredQuotations: number;
  }> {
    return this.aiProcurementService.getProcurementHealth();
  }

  async getProcurementTimeline(poNumberOrId: string): Promise<any> {
    return this.aiProcurementService.getProcurementTimeline(poNumberOrId);
  }

  async explainPurchaseOrder(poNumberOrId: string): Promise<any> {
    return this.aiProcurementService.explainPurchaseOrder(poNumberOrId);
  }

  // --- Purchase Order Methods ---

  async searchPurchaseOrders(filters: PurchaseOrderFilters): Promise<PurchaseOrder[]> {
    return this.purchaseOrderService.searchPurchaseOrders(filters);
  }

  async getPurchaseOrder(idOrPoNumber: string): Promise<PurchaseOrder | undefined> {
    return this.purchaseOrderService.getPurchaseOrder(idOrPoNumber);
  }

  async createPurchaseOrder(data: { vendor_ID: string; currency: string; items?: Array<{ materialId: string, quantity: number, unitPrice?: number }> }): Promise<PurchaseOrder> {
    return this.purchaseOrderService.createPurchaseOrder(data);
  }

  async createPurchaseOrderFromQuotation(quotationId: string): Promise<PurchaseOrder> {
    return this.purchaseOrderService.createPurchaseOrderFromQuotation(quotationId);
  }

  async addPOLineItem(poId: string, materialId: string, quantity: number, unitPrice: number): Promise<POLineItem> {
    return this.purchaseOrderService.addPOLineItem(poId, materialId, quantity, unitPrice);
  }

  async releasePurchaseOrder(id: string): Promise<PurchaseOrder> {
    return this.purchaseOrderService.releasePurchaseOrder(id);
  }

  async cancelPurchaseOrder(id: string): Promise<PurchaseOrder> {
    return this.purchaseOrderService.cancelPurchaseOrder(id);
  }

  async receiveGoods(idOrPoNumber: string, partialItems?: Array<{ materialId: string, quantity: number }>): Promise<PurchaseOrder> {
    return this.purchaseOrderService.receiveGoods(idOrPoNumber, partialItems);
  }

  // --- Inventory Methods ---
  async checkInventory(materialId: string): Promise<InventoryItem | undefined> {
    return this.inventoryService.checkInventory(materialId);
  }

  async listInventory(limit?: number): Promise<InventoryItem[]> {
    return this.inventoryService.listInventory(limit);
  }

  async getLowStockItems(): Promise<InventoryItem[]> {
    return this.inventoryService.getLowStockItems();
  }

  async issueGoods(materialId: string, quantity: number): Promise<InventoryItem> {
    return this.inventoryService.issueGoods(materialId, quantity);
  }

  // --- Pricing Methods ---
  async getVendorMaterialPrice(vendorId: string, materialId: string): Promise<number | undefined> {
    return this.pricingService.getVendorMaterialPrice(vendorId, materialId);
  }

  async getLastPurchasePrice(vendorId: string, materialId: string): Promise<number | undefined> {
    return this.pricingService.getLastPurchasePrice(vendorId, materialId);
  }

  // --- Quotation Methods ---
  async searchQuotations(filters?: QuotationFilters): Promise<Quotation[]> {
    return this.quotationService.searchQuotations(filters);
  }

  async getQuotation(id: string): Promise<Quotation | undefined> {
    return this.quotationService.getQuotation(id);
  }

  async acceptQuotation(id: string): Promise<Quotation> {
    return this.quotationService.acceptQuotation(id);
  }

  async rejectQuotation(id: string): Promise<Quotation> {
    return this.quotationService.rejectQuotation(id);
  }

  // --- Supplier Invoice Methods ---
  async searchInvoices(filters?: SupplierInvoiceFilters): Promise<SupplierInvoice[]> {
    return this.invoiceService.searchInvoices(filters);
  }

  async getInvoice(idOrInvoiceNumber: string): Promise<SupplierInvoice | undefined> {
    return this.invoiceService.getInvoice(idOrInvoiceNumber);
  }

  async createInvoice(data: {
    purchaseOrderId: string;
    invoiceNumber: string;
    invoiceDate: string;
    postingDate: string;
    currency: string;
    totalAmount: number;
    items: Array<{ materialId: string; quantity: number; unitPrice: number }>;
  }): Promise<SupplierInvoice> {
    return this.invoiceService.createInvoice(data);
  }

  async verifyInvoice(invoiceId: string): Promise<{ success: boolean; status: string; checks: import('../types/procurement.js').InvoiceVerificationChecks; failures: string[] }> {
    return this.invoiceService.verifyInvoice(invoiceId);
  }

  async postInvoice(invoiceId: string): Promise<SupplierInvoice> {
    return this.invoiceService.postInvoice(invoiceId);
  }

  async cancelInvoice(invoiceId: string): Promise<SupplierInvoice> {
    return this.invoiceService.cancelInvoice(invoiceId);
  }
}

```

# packages/mcp-server/src/services/sap-operations/inventory/inventoryService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import type { InventoryItem, ODataResponse } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class InventoryService {
  constructor(private readonly client: CapClient) { }

  async checkInventory(materialId: string): Promise<InventoryItem | undefined> {
    const result = await this.client.get<ODataResponse<InventoryItem>>('/InventoryItems', {
      $filter: `materialId eq '${escapeOData(materialId)}'`,
      $top: '1',
    });
    return result.value ? result.value[0] : undefined;
  }

  /**
   * Looks up an inventory item by its UUID.
   */
  async getMaterialById(uuid: string): Promise<InventoryItem | undefined> {
    const result = await this.client.get<ODataResponse<InventoryItem>>('/InventoryItems', {
      $filter: `ID eq '${escapeOData(uuid)}'`,
      $top: '1',
    });
    return result.value ? result.value[0] : undefined;
  }

  /**
   * Retrieves a list of all inventory items (paginated).
   */
  async listInventory(limit: number = 50): Promise<InventoryItem[]> {
    const result = await this.client.get<ODataResponse<InventoryItem>>('/InventoryItems', {
      $top: limit.toString(),
      $orderby: 'materialId asc'
    });
    return result.value;
  }

  /**
   * Scans all inventory items to identify materials where quantityOnHand <= reorderPoint.
   */
  async getLowStockItems(): Promise<InventoryItem[]> {
    const filteredResult = await this.client.get<ODataResponse<InventoryItem>>('/InventoryItems', {
      $filter: 'quantityOnHand le reorderPoint'
    });
    return filteredResult.value;
  }

  /**
   * Deducts stock from an inventory item when materials are consumed.
   */
  async issueGoods(materialId: string, quantity: number): Promise<InventoryItem> {
    const item = await this.checkInventory(materialId);
    if (!item) {
      throw new Error(`Material '${materialId}' not found.`);
    }

    const currentStock = item.quantityOnHand ?? 0;
    if (currentStock < quantity) {
      throw new Error(`Insufficient stock for material '${materialId}'. Requested: ${quantity}, Available: ${currentStock}.`);
    }

    const newQuantity = currentStock - quantity;

    const result = await this.client.patch<InventoryItem>(`/InventoryItems(${item.ID})`, {
      quantityOnHand: newQuantity
    });
    return result;
  }

  async addStock(id: string, quantityToAdd: number): Promise<InventoryItem> {
    // First fetch to get current stock
    const item = await this.client.get<InventoryItem>(`/InventoryItems(${escapeOData(id)})`);
    const newQuantity = (item.quantityOnHand || 0) + quantityToAdd;

    return this.client.patch<InventoryItem>(`/InventoryItems(${escapeOData(id)})`, {
      quantityOnHand: newQuantity
    });
  }
}

```

# packages/mcp-server/src/services/sap-operations/invoices/invoiceService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import type { SupplierInvoice, SupplierInvoiceFilters, ODataResponse, PurchaseOrder, InvoiceVerificationChecks } from '../../../types/procurement.js';
import { PurchaseOrderStatus } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class InvoiceService {
  constructor(private readonly client: CapClient) { }

  async searchInvoices(filters: SupplierInvoiceFilters = {}): Promise<SupplierInvoice[]> {
    const filterClauses: string[] = [];
    if (filters.purchaseOrderId) {
      filterClauses.push(`purchaseOrder_ID eq '${escapeOData(filters.purchaseOrderId)}'`);
    }
    if (filters.vendorId) {
      filterClauses.push(`vendor_ID eq '${escapeOData(filters.vendorId)}'`);
    }
    if (filters.status) {
      filterClauses.push(`status eq '${escapeOData(filters.status)}'`);
    }
    if (filters.fromDate) {
      filterClauses.push(`invoiceDate ge ${escapeOData(filters.fromDate)}`);
    }
    if (filters.toDate) {
      filterClauses.push(`invoiceDate le ${escapeOData(filters.toDate)}`);
    }

    const queryParams: Record<string, string> = {
      $orderby: 'invoiceDate desc',
      $top: String(filters.limit || 50),
      $expand: 'vendor,purchaseOrder'
    };

    if (filterClauses.length > 0) {
      queryParams.$filter = filterClauses.join(' and ');
    }

    const result = await this.client.get<ODataResponse<SupplierInvoice>>('/SupplierInvoices', queryParams);
    return result.value;
  }

  async getInvoice(idOrInvoiceNumber: string): Promise<SupplierInvoice | undefined> {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(idOrInvoiceNumber);
    const filterField = isUuid ? 'ID' : 'invoiceNumber';

    const result = await this.client.get<ODataResponse<SupplierInvoice>>('/SupplierInvoices', {
      $filter: `${filterField} eq '${escapeOData(idOrInvoiceNumber)}'`,
      $top: '1',
      $expand: 'vendor,lineItems($expand=material),purchaseOrder($expand=lineItems($expand=material))'
    });
    return result.value[0];
  }

  async createInvoice(data: {
    purchaseOrderId: string;
    invoiceNumber: string;
    invoiceDate: string;
    postingDate: string;
    currency: string;
    totalAmount: number;
    items: Array<{ materialId: string; quantity: number; unitPrice: number }>;
  }): Promise<SupplierInvoice> {

    // 1. Validate PO exists and is received
    const poResult = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `ID eq '${escapeOData(data.purchaseOrderId)}' or poNumber eq '${escapeOData(data.purchaseOrderId)}'`,
      $top: '1',
      $expand: 'lineItems($expand=material)'
    });

    const po = poResult.value[0];
    if (!po) {
      throw new Error(`Purchase order ${data.purchaseOrderId} not found.`);
    }

    if (po.status !== 'RECEIVED' && po.status !== 'PARTIALLY_RECEIVED') {
      throw new Error(`Purchase order ${po.poNumber} must be fully or partially received before invoicing. Current status: ${po.status}`);
    }

    if (po.currency !== data.currency) {
      throw new Error(`Invoice currency ${data.currency} does not match PO currency ${po.currency}.`);
    }

    // 2. Validate duplicate invoice number
    const dupResult = await this.client.get<ODataResponse<SupplierInvoice>>('/SupplierInvoices', {
      $filter: `invoiceNumber eq '${escapeOData(data.invoiceNumber)}'`,
      $top: '1'
    });
    if (dupResult.value.length > 0) {
      throw new Error(`Invoice number '${data.invoiceNumber}' already exists.`);
    }

    // 3. Create invoice with deep insert for line items
    const lineItems = data.items.map(item => {
      // Find the corresponding PO line item to resolve the UUID if the user passed a human-readable ID
      const poItem = po.lineItems?.find(pi =>
        pi.material_ID === item.materialId || pi.material?.materialId === item.materialId
      );

      return {
        material_ID: poItem ? poItem.material_ID : item.materialId, // Use resolved UUID if found
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        amount: item.quantity * item.unitPrice
      };
    });

    return this.client.post<SupplierInvoice>('/SupplierInvoices', {
      invoiceNumber: data.invoiceNumber,
      purchaseOrder_ID: po.ID,
      vendor_ID: po.vendor_ID,
      invoiceDate: data.invoiceDate,
      postingDate: data.postingDate,
      currency: data.currency,
      totalAmount: data.totalAmount,
      status: 'CREATED',
      lineItems
    });
  }

  async verifyInvoice(invoiceId: string): Promise<{ success: boolean; status: string; checks: InvoiceVerificationChecks; failures: string[] }> {
    const invoice = await this.getInvoice(invoiceId);


    if (!invoice) {
      throw new Error(`Invoice ${invoiceId} not found.`);
    }

    if (invoice.status !== 'CREATED') {
      throw new Error(`Invoice ${invoiceId} cannot be verified from status: ${invoice.status}.`);
    }

    const po = invoice.purchaseOrder;
    if (!po) {
      throw new Error(`Associated Purchase Order for invoice ${invoiceId} could not be loaded.`);
    }

    if (po.status !== PurchaseOrderStatus.RECEIVED && po.status !== PurchaseOrderStatus.PARTIALLY_RECEIVED) {
      throw new Error(`Purchase Order ${po.poNumber} has not received goods yet.`);
    }

    const failures: string[] = [];

    // Three-way match checks
    const checks: InvoiceVerificationChecks = {
      vendor: invoice.vendor_ID === po.vendor_ID,
      currency: invoice.currency === po.currency,
      quantity: true,
      price: true,
      material: true,
    };

    // Calculate if invoice item quantities exceed received quantities
    if (!invoice.lineItems || invoice.lineItems.length === 0) {
      throw new Error("Invoice contains no line items.");
    }




    for (const invItem of invoice.lineItems) {
      // Robust matching: Try to match by UUID or fallback to the human-readable materialId
      const matchingPoItem = (po.lineItems || []).find(pi =>
        pi.material_ID === invItem.material_ID ||
        (pi.material && pi.material.materialId === invItem.material_ID) ||
        (invItem.material && pi.material && pi.material.materialId === invItem.material.materialId)
      );

      if (!matchingPoItem) {
        checks.material = false;
        failures.push(
          `Material ${invItem.material_ID} not found on Purchase Order.`
        );
        continue;
      }

      const receivedQty = matchingPoItem.receivedQuantity ?? 0;

      if (invItem.quantity > receivedQty) {
        checks.quantity = false;
      }

      // Production-style cents comparison to avoid floating-point issues
      const invCents = Math.round(Number(invItem.unitPrice) * 100);
      const poCents = Math.round(Number(matchingPoItem.unitPrice) * 100);

      if (invCents !== poCents) {
        checks.price = false;
      }
    }

    if (!checks.vendor)
      failures.push("Vendor mismatch");

    if (!checks.currency)
      failures.push("Currency mismatch");

    if (!checks.quantity)
      failures.push("Invoice quantity exceeds received quantity");

    if (!checks.price)
      failures.push("Invoice unit price differs from Purchase Order");





    const allPassed = checks.vendor && checks.currency && checks.material && checks.quantity && checks.price;
    const newStatus = allPassed ? 'VERIFIED' : 'BLOCKED';

    await this.client.patch(`/SupplierInvoices(${invoice.ID})`, {
      status: newStatus
    });

    return {
      success: allPassed,
      status: newStatus,
      checks,
      failures
    };
  }

  async postInvoice(invoiceId: string): Promise<SupplierInvoice> {
    const invoice = await this.getInvoice(invoiceId);
    if (!invoice) {
      throw new Error(`Invoice ${invoiceId} not found.`);
    }

    if (invoice.status !== 'VERIFIED') {
      throw new Error(`Only VERIFIED invoices can be posted. Current status: ${invoice.status}`);
    }

    return this.client.patch<SupplierInvoice>(`/SupplierInvoices(${invoice.ID})`, {
      status: 'POSTED'
    });
  }

  async cancelInvoice(invoiceId: string): Promise<SupplierInvoice> {
    const invoice = await this.getInvoice(invoiceId);
    if (!invoice) {
      throw new Error(`Invoice ${invoiceId} not found.`);
    }

    if (invoice.status === 'BLOCKED') {
      throw new Error(`BLOCKED invoices cannot be cancelled without verification.`);
    }

    return this.client.patch<SupplierInvoice>(`/SupplierInvoices(${invoice.ID})`, {
      status: 'CANCELLED'
    });
  }
}

```

# packages/mcp-server/src/services/sap-operations/pricing/pricingService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import type { ODataResponse, POLineItem, PurchasingInfoRecord, Quotation } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class PricingService {
  constructor(private readonly client: CapClient) { }

  /**
   * Scans historical POLineItems to find the most recent unit price paid for a material from a specific vendor.
   */
  //expands gives more field to work with. it gives all the details of the purchase order
  async getLastPurchasePrice(vendorId: string, materialId: string): Promise<number | undefined> {
    const result = await this.client.get<ODataResponse<POLineItem>>('/POLineItems', {
      $filter: `purchaseOrder/vendor_ID eq '${escapeOData(vendorId)}' and material_ID eq '${escapeOData(materialId)}'`,
      $expand: 'purchaseOrder',
      $orderby: 'purchaseOrder/orderDate desc',
      $top: '1'
    });

    if (result.value && result.value[0] && result.value[0].unitPrice) {
      return Number(result.value[0].unitPrice);
    }
    return undefined;
  }

  /**
   * Scans PurchasingInfoRecords for active negotiated prices.
   * gives latest negotiated price for vendor material
   */
  async getVendorMaterialPrice(vendorId: string, materialId: string): Promise<number | undefined> {
    const today = new Date().toISOString().substring(0, 10);
    const result = await this.client.get<ODataResponse<PurchasingInfoRecord>>('/PurchasingInfoRecords', {
      $filter: `vendor_ID eq '${escapeOData(vendorId)}' and material_ID eq '${escapeOData(materialId)}' and validFrom le '${today}' and validTo ge '${today}'`,
      $orderby: 'validFrom desc',
      $top: '1'
    });

    if (result.value && result.value[0] && result.value[0].price) {
      return Number(result.value[0].price);
    }
    return undefined;
  }

  /**
   * Auto-resolves the best price by checking active info records first, then falling back to historical POs.
   */
  async resolveBestPrice(vendorId: string, materialId: string): Promise<number | undefined> {
    const contractPrice = await this.getVendorMaterialPrice(vendorId, materialId);
    if (contractPrice !== undefined) {
      return contractPrice;
    }
    return this.getLastPurchasePrice(vendorId, materialId);
  }
}

```

# packages/mcp-server/src/services/sap-operations/purchase-orders/purchaseOrderService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import type { ODataResponse, PurchaseOrder, PurchaseOrderFilters, POLineItem } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

import { VendorService } from '../vendors/vendorService.js';
import { InventoryService } from '../inventory/inventoryService.js';
import { PricingService } from '../pricing/pricingService.js';
import { QuotationService } from '../quotations/quotationService.js';

export class PurchaseOrderService {
  constructor(
    private readonly client: CapClient,
    private readonly vendorService: VendorService,
    private readonly inventoryService: InventoryService,
    private readonly pricingService: PricingService,
    private readonly quotationService: QuotationService
  ) { }

  async searchPurchaseOrders(filters: PurchaseOrderFilters = {}): Promise<PurchaseOrder[]> {
    const filterClauses: string[] = [];

    if (filters.vendorId) {
      filterClauses.push(`vendor_ID eq '${escapeOData(filters.vendorId)}'`);
    }
    if (filters.status) {
      filterClauses.push(`status eq '${escapeOData(filters.status)}'`);
    }
    if (filters.fromDate) {
      filterClauses.push(`orderDate ge ${escapeOData(filters.fromDate)}`);
    }
    if (filters.toDate) {
      filterClauses.push(`orderDate le ${escapeOData(filters.toDate)}`);
    }

    //expand on lineItems, and show POLineItems fields, compositioned on it
    const queryParams: Record<string, string> = {
      $orderby: 'orderDate desc',
      $top: String(filters.limit || 50),
      $expand: 'vendor,lineItems($expand=material)',
    };

    if (filterClauses.length > 0) {
      queryParams.$filter = filterClauses.join(' and ');
    }

    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', queryParams);
    return result.value;
  }

  async getPoStatus(poNumber: string): Promise<PurchaseOrder | undefined> {
    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `poNumber eq '${escapeOData(poNumber)}'`,
      $top: '1',
    });
    return result.value[0];
  }

  async getPurchaseOrder(idOrPoNumber: string): Promise<PurchaseOrder | undefined> {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(idOrPoNumber);
    const filterField = isUuid ? 'ID' : 'poNumber';

    const result = await this.client.get<ODataResponse<PurchaseOrder>>('/PurchaseOrders', {
      $filter: `${filterField} eq '${escapeOData(idOrPoNumber)}'`,
      $top: '1',
      $expand: 'vendor,lineItems($expand=material)',
    });
    return result.value[0];
  }

  async createPurchaseOrder(data: { vendor_ID: string; currency: string; items?: Array<{ materialId: string, quantity: number, unitPrice?: number }> }): Promise<PurchaseOrder> {
    // 1. Vendor Validation
    const vendor = await this.vendorService.getVendor(data.vendor_ID);
    if (!vendor) {
      throw new Error(`Vendor with ID '${data.vendor_ID}' not found.`);
    }
    if (vendor.status === 'BLOCKED') {
      throw new Error(`Vendor '${vendor.name}' is BLOCKED and cannot receive new purchase orders.`);
    }
    if (vendor.status === 'INACTIVE') {
      throw new Error(`Vendor '${vendor.name}' is INACTIVE and cannot receive new purchase orders.`);
    }

    // 2. Line Item Validation (Local)
    if (!data.items || data.items.length === 0) {
      throw new Error(`A purchase order must contain at least one line item.`);
    }
    const seenMaterials = new Set<string>();
    for (const item of data.items) {
      if (item.quantity <= 0) {
        throw new Error(`Quantity must be greater than 0 for material '${item.materialId}'.`);
      }
      if (item.unitPrice !== undefined && item.unitPrice <= 0) {
        throw new Error(`Unit price must be greater than 0 for material '${item.materialId}'.`);
      }
      if (seenMaterials.has(item.materialId)) {
        throw new Error(`Duplicate material '${item.materialId}' in purchase order.`);
      }
      seenMaterials.add(item.materialId);
    }

    // 3. Material Lookup
    const resolvedItems = [];
    for (const item of data.items) {
      const inventoryItem = await this.inventoryService.checkInventory(item.materialId);
      if (!inventoryItem) {
        throw new Error(`Material '${item.materialId}' not found in inventory.`);
      }

      let finalPrice = item.unitPrice;
      if (finalPrice === undefined) {
        finalPrice = await this.pricingService.resolveBestPrice(data.vendor_ID, inventoryItem.ID);
        if (finalPrice === undefined) {
          throw new Error(`No pricing info record or historical price found for material '${item.materialId}'. Please specify a unitPrice explicitly.`);
        }
      }

      resolvedItems.push({
        material_ID: inventoryItem.ID,
        quantity: item.quantity,
        unitPrice: finalPrice
      });
    }

    const payload: any = {
      vendor_ID: data.vendor_ID,
      currency: data.currency,
      poNumber: `PO-${Date.now()}`,
      orderDate: new Date().toISOString().split('T')[0],
      status: 'CREATED',
      totalAmount: resolvedItems.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0),
      lineItems: resolvedItems
    };

    return this.client.post<PurchaseOrder>('/PurchaseOrders', payload);
  }

  async createPurchaseOrderFromQuotation(quotationId: string): Promise<PurchaseOrder> {
    const quotation = await this.quotationService.getQuotation(quotationId);
    if (!quotation) {
      throw new Error(`Quotation '${quotationId}' not found.`);
    }

    if (quotation.status !== 'OPEN') {
      throw new Error(`Quotation '${quotationId}' cannot be used because its status is ${quotation.status}.`);
    }

    const today = new Date().toISOString().substring(0, 10);
    if (quotation.validUntil < today) {
      throw new Error(`Quotation '${quotationId}' expired on ${quotation.validUntil}.`);
    }

    const material = await this.inventoryService.getMaterialById(quotation.material_ID);
    if (!material) {
      throw new Error(`Material for quotation not found in inventory.`);
    }

    const po = await this.createPurchaseOrder({
      vendor_ID: quotation.vendor_ID,
      currency: quotation.currency,
      items: [
        {
          materialId: material.materialId,
          quantity: quotation.quantity,
          unitPrice: quotation.price
        }
      ]
    });

    await this.quotationService.acceptQuotation(quotation.ID);

    return po;
  }

  async addPOLineItem(poId: string, materialId: string, quantity: number, unitPrice: number): Promise<POLineItem> {
    const po = await this.getPurchaseOrder(poId);
    if (!po) {
      throw new Error(`Purchase order ${poId} not found.`);
    }
    if (po.status === 'RECEIVED' || po.status === 'CANCELLED') {
      throw new Error(`Cannot add line items to a purchase order that is ${po.status}.`);
    }

    return this.client.post<POLineItem>('/POLineItems', {
      purchaseOrder_ID: po.ID,
      material_ID: materialId,
      quantity,
      unitPrice
    });
  }

  async releasePurchaseOrder(id: string): Promise<PurchaseOrder> {
    const po = await this.getPurchaseOrder(id);
    if (!po) {
      throw new Error(`Purchase order ${id} not found.`);
    }
    if (po.status === 'RECEIVED' || po.status === 'CANCELLED') {
      throw new Error(`Cannot release a purchase order that is ${po.status}.`);
    }

    return this.client.patch<PurchaseOrder>(`/PurchaseOrders(${po.ID})`, {
      status: 'RELEASED'
    });
  }

  async cancelPurchaseOrder(id: string): Promise<PurchaseOrder> {
    const po = await this.getPurchaseOrder(id);
    if (!po) {
      throw new Error(`Purchase order ${id} not found.`);
    }
    if (po.status === 'RECEIVED' || po.status === 'PARTIALLY_RECEIVED' || po.status === 'CANCELLED') {
      throw new Error(`Cannot cancel a purchase order that is ${po.status}.`);
    }

    return this.client.patch<PurchaseOrder>(`/PurchaseOrders(${po.ID})`, {
      status: 'CANCELLED'
    });
  }

  //GR
  //Receive Goods
  //Find Purchase Order
  //Validate
  //Determine quantities
  //Increase Inventory
  //Update PO Line Items
  //Update PO Status
  //Done


  async receiveGoods(idOrPoNumber: string, partialItems?: Array<{ materialId: string, quantity: number }>): Promise<PurchaseOrder> {
    const po = await this.getPurchaseOrder(idOrPoNumber);
    if (!po) {
      throw new Error(`Purchase order ${idOrPoNumber} not found.`);
    }

    if (po.status === 'RECEIVED' || po.status === 'CANCELLED') {
      throw new Error(`Cannot receive goods for a purchase order in ${po.status} status.`);
    }

    if (!po.lineItems || po.lineItems.length === 0) {
      throw new Error(`Purchase order ${idOrPoNumber} has no line items to receive.`);
    }

    // Map partialItems to a dictionary for fast lookup if provided
    const partialMap = new Map<string, number>();
    if (partialItems) {
      for (const p of partialItems) {
        // Resolve materialId to UUID
        const inventoryItem = await this.inventoryService.checkInventory(p.materialId);
        if (!inventoryItem) {
          throw new Error(`Material '${p.materialId}' not found in inventory.`);
        }
        partialMap.set(inventoryItem.ID, p.quantity);
      }
    }

    let allFullyReceived = true;

    for (const item of po.lineItems) {
      let qtyToReceive = 0;

      const currentReceived = item.receivedQuantity ?? 0;
      const remaining = item.quantity - currentReceived;

      if (partialItems) {
        // Only receive what was explicitly requested for this line item
        const requestedQty = partialMap.get(item.material_ID) ?? 0;
        if (requestedQty > remaining) {
          throw new Error(`Cannot receive ${requestedQty} for material UUID ${item.material_ID}. Only ${remaining} pending.`);
        }
        qtyToReceive = requestedQty;
      } else {
        // Receive everything remaining, since no partialItems are provided
        qtyToReceive = remaining;
      }

      if (qtyToReceive > 0) {
        // Update Inventory
        await this.inventoryService.addStock(item.material_ID, qtyToReceive);

        // Update Line Item
        await this.client.patch(`/POLineItems(${item.ID})`, {
          receivedQuantity: currentReceived + qtyToReceive
        });
      }

      //Check if all line items are received

      const newReceived = currentReceived + qtyToReceive;
      if (newReceived < item.quantity) {
        allFullyReceived = false;
      }
    }

    const newStatus = allFullyReceived ? 'RECEIVED' : 'PARTIALLY_RECEIVED';

    const result = await this.client.patch<PurchaseOrder>(`/PurchaseOrders(${po.ID})`, {
      status: newStatus
    });

    return result;
  }
}

```

# packages/mcp-server/src/services/sap-operations/quotations/quotationService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import type { Quotation, ODataResponse } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export interface QuotationFilters {
  vendorId?: string;
  materialId?: string;
  status?: 'OPEN' | 'ACCEPTED' | 'REJECTED';
  limit?: number;
}

export class QuotationService {
  constructor(private readonly client: CapClient) { }

  async searchQuotations(filters: QuotationFilters = {}): Promise<Quotation[]> {
    const filterClauses: string[] = [];
    if (filters.vendorId) {
      filterClauses.push(`vendor_ID eq '${escapeOData(filters.vendorId)}'`);
    }
    if (filters.materialId) {
      filterClauses.push(`material_ID eq '${escapeOData(filters.materialId)}'`);
    }
    if (filters.status) {
      filterClauses.push(`status eq '${escapeOData(filters.status)}'`);
    }

    const queryParams: Record<string, string> = {
      $orderby: 'validUntil asc',
      $top: String(filters.limit || 50),
    };

    if (filterClauses.length > 0) {
      queryParams.$filter = filterClauses.join(' and ');
    }

    const result = await this.client.get<ODataResponse<Quotation>>('/Quotations', queryParams);
    return result.value;
  }

  async getQuotation(quotationId: string): Promise<Quotation | undefined> {
    const result = await this.client.get<ODataResponse<Quotation>>('/Quotations', {
      $filter: `quotationId eq '${escapeOData(quotationId)}'`,
      $top: '1'
    });
    return result.value ? result.value[0] : undefined;
  }

  async getOpenQuotations(materialId?: string): Promise<Quotation[]> {
    return this.searchQuotations({ status: 'OPEN', materialId });
  }

  async acceptQuotation(id: string): Promise<Quotation> {
    return this.client.patch<Quotation>(`/Quotations(${escapeOData(id)})`, {
      status: 'ACCEPTED'
    });
  }

  async rejectQuotation(id: string): Promise<Quotation> {
    return this.client.patch<Quotation>(`/Quotations(${escapeOData(id)})`, {
      status: 'REJECTED'
    });
  }
}

```

# packages/mcp-server/src/services/sap-operations/vendors/vendorService.ts

```ts
import type { CapClient } from '../../../clients/capClient.js';
import { type ODataResponse, type PurchaseOrder, type Vendor, type VendorFilters, VendorStatus } from '../../../types/procurement.js';
import { escapeOData } from '../../../utils/odataUtils.js';

export class VendorService {
  constructor(private readonly client: CapClient) { }

  async searchVendors(filters: VendorFilters): Promise<Vendor[]> {
    const odataFilters: string[] = [];
    if (filters.name) {
      odataFilters.push(`contains(name,'${escapeOData(filters.name)}')`);
    }
    if (filters.country) {
      odataFilters.push(`country eq '${escapeOData(filters.country)}'`);
    }
    if (filters.status) {
      odataFilters.push(`status eq '${escapeOData(filters.status)}'`);
    }

    const $filter = odataFilters.length > 0 ? odataFilters.join(' and ') : undefined;
    const queryParams: Record<string, string> = {
      $top: String(filters.limit ?? 10),
    };
    if ($filter) {
      queryParams.$filter = $filter;
    }

    const result = await this.client.get<ODataResponse<Vendor>>('/Vendors', queryParams);
    return result.value;
  }

  async getVendor(id: string): Promise<Vendor | undefined> {
    const result = await this.client.get<ODataResponse<Vendor>>('/Vendors', {
      $filter: `ID eq '${escapeOData(id)}'`,
      $top: '1',
    });
    return result.value[0];
  }

  async createVendor(data: Omit<Vendor, 'ID'>): Promise<Vendor> {
    return this.client.post<Vendor>('/Vendors', data);
  }

  async updateVendor(id: string, data: Partial<Vendor>): Promise<Vendor> {
    return this.client.patch<Vendor>(`/Vendors(${escapeOData(id)})`, data);
  }

  async deactivate_vendor(id: string): Promise<Vendor> {
    return this.updateVendor(id, { status: VendorStatus.INACTIVE });
  }

  async blockVendor(id: string): Promise<Vendor> {
    return this.updateVendor(id, { status: VendorStatus.BLOCKED });
  }

  async unblockVendor(id: string): Promise<Vendor> {
    return this.updateVendor(id, { status: VendorStatus.ACTIVE });
  }
}

```

# packages/mcp-server/src/tools/ai-operations/invoices/summarizeInvoiceDiscrepancies.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const summarizeInvoiceDiscrepanciesTool = {
  name: 'summarize_invoice_discrepancies',
  description: 'Gathers rich context around a BLOCKED invoice to explain why it failed the 3-way match, aggregating invoice data and PO receiving history.',
  inputSchema: z.object({
    invoiceId: z.string().describe('UUID or invoice number of the BLOCKED invoice')
  }),
  handler: async (service: ProcurementService, args: any) => {
    const invoice = await service.getInvoice(args.invoiceId);
    if (!invoice) throw new Error(`Invoice ${args.invoiceId} not found.`);
    
    if (invoice.status !== 'BLOCKED') {
      return `Invoice ${invoice.invoiceNumber} is currently in status ${invoice.status}, not BLOCKED.`;
    }

    const po = invoice.purchaseOrder;
    if (!po) {
      return `Invoice ${invoice.invoiceNumber} has no associated Purchase Order to compare against.`;
    }

    // Calculate maximum expected amount
    let expectedMaxAmount = 0;
    const receivingDetails = (po.lineItems || []).map(item => {
      const allowedAmount = (item.receivedQuantity || 0) * (item.unitPrice || 0);
      expectedMaxAmount += allowedAmount;
      return {
        materialId: item.material_ID,
        orderedQty: item.quantity,
        receivedQty: item.receivedQuantity,
        unitPrice: item.unitPrice,
        allowedBillingAmount: allowedAmount
      };
    });

    return {
      discrepancySummary: `Invoice ${invoice.invoiceNumber} is blocked. The invoice total amount was ${invoice.totalAmount} ${invoice.currency}, but based on goods received, the maximum allowed billing amount is ${expectedMaxAmount} ${po.currency}.`,
      invoiceDetails: {
        invoiceNumber: invoice.invoiceNumber,
        vendor: invoice.vendor_ID,
        currency: invoice.currency,
        totalAmount: invoice.totalAmount
      },
      purchaseOrderDetails: {
        poNumber: po.poNumber,
        vendor: po.vendor_ID,
        currency: po.currency,
        receivingDetails
      }
    };
  }
};

```

# packages/mcp-server/src/tools/ai-operations/procurement/explainPurchaseOrder.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const explainPurchaseOrderTool = {
  name: 'explain_purchase_order',
  description: 'Fetches relevant contextual data about a purchase order so you can explain why it is in its current state (e.g. why it is still open, blocked, or partially received).',
  inputSchema: z.object({
    poNumberOrId: z.string().describe('The ID or PO number to explain')
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.explainPurchaseOrder(args.poNumberOrId);
  }
};

```

# packages/mcp-server/src/tools/ai-operations/procurement/procurementHealthCheck.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const procurementHealthCheckTool = {
  name: 'procurement_health_check',
  description: 'Returns a high-level summary of procurement issues needing attention: blocked invoices, partially received POs, unreleased POs, and expired quotations.',
  inputSchema: z.object({}),
  handler: async (service: ProcurementService) => {
    return service.getProcurementHealth();
  }
};

```

# packages/mcp-server/src/tools/ai-operations/procurement/procurementTimeline.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const procurementTimelineTool = {
  name: 'procurement_timeline',
  description: 'Fetches the complete lifecycle timeline of a purchase order, including associated quotations, PO status, goods receipts, and invoices.',
  inputSchema: z.object({
    poNumberOrId: z.string().describe('The ID or PO number to fetch the timeline for')
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.getProcurementTimeline(args.poNumberOrId);
  }
};

```

# packages/mcp-server/src/tools/ai-operations/quotations/compareSupplierQuotes.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const compareSupplierQuotesInputSchema = z.object({
  materialId: z.string().describe("The human-readable material ID to compare quotes for, e.g. MAT-1001"),
});

interface SupplierComparisonResult {
  quotation: any;
  vendor: {
    ID?: string;
    name?: string;
    status?: string;
  };
  vendorPerformance: any;
  activeContractPrice?: number;
}

export const compareSupplierQuotesTool = {
  name: 'compare_supplier_quotes',
  description: "An AI Operation tool that aggregates all OPEN quotations, active info records, and vendor performance history for a specific material. It returns this rich data structure so the calling LLM can intelligently compare quotes.",
  inputSchema: compareSupplierQuotesInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof compareSupplierQuotesInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'compare_supplier_quotes', input }, 'tool call');

    // 1. Resolve material UUID
    const inventoryItem = await service.checkInventory(input.materialId);
    if (!inventoryItem) {
      throw new Error(`Material '${input.materialId}' not found in inventory.`);
    }

    // 2. Fetch OPEN Quotations for this material
    const quotations = await service.searchQuotations({ materialId: inventoryItem.ID, status: 'OPEN' });

    // 3. For each vendor that has a quotation, fetch their Vendor Performance and Info Records in parallel
    const aggregatedData: SupplierComparisonResult[] = await Promise.all(
      quotations.map(async (quote) => {
        const [vendor, performance, contractPrice] = await Promise.all([
          service.getVendor(quote.vendor_ID),
          service.getVendorPerformance(quote.vendor_ID),
          service.getVendorMaterialPrice(quote.vendor_ID, inventoryItem.ID)
        ]);

        return {
          quotation: quote,
          vendor: {
            ID: vendor?.ID,
            name: vendor?.name,
            status: vendor?.status,
          },
          vendorPerformance: performance,
          activeContractPrice: contractPrice,
        };
      })
    );

    // Sort by price ascending
    aggregatedData.sort((a, b) => a.quotation.price - b.quotation.price);

    return {
      success: true,
      material: inventoryItem,
      totalOpenQuotes: quotations.length,
      aggregatedData,
      analysisContext: {
        sortedBy: "priceAscending",
        includesContractPrices: true,
        includesPerformanceMetrics: true
      }
    };
  },
};

```

# packages/mcp-server/src/tools/ai-operations/vendors/supplierPerformance.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const supplierPerformanceInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to analyze"),
});

export const supplierPerformanceTool = {
  name: 'supplier_performance',
  description: "Analyzes a vendor's performance metrics (total orders, fulfilled, cancelled).",
  inputSchema: supplierPerformanceInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof supplierPerformanceInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'supplier_performance', input }, 'tool call');

    const performance = await service.getVendorPerformance(input.vendor_id);

    return {
      success: true,
      performance,
    };
  },
};

```

# packages/mcp-server/src/tools/ai-operations/vendors/supplierSpendSummary.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const supplierSpendSummaryInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to summarize spend for"),
});

export const supplierSpendSummaryTool = {
  name: 'supplier_spend_summary',
  description: "Analyzes a vendor's total historical spend.",
  inputSchema: supplierSpendSummaryInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof supplierSpendSummaryInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'supplier_spend_summary', input }, 'tool call');

    const spend = await service.getSupplierSpend(input.vendor_id);

    return {
      success: true,
      spend,
    };
  },
};

```

# packages/mcp-server/src/tools/ai-operations/vendors/vendorSummary.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const vendorSummaryInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to summarize"),
});

export const vendorSummaryTool = {
  name: 'vendor_summary',
  description:
    "Provides a comprehensive summary of a vendor, including their details, recent orders, " +
    "total spend, and performance metrics. Use this when you need a holistic view of a vendor.",
  inputSchema: vendorSummaryInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof vendorSummaryInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'vendor_summary', input }, 'tool call');

    const vendor = await service.getVendor(input.vendor_id);
    if (!vendor) {
      return { found: false, message: `No vendor found with ID "${input.vendor_id}"` };
    }

    const [recentOrders, spend, performance] = await Promise.all([
      service.searchPurchaseOrders({ vendorId: input.vendor_id, limit: 5 }),
      service.getSupplierSpend(input.vendor_id),
      service.getVendorPerformance(input.vendor_id)
    ]);

    return {
      found: true,
      summary: {
        vendor,
        performance,
        spend,
        recent_orders: recentOrders.map(o => ({
          po_number: o.poNumber,
          status: o.status,
          order_date: o.orderDate,
          total_amount: o.totalAmount,
          currency: o.currency
        }))
      }
    };
  },
};

```

# packages/mcp-server/src/tools/fmcg-operations/addRetailInteractionMessage.ts

```ts
import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const addRetailInteractionMessageInputSchema = z.object({
  interactionId: z.string().uuid(),
  role: z.enum(['USER', 'ASSISTANT', 'SYSTEM']),
  content: z.string().min(1).max(12000),
});

export const addRetailInteractionMessageTool = {
  name: 'add_retail_interaction_message',
  description: 'Persist one user, assistant, or system message in an existing retail interaction. Save messages as the conversation progresses.',
  inputSchema: addRetailInteractionMessageInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof addRetailInteractionMessageInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'add_retail_interaction_message', input }, 'tool call');
    return service.addInteractionMessage(input);
  },
};

```

# packages/mcp-server/src/tools/fmcg-operations/captureFmcgProductInterest.ts

```ts
import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const captureFmcgProductInterestInputSchema = z.object({
  interactionId: z.string().uuid(),
  sku: z.string().min(1),
  quantity: z.number().int().positive(),
  unit: z.string().optional(),
  notes: z.string().max(500).optional(),
});

export const captureProductInterestTool = {
  name: 'capture_fmcg_product_interest',
  description: 'Record a retailer’s expressed interest in a product and requested quantity. Use only after the retailer has expressed interest; this does not place or confirm an order.',
  inputSchema: captureFmcgProductInterestInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof captureFmcgProductInterestInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'capture_fmcg_product_interest', input }, 'tool call');
    return service.captureProductInterest(input);
  },
};

```

# packages/mcp-server/src/tools/fmcg-operations/completeRetailInteraction.ts

```ts
import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const completeRetailInteractionInputSchema = z.object({
  interactionId: z.string().uuid(),
  summary: z.string().min(1).max(4000),
  outcome: z.enum(['INFORMATION_PROVIDED', 'INTEREST_CAPTURED', 'FOLLOW_UP_REQUIRED', 'NO_INTEREST', 'ORDER_ENQUIRY']),
  followUpRequired: z.boolean().optional(),
});

export const completeRetailInteractionTool = {
  name: 'complete_retail_interaction',
  description: 'Close a retail interaction and save its concise summary, outcome, and whether follow-up is required. Do this at the end of the conversation.',
  inputSchema: completeRetailInteractionInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof completeRetailInteractionInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'complete_retail_interaction', input }, 'tool call');
    return service.completeInteraction(input);
  },
};

```

# packages/mcp-server/src/tools/fmcg-operations/createRetailFollowUp.ts

```ts
import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const createRetailFollowUpInputSchema = z.object({
  interactionId: z.string().uuid(),
  requirement: z.string().min(1).max(500),
  followUpDate: z.string().date().optional(),
  assignedTo: z.string().max(100).optional(),
});

export const createRetailFollowUpTool = {
  name: 'create_retail_follow_up',
  description: 'Create a follow-up task for an existing retail interaction, such as confirming an order, delivery slot, or scheme details.',
  inputSchema: createRetailFollowUpInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof createRetailFollowUpInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'create_retail_follow_up', input }, 'tool call');
    return service.createFollowUp(input);
  },
};

```

# packages/mcp-server/src/tools/fmcg-operations/getActiveFmcgSchemes.ts

```ts
import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getActiveFmcgSchemesInputSchema = z.object({
  sku: z.string().optional(),
});

export const getActiveFmcgSchemesTool = {
  name: 'get_active_fmcg_schemes',
  description: 'List currently valid FMCG retailer schemes, optionally limited to schemes applicable to an exact product SKU. Check minimum quantity and validity before explaining an offer.',
  inputSchema: getActiveFmcgSchemesInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof getActiveFmcgSchemesInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_active_fmcg_schemes', input }, 'tool call');
    return service.getActiveSchemes(input.sku);
  },
};

```

# packages/mcp-server/src/tools/fmcg-operations/getFmcgProductDetails.ts

```ts
import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getFmcgProductDetailsInputSchema = z.object({
  sku: z.string().min(1),
});

export const getFmcgProductDetailsTool = {
  name: 'get_fmcg_product_details',
  description: 'Get a product by exact SKU, including current retail price, MRP, stock availability, and active schemes.',
  inputSchema: getFmcgProductDetailsInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof getFmcgProductDetailsInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_fmcg_product_details', input }, 'tool call');
    return (await service.getProductDetails(input.sku)) ?? { found: false, sku: input.sku };
  },
};

```

# packages/mcp-server/src/tools/fmcg-operations/getRetailInteraction.ts

```ts
import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getRetailInteractionInputSchema = z.object({
  interactionId: z.string().uuid(),
});

export const getRetailInteractionTool = {
  name: 'get_retail_interaction',
  description: 'Get the saved header and summary for one retail interaction by its UUID.',
  inputSchema: getRetailInteractionInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof getRetailInteractionInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_retail_interaction', input }, 'tool call');
    return service.getInteraction(input.interactionId);
  },
};

```

# packages/mcp-server/src/tools/fmcg-operations/listRetailInteractions.ts

```ts
import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const listRetailInteractionsInputSchema = z.object({
  retailerId: z.string().uuid().optional(),
  limit: z.number().int().min(1).max(100).optional(),
});

export const listRetailInteractionsTool = {
  name: 'list_retail_interactions',
  description: 'Review recent FMCG retailer conversations, optionally filtered to a retailer ID. Returns interaction summaries and outcomes.',
  inputSchema: listRetailInteractionsInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof listRetailInteractionsInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'list_retail_interactions', input }, 'tool call');
    return service.listInteractions(input);
  },
};

```

# packages/mcp-server/src/tools/fmcg-operations/searchFmcgProducts.ts

```ts
import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const searchFmcgProductsInputSchema = z.object({
  query: z.string().optional(),
  brand: z.string().optional(),
  category: z.string().optional(),
  limit: z.number().int().min(1).max(100).optional(),
});

export const searchFmcgProductsTool = {
  name: 'search_fmcg_products',
  description: 'Search the FMCG retail product catalogue by name, SKU, brand, or category. Returns product availability quantities and identifiers.',
  inputSchema: searchFmcgProductsInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof searchFmcgProductsInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'search_fmcg_products', input }, 'tool call');
    return service.searchProducts(input);
  },
};

```

# packages/mcp-server/src/tools/fmcg-operations/searchFmcgRetailers.ts

```ts
import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const searchFmcgRetailersInputSchema = z.object({
  query: z.string().optional(),
  city: z.string().optional(),
  channel: z.enum(['KIRANA', 'SUPERMARKET', 'WHOLESALER']).optional(),
  limit: z.number().int().min(1).max(100).optional(),
});

export const searchRetailersTool = {
  name: 'search_fmcg_retailers',
  description: 'Find active retailer records by retailer name, retailer code, contact, city, or channel.',
  inputSchema: searchFmcgRetailersInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof searchFmcgRetailersInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'search_fmcg_retailers', input }, 'tool call');
    return service.searchRetailers(input);
  },
};

```

# packages/mcp-server/src/tools/fmcg-operations/startRetailInteraction.ts

```ts
import { z } from 'zod';
import type { FmcgService } from '../../services/fmcg-operations/fmcgService.js';
import { withCorrelation } from '../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const startRetailInteractionInputSchema = z.object({
  retailerId: z.string().uuid().optional(),
  channel: z.enum(['VOICE', 'TEXT']),
});

export const startRetailInteractionTool = {
  name: "start_retail_interaction",
  description:
    "Start and persist a new retailer sales interaction. Always explicitly specify the channel: use TEXT when the interaction takes place through text chat, and VOICE when it takes place through a voice session. Never guess or assume the channel.",
  inputSchema: startRetailInteractionInputSchema,
  handler: async (
    service: FmcgService,
    input: z.infer<typeof startRetailInteractionInputSchema>
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: "start_retail_interaction", input }, "tool call");
    return service.startInteraction(input);
  },
};

```

# packages/mcp-server/src/tools/sap-operations/inventory/checkInventory.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const checkInventoryInputSchema = z.object({
  material_id: z.string().min(3).describe("Material ID, e.g. 'MAT-1001'"),
});

export const checkInventoryTool = {
  name: 'check_inventory',
  description:
    'Check current stock level for a material. Useful after get_po_status to ' +
    'confirm whether ordered items are in stock, or standalone for a direct ' +
    'material lookup.',
  inputSchema: checkInventoryInputSchema,
  handler: async (
    service: ProcurementService,
    input: z.infer<typeof checkInventoryInputSchema>,
  ) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'check_inventory', input }, 'tool call');

    const item = await service.checkInventory(input.material_id);

    if (!item) {
      return { found: false, message: `No material found with ID ${input.material_id}` };
    }

    return {
      found: true,
      material_id: item.materialId,
      description: item.description,
      quantityOnHand: item.quantityOnHand ?? 0,
      low_stock: (item.quantityOnHand ?? 0) <= (item.reorderPoint ?? 10),
      warehouse: item.warehouse,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/inventory/checkLowStock.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const checkLowStockInputSchema = z.object({});

export const checkLowStockTool = {
  name: 'check_low_stock',
  description: "Scans all inventory items to identify materials where the quantity on hand has fallen to or below the reorder point.",
  inputSchema: checkLowStockInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof checkLowStockInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'check_low_stock', input }, 'tool call');

    const items = await service.getLowStockItems();

    return {
      success: true,
      count: items.length,
      low_stock_items: items.map(item => ({
        material_id: item.materialId,
        description: item.description,
        quantity_on_hand: item.quantityOnHand ?? 0,
        reorder_point: item.reorderPoint ?? 10,
        deficit: (item.reorderPoint ?? 10) - (item.quantityOnHand ?? 0)
      }))
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/inventory/issueGoods.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const issueGoodsInputSchema = z.object({
  materialId: z.string().describe("The human-readable material ID (e.g. MAT-1001)"),
  quantity: z.number().int().positive().describe("The quantity of goods to issue/consume"),
});

export const issueGoodsTool = {
  name: 'issue_goods',
  description: "Deducts stock from an inventory item when materials are consumed for production, sales, or other purposes.",
  inputSchema: issueGoodsInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof issueGoodsInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'issue_goods', input }, 'tool call');

    const updatedItem = await service.issueGoods(input.materialId, input.quantity);

    return {
      success: true,
      message: `Successfully issued ${input.quantity} units of ${input.materialId}.`,
      remaining_quantity: updatedItem.quantityOnHand
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/inventory/listInventory.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const listInventoryInputSchema = z.object({
  limit: z.number().int().positive().optional().describe("Maximum number of items to return (default 50)"),
});

export const listInventoryTool = {
  name: 'list_inventory',
  description: "Retrieves a paginated list of all inventory items and their stock levels.",
  inputSchema: listInventoryInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof listInventoryInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'list_inventory', input }, 'tool call');

    const items = await service.listInventory(input.limit);

    return {
      success: true,
      count: items.length,
      items: items.map(item => ({
        material_id: item.materialId,
        description: item.description,
        quantity_on_hand: item.quantityOnHand ?? 0,
        reorder_point: item.reorderPoint ?? 10,
        warehouse: item.warehouse,
      }))
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/invoices/cancelSupplierInvoice.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const cancelSupplierInvoiceTool = {
  name: 'cancel_supplier_invoice',
  description: 'Cancel a supplier invoice. Valid from CREATED, VERIFIED, or POSTED states. BLOCKED invoices cannot be cancelled directly.',
  inputSchema: z.object({
    invoiceId: z.string().describe('UUID or invoice number')
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.cancelInvoice(args.invoiceId);
  }
};

```

# packages/mcp-server/src/tools/sap-operations/invoices/createSupplierInvoice.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const createSupplierInvoiceTool = {
  name: 'create_supplier_invoice',
  description: 'Create a new supplier invoice against a purchase order. Leaves the invoice in CREATED status.',
  inputSchema: z.object({
    purchaseOrderId: z.string().describe('PO number or UUID being invoiced'),
    invoiceNumber: z.string().describe('Supplier-provided invoice number'),
    invoiceDate: z.string().describe('YYYY-MM-DD'),
    postingDate: z.string().describe('YYYY-MM-DD'),
    currency: z.string().max(3),
    totalAmount: z.number().positive().describe('Total amount being invoiced'),
    items: z.array(z.object({
      materialId: z.string(),
      quantity: z.number().positive(),
      unitPrice: z.number().positive()
    })).describe('Line items on the invoice')
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.createInvoice(args);
  }
};

```

# packages/mcp-server/src/tools/sap-operations/invoices/getSupplierInvoice.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const getSupplierInvoiceTool = {
  name: 'get_supplier_invoice',
  description: 'Get details of a specific supplier invoice (e.g. INV-1002 or UUID)',
  inputSchema: z.object({
    invoiceIdOrNumber: z.string()
  }),
  handler: async (service: ProcurementService, args: any) => {
    const invoice = await service.getInvoice(args.invoiceIdOrNumber);
    if (!invoice) throw new Error(`Invoice ${args.invoiceIdOrNumber} not found.`);
    return invoice;
  }
};

```

# packages/mcp-server/src/tools/sap-operations/invoices/postSupplierInvoice.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const postSupplierInvoiceTool = {
  name: 'post_supplier_invoice',
  description: 'Post a VERIFIED invoice to accounting. Transitions status from VERIFIED to POSTED.',
  inputSchema: z.object({
    invoiceId: z.string().describe('UUID or invoice number')
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.postInvoice(args.invoiceId);
  }
};

```

# packages/mcp-server/src/tools/sap-operations/invoices/searchSupplierInvoices.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { SupplierInvoiceStatus } from '../../../types/procurement.js';

export const searchSupplierInvoicesTool = {
  name: 'search_supplier_invoices',
  description: 'Search for supplier invoices by PO, vendor, or status',
  inputSchema: z.object({
    purchaseOrderId: z.string().optional(),
    vendorId: z.string().optional(),
    status: z.nativeEnum(SupplierInvoiceStatus).optional(),
    fromDate: z.string().optional(),
    toDate: z.string().optional(),
    limit: z.number().optional()
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.searchInvoices(args);
  }
};

```

# packages/mcp-server/src/tools/sap-operations/invoices/verifySupplierInvoice.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';

export const verifySupplierInvoiceTool = {
  name: 'verify_supplier_invoice',
  description: "Performs SAP-style three-way invoice verification by comparing the Supplier Invoice against the Purchase Order and received quantities. Validates vendor, currency, material, received quantity, and unit price. Updates the invoice status to VERIFIED or BLOCKED.",
  inputSchema: z.object({
    invoiceId: z.string().describe('UUID or invoice number')
  }),
  handler: async (service: ProcurementService, args: any) => {
    return service.verifyInvoice(args.invoiceId);
  }
};

```

# packages/mcp-server/src/tools/sap-operations/pricing/getLastPurchasePrice.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getLastPurchasePriceInputSchema = z.object({
  vendorId: z.string().describe("The ID of the vendor"),
  materialId: z.string().describe("The human-readable material ID (e.g. MAT-1001)"),
});

export const getLastPurchasePriceTool = {
  name: 'get_last_purchase_price',
  description: "Finds the most recent unit price paid for a specific material from a specific vendor based on historical purchase orders.",
  inputSchema: getLastPurchasePriceInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof getLastPurchasePriceInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_last_purchase_price', input }, 'tool call');

    const inventoryItem = await service.checkInventory(input.materialId);
    if (!inventoryItem) {
      throw new Error(`Material '${input.materialId}' not found in inventory.`);
    }

    const price = await service.getLastPurchasePrice(input.vendorId, inventoryItem.ID);

    return {
      success: true,
      price: price !== undefined ? price : null,
      message: price !== undefined 
        ? `The last purchase price for ${input.materialId} from vendor ${input.vendorId} was ${price}.`
        : `No historical purchase records found for ${input.materialId} from vendor ${input.vendorId}.`
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/pricing/getVendorMaterialPrice.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getVendorMaterialPriceInputSchema = z.object({
  vendorId: z.string().describe("The ID of the vendor"),
  materialId: z.string().describe("The human-readable material ID (e.g. MAT-1001)"),
});

export const getVendorMaterialPriceTool = {
  name: 'get_vendor_material_price',
  description: "Checks active Purchasing Info Records (PIR) for current negotiated rates for a material from a specific vendor.",
  inputSchema: getVendorMaterialPriceInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof getVendorMaterialPriceInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_vendor_material_price', input }, 'tool call');

    const inventoryItem = await service.checkInventory(input.materialId);
    if (!inventoryItem) {
      throw new Error(`Material '${input.materialId}' not found in inventory.`);
    }

    const price = await service.getVendorMaterialPrice(input.vendorId, inventoryItem.ID);

    return {
      success: true,
      price: price !== undefined ? price : null,
      message: price !== undefined 
        ? `The active negotiated contract price for ${input.materialId} from vendor ${input.vendorId} is ${price}.`
        : `No active Purchasing Info Record found for ${input.materialId} from vendor ${input.vendorId}.`
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/purchase-orders/addPoLineItem.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const addPoLineItemInputSchema = z.object({
  poId: z.string().uuid().describe("The UUID of the existing purchase order"),
  materialId: z.string().describe("The material ID, e.g. 'MAT-1001'"),
  quantity: z.number().int().positive().describe("Quantity of the material to add"),
  unitPrice: z.number().positive().describe("Price per unit of the material")
});

export const addPoLineItemTool = {
  name: 'add_po_line_item',
  description: 
    "Adds a new line item (material, quantity, price) to an existing Purchase Order. " +
    "NOTE: Use create_purchase_order with an 'items' array as the primary method to build a PO. " +
    "This tool is only for later modifications/editing of an existing PO.",
  inputSchema: addPoLineItemInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof addPoLineItemInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'add_po_line_item', input }, 'tool call');

    const lineItem = await service.addPOLineItem(input.poId, input.materialId, input.quantity, input.unitPrice);

    return {
      success: true,
      message: `Line item added successfully to PO.`,
      lineItem,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/purchase-orders/cancelPurchaseOrder.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const cancelPurchaseOrderInputSchema = z.object({
  id: z.string().uuid().describe("The UUID of the purchase order to cancel"),
});

export const cancelPurchaseOrderTool = {
  name: 'cancel_purchase_order',
  description: "Cancels a purchase order, moving it to the CANCELLED status.",
  inputSchema: cancelPurchaseOrderInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof cancelPurchaseOrderInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'cancel_purchase_order', input }, 'tool call');

    const cancelledPo = await service.cancelPurchaseOrder(input.id);

    return {
      success: true,
      message: `Purchase order ${cancelledPo.poNumber || cancelledPo.ID} has been cancelled.`,
      purchaseOrder: cancelledPo,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/purchase-orders/createPurchaseOrder.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const createPurchaseOrderInputSchema = z.object({
  vendor_ID: z.string().uuid().describe("The UUID of the vendor"),
  currency: z.string().length(3).default('USD').describe("3-letter currency code, e.g. 'USD'"),
  items: z.array(z.object({
    materialId: z.string().describe("The material ID, e.g. 'MAT-1001'"),
    quantity: z.number().int().positive().describe("Quantity of the material"),
    unitPrice: z.number().positive().optional().describe("The unit price for this material. If omitted, the system will attempt to automatically resolve it from active contracts or historical purchase orders."),
  })).optional().describe("Array of line items to create with the PO"),
});

export const createPurchaseOrderTool = {
  name: 'create_purchase_order',
  description: "Creates a new purchase order for a vendor.",
  inputSchema: createPurchaseOrderInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof createPurchaseOrderInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'create_purchase_order', input }, 'tool call');

    const createdPo = await service.createPurchaseOrder(input);

    return {
      success: true,
      message: `Purchase order created successfully with ID: ${createdPo.ID}`,
      purchaseOrder: createdPo,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/purchase-orders/getPurchaseOrder.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getPurchaseOrderInputSchema = z.object({
  idOrPoNumber: z.string().describe("The UUID or PO Number (e.g. 'PO-10001') of the purchase order to retrieve"),
});

export const getPurchaseOrderTool = {
  name: 'get_purchase_order',
  description: "Retrieves a single purchase order by its ID or PO Number.",
  inputSchema: getPurchaseOrderInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof getPurchaseOrderInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_purchase_order', input }, 'tool call');

    const po = await service.getPurchaseOrder(input.idOrPoNumber);

    if (!po) {
      return { success: false, message: `Purchase order ${input.idOrPoNumber} not found.` };
    }

    return {
      success: true,
      purchaseOrder: po,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/purchase-orders/receiveGoods.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const receiveGoodsInputSchema = z.object({
  id: z.string().describe("The UUID or PO Number of the purchase order"),
  items: z.array(z.object({
    materialId: z.string().describe("The human-readable material ID, e.g. MAT-1001"),
    quantity: z.number().int().positive().describe("The quantity received")
  })).optional().describe("Optional: Provide specific materials and quantities for a partial receipt. If omitted, the system will assume all remaining pending quantities have been fully received.")
});

export const receiveGoodsTool = {
  name: 'receive_goods',
  description: "Marks goods as received for a Purchase Order. If no items are specified, it fully receives all pending quantities. Automatically increments inventory stock.",
  inputSchema: receiveGoodsInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof receiveGoodsInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'receive_goods', input }, 'tool call');

    const result = await service.receiveGoods(input.id, input.items);

    return {
      success: true,
      message: `Goods receipt processed for Purchase Order ${input.id}. New Status: ${result.status}`,
      purchaseOrder: result,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/purchase-orders/releasePurchaseOrder.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const releasePurchaseOrderInputSchema = z.object({
  id: z.string().describe("The UUID or PO Number of the purchase order to release"),
});

export const releasePurchaseOrderTool = {
  name: 'release_purchase_order',
  description: "Releases a Purchase Order, changing its status to RELEASED.",
  inputSchema: releasePurchaseOrderInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof releasePurchaseOrderInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'release_purchase_order', input }, 'tool call');

    let poId = input.id;
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(input.id)) {
      const po = await service.getPurchaseOrder(input.id);
      if (!po) {
        throw new Error(`Purchase order ${input.id} not found.`);
      }
      poId = po.ID;
    }

    const purchaseOrder = await service.releasePurchaseOrder(poId);

    return {
      success: true,
      message: `Purchase order ${input.id} successfully released.`,
      purchaseOrder: purchaseOrder,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/purchase-orders/searchPurchaseOrders.ts

```ts
import { z } from 'zod';
import { PurchaseOrderStatus } from '../../../types/procurement.js';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const searchPurchaseOrdersInputSchema = z.object({
  vendorId: z.string().uuid().optional().describe("Filter by Vendor UUID"),
  status: z.nativeEnum(PurchaseOrderStatus).optional().describe("Filter by PO status"),
  fromDate: z.string().optional().describe("Start date (YYYY-MM-DD)"),
  toDate: z.string().optional().describe("End date (YYYY-MM-DD)"),
  limit: z.number().int().min(1).max(100).default(50).describe("Maximum number of results to return"),
});

export const searchPurchaseOrdersTool = {
  name: 'search_purchase_orders',
  description: "Search purchase orders using vendor, status, or date filters. Returns purchase order headers together with expanded vendor information and line items (including material details) when available. Use this tool to list purchase orders; use get_purchase_order only when detailed information for a single purchase order is required.",
  inputSchema: searchPurchaseOrdersInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof searchPurchaseOrdersInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'search_purchase_orders', input }, 'tool call');

    const orders = await service.searchPurchaseOrders(input);

    return {
      success: true,
      count: orders.length,
      orders,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/quotations/createPurchaseOrderFromQuote.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const createPurchaseOrderFromQuoteInputSchema = z.object({
  quotationId: z.string().describe("The ID of the vendor quotation to convert into a purchase order"),
});

export const createPurchaseOrderFromQuoteTool = {
  name: 'create_purchase_order_from_quote',
  description: "Automatically builds and creates a Purchase Order based on an existing Vendor Quotation.",
  inputSchema: createPurchaseOrderFromQuoteInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof createPurchaseOrderFromQuoteInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'create_purchase_order_from_quote', input }, 'tool call');

    const po = await service.createPurchaseOrderFromQuotation(input.quotationId);

    return {
      success: true,
      message: `Successfully created Purchase Order ${po.poNumber || po.ID} from Quotation ${input.quotationId}.`,
      purchaseOrder: po,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/quotations/searchQuotations.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const searchQuotationsInputSchema = z.object({
  vendorId: z.string().optional().describe("Filter by vendor UUID or readable ID"),
  materialId: z.string().optional().describe("Filter by material UUID or readable ID"),
  status: z.enum(['OPEN', 'ACCEPTED', 'REJECTED']).optional().describe("Filter by quotation status"),
  limit: z.number().int().positive().optional().describe("Maximum number of quotations to return")
});

export const searchQuotationsTool = {
  name: 'search_quotations',
  description: "Searches for vendor quotations based on various filters like vendor, material, or status.",
  inputSchema: searchQuotationsInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof searchQuotationsInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'search_quotations', input }, 'tool call');

    const quotations = await service.searchQuotations(input);

    return {
      success: true,
      count: quotations.length,
      quotations
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/vendors/blockVendor.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const blockVendorInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to block"),
});

export const blockVendorTool = {
  name: 'block_vendor',
  description: "Blocks a vendor from further activity. Use this when the user explicitly asks to block or suspend a vendor.",
  inputSchema: blockVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof blockVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'block_vendor', input }, 'tool call');

    const blockedVendor = await service.blockVendor(input.vendor_id);

    return {
      success: true,
      message: `Vendor ${blockedVendor.name} has been blocked.`,
      vendor: blockedVendor,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/vendors/createVendor.ts

```ts
import { z } from 'zod';
import { VendorStatus } from '../../../types/procurement.js';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const createVendorInputSchema = z.object({
  name: z.string().min(2).describe("Vendor name"),
  taxId: z.string().min(2).describe("Vendor tax ID"),
  country: z.string().length(2).describe("2-letter country code, e.g. 'US' or 'DE'"),
  email: z.string().email().describe("Vendor contact email"),
  status: z.nativeEnum(VendorStatus).default(VendorStatus.ACTIVE).describe("Initial status"),
});

export const createVendorTool = {
  name: 'create_vendor',
  description: "Creates a new vendor in the system. Use this when the user asks to add or onboard a new vendor.",
  inputSchema: createVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof createVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'create_vendor', input }, 'tool call');

    const newVendor = await service.createVendor(input);

    return {
      success: true,
      message: `Vendor ${newVendor.name} created successfully.`,
      vendor: newVendor,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/vendors/deactivateVendor.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const deactivateVendorInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to deactivate"),
});

export const deactivateVendorTool = {
  name: 'deactivate_vendor',
  description: "Deactivate a vendor by setting their status to INACTIVE.",
  inputSchema: deactivateVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof deactivateVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'deactivate_vendor', input }, 'tool call');

    const deactivatedVendor = await service.deactivate_vendor(input.vendor_id);

    return {
      success: true,
      message: `Vendor ${deactivatedVendor.name} has been deactivated.`,
      vendor: deactivatedVendor,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/vendors/getVendor.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const getVendorInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to retrieve"),
});

export const getVendorTool = {
  name: 'get_vendor',
  description:
    "Retrieve complete details about a specific vendor by their ID. " +
    "Use this when the user asks for detailed information about a vendor (e.g. tax ID, email, etc.).",
  inputSchema: getVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof getVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'get_vendor', input }, 'tool call');

    const vendor = await service.getVendor(input.vendor_id);

    if (!vendor) {
      return { found: false, message: `No vendor found with ID "${input.vendor_id}"` };
    }

    return {
      found: true,
      vendor,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/vendors/searchVendors.ts

```ts
import { z } from 'zod';
import { VendorStatus } from '../../../types/procurement.js';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const searchVendorsInputSchema = z.object({
  name: z.string().optional().describe("Filter by vendor name (partial match)"),
  country: z.string().length(2).optional().describe("Filter by 2-letter country code"),
  status: z.nativeEnum(VendorStatus).optional().describe("Filter by vendor status"),
  limit: z.number().int().min(1).max(100).default(50).describe("Maximum number of results to return"),
});

export const searchVendorsTool = {
  name: 'search_vendors',
  description:
    "Search for vendors by name, country, or status and return a list of matching vendors. " +
    "Call this FIRST when the user refers to a vendor by name rather than ID to get the vendor_id. " +
    "The returned vendor_id is required input for list_recent_orders and get_vendor.",
  inputSchema: searchVendorsInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof searchVendorsInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'search_vendors', input }, 'tool call');

    const vendors = await service.searchVendors(input);

    if (vendors.length === 0) {
      return { found: false, message: `No vendors found matching the criteria` };
    }

    return {
      found: true,
      vendors: vendors.map((v) => ({
        vendor_id: v.ID,
        name: v.name,
        country: v.country,
        status: v.status,
      })),
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/vendors/unblockVendor.ts

```ts
import { z } from 'zod';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const unblockVendorInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to unblock"),
});

export const unblockVendorTool = {
  name: 'unblock_vendor',
  description: "Unblocks a vendor, returning them to ACTIVE status.",
  inputSchema: unblockVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof unblockVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'unblock_vendor', input }, 'tool call');

    const unblockedVendor = await service.unblockVendor(input.vendor_id);

    return {
      success: true,
      message: `Vendor ${unblockedVendor.name} has been unblocked.`,
      vendor: unblockedVendor,
    };
  },
};

```

# packages/mcp-server/src/tools/sap-operations/vendors/updateVendor.ts

```ts
import { z } from 'zod';
import { VendorStatus } from '../../../types/procurement.js';
import type { ProcurementService } from '../../../services/procurementService.js';
import { withCorrelation } from '../../../config/logger.js';
import { randomUUID } from 'node:crypto';

export const updateVendorInputSchema = z.object({
  vendor_id: z.string().uuid().describe("The UUID of the vendor to update"),
  name: z.string().min(2).optional().describe("Vendor name"),
  taxId: z.string().min(2).optional().describe("Vendor tax ID"),
  country: z.string().length(2).optional().describe("2-letter country code, e.g. 'US' or 'DE'"),
  email: z.string().email().optional().describe("Vendor contact email"),
  status: z.nativeEnum(VendorStatus).optional().describe("Vendor status"),
});

export const updateVendorTool = {
  name: 'update_vendor',
  description: "Updates an existing vendor's details. Only provide the fields that need to be changed.",
  inputSchema: updateVendorInputSchema,
  handler: async (service: ProcurementService, input: z.infer<typeof updateVendorInputSchema>) => {
    const log = withCorrelation(randomUUID());
    log.info({ tool: 'update_vendor', input }, 'tool call');

    const { vendor_id, ...updates } = input;
    
    if (Object.keys(updates).length === 0) {
      return { success: false, message: 'No fields provided to update.' };
    }

    const updatedVendor = await service.updateVendor(vendor_id, updates);

    return {
      success: true,
      message: `Vendor updated successfully.`,
      vendor: updatedVendor,
    };
  },
};

```

# packages/mcp-server/src/types/fmcg.ts

```ts
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

```

# packages/mcp-server/src/types/procurement.ts

```ts
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
  quantity: boolean;
  price: boolean;
  material: boolean;
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

```

# packages/mcp-server/src/utils/odataUtils.ts

```ts
/**
 * OData $filter string literals need single quotes escaped - basic
 * injection hygiene since these values ultimately come from LLM input.
 */
export function escapeOData(value: string): string {
  return value.replace(/'/g, "''");
}

```

# packages/mcp-server/test/procurementService.test.ts

```ts
import { describe, it, expect, vi } from 'vitest';
import { ProcurementService } from '../src/services/procurementService.js';
import type { CapClient } from '../src/clients/capClient.js';

function mockClient(returnValue: unknown): CapClient {
  return { 
    get: vi.fn().mockResolvedValue(returnValue),
    post: vi.fn().mockResolvedValue(returnValue),
    patch: vi.fn().mockResolvedValue(returnValue)
  } as unknown as CapClient;
}

describe('ProcurementService', () => {
  it('searchVendors filters and caps results', async () => {
    const client = mockClient({ value: [{ ID: 'v1', name: 'Bosch GmbH' }] });
    const service = new ProcurementService(client);

    const result = await service.searchVendors({ name: 'Bosch', country: 'DE', limit: 5 });

    expect(client.get).toHaveBeenCalledWith(
      '/Vendors',
      expect.objectContaining({ 
        $filter: "contains(name,'Bosch') and country eq 'DE'",
        $top: '5'
      }),
    );
    expect(result).toHaveLength(1);
  });

  it('getVendor returns a single vendor by ID', async () => {
    const client = mockClient({ value: [{ ID: 'v1', name: 'Bosch' }] });
    const service = new ProcurementService(client);

    const result = await service.getVendor('v1');

    expect(client.get).toHaveBeenCalledWith(
      '/Vendors',
      expect.objectContaining({ $filter: "ID eq 'v1'", $top: '1' }),
    );
    expect(result?.name).toBe('Bosch');
  });

  it('createVendor sends POST request', async () => {
    const client = mockClient({ ID: 'new-uuid', name: 'New Vendor' });
    const service = new ProcurementService(client);

    const result = await service.createVendor({ name: 'New Vendor', country: 'US', taxId: '123', email: 'test@test.com', status: 'ACTIVE' });

    expect(client.post).toHaveBeenCalledWith(
      '/Vendors',
      expect.objectContaining({ name: 'New Vendor', country: 'US' }),
    );
    expect(result.ID).toBe('new-uuid');
  });

  it('updateVendor sends PATCH request', async () => {
    const client = mockClient({ ID: 'v1', name: 'Updated Vendor' });
    const service = new ProcurementService(client);

    const result = await service.updateVendor('v1', { name: 'Updated Vendor' });

    expect(client.patch).toHaveBeenCalledWith(
      '/Vendors(v1)',
      expect.objectContaining({ name: 'Updated Vendor' }),
    );
    expect(result.name).toBe('Updated Vendor');
  });

  it('blockVendor calls updateVendor with BLOCKED status', async () => {
    const client = mockClient({ ID: 'v1', status: 'BLOCKED' });
    const service = new ProcurementService(client);

    const result = await service.blockVendor('v1');

    expect(client.patch).toHaveBeenCalledWith(
      '/Vendors(v1)',
      expect.objectContaining({ status: 'BLOCKED' }),
    );
    expect(result.status).toBe('BLOCKED');
  });

  it('searchPurchaseOrders dynamically applies filters', async () => {
    const client = mockClient({ value: [] });
    const service = new ProcurementService(client);

    await service.searchPurchaseOrders({ vendorId: 'vendor-123', limit: 5 });

    expect(client.get).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({ $filter: "vendor_ID eq 'vendor-123'", $orderby: 'orderDate desc', $top: '5' }),
    );
  });

  it('getPurchaseOrder retrieves by poNumber', async () => {
    const client = mockClient({ value: [{ poNumber: 'PO-123' }] });
    const service = new ProcurementService(client);

    const result = await service.getPurchaseOrder('PO-123');

    expect(client.get).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({ $filter: "poNumber eq 'PO-123'", $top: '1' }),
    );
    expect(result?.poNumber).toBe('PO-123');
  });

  it('createPurchaseOrder sends POST request', async () => {
    const client = mockClient({ value: [{ ID: 'po-uuid', poNumber: 'PO-1000', status: 'ACTIVE', name: 'Test Vendor' }] });
    const service = new ProcurementService(client);
    // Note: mockClient.post will also return { value: ... } which is weird, but result.ID comes from it? 
    // Wait, the client.post in mockClient is mockResolvedValue(returnValue).
    // Let's redefine post for this test specifically.
    (client.post as any).mockResolvedValue({ ID: 'po-uuid', poNumber: 'PO-1000' });
    (client.post as any).mockResolvedValue({ ID: 'po-uuid', poNumber: 'PO-1000' });
    (client.get as any).mockImplementation((path: string) => {
      if (path === '/Vendors') {
        return Promise.resolve({ value: [{ ID: 'po-uuid', poNumber: 'PO-1000', status: 'ACTIVE', name: 'Test Vendor' }] });
      }
      return Promise.resolve({ value: [{ ID: 'mat-1' }] });
    });

    const result = await service.createPurchaseOrder({ 
      vendor_ID: 'v1', 
      currency: 'USD',
      items: [{ materialId: 'M1', quantity: 1, unitPrice: 10 }]
    });

    expect(client.post).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({ vendor_ID: 'v1', currency: 'USD' }),
    );
    expect(result.ID).toBe('po-uuid');
  });

  it('createPurchaseOrder with items maps to lineItems and calculates total', async () => {
    const client = mockClient({ value: [{ ID: 'po-uuid', status: 'ACTIVE', name: 'Test Vendor' }] });
    const service = new ProcurementService(client);
    (client.post as any).mockResolvedValue({ ID: 'po-uuid' });

    await service.createPurchaseOrder({
      vendor_ID: 'v1',
      currency: 'USD',
      items: [
        { materialId: 'M1', quantity: 2, unitPrice: 50 },
        { materialId: 'M2', quantity: 1, unitPrice: 100 }
      ]
    });

    expect(client.post).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({
        vendor_ID: 'v1',
        currency: 'USD',
        totalAmount: 200,
        lineItems: [
          { material_ID: 'po-uuid', quantity: 2, unitPrice: 50 },
          { material_ID: 'po-uuid', quantity: 1, unitPrice: 100 }
        ]
      }),
    );
  });

  it('createPurchaseOrder auto-resolves missing prices via pricingService', async () => {
    const client = mockClient({ value: [{ ID: 'po-uuid', status: 'ACTIVE', name: 'Test Vendor' }] });
    const service = new ProcurementService(client);
    (client.post as any).mockResolvedValue({ ID: 'po-uuid' });
    (client.get as any).mockImplementation((path: string) => {
      if (path === '/Vendors') {
        return Promise.resolve({ value: [{ ID: 'v1', status: 'ACTIVE' }] });
      }
      if (path === '/InventoryItems') {
        return Promise.resolve({ value: [{ ID: 'mat-1', materialId: 'M1' }] });
      }
      if (path === '/PurchasingInfoRecords') {
        return Promise.resolve({ value: [{ price: 150 }] });
      }
      return Promise.resolve({ value: [] });
    });

    await service.createPurchaseOrder({
      vendor_ID: 'v1',
      currency: 'USD',
      items: [
        { materialId: 'M1', quantity: 2 } // unitPrice omitted
      ]
    });

    expect(client.post).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({
        totalAmount: 300,
        lineItems: [
          { material_ID: 'mat-1', quantity: 2, unitPrice: 150 }
        ]
      }),
    );
  });

  it('createPurchaseOrderFromQuotation creates PO and accepts quote', async () => {
    const client = mockClient({ value: [{ ID: 'po-uuid' }] });
    const service = new ProcurementService(client);
    
    (client.get as any).mockImplementation((path: string) => {
      if (path.includes('/Quotations')) {
        return Promise.resolve({ value: [{ ID: 'q-1', vendor_ID: 'v1', material_ID: 'mat-1', quantity: 10, price: 50, status: 'OPEN', validUntil: '2099-12-31' }] });
      }
      if (path.includes('/InventoryItems')) {
        return Promise.resolve({ value: [{ ID: 'mat-1', materialId: 'M1' }] });
      }
      if (path.includes('/Vendors')) {
        return Promise.resolve({ value: [{ ID: 'v1', status: 'ACTIVE' }] });
      }
      return Promise.resolve({ value: [] });
    });

    (client.post as any).mockResolvedValue({ ID: 'po-uuid' });
    (client.patch as any).mockResolvedValue({ ID: 'q-1', status: 'ACCEPTED' });

    await service.createPurchaseOrderFromQuotation('q-1');

    expect(client.post).toHaveBeenCalledWith(
      '/PurchaseOrders',
      expect.objectContaining({
        vendor_ID: 'v1',
        totalAmount: 500,
        lineItems: [
          { material_ID: 'mat-1', quantity: 10, unitPrice: 50 }
        ]
      })
    );
    expect(client.patch).toHaveBeenCalledWith(
      "/Quotations(q-1)",
      expect.objectContaining({ status: 'ACCEPTED' })
    );
  });

  it('searchQuotations dynamically applies filters', async () => {
    const client = mockClient({ value: [{ ID: 'q-uuid' }] });
    const service = new ProcurementService(client);
    await service.searchQuotations({ vendorId: 'v1', status: 'OPEN' });

    expect(client.get).toHaveBeenCalledWith(
      '/Quotations',
      expect.objectContaining({
        $filter: "vendor_ID eq 'v1' and status eq 'OPEN'",
        $top: '50',
      }),
    );
  });

  it('addPOLineItem sends POST request to /POLineItems', async () => {
    const client = mockClient({ ID: 'li-uuid' });
    (client.get as any).mockResolvedValue({ value: [{ ID: 'po-uuid', status: 'CREATED' }] });
    const service = new ProcurementService(client);

    const result = await service.addPOLineItem('po-uuid', 'mat-1', 5, 20);

    expect(client.post).toHaveBeenCalledWith(
      '/POLineItems',
      { purchaseOrder_ID: 'po-uuid', material_ID: 'mat-1', quantity: 5, unitPrice: 20 }
    );
    expect(result.ID).toBe('li-uuid');
  });

  it('releasePurchaseOrder updates status to RELEASED', async () => {
    const client = mockClient({ ID: 'po-uuid', status: 'RELEASED' });
    (client.get as any).mockResolvedValue({ value: [{ ID: 'po-uuid', status: 'CREATED' }] });
    const service = new ProcurementService(client);

    const result = await service.releasePurchaseOrder('po-uuid');

    expect(client.patch).toHaveBeenCalledWith(
      "/PurchaseOrders(po-uuid)",
      expect.objectContaining({ status: 'RELEASED' }),
    );
    expect(result.status).toBe('RELEASED');
  });

  it('cancelPurchaseOrder updates status to CANCELLED', async () => {
    const client = mockClient({ ID: 'po-uuid', status: 'CANCELLED' });
    (client.get as any).mockResolvedValue({ value: [{ ID: 'po-uuid', status: 'CREATED' }] });
    const service = new ProcurementService(client);

    const result = await service.cancelPurchaseOrder('po-uuid');

    expect(client.patch).toHaveBeenCalledWith(
      "/PurchaseOrders(po-uuid)",
      expect.objectContaining({ status: 'CANCELLED' }),
    );
    expect(result.status).toBe('CANCELLED');
  });

  it('receiveGoods updates status to RECEIVED and adds stock', async () => {
    const client = mockClient({ value: [{ ID: 'po-uuid', status: 'RELEASED', lineItems: [{ ID: 'li-1', material_ID: 'mat-1', quantity: 5, receivedQuantity: 0 }] }] });
    const service = new ProcurementService(client);
    
    (client.get as any).mockImplementation((path: string) => {
      if (path === '/PurchaseOrders') {
        return Promise.resolve({ value: [{ ID: 'po-uuid', status: 'RELEASED', lineItems: [{ ID: 'li-1', material_ID: 'mat-1', quantity: 5, receivedQuantity: 0 }] }] });
      }
      return Promise.resolve({ quantityOnHand: 10 });
    });
    
    (client.patch as any).mockResolvedValue({ ID: 'po-uuid', status: 'RECEIVED' });

    const result = await service.receiveGoods('po-uuid');

    expect(client.patch).toHaveBeenCalledWith(
      "/InventoryItems(mat-1)",
      expect.objectContaining({ quantityOnHand: 15 }),
    );
    expect(client.patch).toHaveBeenCalledWith(
      "/POLineItems(li-1)",
      expect.objectContaining({ receivedQuantity: 5 }),
    );
    expect(client.patch).toHaveBeenCalledWith(
      "/PurchaseOrders(po-uuid)",
      expect.objectContaining({ status: 'RECEIVED' }),
    );
    expect(result.status).toBe('RECEIVED');
  });

  it('receiveGoods with partial items sets status to PARTIALLY_RECEIVED', async () => {
    const client = mockClient({ value: [{ ID: 'po-uuid', status: 'RELEASED', lineItems: [{ ID: 'li-1', material_ID: 'mat-1', quantity: 10, receivedQuantity: 2 }] }] });
    const service = new ProcurementService(client);
    
    (client.get as any).mockImplementation((path: string) => {
      if (path === '/PurchaseOrders') {
        return Promise.resolve({ value: [{ ID: 'po-uuid', status: 'RELEASED', lineItems: [{ ID: 'li-1', material_ID: 'mat-1', quantity: 10, receivedQuantity: 2 }] }] });
      }
      if (path.startsWith('/InventoryItems(')) {
        return Promise.resolve({ ID: 'mat-1', materialId: 'M1', quantityOnHand: 5 });
      }
      if (path.includes('InventoryItems')) {
        return Promise.resolve({ value: [{ ID: 'mat-1', materialId: 'M1', quantityOnHand: 5 }] });
      }
      return Promise.resolve({ value: [{ ID: 'mat-1', materialId: 'M1', quantityOnHand: 5 }] });
    });
    
    (client.patch as any).mockResolvedValue({ ID: 'po-uuid', status: 'PARTIALLY_RECEIVED' });

    const result = await service.receiveGoods('po-uuid', [{ materialId: 'M1', quantity: 3 }]);

    expect(client.patch).toHaveBeenCalledWith(
      "/InventoryItems(mat-1)",
      expect.objectContaining({ quantityOnHand: 8 }),
    );
    expect(client.patch).toHaveBeenCalledWith(
      "/POLineItems(li-1)",
      expect.objectContaining({ receivedQuantity: 5 }),
    );
    expect(client.patch).toHaveBeenCalledWith(
      "/PurchaseOrders(po-uuid)",
      expect.objectContaining({ status: 'PARTIALLY_RECEIVED' }),
    );
    expect(result.status).toBe('PARTIALLY_RECEIVED');
  });

  it('getSupplierSpend aggregates total amount correctly', async () => {
    const client = mockClient({
      value: [
        { totalAmount: 100, currency: 'USD', status: 'RECEIVED' },
        { totalAmount: 250, currency: 'USD', status: 'PENDING' },
      ],
    });
    const service = new ProcurementService(client);

    const result = await service.getSupplierSpend('v1');
    expect(result.totalSpend).toBe(350);
    expect(result.currency).toBe('USD');
  });

  it('getVendorPerformance computes metrics correctly', async () => {
    const client = mockClient({
      value: [
        { status: 'RECEIVED' },
        { status: 'RECEIVED' },
        { status: 'CREATED' },
        { status: 'CANCELLED' },
      ],
    });
    const service = new ProcurementService(client);

    const result = await service.getVendorPerformance('v1');
    expect(result.totalOrders).toBe(4);
    expect(result.fulfilledOrders).toBe(2);
    expect(result.cancelledOrders).toBe(1);
  });

  it('escapes single quotes in OData filter values', async () => {
    const client = mockClient({ value: [] });
    const service = new ProcurementService(client);

    await service.getPurchaseOrder("PO-O'Brien-01");

    const callArgs = (client.get as any).mock.calls[0][1];
    expect(callArgs.$filter).toContain("PO-O''Brien-01");
  });

  it('checkInventory returns undefined when material not found', async () => {
    const client = mockClient({ value: [] });
    const service = new ProcurementService(client);

    const result = await service.checkInventory('UNKNOWN');

    expect(result).toBeUndefined();
  });

  it('listInventory returns paginated items', async () => {
    const client = mockClient({ value: [{ materialId: 'M1' }, { materialId: 'M2' }] });
    const service = new ProcurementService(client);

    const result = await service.listInventory(10);
    expect(client.get).toHaveBeenCalledWith(
      '/InventoryItems',
      expect.objectContaining({ $top: '10' })
    );
    expect(result).toHaveLength(2);
  });

  it('getLowStockItems filters correctly', async () => {
    const client = mockClient({ value: [{ materialId: 'M1', quantityOnHand: 2, reorderPoint: 10 }] });
    const service = new ProcurementService(client);

    const result = await service.getLowStockItems();
    expect(client.get).toHaveBeenCalledWith(
      '/InventoryItems',
      expect.objectContaining({ $filter: 'quantityOnHand le reorderPoint' })
    );
    expect(result[0].materialId).toBe('M1');
  });

  it('issueGoods deducts stock correctly', async () => {
    const client = mockClient({ value: [{ ID: 'item-uuid', materialId: 'M1', quantityOnHand: 50 }] });
    const service = new ProcurementService(client);
    (client.patch as any).mockResolvedValue({ ID: 'item-uuid', quantityOnHand: 40 });

    const result = await service.issueGoods('M1', 10);
    expect(client.patch).toHaveBeenCalledWith(
      "/InventoryItems(item-uuid)",
      expect.objectContaining({ quantityOnHand: 40 })
    );
    expect(result.quantityOnHand).toBe(40);
  });

  // --- Supplier Invoice Tests ---
  it('createInvoice validates PO status and currency before creation', async () => {
    const client = mockClient({ value: [{ ID: 'po-1', poNumber: 'PO-100', status: 'RECEIVED', currency: 'USD', vendor_ID: 'v1' }] });
    const service = new ProcurementService(client);
    (client.post as any).mockResolvedValue({ ID: 'inv-1', invoiceNumber: 'INV-001' });

    // Mock duplicate check returning empty
    (client.get as any).mockImplementation((path: string, options: any) => {
      if (path === '/PurchaseOrders') {
        return Promise.resolve({ value: [{ ID: 'po-1', poNumber: 'PO-100', status: 'RECEIVED', currency: 'USD', vendor_ID: 'v1' }] });
      }
      if (path === '/SupplierInvoices') {
        return Promise.resolve({ value: [] });
      }
      return Promise.resolve({ value: [] });
    });

    const result = await service.createInvoice({
      purchaseOrderId: 'po-1',
      invoiceNumber: 'INV-001',
      invoiceDate: '2026-07-24',
      postingDate: '2026-07-24',
      currency: 'USD',
      totalAmount: 500,
      items: [{ materialId: 'mat-1', quantity: 10, unitPrice: 50 }]
    });

    expect(client.post).toHaveBeenCalledWith('/SupplierInvoices', expect.objectContaining({
      invoiceNumber: 'INV-001',
      purchaseOrder_ID: 'po-1',
      totalAmount: 500,
      status: 'CREATED',
      lineItems: [
        { material_ID: 'mat-1', quantity: 10, unitPrice: 50, amount: 500 }
      ]
    }));
    expect(result.ID).toBe('inv-1');
  });

  it('verifyInvoice transitions to VERIFIED when 3-way match passes', async () => {
    const client = mockClient({ value: [] });
    const service = new ProcurementService(client);
    
    (client.get as any).mockImplementation((path: string) => {
      if (path === '/SupplierInvoices') {
        return Promise.resolve({
          value: [{
            ID: 'inv-1',
            invoiceNumber: 'INV-001',
            status: 'CREATED',
            vendor_ID: 'v1',
            currency: 'USD',
            totalAmount: 1000,
            purchaseOrder: {
              vendor_ID: 'v1',
              currency: 'USD',
              status: 'RECEIVED',
              lineItems: [
                { material_ID: 'mat-1', receivedQuantity: 10, unitPrice: 50 },
                { material_ID: 'mat-2', receivedQuantity: 5, unitPrice: 100 }
              ]
            },
            lineItems: [
              { material_ID: 'mat-1', quantity: 10, unitPrice: 50 },
              { material_ID: 'mat-2', quantity: 5, unitPrice: 100 }
            ]
          }]
        });
      }
      return Promise.resolve({ value: [] });
    });

    const result = await service.verifyInvoice('inv-1');

    expect(result.success).toBe(true);
    expect(result.status).toBe('VERIFIED');
    expect(result.failures).toHaveLength(0);
    expect(client.patch).toHaveBeenCalledWith('/SupplierInvoices(inv-1)', { status: 'VERIFIED' });
  });

  it('verifyInvoice transitions to BLOCKED when amount exceeds received value', async () => {
    const client = mockClient({ value: [] });
    const service = new ProcurementService(client);
    
    (client.get as any).mockImplementation((path: string) => {
      if (path === '/SupplierInvoices') {
        return Promise.resolve({
          value: [{
            ID: 'inv-1',
            invoiceNumber: 'INV-001',
            status: 'CREATED',
            vendor_ID: 'v1',
            currency: 'USD',
            totalAmount: 1500,
            purchaseOrder: {
              vendor_ID: 'v1',
              currency: 'USD',
              status: 'RECEIVED',
              lineItems: [
                { material_ID: 'mat-1', receivedQuantity: 10, unitPrice: 50 }
              ]
            },
            lineItems: [
              { material_ID: 'mat-1', quantity: 15, unitPrice: 50 } // 15 > 10
            ]
          }]
        });
      }
      return Promise.resolve({ value: [] });
    });

    const result = await service.verifyInvoice('inv-1');

    expect(result.success).toBe(false);
    expect(result.status).toBe('BLOCKED');
    expect(result.failures).toContain('Invoice quantity exceeds received quantity');
    expect(client.patch).toHaveBeenCalledWith('/SupplierInvoices(inv-1)', { status: 'BLOCKED' });
  });
});

```

# packages/mcp-server/tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "declaration": true,
    "sourceMap": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist", "test"]
}

```

# pnpm-workspace.yaml

```yaml
packages:
  - "packages/*"
allowBuilds:
  better-sqlite3: true
  esbuild: true
minimumReleaseAgeExclude:
  - pnpm@11.15.0

```

# README.md

```md
# SAP Procurement MCP Gateway

An enterprise-style Model Context Protocol (MCP) server that enables AI
assistants such as Claude to interact with SAP procurement systems using natural
language.

The project follows a layered architecture where the MCP server exposes business
tools, while an SAP CAP backend provides the underlying procurement domain
through OData. Because the MCP layer depends only on the OData contract, the
backend can be replaced with SAP S/4HANA or another compliant service without
changing the AI integration.

---

## Architecture

\`\`\`
                       Natural Language
                              │
                              ▼
                        Claude Desktop
                              │
                    Model Context Protocol
                              │
                              ▼
                   Procurement MCP Server
                              │
       ┌──────────────────────┼──────────────────────┐
       │                      │                      │
       ▼                      ▼                      ▼
    Tool Layer          Service Layer          CAP Client
(Input Validation)   (Business Logic)     (OData + Auth)
                              │
                              ▼
                   SAP CAP Procurement Service
                              │
                              ▼
                   SQLite (Dev) / SAP HANA
\`\`\`

---

## Project Structure

\`\`\`
packages/

├── cap-service/
│   ├── SAP CAP service
│   ├── Procurement domain model
│   ├── OData V4 endpoints
│   └── SQLite (dev) / SAP HANA (production)
│
└── mcp-server/
    ├── MCP server
    ├── Tool definitions
    ├── Business services
    ├── CAP client
    └── Authentication
\`\`\`

---

## Features

### AI + SAP Integration

- MCP server compatible with Claude Desktop
- Natural language interaction with SAP procurement data
- Automatic multi-step tool chaining
- Separation between AI layer and SAP backend

---

### Enterprise Architecture

- Layered architecture
- Business services separated from transport layer
- OData client abstraction
- Authentication provider abstraction
- Retry handling
- Request timeout handling
- Correlation ID logging
- Environment-based configuration

---

### Procurement Domain

Current capabilities include:

- Vendor search
- Purchase order lookup
- Purchase order status
- Inventory lookup

---

## Tool Flow

The MCP server exposes independent business tools.

Example:

\`\`\`
User

"Show Bosch's latest purchase orders."

↓

search_vendor

↓

list_recent_orders

↓

Claude summarizes the results
\`\`\`

More complex workflows are automatically orchestrated by the LLM without
hardcoded logic.

---

## Technology Stack

### Backend

- TypeScript
- Node.js
- SAP CAP
- OData V4

### AI

- Model Context Protocol (MCP)
- Claude Desktop

### Infrastructure

- SQLite (development)
- SAP HANA (production)
- Docker
- Cloud Foundry

---

## Running Locally

\`\`\`bash
pnpm install

pnpm --filter cap-service watch

pnpm --filter mcp-server dev
\`\`\`

The CAP service runs locally using SQLite and mocked authentication.

The MCP server communicates with the CAP service over OData.

---

## Deployment

### CAP Service

Deploy independently to SAP BTP / Cloud Foundry.

\`\`\`
cf push
\`\`\`

### MCP Server

Containerized deployment.

Compatible with:

- Docker
- Cloud Run
- Cloud Foundry
- Render
- Railway
- Kubernetes

---

## Design Principles

- AI layer is independent of SAP implementation
- Business logic lives in services rather than tools
- Tools remain small and focused
- Transport concerns are isolated inside the CAP client
- Authentication is pluggable
- Designed to evolve toward SAP S/4HANA

---

## Roadmap

- [x] Vendor lookup
- [x] Purchase order lookup
- [x] Inventory lookup
- [x] Claude Desktop integration
- [x] SAP CAP backend
- [ ] Expanded procurement capabilities
- [ ] Inventory analytics
- [ ] Finance module
- [ ] Evaluation framework (DeepEval)
- [ ] CI/CD evaluation pipeline
- [ ] SAP BTP deployment

---

## FMCG Retail Sales Domain (FMCGDATA)

The repository also contains a separate FMCG retailer-sales domain. It is kept
separate from `procurement` so that retailer-facing selling prices, promotional
schemes, and sales conversations do not get mixed with supplier purchasing
prices, purchase orders, or SAP inventory transactions.

### FMCGDATA model

CAP model: `packages/cap-service/db/fmcg-schema.cds`  
OData service: `packages/cap-service/srv/retail-service.cds`  
Service root: `http://localhost:4004/odata/v4/retail`

Seed files are all in `packages/cap-service/db/data/` and use the `FMCGDATA-`
prefix so CAP loads them into the matching namespace/entities:

| CSV | Rows | Purpose |
|---|---:|---|
| `FMCGDATA-Products.csv` | 12 | FMCG catalogue and stock quantities |
| `FMCGDATA-RetailPrices.csv` | 12 | MRP and retailer selling prices with validity dates |
| `FMCGDATA-Schemes.csv` | 6 | Retail promotions, minimum quantities, and validity |
| `FMCGDATA-SchemeProducts.csv` | 12 | Products eligible for each scheme |
| `FMCGDATA-Retailers.csv` | 5 | Fictional retailer accounts across Indian cities |
| `FMCGDATA-Interactions.csv` | 1 | Sample completed retailer conversation |
| `FMCGDATA-InteractionMessages.csv` | 4 | Messages from the sample conversation |
| `FMCGDATA-InteractionItems.csv` | 1 | Product interest and requested quantity |
| `FMCGDATA-FollowUps.csv` | 1 | Follow-up action from the sample conversation |

All FMCG names, retailer identities, phone numbers, and commercial values are
fictional demonstration data. The original `procurement-*.csv` files remain
unchanged.

### FMCG MCP tools (stdio)

The existing MCP server continues to use `StdioServerTransport`. The following
FMCG tools are registered alongside the original procurement tools:

| Tool | Purpose |
|---|---|
| `search_fmcg_products` | Search product catalogue by name, SKU, brand, or category |
| `get_fmcg_product_details` | Get product, current MRP/retailer price, stock, and applicable schemes by SKU |
| `get_active_fmcg_schemes` | List currently valid schemes, optionally for one SKU |
| `search_fmcg_retailers` | Find active retailer records |
| `start_retail_interaction` | Start a voice or text interaction |
| `add_retail_interaction_message` | Persist each user/assistant message |
| `capture_fmcg_product_interest` | Record expressed interest and requested quantity (not an order) |
| `create_retail_follow_up` | Create a follow-up task |
| `complete_retail_interaction` | Save summary, outcome, and close the interaction |
| `list_retail_interactions` | Review recent interactions, optionally by retailer |
| `get_retail_interaction` | Read interaction details, messages, product interests, and follow-ups |

### Configuration

Keep `CAP_SERVICE_URL` pointing at the existing procurement endpoint:

\`\`\`env
CAP_SERVICE_URL=http://localhost:4004/odata/v4/procurement
\`\`\`

Set the additional FMCG endpoint in `packages/mcp-server/.env` (or allow the
MCP server to derive it by replacing `/procurement` with `/retail`):

\`\`\`env
RETAIL_SERVICE_URL=http://localhost:4004/odata/v4/retail
\`\`\`

### Local run

Terminal 1 — start CAP (loads both procurement and FMCGDATA CSV seed files):

\`\`\`bash
pnpm --filter cap-service watch
\`\`\`

Terminal 2 — start the MCP server over stdio:

\`\`\`bash
pnpm --filter mcp-server dev
\`\`\`

Configure Claude Desktop to launch the compiled MCP server using Node, or use
the existing project-specific MCP configuration. Do not start a second HTTP
transport for this phase; the browser/frontend integration will be a later
step.

### Suggested demo flow

1. `search_fmcg_retailers` for `Shreeji General Stores`.
2. `start_retail_interaction` with the retailer UUID and `VOICE` channel.
3. `search_fmcg_products` or `get_fmcg_product_details` for `FMCG-001`.
4. `get_active_fmcg_schemes` for `FMCG-001` and explain the November offer.
5. `add_retail_interaction_message` as the conversation progresses.
6. `capture_fmcg_product_interest` if the retailer expresses interest in a quantity.
7. `create_retail_follow_up` if a callback or confirmation is needed.
8. `complete_retail_interaction` with the final summary and outcome.
9. `list_retail_interactions` to review the saved conversation.

`capture_fmcg_product_interest` records an enquiry only. It deliberately does
not reserve stock, create a sales order, or claim that an order has been placed.


### FMCG MCP code organization

The FMCG domain follows the same facade-and-domain-service structure as procurement:

\`\`\`text
packages/mcp-server/src/
├── types/
│   └── fmcg.ts
├── services/
│   └── fmcg-operations/
│       ├── fmcgService.ts
│       ├── products/productService.ts
│       ├── pricing/retailPriceService.ts
│       ├── schemes/schemeService.ts
│       ├── retailers/retailerService.ts
│       ├── interactions/interactionService.ts
│       └── follow-ups/followUpService.ts
└── tools/
    └── fmcg-operations/
        ├── searchFmcgProducts.ts
        ├── getFmcgProductDetails.ts
        ├── getActiveFmcgSchemes.ts
        ├── searchFmcgRetailers.ts
        ├── startRetailInteraction.ts
        ├── addRetailInteractionMessage.ts
        ├── captureFmcgProductInterest.ts
        ├── createRetailFollowUp.ts
        ├── completeRetailInteraction.ts
        ├── listRetailInteractions.ts
        └── getRetailInteraction.ts
\`\`\`

`FmcgService` is the facade. It composes smaller domain services, while each MCP tool has its own module and imports the shared FMCG types from `types/fmcg.ts`.

```

