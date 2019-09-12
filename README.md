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

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.

Just use nodemon instead of node to run your code, and now your process will automatically restart when your code changes. To install from your terminal run:

```javascript
npm install -g nodemon
```
