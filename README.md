# Node.js

**Node.js** is asynchronous event driven javascript runtime.

## Cheat-sheets

Check [here](https://github.com/LeCoupa/awesome-cheatsheets) for cheat-sheet with methods usage.

## Specifics

- If we require one file twice or more, every next time we will be getting the result from the first require usage. This is because node.js is checking if the file was already required and it is caching it after the first time and returning from the cache every next time. You can check this, if you debug and step into the process of requiring and will be able to see the check for already cached required files. This type of implementation is based on the Singleto design pattern.

- exports vs module.exports - they are basically the same, because they point to the same object, but if we assign new value to exports instead of adding new property to the object we will break the reference to the object and exports and module.exports will become different things. So in general it is better to always just use module.exports to avoid any confusion.

## Node.js Frameworks

### Nest.js

Check out [Nest.js repository](https://github.com/BZIvanov/Learning-NestJS) for learning materials for Nest.js.

## Databases

Check out [SQL repository](https://github.com/BZIvanov/Learning-SQL) for learning materials for SQL databases.

## Content

Below is the recommended learning path to get familiar with key parts of Node.js:

1. **GettingStarted** – Learn how to run Node.js code using REPL and JavaScript files.
2. **PackageManager** – Understand npm, package.json, and scripts
3. **Debugging** – Learn how to debug Node.js applications using VS Code and other tools.
4. **NodeDependencies** – Learn about the underlying technologies like V8 and libuv that power Node.js.
5. **EventLoop** – Understand how Node.js handles asynchronous operations behind the scenes.
6. **Events** – Explore the `EventEmitter` class and how custom events work.
7. **Buffers** – Work with binary data using Node.js buffers.
8. **FileSystem** – Read from and write to files using the `fs` module.
9. **Streams** – Learn about reading and writing data in chunks using streams.
10. **Networking** – Build TCP/UDP servers and clients using the `net` and `dgram` modules.
11. **Http** – Create HTTP servers and handle web requests.
12. **UNIX** – Use Node.js to interact with Unix commands and system processes.
13. **Compression** – Compress and decompress data using built-in modules like `zlib`.
14. **MultiThreading** – Learn about worker threads and background processing.
15. **Cryptography** – Use Node's `crypto` module for hashing, encryption, and secure operations.
16. **Security** – Learn best practices for writing secure Node.js applications.
