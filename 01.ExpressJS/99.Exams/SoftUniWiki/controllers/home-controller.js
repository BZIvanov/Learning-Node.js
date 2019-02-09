const Article = require('../models/Article');
const Edit = require('../models/Edit');

module.exports = {
    index: (req, res) => {
        Article.find({})
            .sort({ creationDate: 'descending' })
            .limit(3)
            .then((articles) => {
                let latestArticle = articles[0];
                if (!latestArticle) {
                    latestArticle = { title: 'Article not found in db', content: 'Empty' };
                }

                latestArticle.content = latestArticle.content
                    .split(' ')
                    .slice(0, 50)
                    .join(' ');

                res.render('home/index', { latest: latestArticle, articles })
             })
            .catch(err => {
                console.log(err);
            });
    },
    search: (req, res) => {
        // title property is the name property from the form
        const title = req.query.title.toLowerCase();

        Article.find()
            .then((articles) => {
                const filteredArticles = articles.filter(a => a.title.toLowerCase().includes(title));

                res.render('home/search-results', {
                    result: title,
                    articles: filteredArticles
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
};
