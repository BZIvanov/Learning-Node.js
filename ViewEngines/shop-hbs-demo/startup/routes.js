const commonRoutes = require("../routes/common");
const userRoutes = require("../routes/user");
const categoryRoutes = require("../routes/category");
const productRoutes = require("../routes/product");

module.exports = (app) => {
  app.use("/", commonRoutes);
  app.use("/user", userRoutes);
  app.use("/category", categoryRoutes);
  app.use("/product", productRoutes);
  // this must be the last router in this file, because we will always hit the below router if none of above matches
  app.use((req, res) => {
    res.status(404).send("404 Not Found");
  });
};
