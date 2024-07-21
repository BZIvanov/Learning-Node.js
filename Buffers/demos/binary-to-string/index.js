const { Buffer } = require('node:buffer');

// convert the below binary code to string
// 0100 1000 0110 1001 0010 0001

const myBuffer = Buffer.alloc(3); // 24 bits / 8 = 3 bytes

myBuffer[0] = 0x48; // 0100 1000 binary = 48 hex
myBuffer[1] = 0x69; // 0110 1001 binary = 69 hex
myBuffer[2] = 0x21; // 0010 0001 binary = 21 hex

console.log(myBuffer.toString('utf-8')); // Hi!
