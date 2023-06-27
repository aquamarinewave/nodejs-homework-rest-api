const { createContact } = require("./createContact");
const { getAllContact } = require("./getAllContact");
const { getContactById } = require("./getContactById");
const { updateContactById } = require("./updateContactById");
const { deleteContactById } = require("./deleteContactById");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  createContact,
  getAllContact,
  getContactById,
  updateContactById,
  deleteContactById,
  updateStatusContact,
};
