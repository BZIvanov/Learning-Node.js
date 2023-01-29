const cluster = require('cluster');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`Current process ID: ${process.pid}`);
});

console.log('Running server.js');

if (cluster.isMaster) {
  console.log('Master has been started');

  cluster.fork();
  cluster.fork();
} else {
  console.log('Worker process started');

  app.listen(3000, () => console.log('App listening...'));
}
