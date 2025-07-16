const mongoose = require("mongoose");

const { seedAdminUser } = require("../models/User");

module.exports = () => {
  mongoose.connect(process.env.DB_URI);

  const database = mongoose.connection;

  database.once("open", (err) => {
    if (err) {
      return console.log(err);
    }

    seedAdminUser();

    console.log("Connected!");
  });

  database.on("error", (err) => {
    console.log(err);
  });
};
