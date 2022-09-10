const { Joi } = require('express-validation');

const postValidation = {
  body: Joi.object({
    title: Joi.string().min(5).required(),
    content: Joi.string().min(30).required(),
  }),
};

module.exports = {
  postValidation,
};
