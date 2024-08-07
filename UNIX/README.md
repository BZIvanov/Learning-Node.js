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

## File permissions

### Viewing Permissions

Run the following command `ls -l` in the terminal on your macOS or Linux machine. Assuming your are in a folder with the following content: a directory named _items_ and two files _index.js_ and _my-file.txt_, you will a similar output:

```
total 16
-rw-r--r--  1 john staff  29  Aug 3 22:47   index.js
drwxr-xr-x  2 john staff  64  Aug 3 22:47   items
-rw-r--r--  1 john staff  17  Aug 3 22:47   my-file.txt
```

### Understanding the Output

The first column of the output represents the file permissions:

- **File Type**: The first character indicates the type of the file:

  - `-` means it is a file
  - `d` means it is a directory

- **User Permissions**: The next three characters represent the permissions for the file's owner (in this case, john):

  - `r` means read permission
  - `w` means write permission
  - `x` means execute permission

- **Group Permissions**: The next three characters represent the permissions for the group associated with the file (in this case, staff).

- **Other Permissions**: The last three characters represent the permissions for others (i.e., anyone not the owner or in the group).

### Modifying Permissions

To change the permissions of a file, you can use the `chmod` command. For example, run the following command to remove read and write rights for the current user (john) on _my-file.txt_ run `chmod u-r-w ./my-file.txt`

```
total 16
-rw-r--r--  1 john staff  29  Aug 3 22:47   index.js
drwxr-xr-x  2 john staff  64  Aug 3 22:47   items
----r--r--  1 john staff  17  Aug 3 22:47   my-file.txt
```

### Testing the Changes

Now, try to read the file with the following command `cat my-file.txt` and you will see the following result

```
cat: my-file.txt: Permission denied
```

This is because the read (r) and write (w) permissions have been removed for the user john.

### Restoring Permissions

To restore the read and write permissions for john, run `chmod u+r+w ./my-file.txt`.

### Checking Your Username

To verify which user you are currently logged in as, run `whoami`. This will return your current username.

## Absolute and Relative Path

**Absolute Path**: Provides the full, exact location from the root directory. It is independent of the current location.

**Relative Path**: Specifies a location relative to the current directory. It is shorter but dependent on where you are in the directory tree.

In Node.js `path` module help us to work with paths.

### Absolute path

Starts with / (slash). In UNIX-like systems, absolute paths always begin with a /, which represents the root directory. This ensures that the path is independent of the current working directory.

Example: `/home/user/documents/report.txt`

### Relative path

Does not start with /. Since it's relative to the current directory, it does not begin with a /. Instead, it might start with a directory name or a dot (.) representing the current directory.

Examples:

- `documents/report.txt`
- `./documents/report.txt`

## stdin, stdout, stderr

In UNIX, stdin, stdout, and stderr are standard streams that handle input and output for command-line programs.

### File descriptors

In UNIX and UNIX-like systems, file descriptors are integer values that represent open files or streams. The most commonly used file descriptors are:

- 0 for stdin (standard input)
- 1 for stdout (standard output)
- 2 for stderr (standard error)

Example: To redirect both stdout and stderr to the same file, you can use: `ls nonexistentfile > output.txt 2>&1`. This command redirects both the standard output and standard error to output.txt.

### stdin (Standard Input)

**stdin** is the standard input stream, which programs read from by default.

It typically comes from the keyboard but can also be redirected from a file or another command.

Example: When you run a command and then type input, like with `cat`, the input comes from stdin.

### stdout (Standard Output)

**stdout** is the standard output stream, which programs use to send their output.

By default, stdout is displayed in the terminal, but it can be redirected to a file or another command.

Example: The output of `ls` (`ls > filelist.txt`) is sent to stdout.

### stderr (Standard Error)

**stderr** is the standard error stream, used specifically for error messages and diagnostics.

Like stdout, stderr is usually displayed in the terminal, but it can be redirected separately from stdout.

Example: If a command fails, the error message is sent to stderr (`ls nonexistentfile 2> errors.txt`).

## Pipes

With pipes we can send data from one process to another.

### Examples

Here is the content of our `index.js` javascript file:

```javascript
const { stdin, stdout } = require('node:process');

stdin.on('data', (data) => {
  stdout.write(`GOT DATA: ${data.toString('utf-8')}`);
});
```

Example of how to send data from the terminal to node.js process and also convert the text to uppercase

```bash
echo "some text" | node index.js | tr 'a-z' 'A-Z'
```

With the above command and the js file, we will get the following result:

```
GOT DATA: SOME TEXT
```
