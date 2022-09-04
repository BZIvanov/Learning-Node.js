const EventEmmitter = require('events');

const myEmitter = new EventEmmitter();

// this is our custom event emitter with custom event name
myEmitter.on('update', () => {
  console.log('Info updated.');
});

// this is node specific event for the process object, which will execute some code after the program exit
process.on('exit', (code) => {
  console.log('Our program completed its work.', code);
});

myEmitter.emit('update');

/*
  We will see the following logs:
    - Info updated.
    - Our program completed its work. 0
*/
