const fs = require('node:fs/promises');

(async () => {
  const fileHandleRead = await fs.open('input.txt', 'r');
  const fileHandleWrite = await fs.open('output.txt', 'w');

  const streamRead = fileHandleRead.createReadStream({
    highWaterMark: 64 * 1024,
  });

  const streamWrite = fileHandleWrite.createWriteStream();

  streamRead.on('data', (chunk) => {
    // once the internal buffer is full, the write method will return false
    // at that point we want to pause the read stream to avoid memory issues, because the read stram is reading chunks of 64kb and write stream is writing 16kb
    if (!streamWrite.write(chunk)) {
      streamRead.pause();
    }
  });

  // resume the read stream after the internal buffer of the write stream is drained and we can continue writing
  streamWrite.on('drain', () => {
    streamRead.resume();
  });
})();
