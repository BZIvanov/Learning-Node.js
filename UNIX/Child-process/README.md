# Child process

## spawn()

`spawn()` is used to launch new process. Does not create new V8 instance

```
child_process.spawn(command[, args][, options])
```

#### examples

```javascript
const { spawn } = require('node:child_process');

// will run the ls command with argument -l
const subprocess = spawn('ls', ['-l']);

subprocess.stdout.on('data', (data) => {
  console.log(data.toString('utf-8'));
});
```

```javascript
const { exec } = require('node:child_process');

exec('ls -l', (error, stdout, stderr) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(stdout);

  console.error(stderr);
});
```

## fork()

`fork()` is special instance of `spawn()` that executes a new instance of the V8 engine

```
child_process.fork(modulePath[, args][, options])
```
