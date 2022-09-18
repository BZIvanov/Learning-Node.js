const router = require('express').Router();
const controllers = require('../controllers');
const hasRole = require('../middlewares/has-role');

router.post('/find', controllers.threads.findUser);
router.post('/message/send', hasRole('User'), controllers.threads.sendMessage);

module.exports = router;
