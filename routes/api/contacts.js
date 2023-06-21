const express = require('express')
const { isValidId } = require("../../helpers");

const {
  createContact,
  getContactList,
  getContactById,
  updateContactById,
  deleteContactById,
  updateStatusContact,
} = require('../../controllers/contactsControllers');

const router = express.Router()

router.get('/', getContactList);

router.get('/:contactId', isValidId, getContactById);

router.post('/', createContact);

router.delete('/:contactId', isValidId, deleteContactById);

router.put('/:contactId', isValidId, updateContactById);

router.patch('/:contactId/favorite', isValidId, updateStatusContact); 

module.exports = router;
