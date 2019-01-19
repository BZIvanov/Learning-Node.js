const http = require('http');
const url = require('url');
const port = 3000;
const handlers = require('./handlers');

http.createServer((req, res) => {
    req.pathname = url.parse(req.url).pathname;

    for (let handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
}).listen(port, () => console.log(`Server listening on port ${port}`));
