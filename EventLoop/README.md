# Event loop

The Event Loop is a fundamental concept in Node.js that allows non-blocking I/O operations by offloading operations to the system kernel whenever possible.

#### Phases

Every iteration of the event loop is also called **tick**.

Each phase has a callback queue with callbacks to be executed.

1. **timers** - _setTimeout_ and _setInterval_ run in this phase
2. **I/O operations** - used for fs operations, networking etc...
3. **idle** - this is internal work phase for node.js so we don't really deal with it
4. **poll** - calculates the blocking time in every iteration to handle I/O callbacks. Newly incoming requests are hanled here (for example express API requests).
5. **check** - _setImmediate_ runs in this phase. Handles the callbacks scheduled by setImmediate
6. **close** - close events callbacks are hanled during this phase

#### Microtask queue

Promises and _nextTick_ are considered microtasks and they run during each phase of the event loop.

Microtasks are executed after the main thread and each phase of the event loop. Microtasks created by process.nextTick are executed before those created by promises.

### Execution Order

1. Current operation completes.
2. Execute all `process.nextTick` callbacks.
3. Execute all other microtasks (e.g., Promises).
4. Continue with the next phase of the Event Loop.

## Official docs

Read [here](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick) for more details about the Event loop.

Read [here](https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop) for more info related to the example in file `f.js` in this folder.

## API functions

In nodejs there are two types of API functions:

- synchronous, blocking functions
- asynchronous, non-blocking functions

Node.js provides two main types of API functions:

- **Synchronous (blocking)** – These functions block the execution of further code until they complete. They are simpler but can freeze the entire process if they take time (e.g., reading a large file).

```js
const data = fs.readFileSync("file.txt", "utf-8"); // Blocks everything until file is read
console.log(data);
```

- **Asynchronous (non-blocking)** – These functions start an operation and return immediately, allowing other code to run while waiting for the operation to finish. A callback, promise, or event is used to handle the result.

```js
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data); // Executed later
});
console.log("File read started"); // Runs immediately
```

Understanding the difference is essential for writing efficient, non-blocking Node.js applications — and it ties directly into how the event loop works.

## Control flow

The control flow function does the following things:

- control the order of execution
- collect data
- limit concurrency
- calls the next step in the program
