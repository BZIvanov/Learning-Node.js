# Package Manager

In Node.js, the **package manager** is a vital tool for managing third-party libraries, tools, and even your own project metadata.

The default package manager for Node.js is **NPM** (Node Package Manager), which is automatically installed when you install Node.js.

> Note: `npm` is the default, but there are alternative package managers like `yarn` and `pnpm`.

## Initializing a project with npm

Start a new Node.js project by creating a `package.json` file. Run:

```bash
npm init
```

This will guide you through setting up basic project metadata.

For a quicker setup, use:

```bash
npm init -y
```

This creates a `package.json` file with default values.

## Understanding package.json

The `package.json` file describes your project. It includes:

- Name and version
- Scripts
- Dependencies and devDependencies
- and more...

## Installing Dependencies

Install packages with:

```bash
npm install <package-name>
```

This adds the package to your project and updates `package.json` and `package-lock.json`.

## Understanding Semver (Semantic Versioning)

When installing packages, you’ll often see version numbers like `2.3.4` in your `package.json` file. This follows the **Semver** (Semantic Versioning) convention:

- **MAJOR** – breaking changes or incompatible API updates
- **MINOR** – new features added without breaking existing functionality
- **PATCH** – bug fixes and small internal improvements

For example:

- `1.4.2` → `1.5.0` adds a new feature
- `1.4.2` → `1.4.3` fixes a bug
- `1.4.2` → `2.0.0` introduces breaking changes

> Prefixes like `^` and `~` in `package.json` allow version flexibility (e.g., `^1.4.2` allows updates up to but not including `2.0.0`).

## Adding and using scripts

Inside `package.json`, the `scripts` field lets you define command shortcuts.

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

Run a script with:

```bash
npm run dev
```

## Dev Dependencies vs Regular Dependencies

For our project we usually use many 3rd party packages, but some of them are for production version and some for development.
To separate them, when installing we can specify which are for development only the following way:

```javascript
npm install --save-dev nodemon
```

- `dependencies` - Needed at runtime
- `devDependencies` - Needed during development

## Global vs Local installs

- **Local** (default): Installed in your project's `node_modules` folder
- **Global**: Installed system-wide and used from anywhere

```bash
npm install -g nodemon
```

## node_modules and .gitignore

Installed packages are saved in the `node_modules` folder.

You should **not** commit this folder to version control.

Instead, add it to your `.gitignore` file:

```bash
node_modules/
```

## Exploring Packages and Dependencies

`npm` provides many commands to help you inspect your project dependencies and understand installed packages.

Here are some useful examples you can run from the terminal in the project root (where your `package.json` file is):

- `npm list` - Lists the full dependency tree of your project, including nested dependencies. Can be very large.
- `npm list --depth=1` - Shows only top-level dependencies (direct dependencies). You can adjust the depth value as needed.
- `npm view <package> dependencies` - Displays the dependencies required by a specific package (e.g., `mongoose`).
- `npm view <package> versions` - Lists all published versions of a specific package.

> Tip: `npm help` or the [npm CLI docs](https://docs.npmjs.com/cli/v11) provide more commands for viewing metadata, managing cache, auditing vulnerabilities, and more.

## Content of this section

- **pre-post-commands**
- **node-notes-app**
