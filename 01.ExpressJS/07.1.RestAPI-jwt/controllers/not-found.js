const status = require('http-status');
const catchAsync = require('../middlewares/catch-async');

const notFound = catchAsync(async (req, res) => {
  return res.status(status.NOT_FOUND).json({
    success: false,
    message: `${req.method} on route ${req.originalUrl} not found.`,
  });
});

module.exports = { notFound };
