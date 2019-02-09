const Article = require('../models/Article');
const Edit = require('../models/Edit');

module.exports = {
    createArticleGet: (req, res) => {
        res.render('article/create');
    },
    createArticlePost: (req, res) => {
        const { title, content } = req.body;

        const article = new Article({ title, content });
        const edit = new Edit({ title, content, author: req.user._id });

        article.edits.push(edit);
        edit.article = article;
        req.user.edits.push(edit);

        Promise.all([ article.save(), edit.save(), req.user.save() ])
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {
                console.log(err);
            });
    },
    listAll: async (req, res) => {
        // Always use async and await in try-catch block
        try {
            const articles = await Article
                .find({})
                .sort({ title: 'ascending' })
                .select('title');

            res.render('article/all-articles', { articles });
        } catch (err) {
            console.log(err)
        };
    },
    displayArticle: (req, res) => {
        const articleId = req.params.id;

        Article.findById(articleId)
            .populate('edits')
            .then((article) => {
                const sortedEdits = article.edits.sort((e1, e2) => {
                    return e2.creationDate - e1.creationDate;
                });

                article.contents = sortedEdits[0].content.split('\r\n\r\n');
                res.render('article/article', article)
            })
            .catch((err) => {
                console.log(err);
            });
    },
    editArticleGet: (req, res) => {
        const id = req.params.id;

        Article.findById(id)
            .then((article) => {
                res.render('article/edit', article);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    editArticlePost: (req, res) => {
        const articleId = req.params.id;
        const userId = req.user.id;
        const { content } = req.body;

        const edit = new Edit({ author: userId, content, article: articleId });

        edit.save()
            .then((edit) => {
                req.user.edits.push(edit._id);

                return Promise.all([ Article.findById(articleId), req.user.save() ])
            })
            .then(([ article, modifiedUser ]) => {
                article.edits.push(edit._id);

                return article.save();
            })
            .then(() => {
                res.redirect(`/article/display/${articleId}`);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    lockArticle: (req, res) => {

    },
    unlockArticle: (req, res) => {

    }
}
