# General info

## Production and Development dependencies

For our project we usually use many 3rd party packages, but some of them are for production version and some for development.
To separate them, when installing we can specify which are for development only the following way:

```javascript
npm install nodemon --save-dev
```

-dev in the end will place it in dev dependencies in the package.json file.

---

## Nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

Just use _nodemon_ instead of _node_ in your scripts in the package.json file to run your code, and now your process will automatically restart when your code changes. To install from your terminal run:

```javascript
npm install nodemon --save-dev
```

## ESLint and Prettier

In order for them to work make sure you have enabled _Format On Save_ option in VS Code. You can find that option _File>Preferences>Settings_.

To see the warnings from ESLint you need to have open VS Code on the root level with the configurations files for prettier and eslint.

## Packages and dependencies

Open terminal in the root folder with package.json file and run one of the following commands.

- **npm list** - will list the tree of the dependencies for our project and also the dependencies of our dependencies. This tree view list might get really large.

- **npm list --depth=1** - this command will also display the tree of dependencies, but only for the first 2 levels (0 and 1). Increasing the number will also increase the depth of the tree we will see.

- **npm view mongoose dependencies** - will display the dependencies for specific package

- **npm view mongoose versions** - will display all the release versions of specific package

## Additional

Check [here](https://github.com/LeCoupa/awesome-cheatsheets) for cheat-sheet with methods usage.

## Specifics

- If we require one file twice or more, every next time we will be getting the result from the first require usage. This is because node.js is checking if the file was already required and it is caching it after the first time and returning from the cache every next time. You can check this, if you debug and step into the process of requiring and will be able to see the check for already cached required files.

- exports vs module.exports - they are basically the same, because they point to the same object, but if we assign new value to exports instead of adding new property to the object we will break the reference to the object and exports and module.exports will become different things. So in general it is better to always just use module.exports to avoid any confusion.
