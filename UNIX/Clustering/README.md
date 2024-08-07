# Clustering

Without clustering Node.js will run only on one CPU core.

With the `cluster` module, we can spawn more processes depending on how many available CPU cores we have on our machine.

## CPUs info

To get info about CPUs on our machine, we can use the `os` module.

```javascript
const os = require('node:os');

// get info list with the CPUs
console.log(os.cpus());

// get count of CPUs
console.log(os.availableParallelism());
```

## PM2

PM2 is popular NPM package to handle clustering.
