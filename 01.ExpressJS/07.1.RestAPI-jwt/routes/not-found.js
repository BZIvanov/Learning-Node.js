const router = require('express').Router();
const { notFound } = require('../controllers/not-found');

router.all('/', notFound);

module.exports = router;
