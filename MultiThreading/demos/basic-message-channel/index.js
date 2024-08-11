const { MessageChannel } = require('node:worker_threads');

const { port1, port2 } = new MessageChannel();

port1.postMessage({ text: 'Hello' });
port2.postMessage({ text: 'World' });

port1.on('message', (msg) => {
  console.log('Message for port 1: ', msg);
});

port2.on('message', (msg) => {
  console.log('Message for port 2: ', msg);
});
