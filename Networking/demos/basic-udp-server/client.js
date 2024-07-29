const dgram = require('node:dgram');

const sender = dgram.createSocket({ type: 'udp4', sendBufferSize: 9216 });

const sendData = (message, port, address) => {
  sender.send(Buffer.from(message), port, address, (err, bytes) => {
    if (err) {
      console.error(`Send error: ${err}`);
    } else {
      console.log(`Sent ${bytes} bytes: ${message}`);
    }
  });
};

sendData('Test data 1', 3000, '127.0.0.1');
sendData('Test data 2', 3000, '127.0.0.1');

sender.connect(3000, '127.0.0.1', (err) => {
  if (err) {
    console.error(`Connect error: ${err}`);
  } else {
    sendData('Test data 3', 3000, '127.0.0.1');
  }
});

sender.on('error', (err) => {
  console.error(`Sender error: ${err.stack}`);
  sender.close();
});
