const net = require('node:net');
const fs = require('node:fs/promises');
const path = require('node:path');

const socket = net.createConnection({ host: '::1', port: 3000 }, async () => {
  try {
    const filePath = process.argv[2];
    const fileName = path.basename(filePath);
    const fileHandle = await fs.open(filePath, 'r');
    const fileReadStream = fileHandle.createReadStream();
    const fileSize = (await fileHandle.stat()).size;

    // for showing the upload progress
    let uploadedPercentage = 0;
    let bytesUploaded = 0;

    socket.write(`File Name: ${fileName}-------`);

    // to get a nice log for the progress percentage
    console.log();

    fileReadStream.on('data', async (data) => {
      if (!socket.write(data)) {
        fileReadStream.pause();
      }

      bytesUploaded += data.length;
      let newPercentage = Math.floor((bytesUploaded / fileSize) * 100);

      if (newPercentage > uploadedPercentage) {
        uploadedPercentage = newPercentage;
        process.stdout.write(`Uploading... ${uploadedPercentage}%\r`);
      }
    });

    socket.on('drain', () => {
      fileReadStream.resume();
    });

    fileReadStream.on('end', async () => {
      console.log('\nThe file was successfully uploaded');
      await fileHandle.close();
      socket.end();
    });

    fileReadStream.on('error', async (err) => {
      console.error('Read stream error:', err);
      await fileHandle.close();
      socket.destroy();
    });
  } catch (err) {
    console.error('Client error:', err);
  }
});

socket.on('error', (err) => {
  console.error('Socket error:', err);
});
