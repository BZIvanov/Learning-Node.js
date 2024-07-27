const net = require('node:net');

const server = net.createServer();

const clients = [];

server.on('connection', (socket) => {
  console.log('New client connected');

  const clientId = clients.length + 1;

  socket.write(`id-${clientId}`);

  clients.forEach((client) => {
    client.socket.write(`User ${clientId} joined the chat`);
  });

  socket.on('data', (data) => {
    const [currentClientId, currentMessage] = data
      .toString('utf-8')
      .split('-message-');

    // receive the data from a client and write it back so the other clients can receive it in their data events
    clients.forEach((client) => {
      client.socket.write(`User ${currentClientId} says: ${currentMessage}`);
    });
  });

  socket.on('end', (data) => {
    clients.forEach((client) => {
      client.socket.write(`User ${clientId} left the chat`);
    });
  });

  clients.push({ id: clientId.toString(), socket });

  socket.on('error', () => {
    clients.forEach((client) => {
      client.socket.write(`User ${clientId} left the chat`);
    });
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running on', server.address());
});
