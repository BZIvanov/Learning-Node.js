# Process

## Process ID (PID) and Parent Process ID (PPID)

### PID

Process ID is a unique identifier assigned to every process running on a system. It is an integer value that is used by the operating system to manage and reference processes. PIDs are unique for each running process at any given time, though they can be reused after a process terminates.

### PPID

Parent Process ID refers to the process ID of the parent process, which is the process that created (or forked) the current process. Every process in a UNIX-like system, except for the initial system process (usually init or systemd), has a parent process.

The PPID is used by the system to track process hierarchies and is essential for process management. For example, if a parent process is terminated, the child processes may be re-parented to another process (often the init process).

## Environment Variables

Process environment variables are a way to pass configuration data to processes running in a system. They help processes adapt to the environment they are executed in, and they can be inherited by child processes, making them useful for setting system-wide or user-specific configurations.

### Characteristics of Environment Variables

#### Scope

Environment variables are local to the process that sets them but can be inherited by child processes. When a process creates a child process, the child inherits a copy of the parent's environment variables.

#### Accessing Environment Variables

In UNIX-like systems, you can access and manipulate environment variables using shell commands like `export`, `set`, and `echo`. For example, `echo $HOME` prints the value of the `HOME` environment variable.

In Node.js, environment variables are accessible via `process.env`. For example, `process.env.PATH` would give you the value of the `PATH` environment variable.
