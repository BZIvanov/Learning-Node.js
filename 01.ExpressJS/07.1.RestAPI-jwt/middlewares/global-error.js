const status = require('http-status');

module.exports = function (err, req, res, next) {
  console.log('Global Error Middleware', err);
  res
    .status(status.INTERNAL_SERVER_ERROR)
    .json({ success: false, message: 'Something went wrong' });
};
