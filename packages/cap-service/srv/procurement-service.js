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
