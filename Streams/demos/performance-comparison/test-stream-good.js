const fs = require('node:fs/promises');

(async () => {
  console.time('testWrite');

  const fileHandle = await fs.open('test.txt', 'w');
  const stream = fileHandle.createWriteStream();

  let i = 0;

  const writeData = () => {
    while (i < 1_000_000) {
      const buff = Buffer.from(`${i} `, 'utf-8');

      if (i === 999_999) {
        // end method will trigger the finish event
        stream.end(buff);
        return;
      }

      // write data to the stream
      // and write is also returning true/false depending on if the internal buffer is full
      // once the internal buffer is full, we want to break and we will hit the drain event, which will start new while loop with new buffer
      if (!stream.write(buff)) {
        break;
      }

      i++;
    }
  };

  writeData();

  stream.on('drain', () => {
    writeData();
  });

  stream.on('finish', () => {
    console.timeEnd('testWrite');
    fileHandle.close();
  });
})();
