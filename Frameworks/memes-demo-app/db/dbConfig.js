const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const memeService = require("../services/meme");
const genreService = require("../services/genre");
const seedData = require("./seedData");

const uri = `mongodb://127.0.0.1:27017`;
const dbName = "memeDb";

async function seed() {
  try {
    console.log("Seeding initial data...");

    for (const genreData of seedData.genres) {
      // Create genre
      const genre = await genreService.create({ title: genreData.title });

      // Assign genreId to each meme and create memes
      const memesWithGenre = genreData.memes.map((meme) => ({
        ...meme,
        genreId: genre._id,
      }));

      const memes = await memeService.createRange(memesWithGenre);

      // Optionally store the meme references in genre.memes
      genre.memes = memes.map((m) => m._id);
      await genre.save();
    }

    console.log("Seed complete.");
  } catch (err) {
    console.error("Seed error:", err);
  }
}

module.exports = async function connectToDB() {
  try {
    await mongoose.connect(`${uri}/${dbName}`);
    console.log(`Successfully connected to MongoDB, ${dbName} database`);

    // Use MongoDB native client to check if the DB exists
    const client = new MongoClient(uri);
    await client.connect();
    const admin = client.db().admin();
    const result = await admin.listDatabases();

    const database = result.databases.find((d) => d.name === dbName);
    console.log("Database: ", database?.name || "Database not found");

    if (!database) {
      await seed();
    }

    await client.close();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
