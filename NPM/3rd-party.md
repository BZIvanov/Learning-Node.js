## Third party libraries

### Nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

Just use _nodemon_ instead of _node_ in your scripts in the package.json file to run your code, and now your process will automatically restart when your code changes. To install from your terminal run:

```javascript
npm install nodemon --save-dev
```

## ESLint and Prettier

In order for them to work make sure you have enabled _Format On Save_ option in VS Code. You can find that option _File>Preferences>Settings_.

To see the warnings from ESLint you need to have open VS Code on the root level with the configurations files for prettier and eslint.
