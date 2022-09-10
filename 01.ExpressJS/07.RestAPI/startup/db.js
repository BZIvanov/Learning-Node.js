const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.once('open', (error) => {
    if (error) {
      console.log(error);
    }

    console.log('Database ready');
  });

  db.on('error', (error) => {
    console.log(error);
  });
};
