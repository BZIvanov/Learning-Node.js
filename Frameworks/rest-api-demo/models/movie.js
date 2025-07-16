const { Schema, model } = require('mongoose');
const Joi = require('joi');

const movieSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 5, maxlength: 50 },
  },
  { timestamps: true }
);

const Movie = model('Movie', movieSchema);

const movieValidationSchema = Joi.object({
  name: Joi.string().min(5).max(50).required(),
});

module.exports = {
  Movie,
  movieValidationSchema,
};
