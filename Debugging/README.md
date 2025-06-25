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

You can also debug Node.js using Chrome DevTools:

```bash
node --inspect-brk index.js
```

Then open `chrome://inspect` in Chrome and click **Open dedicated DevTools for Node**.
