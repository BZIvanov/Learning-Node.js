const {
  isMainThread,
  Worker,
  workerData,
  threadId,
} = require('node:worker_threads');

/*
  Worker threads are part of the same process, which is why we will see the process ids for both workers below
*/

// we check for main thread, because if we start new threads with this file we will end up in endless loop
if (isMainThread) {
  console.log(`Main thread, Process id: ${process.pid}`);

  // workerData is how we can provide custom data for the worker
  // for the first parameter which require a file, we will provide this file
  new Worker(__filename, { workerData: [5, 2, 9, 1] });
  new Worker(__filename, { workerData: [2, 0, 8, 3] });
} else {
  console.log(`Worker, Process ID: ${process.pid}, Thread ID: ${threadId}`);
  console.log(`${workerData} sorted is ${workerData.sort()}`);
}
