# Basic clustering demo

This application demonstrates how to use Node.js clustering to handle multiple requests concurrently, leveraging multiple CPU cores.

## How to Test the Application

To effectively test this application, it's recommended to use Postman rather than a browser, as browsers might cache responses, potentially skewing the results.

1. Start the app `node server.js`
2. Open Postman and create two separate tabs
   - First tab
     - Send a `GET` request to `http://localhost:3000/slow`
     - This endpoint simulates a CPU-intensive operation, which will keep one of the CPU cores busy for a significant amount of time
   - Second tab
     - While the `/slow` request is still processing, send another `GET` request to `http://localhost:3000`
     - Despite one process being occupied with the /slow request, the root endpoint should still be accessible, demonstrating that other worker processes can handle additional requests
