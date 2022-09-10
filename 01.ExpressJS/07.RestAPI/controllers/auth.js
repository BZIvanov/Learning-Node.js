const User = require('../models/User');

module.exports = {
  signUp: (req, res, next) => {
    const { name, email, password } = req.body;
    User.create({
      name,
      email,
      password,
    })
      .then((user) => {
        const token = user.generateAuthToken();
        res
          .header('Authorization', `Bearer ${token}`)
          .status(201)
          .json({ message: 'User created!' });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }

        // the next below will go to General error middleware handler in  the index.js file
        next(error);
      });
  },
  signIn: (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({ email })
      .then((user) => {
        if (!user) {
          const error = new Error('User not be found');
          error.statusCode = 401;
          throw error;
        }

        if (!user.authenticate(password)) {
          const error = new Error('User not be found');
          error.statusCode = 401;
          throw error;
        }

        const token = user.generateAuthToken();

        res.header('Authorization', `Bearer ${token}`).status(200).json({
          message: 'User successfully logged in!',
        });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }

        // the next below will go to General error middleware handler in  the index.js file
        next(error);
      });
  },
};
