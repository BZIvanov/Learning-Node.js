const encryption = require('../util/encryption');
const User = require('../models/User');

const registerGet = (req, res) => {
  res.render('users/register');
};

// async and awaits must always be wrapped in try catch block in case of error
const registerPost = async (req, res) => {
  try {
    const { username, password, firstName, lastName } = req.body;

    const salt = encryption.generateSalt();

    const hashedPass = encryption.generateHashedPassword(salt, password);

    const user = await User.create({
      firstName,
      lastName,
      username,
      hashedPass,
      salt,
      roles: ['User'],
    });

    // logIn method comes from Passport. It goes through the serializeUser function
    req.logIn(user, (err, user) => {
      if (err) {
        res.locals.globalError = err;
        res.render('users/register', user);
      } else {
        req.session.notifyYou = 'Successfully registered';
        res.redirect('/');
      }
    });
  } catch (error) {
    console.log(error);
    res.locals.globalError = error;
    res.render('users/register');
  }
};

const loginGet = (req, res) => {
  res.render('users/login');
};

const loginPost = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    function errorHandler(error) {
      console.log(error);
      res.locals.globalError = error;
      res.render('users/login');
    }

    if (!user) {
      return errorHandler('Invalid user data');
    }
    if (!user.authenticate(password)) {
      return errorHandler('Invalid user data');
    }

    req.logIn(user, (error, user) => {
      if (error) {
        errorHandler(error);
      } else {
        res.redirect('/');
      }
    });
  } catch (error) {
    errorHandler(error);
  }
};

const logout = (req, res) => {
  // logout is built-in Passport method which will clear the session and cookies
  req.logout(() => {
    res.redirect('/');
  });
};

module.exports = {
  registerGet,
  registerPost,
  loginGet,
  loginPost,
  logout,
};
