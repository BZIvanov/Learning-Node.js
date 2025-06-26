# Modules

Node.js uses a module system to organize code into reusable, maintainable units. This allows you to split functionality across multiple files and load only what you need.

A **module** is a single JavaScript file. A **package** is a directory with a `package.json`, often containing many modules and related resources.

---

## CommonJS Module System

Node.js uses the **CommonJS** module system by default. This includes:

### `require()`

Used to import code from another file or module.

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// app.js
const add = require("./math");
console.log(add(2, 3)); // 5
```

**Note:** Use `./` to reference local files, otherwise Node will look for a built-in or external module.

### `module.exports` vs `exports`

- In Node.js, both `exports` and `module.exports` initially point to the **same object**.
- If you add properties to `exports`, like `exports.foo = ...`, it works fine — you're adding to the shared object.
- But if you **reassign** `exports` to a new value (like `exports = { ... }`), it breaks the link — now `exports !== module.exports`, and Node will ignore what you assigned to `exports`.

**Best practice**: Always use `module.exports` when exporting a full object or function. This avoids confusion and ensures predictable behavior.

```js
// This works ✅
module.exports = function greet() {
  console.log("Hi");
};

// This works ✅
exports.greet = function () {
  console.log("Hi");
};

// This does NOT work as expected ❌
exports = function greet() {
  console.log("Hi");
};
```

Avoid doing both in the same file:

```js
// This breaks the link between exports and module.exports
exports.foo = () => {};
module.exports = {}; // overrides the previous line
```

## Built-in Modules

Node.js comes with several core modules that you can require without installing anything:

- `fs` – file system
- `http` – HTTP server
- `path` – file path utilities
- `os` – system-level info

```js
const fs = require("fs");
```

## Module Resolution

When you call `require()`, Node.js resolves modules in the following order:

1. **Built-in modules** (like `fs`, `path`)
2. **Node modules** (from `node_modules`)
3. **Relative or absolute file paths** (e.g., `./utils.js`)

## ES Modules (Optional / Modern)

Node.js also supports **ECMAScript Modules (ESM)** using `import`/`export` syntax — but you must:

Use `.mjs` extension or add `"type": "module"` to `package.json`

```js
// utils.mjs
export function greet() {
  console.log("Hello");
}

// main.mjs
import { greet } from "./utils.mjs";
greet();
```

## Module caching (Singleton Behavior)

When you `require()` a file in Node.js:

- Node **loads and executes** that module **only once**.
- On subsequent `require()` calls, Node returns the **cached result** instead of re-running the file.
- This behavior follows the **Singleton pattern** — the module is instantiated just once and reused.

```js
// logger.js
console.log("Logger module loaded");
module.exports = () => console.log("Logging");

// app.js
require("./logger")(); // Logs: "Logger module loaded" + "Logging"
require("./logger")(); // Logs: "Logging" (no reload)
```

This improves performance, avoids redundant execution, and allows you to share state across multiple files.

Hint: You can step through `require()` in a debugger to see how Node checks its internal module cache.
