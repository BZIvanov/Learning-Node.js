const os = require('node:os');
const cluster = require('node:cluster');
const http = require('node:http');

const server = http.createServer((req, res) => {
  // send data to the parent process
  process.send({ type: 'custom-msg', data: 123 });

  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end(`Current process ID: ${process.pid}`);
});

if (cluster.isPrimary) {
  for (let i = 0; i < os.availableParallelism(); i++) {
    cluster.fork();
  }

  // with this event we can listen for data sent from the child process
  cluster.on('message', (worker, message) => {
    console.log(message.type);
  });
} else {
  server.listen(3000, () => {
    console.log('App listening...');
  });
}
