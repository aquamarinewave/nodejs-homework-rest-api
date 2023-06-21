const {
  addSchema,
  updateFavoriteSchema
} = require("./joi");
const Contact = require("./mongooseShemas");

module.exports = {
  addSchema,
  updateFavoriteSchema,
  Contact,
};
