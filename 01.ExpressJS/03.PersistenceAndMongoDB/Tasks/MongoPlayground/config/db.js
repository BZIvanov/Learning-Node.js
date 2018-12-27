const mongoose = require('mongoose');

// here we will load our models which will create collections in our database
require('../models/ImageSchema');
require('../models/TagSchema');

const connectionString = 'mongodb://localhost:27017/mongoplayground';

// useNewUrlParser is to avoid some deprecated stuff
module.exports = mongoose.connect(connectionString, { useNewUrlParser: true });