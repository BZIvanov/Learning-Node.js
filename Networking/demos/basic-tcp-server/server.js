const net = require('node:net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    // we call the toString method on the data, because it is a Buffer
    console.log(data.toString('utf-8'));
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running on', server.address());
});
