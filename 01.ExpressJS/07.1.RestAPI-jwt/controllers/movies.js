const status = require('http-status');
const { Movie, validateMovie } = require('../models/movie');
const catchAsync = require('../middlewares/catch-async');

module.exports.getMovies = catchAsync(async (req, res) => {
  const movies = await Movie.find().sort('name').select('-__v');
  res.status(status.OK).json({ success: true, data: movies });
});

module.exports.getMovie = catchAsync(async (req, res) => {
  const movie = await Movie.findById(req.params.id).select('-__v');
  if (!movie) {
    return res
      .status(status.NOT_FOUND)
      .json({ success: false, message: 'Movie not found!' });
  }

  res.status(status.OK).json({ success: true, data: movie });
});

module.exports.createMovie = catchAsync(async (req, res) => {
  const error = validateMovie(req.body);
  if (error) {
    return res
      .status(status.BAD_REQUEST)
      .json({ success: false, message: error.details[0].message });
  }

  const { name } = req.body;
  let movie = new Movie({ name });
  movie = await movie.save();

  res.status(status.CREATED).json({ success: true, data: movie });
});

module.exports.updateMovie = catchAsync(async (req, res) => {
  const error = validateMovie(req.body);
  if (error) {
    return res
      .status(status.BAD_REQUEST)
      .json({ success: false, message: error.details[0].message });
  }

  const { name } = req.body;
  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    { name },
    { new: true }
  ).select('-__v');
  if (!movie) {
    return res
      .status(status.NOT_FOUND)
      .json({ success: false, message: 'Movie not found!' });
  }

  res.status(status.OK).json({ success: false, data: movie });
});

module.exports.deleteMovie = catchAsync(async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id).select('-__v');
  if (!movie) {
    return res
      .status(status.NOT_FOUND)
      .json({ success: false, message: 'Movie not found!' });
  }

  res.status(status.NO_CONTENT).json({ success: true });
});
