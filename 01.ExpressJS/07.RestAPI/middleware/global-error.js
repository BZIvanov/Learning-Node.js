const { ValidationError } = require('express-validation');

// General error handling. This middleware MUST be defined last because we will get to it if error occures in controllers and there we will call this middleware
module.exports = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error);
  }

  const status = error.statusCode || 500;
  const message = error.message;

  res.status(status).json({ message });

  next();
};
