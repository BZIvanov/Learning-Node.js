const net = require('node:net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(data.toString('utf-8'));
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running on', server.address());
});
