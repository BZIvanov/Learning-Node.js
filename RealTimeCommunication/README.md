# Real Time Communication

In traditional web applications, communication between the client and server is mostly request-response based: the client sends a request, and the server responds. This model is not ideal for use cases where **instant data exchange** is needed — like chat apps, live notifications, multiplayer games, or collaborative tools.

**Real-time communication** enables data to flow **immediately** between clients and servers without the client having to constantly refresh or poll for updates.

## socket.io

**[Socket.IO](https://socket.io/)** is a popular Node.js library that enables **real-time, bi-directional, and event-based communication** between the browser and the server.

### What Protocol does Socket.IO use?

While Socket.IO is commonly associated with WebSockets, it's not limited to them. It works on top of the WebSocket protocol but also falls back to other methods (like long polling) if necessary, providing seamless cross-browser compatibility.

Socket.IO uses a **custom protocol** that is built on top of:

- **HTTP** (initially, for connection handshake)
- **WebSocket** (preferred transport when supported)
- **Fallback transports** like **long polling**, when WebSockets are not available

### Why `Socket.IO`?

- Simple API and integration
- Auto-reconnection support
- Supports rooms and namespaces
- Works with Node.js and frontend JavaScript

### Core Concepts and Methods

#### Emitting Events

| **Method**                           | **Description**                                 |
| ------------------------------------ | ----------------------------------------------- |
| `socket.emit(event, data)`           | Sends an event to the connected client only     |
| `io.emit(event, data)`               | Sends an event to all connected clients         |
| `socket.broadcast.emit(event, data)` | Sends an event to all clients except the sender |

#### Room-Specific Emissions

| **Method**                                    | **Description**                                           |
| --------------------------------------------- | --------------------------------------------------------- |
| `io.to(room).emit(event, data)`               | Sends an event to all clients in a specific room          |
| `socket.broadcast.to(room).emit(event, data)` | Sends an event to all clients in a room except the sender |

## Content of this section

- **chat-app-demo** - A minimal real-time chat app built with Express and `Socket.IO`
