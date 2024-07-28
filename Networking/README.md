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

## Ports

Port is a logical endpoint that allows communication between devices over a network. Ports are identified by port numbers, which are standardized by the Internet Assigned Numbers Authority (IANA) and fall into three main ranges:

- **Well-Known Ports (0-1023)**: Reserved for common services and widely-used protocols.
- **Registered Ports (1024-49151)**: Assigned to user processes or applications that are not as common as well-known services but still require unique port numbers.
- **Dynamic/Private Ports (49152-65535)**: Usually used for temporary or private purposes, often assigned dynamically to client applications when initiating connections.

Ports allow multiple services to run on a single device by directing incoming and outgoing data to the correct application or process.

We can run two different applications on the same port if they are using different transport protocols (for example TCP and UDP). This is because TCP and UDP are separate protocols that operate independently of each other, and the operating system maintains separate port spaces for each protocol.

### Well-known ports

Example of some well-known ports:

- 21 and 21: FTP
- 22: SSH
- 25: SMTP
- 80: HTTP
- 443: HTTPS

### Registered Ports

Example of some registered ports:

- 3306: MySQL
- 5432: PostgreSQL
- 6379: Redis

## IP addresses

IPv4 and IPv6 are both versions of Internet Protocol (IP) used to identify devices on a network and route traffic across the internet.

### Comapison between IPv4 and IPv6

#### Address length

IPv4: Uses 32-bit addresses, which allows for about 4.3 billion unique addresses (2^32). Example: 192.168.1.1

IPv6: Uses 128-bit addresses, which allows for approximately 3.4×10^38 unique addresses (2^128). Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334

#### Address notation

IPv4: Written in decimal format, divided into four 8-bit octets separated by periods (e.g., 192.168.0.1).

IPv6: Written in hexadecimal format, divided into eight 16-bit blocks separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Leading zeros can be omitted, and consecutive blocks of zeros can be compressed to "::".

### IPv4 Network

The example notation 47.12.0.0/16 is a form of CIDR (Classless Inter-Domain Routing) notation, which is used to specify IP addresses and their associated network prefixes.

- **47.12.0.0**: This is the base example IP address of the network.
- **/16**: This indicates the subnet mask, which tells us how many bits of the IP address are used for the network portion.

#### Subnet Mask

The subnet mask is a 32-bit number that divides the IP address into the network and host portions. The /16 means that the first 16 bits of the IP address are used for the network portion, and the remaining bits are used for the host portion.

##### Binary Representation

- **IP Address**: 47.12.0.0 in binary is 00101111.00001100.00000000.00000000
- **Subnet Mask**: /16 means the first 16 bits are 1s, and the remaining 16 bits are 0s. In binary, the subnet mask is 11111111.11111111.00000000.00000000.

#### Network and Host Portions

- **Network Portion**: The first 16 bits (47.12) identify the network. In binary, this is 00101111.00001100
- **Host Portion**: The last 16 bits identify the individual hosts within that network. In binary, this is 00000000.00000000 to 11111111.11111111

#### Number of Hosts

The number of available host addresses in a subnet is calculated by raising 2 to the power of the number of host bits, and then subtracting 2 (one for the network address and one for the broadcast address).

For 47.12.0.0/16:

- Number of host bits: 32 - 16 = 16 bits
- Number of hosts: $ 2^{16} - 2 = 65536 - 2 = 65534 $

So, this subnet can have up to 65,534 individual hosts.

## Domain Name System (DNS)

DNS (Domain Name System) translates human-readable domain names (like www.example.com) into IP addresses (like 192.0.2.1), which are used by computers to identify each other on the network.

### DNS Records

- **A Record**: Maps a domain to an IPv4 address.
- **AAAA Record**: Maps a domain to an IPv6 address.
- **CNAME Record**: Alias for another domain (canonical name).
- **MX Record**: Specifies mail servers for the domain.
- **TXT Record**: Holds text information, often for verification purposes.

### Caching

To speed up the process and reduce load on DNS servers, DNS responses are often cached by the resolver and your device. This means subsequent requests for the same domain can be answered more quickly without querying the DNS servers again.
