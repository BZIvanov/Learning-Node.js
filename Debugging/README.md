# Debugging

Debugging helps you find and fix issues in your code more effectively than using `console.log` everywhere.

## Debugging with VS Code

Follow these steps to debug your Node.js app using breakpoints and the VS Code interface:

1. **Open your project** in VS Code.
2. **Set a breakpoint** by clicking to the left of a line number in a JavaScript file (a red dot will appear).
3. Click the **Run and Debug** icon in the sidebar (with a bug symbol).
4. Click **JavaScript Debug Terminal** to open a special terminal.
5. In that terminal, run your file like this:

```bash
node index.js
```

6. VS Code will pause at your breakpoint. You can now:
   - Inspect variable values
   - Step through the code line by line
   - Watch expressions and call stacks

## Debugging with Chrome DevTools

You can debug Node.js using Chrome DevTools. Run the below command (`src/server.js` is for example the starting point file of a server):

```bash
node --inspect-brk src/server.js
```

And follow the below steps:

1. Open Chrome and go to: `chrome://inspect`
2. Click **Open dedicated DevTools for Node**. Alternatively you can click `inspect` under `Remote Target`
3. Add breakpoints directly in DevTools or insert `debugger` statements in the code. When execution reaches them, Node will pause so you can step through and inspect state.

### Notes

- Use `--inspect` for normal debugging (starts immediately)
- Use `--inspect-brk` if you need to debug the very beginning of app startup (Node will pause on the first line of code until you resume)
