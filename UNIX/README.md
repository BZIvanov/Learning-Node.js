# UNIX

In the context of Node.js, the term "UNIX" typically refers to concepts, commands, and practices that are derived from UNIX-like operating systems. This includes how Node.js interacts with the underlying system, especially in environments like Linux and macOS, which are either UNIX-like or UNIX-certified.

Here are some specific contexts in which UNIX comes up in Node.js:

- File System Operations (`fs`)
- Permissions and Process (`process`)
- UNIX Domain Sockets (`net`)
- UNIX Commands and Tools Integration (`child_process`)
- Signals and Process Control (`process`)
- Environment Variables (`process.env`)
- Cross-Platform Considerations
- Permissions and Ownership (`fs`)

## UNIX Shell

A UNIX shell is a command-line interface (CLI) or command interpreter that provides users with an environment to interact with the operating system. The shell takes the user's input (commands), interprets them, and then executes them by interacting with the underlying operating system. Shells are a fundamental aspect of UNIX and UNIX-like operating systems.

### Shell types

There are several types of UNIX shells, each with its own features and syntax. Some of the most common include:

- Bourne Shell (sh)
- Bash (Bourne Again Shell)
- C Shell (csh)
- Korn Shell (ksh)
- Z Shell (zsh)

We can have more than one shell type installed and available on our operating system. It's common for UNIX-like operating systems, such as Linux and macOS, to have multiple shells installed simultaneously, allowing you to choose which shell to use.

### Example of a simple Shell session

```shell
$ echo "Hello, World!"
Hello, World!

$ ls
Documents  Downloads  Music

$ cd Documents
$ ls
report.txt  notes.md

$ cat report.txt
This is a sample report.
```
