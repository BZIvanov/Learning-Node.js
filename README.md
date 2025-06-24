# Node.js

**Node.js** is asynchronous event driven javascript runtime.

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

## Production and Development dependencies

For our project we usually use many 3rd party packages, but some of them are for production version and some for development.
To separate them, when installing we can specify which are for development only the following way:

```javascript
npm install nodemon --save-dev
```

-dev in the end will place it in dev dependencies in the package.json file.

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

## Debugging with VS code

To debug a code and analyze what is happening do the next steps:

1. Place debug red dot anywhere in the javascript file
2. Click the debug icon in Visual Studio code (left-hand side icons menu)
3. Click the _JavaScript Debug Terminal_ button
4. In the debug terminal run the file with node, for example _node index.js_
5. You can now debug the code and inspect the process of what is happening.

## Node.js Frameworks

### Nest.js

Check out [Nest.js repository](https://github.com/BZIvanov/Learning-NestJS) for learning materials for Nest.js.

## Content

Below is the recommended learning path to get familiar with key parts of Node.js:

1. **GettingStarted** – Learn how to run Node.js code using REPL and JavaScript files.
2. **Dependencies** – Learn about the underlying technologies like V8 and libuv that power Node.js.
3. **EventLoop** – Understand how Node.js handles asynchronous operations behind the scenes.
4. **Events** – Explore the `EventEmitter` class and how custom events work.
5. **Buffers** – Work with binary data using Node.js buffers.
6. **FileSystem** – Read from and write to files using the `fs` module.
7. **Streams** – Learn about reading and writing data in chunks using streams.
8. **Networking** – Build TCP/UDP servers and clients using the `net` and `dgram` modules.
9. **Http** – Create HTTP servers and handle web requests.
10. **UNIX** – Use Node.js to interact with Unix commands and system processes.
11. **Compression** – Compress and decompress data using built-in modules like `zlib`.
12. **MultiThreading** – Learn about worker threads and background processing.
13. **Cryptography** – Use Node’s `crypto` module for hashing, encryption, and secure operations.
