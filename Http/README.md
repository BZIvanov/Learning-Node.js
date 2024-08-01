# HTTP

The `http` module is built on top of the underlying TCP connections. When you create an HTTP server using Node.js, it listens for incoming HTTP requests over a TCP connection. Internally, when you send or receive data using the `http` module, Node.js manages the TCP connections for you.

The `http` module abstracts away the complexities of handling TCP connections directly, allowing to work with higher-level HTTP methods and responses.

Underneath, Node.js uses the `net` module, which directly deals with TCP connections. The `http` module is built on top of the `net` module, which means every HTTP server or client in Node.js is essentially working over TCP.

## Request and Response

- **Request**: Initiated by the client, containing details about the desired operation (like the method, URL, headers, and body).
- **Response**: Returned by the server, indicating the result of the request with a status code, headers, and possibly a body containing data.

## Development and testing tools

### Postman

Postman is a versatile tool that simplifies API development and testing. Its user-friendly interface, combined with powerful features like environment management, automation, testing, and collaboration, makes it an indispensable tool for working with APIs.

#### Create environment

- click the _eye icon_ top right on the screen
- on the _Environment_ section click _Add_
- give it a name and set global variables based on your needs and click _Add_
- close the info window with your new environemnt
- click the _eye icon_ and select your new environment
- you can use the global variables by surrounding them in double curly braces **{{URL}}**

#### Create collection of requests

- under the _Collection_ tab (top left on your screen) click _New Collection_
- give it a name and description and click _Create_
- in the collection we create additional folders and give them description as well. It is good for separating our requests based on what they serve
