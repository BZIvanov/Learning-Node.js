module.exports = {
    isAuthed: (req, res, next) => {
        // if req.user it means Passport has already added user
        if (req.user) {
            next();
        } else {
            res.redirect('/user/login');
        }
    },
    hasRole: (role) => (req, res, next) => {
        // isAuthenticated is built-in method in Passport
        if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
            next();
        } else {
            res.redirect('/user/login');
        }
    },
    isAnonymous: (req, res, next) => {
        // isAuthenticated is built-in method in Passport
        if (!req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/');
        }
    }
}