const zlib = require('node:zlib');
const fs = require('node:fs');

// provide some input.txt file to be compressed
const input = fs.createReadStream('./input.txt');
const output = fs.createWriteStream('./output.gz');

input.pipe(zlib.createGzip()).pipe(output);
