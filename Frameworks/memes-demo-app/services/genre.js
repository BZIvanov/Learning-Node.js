const Genre = require("../models/genre");
const crud = require("../api/mongooseCrud");

const genres = crud(Genre);

module.exports = {
  create: genres.create,
  get: genres.get,
  getAll: genres.getAll,
  async delete(id) {
    const genre = await genres.get(id);

    if (genre.memes && genre.memes.length > 0) {
      const message = `Cannot delete genre with id "${id}" — it contains memes.`;
      console.warn(message);
      throw new Error(message);
    }

    return await genres.delete(id);
  },
};
