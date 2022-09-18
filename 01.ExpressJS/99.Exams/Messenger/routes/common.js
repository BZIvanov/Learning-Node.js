const router = require('express').Router();
const controllers = require('../controllers');

// here we dont call functions just provide them
router.get('/', controllers.home.getHome);

module.exports = router;
