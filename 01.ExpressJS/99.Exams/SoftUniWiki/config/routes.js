const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    // here we dont call functions just provide them
    app.get('/', controllers.home.index);
    app.get('/register', restrictedPages.isAnonymous, controllers.user.registerGet);
    app.post('/register', restrictedPages.isAnonymous, controllers.user.registerPost);
    app.post('/logout', restrictedPages.isAuthed, controllers.user.logout);
    app.get('/login', restrictedPages.isAnonymous, controllers.user.loginGet);
    app.post('/login', restrictedPages.isAnonymous, controllers.user.loginPost);

    app.get('/search', controllers.home.search);

    app.get('/article/create', restrictedPages.isAuthed, controllers.article.createArticleGet);
    app.post('/article/create', restrictedPages.isAuthed, controllers.article.createArticlePost);
    app.get('/article/all', controllers.article.listAll);
    app.get('/article/display/:id', controllers.article.displayArticle);
    app.get('/article/edit/:id', restrictedPages.isAuthed, controllers.article.editArticleGet);
    app.post('/article/edit/:id', restrictedPages.isAuthed, controllers.article.editArticlePost);
    app.get('/article/lock/:id', restrictedPages.hasRole('Admin'), controllers.article.lockArticle);
    app.get('/article/unlock/:id', restrictedPages.hasRole('Admin'), controllers.article.unlockArticle);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};
