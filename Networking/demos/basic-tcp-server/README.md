# Basic TCP server

## Running the Application

Start the server by running in the terminal:

```
node server.js
```

Run the client in a new terminal window:

```
node client.js
```

Expected output in the server terminal:

```
Server running on { address: '127.0.0.1', family: 'IPv4', port: 3000 }
st
Test message from the client
```

## socket

The `socket` is a Duplex stream so it is the same thing for both client and server.
