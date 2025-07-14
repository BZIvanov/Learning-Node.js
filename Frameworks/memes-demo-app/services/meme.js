const Meme = require("../models/meme");
const Genre = require("../models/genre");
const crud = require("../api/mongooseCrud");

const memes = crud(Meme);
const genres = crud(Genre);

module.exports = {
  async create(memeData) {
    try {
      const genre = await genres.get(memeData.genreId);

      const meme = await memes.create(memeData);

      genre.memes.push(meme._id);
      await genre.save();

      return meme;
    } catch (err) {
      console.error("Error creating meme:", err);
      throw err;
    }
  },
  async createRange(memeList) {
    try {
      const createdMemes = await Promise.all(
        memeList.map((m) => memes.create(m))
      );
      return createdMemes;
    } catch (err) {
      console.error("Error creating meme range:", err);
      throw err;
    }
  },
  get: memes.get,
  getAll: memes.getAll,
  async delete(id) {
    try {
      const meme = await memes.delete(id);
      const genre = await genres.get(meme.genreId);

      genre.memes = genre.memes.filter(
        (mid) => mid.toString() !== meme._id.toString()
      );
      await genre.save();
    } catch (err) {
      console.error("Error deleting meme:", err);
      throw err;
    }
  },
};
