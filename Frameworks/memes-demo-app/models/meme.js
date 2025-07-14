const { Schema, model } = require("mongoose");

const memeSchema = new Schema(
  {
    title: { type: String, required: true },
    memeSrc: { type: String, required: true },
    description: String,
    privacy: {
      type: String,
      enum: ["on", "off"],
      default: "on",
    },
    dataStamp: Number,
    genreId: {
      type: Schema.Types.ObjectId,
      ref: "Genre",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Meme", memeSchema);
