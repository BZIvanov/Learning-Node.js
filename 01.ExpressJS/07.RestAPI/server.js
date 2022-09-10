const http = require('http');
require('dotenv').config();
require('./startup/db')();
const app = require('./startup/express');

// it is a good practice to keep the express and the server separate
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`REST API listening on port: ${PORT}`);
});
