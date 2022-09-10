const router = require('express').Router();
const { validate } = require('express-validation');
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPostById,
} = require('../controllers/posts');
const isAuthenticated = require('../middleware/is-authenticated');
const { postValidation } = require('../validations/post');

router.get('/', isAuthenticated, getPosts);
router.get('/:postId', isAuthenticated, getPostById);
router.post('/', isAuthenticated, validate(postValidation, {}, {}), createPost);
router.put(
  '/:postId',
  isAuthenticated,
  validate(postValidation, {}, {}),
  updatePost
);
router.delete('/:postId', isAuthenticated, deletePost);

module.exports = router;
