const router = require('express').Router();
const feedController = require('../controllers/feed');

router.post('/brand/create', feedController.createBrand);
router.get('/brand/all', feedController.getBrands);

module.exports = router;