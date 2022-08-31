console.log('Start');

// logs second on 2nd tick 1st phase (didn't log on 1st tick, because 10 ms delay)
setTimeout(() => console.log('Timeout 1'), 10);

// logs first on 1st tick, 4th phase
setImmediate(() => console.log('Immediate 1'));

// logs third on 2nd tick 1st phase (didn't log second, because the previous has same ms delay)
setTimeout(() => {
  // logs fifth on 3rd tick 1st phase
  setTimeout(() => console.log('Timeout 3'), 0);

  // logs fourth on 2nd tick 4th phase
  setImmediate(() => console.log('Immediate 2'));

  console.log('Timeout 2');
}, 10);

console.log('End');

/*
The result will be:
  Start
  End
  Immediate 1
  Timeout 1
  Timeout 2
  Immediate 2
  Timeout 3
*/
