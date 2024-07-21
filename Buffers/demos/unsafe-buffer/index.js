const { Buffer } = require('node:buffer');

// initializes a buffer of the specified size without zeroing out its memory
// this means the buffer may contain old data left in memory
const unsafeBuffer = Buffer.allocUnsafe(10);

for (let i = 0; i < unsafeBuffer.length; i++) {
  if (unsafeBuffer[i] !== 0) {
    console.log(`Element ${i} has value ${unsafeBuffer[i].toString(2)}`);
  }
}

/*
  The old data present in a buffer allocated with Buffer.allocUnsafe is limited to what has been used by the same process. 
  It cannot directly include data from files on your computer or from other applications, thanks to operating system-level memory isolation.
  But it could access data used by the same process

  Read more here:
  https://nodejs.org/docs/latest/api/buffer.html#what-makes-bufferallocunsafe-and-bufferallocunsafeslow-unsafe
*/
