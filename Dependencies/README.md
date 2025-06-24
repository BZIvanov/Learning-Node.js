# Node.js Dependencies

Node.js relies on several powerful underlying technologies to provide its functionality. Below are some of the most important dependencies:

---

### V8

Node.js developed on Chrome's V8 javascript engine that compiles the javaScript code directly into the native machine code. V8 takes your JavaScript code and converts it into instructions your computer can understand directly, making Node.js applications run efficiently. This is similar to how Chrome uses V8 to execute JavaScript on web pages.

---

### libuv

`libuv` is a C-based library that provides Node.js with its asynchronous, non-blocking I/O capabilities. It handles:

- File system operations
- Networking
- Timers
- Thread pool
- Event loop

Thanks to `libuv`, Node.js can perform many operations concurrently, even though the main JavaScript thread is single-threaded.
