const http = require('http');
const port = 5000;
// in handlers folder we have many files, but by default if we have index file in the folder it will be loaded even if we dont specify its name
const handlers = require('./handlers');

http.createServer((req, res) => {
    for(let handler of handlers) {
        // if the requested url is matched by one of the handlers we will display it and break from the loop
        if(!handler(req, res)) {
            break;
        }
    }
}).listen(port, () => console.log(`Listening on port ${port}...`));