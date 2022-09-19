const router = require('express').Router();
const {
  getRegisterView,
  registerUser,
  getLoginView,
  loginUser,
  logoutUser,
  getUserDetailsView,
} = require('../controllers/user');
const isAnonymous = require('../middlewares/is-anonymous');
const isAuthenticated = require('../middlewares/is-authenticated');

router.get('/register', isAnonymous, getRegisterView);
router.post('/register', isAnonymous, registerUser);
router.get('/login', isAnonymous, getLoginView);
router.post('/login', isAnonymous, loginUser);
router.get('/logout', isAuthenticated, logoutUser);
router.get('/details', isAuthenticated, getUserDetailsView);

module.exports = router;
