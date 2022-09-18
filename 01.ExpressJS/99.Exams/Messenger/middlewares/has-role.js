module.exports = (role) => (req, res, next) => {
  // isAuthenticated is built-in method in Passport
  if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
    next();
  } else {
    res.redirect('/users/login');
  }
};
