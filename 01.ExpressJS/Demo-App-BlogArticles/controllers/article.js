const Article = require('../models/Article');

const getArticleFormView = (req, res) => {
  try {
    res.render('article/create');
  } catch (error) {
    console.error(error);
  }
};

const createArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.user._id;
    const user = req.user;

    const article = await new Article({ title, content, author }).save();

    user.articles.push(article._id);
    await user.save();

    req.session.message = 'Successfully added article';
    res.redirect('/');
  } catch (error) {
    console.error(error);
  }
};

const getArticleDetailsView = async (req, res) => {
  try {
    const article = await Article.findById(req.params.articleId)
      .populate('author')
      .lean();

    let isAuthor = false;
    if (req.user) {
      isAuthor = req.user.isAuthor(article);
    }
    res.render('article/details', { article, isAuthor });
  } catch (error) {
    console.error(error);
  }
};

const getArticleFormEditView = async (req, res) => {
  try {
    const article = await Article.findById(req.params.articleId);
    res.render('article/edit', article);
  } catch (error) {
    console.error(error);
  }
};

const editArticle = async (req, res) => {
  try {
    const { title, content } = req.body;

    const article = await Article.findById(req.params.articleId);
    article.title = title;
    article.content = content;
    await article.save();

    req.session.message = 'Successfully edited article';
    res.redirect('/');
  } catch (error) {
    console.error(error);
  }
};

const getArticleFormDeleteView = async (req, res) => {
  try {
    const article = await Article.findById(req.params.articleId);
    res.render('article/delete', article);
  } catch (error) {
    console.error(error);
  }
};

const deleteArticle = async (req, res) => {
  try {
    const { articleId } = req.params;

    const article = await Article.findById(articleId);

    await Article.deleteOne({ _id: article._id });

    req.user.articles = req.user.articles.filter(
      (userArticleId) => userArticleId.toString() !== articleId
    );
    await req.user.save();

    req.session.message = 'Successfully deleted article';
    res.redirect('/');
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getArticleFormView,
  createArticle,
  getArticleDetailsView,
  getArticleFormEditView,
  editArticle,
  getArticleFormDeleteView,
  deleteArticle,
};
