const router = require('express').Router();
const isAuthenticated = require('../middlewares/is-authenticated');
const { register, login, me } = require('../controllers/users');

router.post('/register', register);
router.post('/login', login);
router.get('/me', isAuthenticated, me);

module.exports = router;
