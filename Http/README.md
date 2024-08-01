# HTTP

The `http` module is built on top of the underlying TCP connections. When you create an HTTP server using Node.js, it listens for incoming HTTP requests over a TCP connection. Internally, when you send or receive data using the `http` module, Node.js manages the TCP connections for you.

The `http` module abstracts away the complexities of handling TCP connections directly, allowing to work with higher-level HTTP methods and responses.

Underneath, Node.js uses the `net` module, which directly deals with TCP connections. The `http` module is built on top of the `net` module, which means every HTTP server or client in Node.js is essentially working over TCP.

## Request and Response

- **Request**: Initiated by the client, containing details about the desired operation (like the method, URL, headers, and body).
- **Response**: Returned by the server, indicating the result of the request with a status code, headers, and possibly a body containing data.

## MIME Types

MIME types (Multipurpose Internet Mail Extensions types) are a standardized way of specifying the nature and format of a file or data transmitted over the internet. Originally developed for email, MIME types have been widely adopted for use in other protocols, such as HTTP, to describe the content type of files being transferred.

The HTTP header used to specify the MIME type of the content being sent from a server to a client (such as a web browser) is the `Content-Type` header.

A MIME type consists of two parts: a type and a subtype, separated by a slash (/). The general format is: `type/subtype`

Common examples:

- text/html: HTML files
- image/jpeg: JPEG image files
- application/json: JSON data

### Importance of MIME Types

Correctly specifying MIME types is crucial for the proper handling of files and data. If a MIME type is incorrect or missing, the receiving application may not know how to process the content, leading to errors or security vulnerabilities. For example, serving an HTML file with a text/plain MIME type might cause a browser to display the raw code instead of rendering the web page.

Properly setting the `Content-Type` header is essential for ensuring that the content is processed correctly by the receiving party. Without the correct MIME type, the client may misinterpret the data, leading to issues such as improper rendering, incorrect file handling, or security vulnerabilities.

## HTTP Methods

HTTP methods (also known as HTTP verbs) are a set of request methods used by clients to communicate with servers over the HTTP protocol. Each method specifies a particular action that should be performed on a given resource, typically identified by a URL. These methods are fundamental to RESTful APIs and web interactions.

### Common HTTP methods

- GET
- POST
- PUT
- PATCH
- DELETE
- HEAD
- OPTIONS

## HTTP Status codes

HTTP status codes are three-digit numbers returned by the server in response to a client's request. These codes indicate the result of the request, providing insight into whether it was successful, encountered errors, or requires further action. They are categorized into five classes based on the first digit of the code.

### HTTP Status Code Categories

- 1xx (Informational)
- 2xx (Success)
- 3xx (Redirection)
- 4xx (Client Errors)
- 5xx (Server Errors)

## Terminology

- **idempotent operation** - when a request can be retransmitted or retried with no additional side effects. For example if we make a payment and for some reason we don't get response, but the payment still happened. Idempotent Methods: methods where multiple identical requests result in the same outcome (e.g., GET, PUT, DELETE).

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
