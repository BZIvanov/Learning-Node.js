const router = require('express').Router();
const { getHomeView } = require('../controllers/home');

router.get('/', getHomeView);

module.exports = router;
