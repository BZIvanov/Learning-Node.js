const Emitter = require('./emitter');

const emitter = new Emitter();

function onFoo() {
  console.log('foo event');
}

emitter.on('foo', onFoo);
emitter.emit('foo'); // foo event
emitter.off('foo', onFoo);
emitter.emit('foo'); // ---no output---

emitter.once('bar', () => console.log('bar event'));
emitter.emit('bar'); // bar event
emitter.emit('bar'); // ---no output---
