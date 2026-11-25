// The Internet in One Word — entry for make.fun bounty
// u-ronigrv-the-internet-in-one-word-e388f33b
//
// One word for the whole internet. The word is "touchgrass":
// the entire internet is one long terminally-online crowd that
// has forgotten the outside world exists — every flame war, every
// doomscroll, every 3 a.m. rabbit hole, all of it answered by the
// same two-word prescription the internet itself invented.
// It is funny on its own, it is true of the internet as a whole
// rather than any one app, and it lands in a single beat.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "touchgrass";

// The gate, applied here before anything is written: the entry must be
// UTF-8 text of 1 to 30 characters and not only white space. Refuse to
// emit an invalid word rather than hand the judge a blank file.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be a single word with no whitespace");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
console.log(`wrote entry: ${WORD}`);
