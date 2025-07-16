const router = require('express').Router();
const isAuthenticated = require('../middlewares/is-authenticated');
const isAuthorized = require('../middlewares/is-authorized');
const validateBodyData = require('../middlewares/validate-body-data');
const { movieValidationSchema } = require('../models/movie');
const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);
router.get('/:id', getMovie);
router.post(
  '/',
  isAuthenticated,
  validateBodyData(movieValidationSchema),
  createMovie
);
router.put(
  '/:id',
  isAuthenticated,
  validateBodyData(movieValidationSchema),
  updateMovie
);
router.delete('/:id', isAuthenticated, isAuthorized, deleteMovie);

module.exports = router;
