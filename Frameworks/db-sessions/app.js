require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
require("./db")();
const routes = require("./routes");

// here we establish connection with mongoDB, where we will store our sessions. We will not keep them in memory
const store = new MongoDBStore({
  uri: process.env.DB_URI,
  collection: "sessions",
  expires: 24 * 60 * 60 * 1000, // the session expires after 1 day
});

store.on("error", function (error) {
  console.log(error);
});

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // here we don't want to always create new session even for the same browser/user
    saveUninitialized: false, // here we don't want to save if we didn't modified the session
    cookie: {
      path: "/",
      httpOnly: true, // with httpOnly we can't for example access the cookie by typing document.cookie in the browser console
      secure: false,
    },
    store,
    name: "myid", // here we replace the default sid so hackers won't easy guess that we use exactly express-session
  })
);

app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
