const { workerData, parentPort } = require('node:worker_threads');

for (let i = 0; i < workerData.count; i++) {}

parentPort.postMessage('Slow operation completed');
