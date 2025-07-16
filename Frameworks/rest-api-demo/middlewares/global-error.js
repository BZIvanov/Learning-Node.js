const { status: httpStatus } = require("http-status");

module.exports = function (err, req, res, next) {
  console.log("Global Error Middleware", err);

  const status = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;

  res.status(status).json({ success: false, message: "Something went wrong" });
};
