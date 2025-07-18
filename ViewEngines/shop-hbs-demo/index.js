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

// this will catch errors like undefined variable for example
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  console.log(err.name, err.message);
  // here we dont close the server before shutting down node like we did for unhandledRejection, because this error will only happen synchronously anyway
  process.exit(1);
});

// this kind of rejection could happen if we fail connecting to the database for example
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down...");
  console.log(err.name, err.message);
  // here we want to close the server before the node process, because we might have some operations running on the server meanwhile
  server.close(() => {
    process.exit(1); // code 1 stands for unhandled rejection which is the usual case
  });
});
