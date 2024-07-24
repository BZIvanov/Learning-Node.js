# Read file and write to file demo

## Generate input.txt

You can use the below script to generate the _input.txt_ file, which is needed for this demo

```js
const fs = require('node:fs');

fs.open('input.txt', 'w', (error, fd) => {
  for (let i = 0; i < 1_000_000; i++) {
    const buff = Buffer.from(`${i} `, 'utf-8');
    fs.writeSync(fd, buff);
  }
});
```

## Simple example of logging chunks

The below example is incomplete and not good, because we have very small chunks with the highWaterMark config. This is just to demonstrate how to log utf8 text as chunks to the console. In practice this example is bad, because we don't have balanced the read and write chunks, if the read chunks were too big, we would have memory issues. Check the _index.js_ file for more realistic version.

```js
const fs = require('node:fs');

// with highWaterMark we will create smaller chunks just for this example so we don't need big data file
const readable = fs.createReadStream(__dirname + '/input.txt', {
  encoding: 'utf-8',
  highWaterMark: 128, // default is 64kb 64 * 1024
});

const writeable = fs.createWriteStream(__dirname + '/output.txt');

readable.on('data', (chunk) => {
  console.log('---CHUNK START---');
  console.log(chunk);
  console.log('---CHUNK END---');
  writeable.write(chunk);
});
```
