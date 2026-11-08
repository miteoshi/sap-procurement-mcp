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
