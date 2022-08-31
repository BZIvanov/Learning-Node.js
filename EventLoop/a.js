// this console log will run on the main thread
console.log('Start');

// this callback will be handled by the event loop and it will run during the Timers phase (the first phase)
setTimeout(() => console.log('Timeout'), 10);

// this console log will also run on the main thread
console.log('End');

/*
The result will be:
  Start
  End
  Timeout
*/
