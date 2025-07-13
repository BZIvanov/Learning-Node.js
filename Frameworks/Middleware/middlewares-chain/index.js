const express = require("express"); // v5.1.0

const app = express();

// Middleware functions have third argument next() except the last callback. We can build logic with middlewares because if something is not satisified we can call another callback with req, res
app.get(
  "/",
  (req, res, next) => {
    console.log("First middleware");

    next();
  },
  middleWareAsFunction,
  (req, res) => {
    console.log("Third middleware");

    res.send("We got to this middleware and sent the response");
  }
);

function middleWareAsFunction(req, res, next) {
  console.log("Second middleware");

  next();
}

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
