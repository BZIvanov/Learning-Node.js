const express = require('express');
const cors = require('../middleware/cors');
const authRoutes = require('../routes/auth');
const postsRoutes = require('../routes/posts');
const globalError = require('../middleware/global-error');

const app = express();

app.use(express.json());
app.use(cors);

app.use('/auth', authRoutes);
app.use('/posts', postsRoutes);
// global error must be after the other routes
app.use(globalError);

module.exports = app;
