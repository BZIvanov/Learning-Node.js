// logs third on 2nd tick, 1st phase
setTimeout(() => console.log('Timeout 1'), 10);

// logs fourth on 2nd tick, 1st phase
setTimeout(() => {
  // logs sevent
  Promise.resolve().then(() => console.log('Promise 2'));

  // logs fifth, because it is microtask with precedence over promises
  process.nextTick(() => console.log('Tick 2'));

  // logs eigth
  Promise.resolve().then(() => console.log('Promise 3'));

  // logs sixth, because it is microtask with precedence over promises
  process.nextTick(() => console.log('Tick 3'));

  console.log('Timeout 2');
}, 10);

// logs second, because it is a microtask, but is lower priority than nextTick
Promise.resolve().then(() => console.log('Promise 1'));

// logs first, because it is a microtask and runs on each phase and has precedence over promises
process.nextTick(() => console.log('Tick 1'));

/*
The result will be:
  Tick 1
  Promise 1
  Timeout 1
  Timeout 2
  Tick 2
  Tick 3
  Promise 2
  Promise 3
*/
