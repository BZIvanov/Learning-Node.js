# Notes app

## Info

Notes are stored in the notes.json file, you should not interact with it manually.

## Available commands

To test this app use any of the following commands in the terminal.

1. List available commands

```bash
node app.js --help
```

2. Add new note:

```bash
node app.js add --title="Shopping" --body="Buy eggs"
```

3. List all notes

```bash
node app.js list
```

4. Read note by its title

```bash
node app.js read --title="Shopping"
```

5. Remove note by its title

```bash
node app.js remove --title="Shopping"
```
