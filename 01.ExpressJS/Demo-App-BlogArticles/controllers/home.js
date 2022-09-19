const Article = require('../models/Article');

const getHomeView = async (req, res) => {
  try {
    const articles = await Article.find().populate('author').lean();

    const message = req.session.message;
    req.session.message = '';
    res.render('home/index', { articles, message });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getHomeView,
};
