const { workerData } = require('node:worker_threads');

const port = workerData.port;

port.postMessage('Worker posted message');

port.on('message', (msg) => {
  console.log('Worker message received: ', msg);
});
