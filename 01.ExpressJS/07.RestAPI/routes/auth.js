const router = require('express').Router();
const { validate } = require('express-validation');
const { signUp, signIn } = require('../controllers/auth');
const { signupValidation, signinValidation } = require('../validations/auth');

router.post('/signup', validate(signupValidation, {}, {}), signUp);
router.post('/signin', validate(signinValidation, {}, {}), signIn);

module.exports = router;
