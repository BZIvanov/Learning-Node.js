const net = require('node:net');

const socket = net.createConnection({ host: '127.0.0.1', port: 3000 }, () => {
  const buff = Buffer.alloc(2);
  buff[0] = 115;
  buff[1] = 116;

  // we can provide different type of data: buffer, string, etc...
  socket.write(buff);
  socket.write('Test message from the sender');
});
