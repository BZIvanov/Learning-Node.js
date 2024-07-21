const { Buffer } = require('node:buffer');

// we will reserve 4 bytes (32 bits) of our memory
const memoryContainer = Buffer.alloc(4);

// the values are stored in hexadecimal format, not binary, that is why we see 00 instead of 0000 0000
console.log(memoryContainer); // <Buffer 00 00 00 00>

console.log(memoryContainer[0]); // 0

// hexadecimal number 0xf4 will be the following binary number 1111 0100
memoryContainer[0] = 0xf4;
console.log(memoryContainer[0]); // 244
