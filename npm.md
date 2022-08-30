## NPM

Open terminal in the root folder with package.json file and run one of the following commands.

- **npm list** - will list the tree of the dependencies for our project and also the dependencies of our dependencies. This tree view list might get really large.

- **npm list --depth=1** - this command will also display the tree of dependencies, but only for the first 2 levels (0 and 1). Increasing the number will also increase the depth of the tree we will see.

- **npm view mongoose dependencies** - will display the dependencies for specific package

- **npm view mongoose versions** - will display all the release versions of specific package
