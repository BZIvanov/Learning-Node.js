import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import * as notes from "./notes.js";

yargs(hideBin(process.argv))
  .version("1.1.0")
  .command({
    command: "add",
    describe: "Add a new note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Note body",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      notes.addNote(argv.title, argv.body);
    },
  })
  .command({
    command: "remove",
    describe: "Remove a note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      notes.removeNote(argv.title);
    },
  })
  .command({
    command: "list",
    describe: "List your notes",
    handler() {
      notes.listNotes();
    },
  })
  .command({
    command: "read",
    describe: "Read a note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      notes.readNote(argv.title);
    },
  })
  .strict()
  .demandCommand()
  .help()
  .parse();
