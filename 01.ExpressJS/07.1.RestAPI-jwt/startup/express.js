// here the dotenv variables are also loaded, because of the unit tests
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const routesV1 = require('../routes/v1');
const notFoundRoutes = require('../routes/not-found');
const globalError = require('../middlewares/global-error');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

app.use('/v1', routesV1);
app.use('*', notFoundRoutes);

app.use(globalError);

module.exports = app;
