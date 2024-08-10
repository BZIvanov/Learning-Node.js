# Multi threading

## Multi-Threading Basics

Imagine you have a computer program that needs to do several tasks at the same time. For example, a video game that plays music, handles user input, and updates the screen all at once. Instead of doing one task at a time, the program can create threads—which are like mini-programs running inside the main program. These threads can run in parallel, allowing multiple tasks to be done almost simultaneously.

Multi-threading allows a program to be more efficient and responsive. For example, in a video game, one thread can handle the game logic, another can manage the graphics, and another can play the sound. Even though each thread may need to wait or sleep at times, the overall program feels smooth because there’s always something happening in one of the threads.

In summary, multi-threading is like having multiple workers (threads) in a program, each doing different tasks. These workers can be busy (running), waiting for something (waiting), taking a short break (sleeping), or ready to start (ready), allowing the program to handle many tasks efficiently at the same time.

## Thread

A thread is the smallest unit of execution within a process (learn more for processes in UNIX/Process section). A process can have one or more threads, and these threads can run independently, performing different tasks within the same process. All threads within a process share the same memory space and resources, but each thread has its own stack, program counter, and state.

If a process is like a container for a program, threads are like the workers inside that container, each doing a specific task.

### Relationship Between Processes and Threads

The relationship between processes and threads is that threads are the "workers" that perform tasks within the "container" of a process. While a process provides the environment and resources needed for a program to run, threads are the entities that actually carry out the work, allowing for parallel execution and efficient use of system resources.

1. **Multiple Threads in a Single Process** - A process can have multiple threads running in parallel, each performing different tasks. For example, a web browser (process) might have separate threads for rendering a web page, playing a video, and handling user input.
2. **Shared Resources** - Since threads belong to the same process, they share the process's memory and resources. This makes communication between threads easier and faster because they can directly access the same data. However, this also means that if one thread modifies shared data, it can affect other threads, leading to potential issues like race conditions.
3. **Independent Execution** - Each thread within a process can execute independently and even run on different CPU cores if the system supports it. This allows for true parallelism, where multiple tasks are done at the same time.
4. **Process vs. Thread Creation** - Creating a new process is usually more resource-intensive because it requires the operating system to allocate separate memory and resources. Creating a new thread, on the other hand, is lighter since threads share the process's resources.
5. **Communication** - Threads within the same process can easily communicate with each other through shared memory, whereas processes typically need to use more complex mechanisms like inter-process communication (IPC) to share data.

## Thread States: Running, Waiting, and Sleeping

When a thread is created, it goes through several states:

1. **Running State** - This is when a thread is actively doing its task. Imagine it's like a person who's working on a task without any interruptions.
2. **Waiting or Blocked State** - Sometimes, a thread needs to wait for something before it can continue its work. For example, if a thread is downloading a file from the internet, it might have to wait for the data to arrive. While waiting, it goes into a "waiting" or "blocked" state. It's like a person waiting for a package to arrive before they can continue their work.
3. **Sleeping State** - A thread can be put to sleep for a certain amount of time. This is like setting an alarm to wake up later. During this time, the thread isn't doing anything; it's just resting. After the sleep time is over, the thread wakes up and continues its work.
4. **Ready State** - When a thread is ready to run but is waiting for its turn, it’s in the ready state. It’s like a person standing in line, waiting to be called on to start working.

### Switching Between States

Threads don’t stay in one state forever; they switch between states based on what's happening:

- A **running thread** might go to **waiting** if it needs to wait for something, like data from a file.
- After the data arrives, the thread moves from **waiting** to **ready** and then back to running when it's its turn to work again.
- A thread might go from **running** to **sleeping** if it needs to wait for a specific amount of time.
- Once the sleep time is up, it goes to the **ready** state and then to **running** when it gets a chance to continue.

## Concurrently vs. Parallel

### Concurrent Execution

This means that multiple processes or threads are making progress over time, but not necessarily at the exact same moment. The operating system manages this by quickly switching between processes, giving each one a small slice of CPU time. This rapid switching creates the illusion that all processes are running simultaneously.

**Concurrency allows for multiple tasks to be in progress without requiring them to run at the exact same time.**

#### Concurrent Example

Imagine you have a single chef preparing several dishes at once. The chef works on one dish for a few minutes, then switches to another dish, and so on. Each dish is being made concurrently, but the chef is only working on one dish at any given moment.

### Parallel Execution

This means that multiple processes or threads are being executed at the exact same time on different CPU cores. If a system has multiple cores, it can truly execute multiple tasks simultaneously.

**Parallelism is about actually doing multiple tasks at the same time, which requires multiple processing units (like CPU cores).**

#### Parallel Example

Imagine having several chefs in a kitchen, each working on a different dish at the same time. Here, multiple dishes are being prepared in parallel because each chef is working independently.

### Concurrently vs. Parallel Example

Let's say we have 7 Processes Running Concurrently and 4 Running in Parallel.

This means there are 7 processes that are all making progress over time. The operating system is managing these processes in such a way that each one gets a turn to use the CPU. However, they aren't all necessarily running at the exact same moment. The OS rapidly switches between them, creating the effect that they are running at the same time.

Out of these 7 processes, 4 are actually being executed at the exact same time on different CPU cores. For example, if your computer has a quad-core processor, each of these 4 processes could be running on a separate core simultaneously.
