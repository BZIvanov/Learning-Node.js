// logs second on 1st tick, 1st phase
setTimeout(() => console.log('Timeout 1'), 0);

// logs third on 1st tick, 4th phase
setImmediate(() => console.log('Immediate 1'));

// logs fourth, console.log is from the main thread/call stack
setTimeout(() => {
  // logs ninth on 3rd tick 1st phase
  setTimeout(() => console.log('Timeout 3'), 0);

  // logs eight on 2nd tick 4th phase
  setImmediate(() => console.log('Immediate 2'));

  // logs fifth, microtask are immediately executed
  process.nextTick(() => console.log('Tick 2'));

  process.nextTick(() => {
    // logs seventh, microtask are immediately executed even when nested
    process.nextTick(() => console.log('Tick 4'));

    // logs sixth, microtask are immediately executed
    console.log('Tick 3');
  });

  console.log('Timeout 2');
}, 10);

// logs first, because this is a microtask and runs on each phase
process.nextTick(() => console.log('Tick 1'));

/*
The result will be:
  Tick 1
  Timeout 1  
  Immediate 1
  Timeout 2  
  Tick 2     
  Tick 3     
  Tick 4     
  Immediate 2
  Timeout 3
*/
