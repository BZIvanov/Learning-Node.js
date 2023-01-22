const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
  console.log('Database ready');
});

mongoose.connection.on('error', (error) => {
  console.log('Mongo DB connection error', error);
});

mongoose.set('strictQuery', false);

const mongoDbConnect = async () => {
  await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = mongoDbConnect;
