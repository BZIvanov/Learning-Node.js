console.log('Start');

// this will be logged last, because 10 miliseonds will make it run on the second tick
setTimeout(() => console.log('Timeout 1'), 10);

// this will be logged before Immediate, because in runs in the first phase (timers phase) and has 0 milliseconds wait time
setTimeout(() => console.log('Timeout 2'), 0);

// this will be logged after Timeout2, because it runs in the forth phase (check phase)
setImmediate(() => console.log('Immediate'));

console.log('End');

/*
The result will be:
  Start
  End
  Timeout 2
  Immediate
  Timeout 1
*/
