# Buffers

Buffer class is used because pure javascript is not compatible with binary data. Buffer is used for storing raw data as an array of integers.

Buffers in Node.js are a way of handling binary data directly in memory. They are particularly useful for dealing with data that comes from file systems, network streams, or other sources where you need to process raw binary data.

## Key characteristics for Buffers

- Fixed Size: Buffers have a fixed size, determined when they are created. This means that you need to know in advance how much memory you need to allocate
- Non-Resizable: Once a buffer is created, its size cannot be changed. If you need more space, you must create a new buffer and copy the data over
- Efficient: Buffers are optimized for performance and are more efficient than working with binary data as strings or arrays of numbers
- Minimum value for a buffer element is 0 and maximum is 255, because 0 as binary number is 0000 0000 and 255 is 1111 1111 or 0xFF as hexadecimal

## Number types

### Binary numbers

Binary numbers are a way of representing numerical values using only two digits: 0 and 1. This is in contrast to the decimal system, which uses ten digits (0 through 9).

#### Key Concepts of Binary Numbers

1. **Base-2 System**: The binary number system is also known as the base-2 numeral system. Each digit in a binary number is referred to as a bit, which is short for "binary digit".
2. **Positional Notation**: Like the decimal system, the binary system uses positional notation. Each position in a binary number represents a power of 2. For example, the binary number $ 1011 $ can be understood as:

$$ 1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 1 \times 2^0 $$

Simplified, this calculation gives:

$$ 8 + 0 + 2 + 1 = 11 $$

Hence binary $ 1011 $ is equal to 11 in decimal notation.

3. **Bit and Byte**: A single binary digit is called a bit. A group of 8 bits is called a byte, which is a common unit for data storage and processing in computers.

#### Least Significant Bit (LSB) and Most Significant Bit (MSB)

The least significant bit is the bit with the lowest value position in a binary number. It is the rightmost bit.

The most significant bit is the bit with the highest value position in a binary number. It is the leftmost bit.

### Hexadecimal numbers

While computers work with binary (0s and 1s) internally, hexadecimal (base-16) provides a more compact way to represent binary data. For programmers, hexadecimal is easier to read and work with than long strings of binary digits. This is because each hexadecimal digit represents 4 bits, reducing the number of characters needed.

Hexadecimal numbers typically use the prefix "0x" followed by digits 0-9 and letters A-F (representing 10-15 in decimal). This is because we can't make difference if for example the number 234 is decimal or hexadecimal, so our number will look like this 0x234, where 0x is just an indicator, not part of the number.

#### Positional Notation

For the hexadecimal number 0x234:

$$ 2 \times 16^2 + 3 \times 16^1 + 4 \times 16^0 $$

$$ 512 + 48 + 4 $$

$$ 564 $$

And here is another example for the number fb2c:

$$ 15 \times 16^3 + 11 \times 16^2 + 2 \times 16^1 + 12 \times 16^0 $$

$$ 61440 + 2816 + 32 + 12 $$

$$ 64300 $$

### Comparison between number types

Hexadecimal $ 0xFFFFFF $ equals decimal $ 1677215 $ equals binary $ 1111 1111 $. We can see that hex number takes 6 characters, decimal 8 characters and binary 24 characters.

### Binary To Heximal

Below we can see how simpler and easier is to represent binary number as hexadecimal.

The binary number:

$$ \text{0101 0011 1001 1101 0101 1111 0000 0001} $$

will look like this as hexadecimal:

$$ \text{539D 5F01} $$

## Character sets

A character set is like a big map for computers, telling them how to represent different symbols, letters, and punctuation marks with unique codes. These codes are just binary numbers (0s and 1s) that computers understand.

There are different character sets, but Unicode is the most widely used one today. Unicode aims to be universal, accommodating characters from pretty much every written language in the world. This allows computers to display text from different languages correctly, avoiding weird symbols or garbled text.

#### Example

For the letter _s_ the Unicode character number is 115 which is 0111 0011 in binary, so a computer for the letter _s_ will store the binary number 0111 0011

## Official docs

Read [here](https://nodejs.org/docs/latest/api/buffer.html) for more info for Node.js buffers.
