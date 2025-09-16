# TypeScript

If you're looking to use TypeScript with Node.js, check out this section for setup instructions and usage examples.

For a deeper dive into the TypeScript language itself, visit the learning [TypeScript repository](https://github.com/BZIvanov/Learning-Typescript), which covers core concepts, syntax, and advanced features.

## General steps to follow for setting up a new project

1. `npm init -y` - generates the `package.json` file
2. `npm i typescript --save-dev` - installs TypeScript as development dependency
3. `npx tsc --init` - creates a `tsconfig.json` file
4. `npm i ts-node-dev --save-dev` - installs TypeScript execution engine and REPL as development dependency

### ts-node vs ts-node-dev

`ts-node` is a command-line tool that executes your TypeScript code directly without a separate compilation step. It is great for running one-off scripts and tasks. On the other hand, `ts-node-dev` is a development tool built on top of `ts-node` that adds a file watcher and automatically restarts the process whenever you make a change, providing a live-reloading experience that's perfect for developing a server. In short, use `ts-node` **for simple execution** and `ts-node-dev` **for a faster development cycle with auto-restarts**.

## Content of this section

- **api-demo**
