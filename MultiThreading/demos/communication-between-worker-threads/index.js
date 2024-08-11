const { MessageChannel, Worker } = require('node:worker_threads');

const { port1, port2 } = new MessageChannel();

new Worker('./logger.js', {
  workerData: { port: port1 },
  transferList: [port1],
});
new Worker('./logger.js', {
  workerData: { port: port2 },
  transferList: [port2],
});
