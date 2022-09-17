const router = require('express').Router();
const isAuthenticated = require('../middlewares/is-authenticated');
const validateBodyData = require('../middlewares/validate-body-data');
const {
  registerValidationSchema,
  loginValidationSchema,
} = require('../models/user');
const { register, login, me } = require('../controllers/users');

router.post('/register', validateBodyData(registerValidationSchema), register);
router.post('/login', validateBodyData(loginValidationSchema), login);
router.get('/me', isAuthenticated, me);

module.exports = router;
