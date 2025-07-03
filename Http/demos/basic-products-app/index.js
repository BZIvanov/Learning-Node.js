const http = require("node:http");

// in handlers folder we have many files, but by default if we have index file in the folder it will be loaded even if we dont specify its name
const controllers = require("./controllers");

const PORT = 3000;

// only the code in the createServer body is used on each request, meaning the if we need to read file only once we can read and save content in variable outside createServer so we dont read the file again and again on each request.
http
  .createServer((req, res) => {
    for (const controller of controllers) {
      // if the requested url is matched by one of the handlers we will display it and break from the loop
      if (controller(req, res)) {
        break;
      }
    }
  })
  .listen(PORT, () => console.log(`Listening on port ${PORT}...`));
