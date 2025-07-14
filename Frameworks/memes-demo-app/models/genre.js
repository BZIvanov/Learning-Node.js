const { Schema, model } = require("mongoose");

const genreSchema = new Schema(
  {
    title: { type: String, required: true },
    memes: [{ type: Schema.Types.ObjectId, ref: "Meme" }],
  },
  { timestamps: true }
);

module.exports = model("Genre", genreSchema);
