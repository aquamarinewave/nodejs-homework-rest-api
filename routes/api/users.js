const express = require('express')
const authenticate = require('../../middlewares/authenticate');

const {
   createUser,
   loginUser,
   logoutUser,
} = require('../../controllers/auth');

const {
   currentUser,
} = require('../../controllers/users');

const router = express.Router()

router.post('/register', createUser);

router.post('/login', loginUser); 

router.post('/logout', authenticate, logoutUser); 

router.get('/current', authenticate, currentUser); 

module.exports = router;
