const router = require('express').Router();
const isAuthenticated = require('../middlewares/is-authenticated');
const isAuthorized = require('../middlewares/is-authorized');
const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', isAuthenticated, createMovie);
router.put('/:id', isAuthenticated, updateMovie);
router.delete('/:id', isAuthenticated, isAuthorized, deleteMovie);

module.exports = router;
