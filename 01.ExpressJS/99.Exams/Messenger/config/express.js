const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

module.exports = (app) => {
  app.engine(
    '.hbs',
    handlebars({
      layoutsDir: 'views/layouts',
      defaultLayout: 'main',
      extname: '.hbs',
    })
  );

  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    session({
      secret: '123456',
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  //below is a custom middleware where we attach the data we will use later. For example for home page to say "Hello: User"
  app.use((req, res, next) => {
    if (req.user) {
      res.locals.currentUser = req.user;
    }
    next();
  });

  app.use((req, res, next) => {
    if (req.user) {
      res.locals.isAuth = !!req.user;
      res.locals.currentUser = req.user.username;
      res.locals.isAdmin = req.user.roles.indexOf('Admin') !== -1;
    }
    next();
  });

  app.set('view engine', '.hbs');

  app.use(express.static('./static'));
};
