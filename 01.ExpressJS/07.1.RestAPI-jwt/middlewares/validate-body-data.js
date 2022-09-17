const status = require('http-status');

module.exports = (joiSchema) => (req, res, next) => {
  const { error } = joiSchema.validate(req.body);

  if (error) {
    return res
      .status(status.BAD_REQUEST)
      .json({ success: false, message: error.details[0].message });
  }

  next();
};
