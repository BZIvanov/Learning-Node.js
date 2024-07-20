const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('walk', (arg) => {
  if (arg) {
    console.log(arg);
  } else {
    console.log('Keep walking');
  }
});

myEmitter.emit('walk'); // Keep walking
myEmitter.emit('walk', 'Walk slow'); // Walk slow
