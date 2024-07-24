const fs = require('node:fs');

console.time('testWrite');

fs.open('test.txt', 'w', (error, fd) => {
  for (let i = 0; i < 1_000_000; i++) {
    const buff = Buffer.from(`${i} `, 'utf-8');
    fs.writeSync(fd, buff);
  }

  console.timeEnd('testWrite');
});
