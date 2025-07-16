const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongod = null;

mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB");
});

mongoose.connection.on("error", (error) => {
  console.error("Mongo DB error");
  console.error(error);
});

const mongoDbConnect = async () => {
  let DB_URI = process.env.DB_URI;

  if (process.env.NODE_ENV === "test") {
    mongod = await MongoMemoryServer.create();
    DB_URI = mongod.getUri();
  }

  await mongoose.connect(DB_URI);
};

const mongoDbDisconnect = async () => {
  await mongoose.connection.close();

  if (mongod) {
    await mongod.stop();
  }
};

module.exports = {
  mongoDbConnect,
  mongoDbDisconnect,
};
