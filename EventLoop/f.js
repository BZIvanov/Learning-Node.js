setTimeout(() => {
  console.log('Timeout');
}, 50);

for (let i = 0; i < 9000000000; i++) {}

/*
The result will be:
  Timeout

But it will take more than 50 miliseconds, because the loop needs to finish its execution
*/
