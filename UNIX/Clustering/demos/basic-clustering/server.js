const os = require('node:os');
const cluster = require('node:cluster');
const http = require('node:http');

const server = http.createServer((req, res) => {
  if (req.url === '/slow') {
    // block the process for some amount of time
    for (let i = 0; i < 9000000000; i++) {}
  }

  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end(`Current process ID: ${process.pid}`);
});

console.log('\n');
console.log('Running server.js');

if (cluster.isPrimary) {
  console.log(`- Parent process with PID: ${process.pid}`);

  for (let i = 0; i < os.availableParallelism(); i++) {
    // we cannot fork if the cluster is not master, because the primary is creating child processes
    const worker = cluster.fork();
    console.log(
      `The parent process spawned a new child process with PID: ${worker.process.pid}`
    );
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(
      `Worker with PID ${worker.process.pid} and ${
        signal || code
      } exited. Restarting...`
    );
    // here we could conditionally fork new process depending on our needs
    cluster.fork();
  });
} else {
  console.log(`-- Child process with PID: ${process.pid}`);

  // node.js allow child process to share the same server port
  // it will send the traffic to the parent and the parent will correctly send it to its children
  server.listen(3000, () => {
    console.log('--- App listening...');
  });
}
