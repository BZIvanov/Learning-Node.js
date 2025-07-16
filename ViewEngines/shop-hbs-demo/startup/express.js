const path = require("node:path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cookieParser());
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      saveUninitialized: false,
      resave: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.use((req, res, next) => {
    if (req.user) {
      // provide user and isAdmin to all handlebars templates
      res.locals.user = req.user;
      res.locals.isAdmin = req.user.roles.indexOf("admin") !== -1;
    }
    next();
  });

  const publicPath = path.normalize(path.join(__dirname, "..", "public"));
  app.use("/public", express.static(publicPath));
};
