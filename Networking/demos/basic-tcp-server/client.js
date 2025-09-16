const net = require("node:net");

// createConnection will create connection, which can connect to our server created with createServer
const socket = net.createConnection({ host: "127.0.0.1", port: 3000 }, () => {
  const buff = Buffer.alloc(2);
  buff[0] = 115; // ASCII code for 's'
  buff[1] = 116; // ASCII code for 't'

  // we can provide different type of data: buffer, string, etc...
  socket.write(buff);
  socket.write("Test message from the client");
});
