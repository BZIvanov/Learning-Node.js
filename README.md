# Node.js

## General info

Node.js is asynchronous event driven javascript runtime.

Node.js is single threaded.

## Dependencies

Some of the Node.js dependencies are listed below with short explanation.

#### V8

Node.js developed on Chrome's V8 javascript engine that compiles the javaScript code directly into the native machine code. V8 takes your JavaScript code and converts it into instructions your computer can understand directly, making Node.js applications run efficiently. This is similar to how Chrome uses V8 to execute JavaScript on web pages.

#### libuv

libuv is a package used for handling asynchronous I/O operations. It is written in C programming language.

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

## Debugging with VS code

To debug a code and analyze what is happening do the next steps:

1. Place debug red dot anywhere in the javascript file
2. Click the debug icon in Visual Studio code (left-hand side icons menu)
3. Click the _JavaScript Debug Terminal_ button
4. In the debug terminal run the file with node, for example _node index.js_
5. You can now debug the code and inspect the process of what is happening.

## Content

Below is the recommended learning order to get familiar with the different parts of Node.js

1. EventLoop - get some understanding of how the event loop is working
2. Events - contains info about the EventEmmiter and the events package
3. Buffers - contains info about buffers to deal with binary and hexadecimal data
4. FileSystem - contains info about dealing with files
5. Streams - contains info about streams
6. Networking - contains info about networking
7. Http
8. UNIX
9. Compression
