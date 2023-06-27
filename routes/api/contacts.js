const express = require('express');
const isValidId = require('../../middlewares/isValidId');
const authenticate = require('../../middlewares/authenticate');

const {
  createContact,
  getAllContact,
  getContactById,
  updateContactById,
  deleteContactById,
  updateStatusContact,
} = require('../../controllers/contacts');

const router = express.Router()

router.get('/', authenticate, getAllContact);

router.get('/:contactId', authenticate, isValidId, getContactById);

router.post('/', authenticate, createContact);

router.delete('/:contactId', authenticate, isValidId, deleteContactById);

router.put('/:contactId', authenticate, isValidId, updateContactById);

router.patch('/:contactId/favorite', authenticate, isValidId, updateStatusContact); 

module.exports = router;
