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
