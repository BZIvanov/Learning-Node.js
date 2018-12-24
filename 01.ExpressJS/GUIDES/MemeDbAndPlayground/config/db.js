const mongoose = require('mongoose');
// mongoose has its own Promise and here we will override it to be the same as the global promise
mongoose.Promise = global.Promise;

// require without saving the result in variable will just run files and get the effect of the code inside
require('../models/ImageSchema');
require('../models/TagSchema');

const connectionString = 'mongodb://localhost:27017/mongoplayground';

module.exports = mongoose.connect(connectionString);