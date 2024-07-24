const fs = require('node:fs/promises');

(async () => {
  console.time('testWrite');

  const fileHandle = await fs.open('test.txt', 'w');
  const stream = fileHandle.createWriteStream();
  for (let i = 0; i < 1_000_000; i++) {
    const buff = Buffer.from(`${i} `, 'utf-8');
    stream.write(buff);
  }

  console.timeEnd('testWrite');
})();
