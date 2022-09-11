const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to mongoDB'));
// no need of catch, because we handle process errors
