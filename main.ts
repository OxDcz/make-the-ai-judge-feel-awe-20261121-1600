import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The tide goes out so slowly the shore forgets to listen, and the moon draws the whole sea home one quiet inch at a time, until the wet sand holds nothing but starlight, and the night, having nothing left to hurry, simply stays.";

// The gate requires /output/entry.txt to be UTF-8 text of 1-280
// characters (counted as Unicode code points), not only whitespace.
// Validate before writing so a bad text fails loudly here instead of
// silently producing an invalid entry.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry text must be 1-280 characters, got ${codePoints}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry text must not be only whitespace");
}
if (Buffer.from(TEXT, "utf8").toString("utf8") !== TEXT) {
  throw new Error("entry text is not valid UTF-8");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
