# ESM Syntax

For detailed info read the [official docs](https://nodejs.org/docs/latest/api/esm.html).

To use **ESM (ECMAScript Modules)** syntax in Node.js, such as `import` instead of `require`, you need to do one of the following:

**Option 1: Use `.mjs` file extension**

Simply name your file with a `.mjs` extension (e.g., `app.mjs`), and Node.js will treat it as an ES module.

Run it like:

```bash
node app.mjs
```

**Option 2: Set `"type": "module"` in `package.json`**

## Additional notes

No `__dirname` or `__filename` by default. Use:

```js
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```
