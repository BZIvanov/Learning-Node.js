const net = require('node:net');
const fs = require('node:fs/promises');
const path = require('node:path');

const storageDir = path.resolve(__dirname, 'storage');
fs.mkdir(storageDir, { recursive: true }).catch((err) => {
  console.error('Failed to create storage directory:', err);
});

const server = net.createServer();

server.on('connection', (socket) => {
  console.log('New connection');

  let fileHandle, fileWriteStream;

  socket.on('data', async (data) => {
    try {
      if (!fileHandle) {
        // pause receiving data from the client
        socket.pause();

        const indexOfDivider = data.indexOf('-------');
        const fileName = data.subarray(11, indexOfDivider).toString('utf-8');
        console.log('File Name', fileName);

        fileHandle = await fs.open(path.join(storageDir, fileName), 'w');
        fileWriteStream = fileHandle.createWriteStream();

        // writing to our destination file, discard the headers
        fileWriteStream.write(data.subarray(indexOfDivider + 7));

        // resume receiving data from the client
        socket.resume();

        fileWriteStream.on('drain', () => {
          socket.resume();
        });
      } else {
        if (!fileWriteStream.write(data)) {
          socket.pause();
        }
      }
    } catch (err) {
      console.error('Error during data handling:', err);
      socket.destroy();
    }
  });

  // This end event happens when the client.js file ends the socket
  socket.on('end', async () => {
    if (fileHandle) {
      await fileHandle.close();
    }

    fileHandle = undefined;
    fileWriteStream = undefined;

    console.log('Connection ended');
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });

  socket.on('close', async () => {
    if (fileHandle) {
      await fileHandle.close();
    }
    fileHandle = undefined;
    fileWriteStream = undefined;
  });
});

server.listen(3000, '::1', () => {
  console.log('Server running on', server.address());
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
