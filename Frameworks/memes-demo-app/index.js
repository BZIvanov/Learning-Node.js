const express = require("express");
const bodyParser = require("body-parser");
const fileUploader = require("express-fileupload");

const connectToDB = require("./db/dbConfig");
const memesRoutes = require("./routes/memes");

const app = express();

app.use("/public", express.static("./public"));
app.use(fileUploader());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", memesRoutes);

async function startServer() {
  try {
    await connectToDB();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1); // Exit on DB failure
  }
}

startServer();
