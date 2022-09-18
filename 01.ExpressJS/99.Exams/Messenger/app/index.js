const express = require('express');
const { engine } = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalPassport = require('passport-local');
const User = require('../models/User');
const commonRoutes = require('../routes/common');
const usersRoutes = require('../routes/users');
const threadsRoutes = require('../routes/threads');

const app = express();

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

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
passport.use(
  new LocalPassport((username, password, done) => {
    User.findOne({ username: username }).then((user) => {
      if (!user) {
        return done(null, false);
      }

      // authenticate method comes from the schema
      if (!user.authenticate(password)) {
        return done(null, false);
      }

      return done(null, user);
    });
  })
);

passport.serializeUser((user, done) => {
  if (user) {
    return done(null, user._id);
  }
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  });
});

// below is a custom middleware where we attach the data we will use later. For example for home page to say "Hello: User"
app.use((req, res, next) => {
  if (req.user) {
    res.locals.isAuth = !!req.user;
    res.locals.currentUser = req.user.username;
    res.locals.isAdmin = req.user.roles.indexOf('Admin') !== -1;
  }
  next();
});

app.use(express.static('./static'));

app.use('/', commonRoutes);
app.use('/users', usersRoutes);
app.use('/threads', threadsRoutes);

app.all('*', (req, res) => {
  res.status(404).send('404 - Not Found');
});

module.exports = app;
