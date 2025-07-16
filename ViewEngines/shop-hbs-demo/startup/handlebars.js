const Handlebars = require("handlebars");
const { engine } = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

module.exports = (app) => {
  app.engine(
    ".hbs",
    engine({
      extname: ".hbs",
      defaultLayout: "main",
      handlebars: allowInsecurePrototypeAccess(Handlebars),
    })
  );
  app.set("view engine", ".hbs");
  app.set("views", "./views");
};
