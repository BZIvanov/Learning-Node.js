# Getting started

## Prerequisites

Make sure Node.js is installed on your system. You can check by running:

```bash
node -v
```

## Using the Node.js REPL

REPL stands for:

- Read – reads user input
- Eval – evaluates the input
- Print – prints the result
- Loop – loops back to read more input

To start the REPL, simply run:

```bash
node
```

We can provide unlimited commands and they will be executed.

## Running a JavaScript file

Let's create a simple file and run it using Node.js.

**Step 1: Create a file**

Create a file named `app.js` with this content:

```js
console.log("Hello from app.js");
```

**Step 2: Run the file**

Open your terminal and run:

```bash
node app.js
```

## Global Objects

Node.js provides several global objects that you can use anywhere in your code without importing them:

- **`global`** – Similar to `window` in the browser. Defines global scope.
- **`process`** – Gives access to the current Node.js process (e.g., `process.argv`, `process.env`).
- **`module`** – Metadata about the current module (e.g., `module.exports` to export functionality).
- **`__dirname`** and **`__filename`** – Represent the path of the current directory and file.
- **`console`** – Used for logging, like `console.log()` or `console.error()`.

These globals are always available, but it's good practice to know when and why you're using them.

You can read more in the [official Node.js docs](https://nodejs.org/api/globals.html).

## Code quality

To use ESLint and Prettier install all the dependencies and create config files for both es-lint and prettier.
