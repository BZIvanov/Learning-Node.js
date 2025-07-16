const { status: httpStatus } = require("http-status");

module.exports = function (req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(httpStatus.FORBIDDEN).json({
      success: false,
      message: "Access denied. You are not authorized to complete this action.",
    });
  }

  next();
};
