const fs = require('node:fs/promises');

(async () => {
  console.time('testWrite');

  const fileHandle = await fs.open('test.txt', 'w');
  for (let i = 0; i < 1_000_000; i++) {
    await fileHandle.write(`${i} `);
  }

  console.timeEnd('testWrite');
})();
