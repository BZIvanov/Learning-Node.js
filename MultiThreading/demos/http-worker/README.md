# HTTP worker demo

This application demonstrates how to use Node.js worker threads to handle multiple requests concurrently.

## How to Test the Application

To effectively test this application, it's recommended to use Postman rather than a browser, as browsers might cache responses, potentially skewing the results.

1. Start the app `node server.js`
2. Good example: open Postman and create two separate tabs
   - First tab
     - Send a `GET` request to `http://localhost:3000/non-blocking`
   - Second tab
     - While the `/non-blocking` request is still processing, send another `GET` request to `http://localhost:3000`
     - The root endpoint will be able to immediately handle the request
3. Bad example: open Postman and create two separate tabs
   - First tab
     - Send a `GET` request to `http://localhost:3000/blocking`
   - Second tab
     - While the `/blocking` request is still processing, send another `GET` request to `http://localhost:3000`
     - The root endpoint will be also blocked while the server is processing the blocking operation
