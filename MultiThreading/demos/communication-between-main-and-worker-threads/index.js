const { MessageChannel, Worker } = require('node:worker_threads');

// channel1 is between Main thread and thread 1
const channel1 = new MessageChannel();
// channel2 is between Main thread and thread 2
const channel2 = new MessageChannel();

new Worker('./logger.js', {
  workerData: { port: channel1.port2 },
  transferList: [channel1.port2],
});
new Worker('./logger.js', {
  workerData: { port: channel2.port2 },
  transferList: [channel2.port2],
});

channel1.port1.on('message', (msg) => {
  console.log('Main thread, Channel 1 got: ', msg);
});
channel2.port1.on('message', (msg) => {
  console.log('Main thread, Channel 2 got: ', msg);
});

channel1.port1.postMessage('Main thread posted message on channel 1');
channel2.port1.postMessage('Main thread posted message on channel 2');
