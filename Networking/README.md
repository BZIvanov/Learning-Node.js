# Networking

## Networking layers

Network layers refer to the levels of abstraction in a network model, each responsible for specific functions in data communication.

The most commonly referenced model is the OSI (Open Systems Interconnection) model, which has seven layers. Another widely used model is the TCP/IP model, which has four layers. Here are the details of both:

### OSI Model (7 Layers)

1. Physical layer (Layer 1)
   - Deals with the physical connection between devices.
   - Responsible for the transmission and reception of raw bit streams over a physical medium.
   - Examples: Cables, switches, hubs.
2. Data link layer (Layer 2)
   - Provides node-to-node data transfer.
   - Handles error detection and correction from the physical layer.
   - Responsible for MAC (Media Access Control) addresses.
   - Examples: Ethernet, switches.
3. Network layer (Layer 3)
   - Manages the delivery of packets from the source to the destination across multiple networks.
   - Responsible for logical addressing and routing.
   - Examples: IP (Internet Protocol), routers.
4. Transport layer (Layer 4)
   - Ensures reliable data transfer between end systems.
   - Handles flow control, error correction, and data segmentation.
   - Examples: TCP (Transmission Control Protocol), UDP (User Datagram Protocol).
5. Session layer (Layer 5)
   - Manages sessions or connections between applications.
   - Responsible for establishing, maintaining, and terminating connections.
   - Examples: NetBIOS, PPTP (Point-to-Point Tunneling Protocol).
6. Presentation layer (Layer 6)
   - Translates data between the application layer and the network format.
   - Handles data encryption, compression, and translation.
   - Examples: SSL/TLS (Secure Sockets Layer/Transport Layer Security), JPEG, ASCII.
7. Application layer (Layer 7)
   - Provides network services directly to end-user applications.
   - Facilitates communication between software applications and lower network services.
   - Examples: HTTP (HyperText Transfer Protocol), FTP (File Transfer Protocol), SMTP (Simple Mail Transfer Protocol).

### TCP/IP Model (4 Layers)

1. Link layer (Network Interface Layer)
   - Combines OSI's Physical and Data Link layers.
   - Responsible for the hardware addressing and the management of the physical connection.
   - Examples: Ethernet, Wi-Fi.
2. Internet layer
   - Corresponds to the OSI Network layer.
   - Handles logical addressing and routing of packets.
   - Examples: IP (Internet Protocol).
3. Transport layer
   - Similar to the OSI Transport layer.
   - Provides end-to-end communication services for applications.
   - Examples: TCP, UDP.
4. Application layer
   - Combines the functionalities of the OSI Application, Presentation, and Session layers.
   - Provides network services to the applications.
   - Examples: HTTP, FTP, SMTP, DNS (Domain Name System).

Each layer in these models serves a distinct function and interacts with the layers directly above and below it to ensure efficient data communication. The OSI model is more of a theoretical framework, while the TCP/IP model is more practical and widely implemented in actual network protocols.

As Node.js developers, we are working on the Application layer.

### TCP vs UDP

TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are two core protocols of the Internet Protocol (IP) suite. They operate at the Transport Layer and serve distinct purposes in data transmission. Here are the key differences between TCP and UDP:

#### TCP (Transmission Control Protocol)

1. Connection-Oriented
   - Establishes a connection before data transfer begins.
   - Ensures that the connection is maintained until all data has been successfully exchanged.
2. Reliability
   - Provides reliable data transfer through error detection and correction mechanisms.
   - Ensures that data packets are delivered in the same order in which they were sent.
   - Implements retransmission of lost packets.
3. Flow Control and Congestion Control
   - Uses flow control to prevent overwhelming the receiver by sending too much data too quickly.
   - Implements congestion control to manage network congestion and avoid packet loss.
4. Overhead
   - Higher overhead due to additional error-checking and connection management features.
   - Header size is typically 20 bytes.
5. Use Cases
   - Ideal for applications where data integrity and order are crucial.
   - Examples: Web browsing (HTTP/HTTPS), email (SMTP), file transfers (FTP), remote terminal access (SSH, Telnet).

#### UDP (User Datagram Protocol)

1. Connectionless
   - Does not establish a connection before sending data.
   - Sends data without ensuring the recipient is ready or the data is received correctly.
2. Reliability
   - Provides no guarantees of data delivery, order, or error correction.
   - Data packets may be lost, duplicated, or received out of order.
3. Flow Control and Congestion Control
   - No built-in flow control or congestion control mechanisms.
   - Relies on the application to handle these aspects, if necessary.
4. Overhead
   - Lower overhead due to the lack of connection management and error-checking features.
   - Header size is typically 8 bytes.
5. Use Cases
   - Suitable for applications where speed is critical and occasional data loss is acceptable.
   - Examples: Video streaming, online gaming, VoIP (Voice over IP), DNS (Domain Name System) queries.

#### Comparison Summary

| Feature                   | TCP                                                | UDP                                       |
| ------------------------- | -------------------------------------------------- | ----------------------------------------- |
| Type                      | Connection-oriented                                | Connectionless                            |
| Reliability               | Reliable, with error correction and retransmission | Unreliable, no guarantees of delivery     |
| Order                     | Ensures ordered delivery                           | No order guarantee                        |
| Overhead                  | Higher, with more extensive headers                | Lower, with minimal headers               |
| Flow & Congestion Control | Built-in mechanisms                                | None                                      |
| Use Cases                 | Web browsing, email, file transfers, remote access | Video streaming, online gaming, VoIP, DNS |

In summary, TCP is used when reliability and order are critical, while UDP is preferred for applications where speed is essential and some data loss can be tolerated.
