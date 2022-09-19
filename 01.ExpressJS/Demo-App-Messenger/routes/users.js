const router = require('express').Router();
const controllers = require('../controllers');

router.get('/register', controllers.user.registerGet);
router.post('/register', controllers.user.registerPost);
router.get('/logout', controllers.user.logout);
router.get('/login', controllers.user.loginGet);
router.post('/login', controllers.user.loginPost);

module.exports = router;
