const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);

    console.log("DB connected");
  } catch (error) {
    console.log("DB connection error", error);

    process.exit(1);
  }
};
