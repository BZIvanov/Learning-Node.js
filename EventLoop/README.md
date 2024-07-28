# Event loop

The Event Loop is a fundamental concept in Node.js that allows non-blocking I/O operations by offloading operations to the system kernel whenever possible.

#### Phases

Every iteration of the event loop is also called **tick**.

Each phase has a callback queue with callbacks to be executed.

- timers - _setTimeout_ and _setInterval_ run in this phase
- I/O operations - used for fs operations, networking etc...
- idle - this is internal work phase for node.js so we don't really deal with it
- poll - calculates the blocking time in every iteration to handle I/O callbacks. Newly incoming requests are hanled here (for example express API requests).
- check - _setImmediate_ runs in this phase. Handles the callbacks scheduled by setImmediate
- close - close events callbacks are hanled during this phase

#### Microtask queue

Promises and _nextTick_ are considered microtasks and they run during each phase of the event loop.

Microtasks are executed after the main thread and each phase of the event loop. Microtasks created by process.nextTick are executed before those created by promises.

### Execution Order

1. Current operation completes.
2. Execute all `process.nextTick` callbacks.
3. Execute all other microtasks (e.g., Promises).
4. Continue with the next phase of the Event Loop.

## Official docs

Read [here](https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop) for more info related to the example in file `f.js` in this folder.
