const dgram = require('node:dgram');

const receiver = dgram.createSocket('udp4');

receiver.on('message', (message, remoteInfo) => {
  console.log(
    `Server got: ${message} from ${remoteInfo.address}:${remoteInfo.port}`
  );
});

receiver.bind({ address: '127.0.0.1', port: 3000 });

receiver.on('listening', () => {
  const address = receiver.address();
  console.log(`Server listening on ${address.address}:${address.port}`);
});

receiver.on('error', (err) => {
  console.error(`Server error: ${err.stack}`);
  receiver.close();
});
