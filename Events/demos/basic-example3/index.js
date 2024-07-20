const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('test', () => {
  console.log('Test 2');
});

myEmitter.on('test', () => {
  console.log('Test 1');
});

// once means after this event is executed once, it will be removed and not run again
myEmitter.once('test', () => {
  console.log('Test 3');
});

myEmitter.emit('test');
myEmitter.emit('test');

/*
  We will see the following logs:
    Test 2
    Test 1
    Test 3
    Test 2
    Test 1
*/
