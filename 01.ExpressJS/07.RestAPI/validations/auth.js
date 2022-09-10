const { Joi } = require('express-validation');

const passwordRegex = /^[a-zA-Z0-9]{6,30}$/;

const signupValidation = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(passwordRegex).required(),
  }),
};

const signinValidation = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().regex(passwordRegex).required(),
  }),
};

module.exports = {
  signupValidation,
  signinValidation,
};
