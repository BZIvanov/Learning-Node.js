const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
const authRoutes = require('./routes/auth');
require('./database/database')();

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/feed', feedRoutes);
app.use('/auth', authRoutes);

// General error handling. This middleware MUST be defined last because we will get to it if error occures in controllers and there we will call this middleware
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
  next();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`REST API listening on port: ${port}`);
});
