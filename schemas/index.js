const {
  addSchema,
  updateFavoriteSchema
} = require("./validateContacts");
const { credSchema }  = require("./validateUsers");

const Contact = require("./contactSchema");
const User = require("./userSchema");

module.exports = {
  addSchema,
  credSchema,
  updateFavoriteSchema,
  Contact,
  User,
};
