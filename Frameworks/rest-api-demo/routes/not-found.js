const { status: httpStatus } = require("http-status");
const router = require("express").Router();

router.use((req, res) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: `${req.method} on route ${req.originalUrl} not found.`,
  });
});

module.exports = router;
