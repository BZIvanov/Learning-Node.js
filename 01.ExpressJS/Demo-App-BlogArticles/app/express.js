const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalPassport = require('passport-local');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const { engine } = require('express-handlebars');
const User = require('./../models/User');
const homeRoutes = require('../routes/home');
const userRoutes = require('../routes/user');
const articleRoutes = require('../routes/article');

const app = express();

// this package will prevent hacker queries. For example instead of data, object query is provided like { email: { $gt: "" } }
// use this middleware after the middle with which you obtain data, for example express.json
app.use(mongoSanitize());

// this package will set security headers
app.use(helmet());

// xss module will replace html symbols from incoming requests data, so no js code can be included with it
app.use(xss());

// View engine setup.
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.normalize(path.join(__dirname, '..', 'views')));

// This set up which is the parser for the request's data.
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// We will use cookies.
app.use(cookieParser());

// Session is storage for cookies, which will be de/encrypted with that 'secret' key.
app.use(
  session({
    secret: 's3cr3t5tr1ng',
    resave: false,
    saveUninitialized: false,
  })
);

// For user validation we will use passport module.
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new LocalPassport(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    (username, password, done) => {
      User.findOne({ email: username }).then((user) => {
        if (!user) {
          return done(null, false);
        }

        if (!user.authenticate(password)) {
          return done(null, false);
        }

        return done(null, user);
      });
    }
  )
);

passport.serializeUser((user, done) => {
  if (!user) {
    return done(null, false);
  }

  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  });
});

app.use((req, res, next) => {
  if (req.user) {
    res.locals.isAuth = req.user.isInRole('User');
    res.locals.isAdmin = req.user.isInRole('Admin');
    res.locals.userEmail = req.user.email;
  }
  next();
});

// This makes the content in the "public" folder accessible for every user.
app.use(express.static(path.normalize(path.join(__dirname, '..', 'public'))));

app.use('/', homeRoutes);
app.use('/user', userRoutes);
app.use('/article', articleRoutes);

module.exports = app;
