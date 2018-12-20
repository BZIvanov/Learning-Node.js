const mongoose = require('mongoose');

// mongoose has its own Promise and here we will override it to be the same as the global promise
mongoose.Promise = global.Promise;

const connectionString = 'mongodb://localhost:27017/mongoplayground';

module.exports = mongoose.connect(connectionString);