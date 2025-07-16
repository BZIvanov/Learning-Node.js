const { status: httpStatus } = require("http-status");
const { Movie } = require("../models/movie");
const catchAsync = require("../middlewares/catch-async");

// module.exports is better way to export than just exports, because exports is reference to module.exports and if reassign exports we can break that reference
const getMovies = catchAsync(async (req, res) => {
  const movies = await Movie.find().sort("name").select("-__v");
  return res.status(httpStatus.OK).json({ success: true, data: movies });
});

const getMovie = catchAsync(async (req, res) => {
  const movie = await Movie.findById(req.params.id).select("-__v");
  if (!movie) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ success: false, message: "Movie not found!" });
  }

  return res.status(httpStatus.OK).json({ success: true, data: movie });
});

const createMovie = catchAsync(async (req, res) => {
  const { name } = req.body;
  let movie = new Movie({ name });
  movie = await movie.save();

  return res.status(httpStatus.CREATED).json({ success: true, data: movie });
});

const updateMovie = catchAsync(async (req, res) => {
  const { name } = req.body;
  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    { name },
    { new: true }
  ).select("-__v");
  if (!movie) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ success: false, message: "Movie not found!" });
  }

  return res.status(httpStatus.OK).json({ success: false, data: movie });
});

const deleteMovie = catchAsync(async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id).select("-__v");
  if (!movie) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ success: false, message: "Movie not found!" });
  }

  return res.status(httpStatus.NO_CONTENT).json({ success: true });
});

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
