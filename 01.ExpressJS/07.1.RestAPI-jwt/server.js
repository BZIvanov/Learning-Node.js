const http = require('http');
require('dotenv').config();
require('./startup/db');
const app = require('./startup/express');

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

process.on('uncaughtException', (err) => {
  console.log('===UNCAUGHT EXCEPTION error', err);

  server.close(() => process.exit(1));
});

process.on('unhandledRejection', (err) => {
  console.log('===UNHANDLED REJECTION error', err);

  server.close(() => process.exit(1));
});
