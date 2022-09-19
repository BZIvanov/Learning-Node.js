const router = require('express').Router();
const {
  getArticleFormView,
  createArticle,
  getArticleDetailsView,
  getArticleFormEditView,
  editArticle,
  getArticleFormDeleteView,
  deleteArticle,
} = require('../controllers/article');
const isAuthenticated = require('../middlewares/is-authenticated');

router.get('/create', isAuthenticated, getArticleFormView);
router.post('/create', isAuthenticated, createArticle);
router.get('/details/:articleId', getArticleDetailsView);
router.get('/edit/:articleId', getArticleFormEditView);
router.post('/edit/:articleId', editArticle);
router.get('/delete/:articleId', getArticleFormDeleteView);
router.post('/delete/:articleId', deleteArticle);

module.exports = router;
