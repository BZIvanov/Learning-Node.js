# General info

Node.js developed on Chrome's V8 javascript engine that compiles the javaScript code directly into the native machine code.

Node.js is asynchronous event driven javascript runtime.

Node.js is single threaded.

## Event loop

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

## API functions

In nodejs there are two types of API functions:

- synchronous, blocking functions
- asynchronous, non-blocking functions

## I/O

The I/O operations are handled in the second phase of the Event loop, after the Timers which is the first phase.

I/O operations examples:

- reading/ writing files using fs module
- network operations

## Control flow

The control flow function does the following things:

- control the order of execution
- collect data
- limit concurrency
- calls the next step in the program

## libuv

libuv is a package used for handling asynchronous I/O operations

## spawn() and fork()

- spawn - used to launch new process. Does not create new V8 instance

```bash
child_process.spawn(command[, args][, options])
```

- fork - special instance of spawn() that executes a new instance of the V8 engine

```bash

child_process.fork(modulePath[, args][, options])
```

## Streams

There are 4 type of streams

- Readable - for reading chunks of data from the source
- Writable - for writing chunks of data to the destination
- Duplex - it is both readable and writeable. Recommended to use _pipe_ in case reading is faster/slower than writing
- Transform - modifying data in output stream based on the input stream. Example is zipping

## Buffer

Buffer class is used because pure javascript is not compatible with binary data. Buffer is used for storing raw data as an array of integers.

## Production and Development dependencies

For our project we usually use many 3rd party packages, but some of them are for production version and some for development.
To separate them, when installing we can specify which are for development only the following way:

```javascript
npm install nodemon --save-dev
```

-dev in the end will place it in dev dependencies in the package.json file.

## REPL

Repl stands for Read, Eval, Print, Loop. To start the repl in the terminal just type node like below. We can provide unlimited commands and they will be executed.

```bash
node
```

## Global Objects

We have some global object which we can use directly, without declaring or importing them.

Some examples are:

- global
- process - for example process.argv
- module - for example module.exports
- console - for example console.log()

You can find some more in the official documentation.

## Semver - semantic versioning

Our dependencies have versions, for example 2.3.4. The first number represents the Major version, the second number the Minor version and the third is for the Patch version.

Increase of the major version usually includes breaking changes. Increase of the minor version is usually for new features. Increase of the patch version is for bug fixes.

---

## Additional

Check [here](https://github.com/LeCoupa/awesome-cheatsheets) for cheat-sheet with methods usage.

## Specifics

- If we require one file twice or more, every next time we will be getting the result from the first require usage. This is because node.js is checking if the file was already required and it is caching it after the first time and returning from the cache every next time. You can check this, if you debug and step into the process of requiring and will be able to see the check for already cached required files. This type of implementation is based on the Singleto design pattern.

- exports vs module.exports - they are basically the same, because they point to the same object, but if we assign new value to exports instead of adding new property to the object we will break the reference to the object and exports and module.exports will become different things. So in general it is better to always just use module.exports to avoid any confusion.
