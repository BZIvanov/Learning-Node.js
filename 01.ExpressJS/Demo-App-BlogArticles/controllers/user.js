const crypto = require('crypto');
const User = require('../models/User');
const encryption = require('./../utilities/encryption');

const getRegisterView = (req, res) => {
  try {
    res.render('user/register');
  } catch (error) {
    console.error(error);
  }
};

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, repeatedPassword } = req.body;

    if (password !== repeatedPassword) {
      return res.render('user/register', {
        ...req.body,
        error: 'Passwords do not match!',
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.render('user/register', {
        ...req.body,
        error: 'User with the same username exists!',
      });
    }

    const salt = crypto.randomBytes(128).toString('base64');
    const passwordHash = encryption.hashPassword(password, salt);

    const newUser = await User.create({
      email,
      passwordHash,
      fullName,
      salt,
      roles: ['User'],
    });

    // login function comes from passport and will use it in serialize function
    req.logIn(newUser, (err) => {
      if (err) {
        return res.render('user/register', {
          ...req.body,
          error: err.message,
        });
      }

      req.session.message = 'Successfully registered';
      res.redirect('/');
    });
  } catch (error) {
    console.error(error);
  }
};

const getLoginView = (req, res) => {
  try {
    res.render('user/login');
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !user.authenticate(password)) {
      return res.render('user/login', {
        ...req.body,
        error: 'Either username or password is invalid!',
      });
    }

    req.login(user, (err) => {
      if (err) {
        return res.render('/user/login', {
          error: err.message,
        });
      }

      let returnUrl = '/';
      if (req.session.returnUrl) {
        returnUrl = req.session.returnUrl;
        delete req.session.returnUrl;
      }
      req.session.message = 'Successfully login';
      res.redirect(returnUrl);
    });
  } catch (error) {
    console.error(error);
  }
};

const logoutUser = (req, res) => {
  try {
    req.logOut(() => {
      req.session.message = 'Come back later!';
      res.redirect('/');
    });
  } catch (error) {
    console.error(error);
  }
};

const getUserDetailsView = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.render('user/details', user);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getRegisterView,
  registerUser,
  getLoginView,
  loginUser,
  logoutUser,
  getUserDetailsView,
};
