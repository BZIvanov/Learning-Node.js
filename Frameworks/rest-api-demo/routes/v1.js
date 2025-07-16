const router = require("express").Router();
const usersRoutes = require("./users");
const moviesRoutes = require("./movies");
const notFoundRoutes = require("./not-found");

router.use("/v1/users", usersRoutes);
router.use("/v1/movies", moviesRoutes);
router.use("/", notFoundRoutes);

module.exports = router;
