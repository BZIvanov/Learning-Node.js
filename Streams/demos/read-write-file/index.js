// in the text.txt you can find instructions to debug the code to get overview of how the stream is created
const fs = require('node:fs');

// with highWaterMark we will create smaller chunks, otherwise we would need a lot of text
const readable = fs.createReadStream(__dirname + '/text.txt', {
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
