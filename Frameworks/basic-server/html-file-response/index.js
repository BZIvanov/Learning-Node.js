const { join } = require("node:path");
const express = require("express");

const app = express();

// main.path will give us the starting module of the application
const filePath = join(require.main.path, "views", "index.html");

app.get("/", (req, res) => {
  // express will automatically set the Content-Type header based on the file extension
  res.sendFile(filePath);
});

app.listen(3000, () => console.log("Listening on port 3000"));
