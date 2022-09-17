// here the dotenv variables are also loaded, because of the unit tests
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const usersRoutes = require('../routes/users');
const moviesRoutes = require('../routes/movies');
const notFoundRoutes = require('../routes/not-found');
const globalError = require('../middlewares/global-error');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

app.use('/api/users', usersRoutes);
app.use('/api/movies', moviesRoutes);
app.use('*', notFoundRoutes);

app.use(globalError);

module.exports = app;
