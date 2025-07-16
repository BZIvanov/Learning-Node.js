require("dotenv").config();
const express = require("express");

const app = express();

require("./startup/database")();
require("./startup/handlebars")(app);
require("./startup/express")(app);
require("./startup/passport")();
require("./startup/routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
