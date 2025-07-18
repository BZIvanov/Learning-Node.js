const jwt = require("jsonwebtoken");
const { status: httpStatus } = require("http-status");

module.exports = function (req, res, next) {
  const tokenHeader = req.header("Authorization");
  if (!tokenHeader) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ success: false, message: "Access denied. No token provided" });
  }

  try {
    const token = tokenHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res
      .status(httpStatus.BAD_REQUEST)
      .json({ success: false, message: "Invalid token" });
  }
};
