const express = require('express')
const authenticate = require('../../middlewares/authenticate');
const upload  = require('../../middlewares/upload');
const { updateAvatar } = require('../../controllers/users');

const {
  createUser,
  loginUser,
  logoutUser,
  verifyAccount,
  resendVerifyToken,
} = require('../../controllers/auth');

const {
   currentUser,
} = require('../../controllers/users');

const router = express.Router()

router.post('/register', createUser);

router.post('/login', loginUser); 

router.post('/logout', authenticate, logoutUser); 

router.get('/current', authenticate, currentUser); 

router.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  updateAvatar
);

router.get('/verify/:verificationToken', verifyAccount); 

router.post('/verify', resendVerifyToken); 

module.exports = router;
