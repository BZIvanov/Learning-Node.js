// Load module http and save it in variable called http
const http = require('http');

/*
STRUCTURE:

createServer {
    req {
        headers
    }
    res {
        end
    }
} listen
*/



// *** createServer ***
// *** listen ***
// *** end ***
/*
createSevrer method will return specific callback which will not be called and finished but will wait and proceed with given requests.
The first parameter in the callback will be the request and the second will be the response.
*/
/*
listen method will set on which port our server will be hosted. Note that listen method is used on the createServer method, not in the callback.
*/
/*
end method will tell the server response has ended and result will be displayed
*/
const server = http.createServer((req, res) => {
    res.end('Hi!');
}).listen(8000);


// *** headers ***
/*
headers method contains the headers of the request
*/
const server1 = http.createServer((req, res) => {
    console.log(req.headers);
    res.end('Hi!');
}).listen(7000);