const express = require('express')

const {
  createContact,
  getContactList,
  getContactById,
  updateContactById,
  deleteContactById,
} = require('../../controllers/contactsControllers');

const router = express.Router()

router.get('/', getContactList);

router.get('/:contactId', getContactById);

router.post('/', createContact);

router.delete('/:contactId', deleteContactById);

router.put('/:contactId', updateContactById);

module.exports = router
