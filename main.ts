import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The tide goes out so slowly the shore forgets to listen, and the moon draws the whole sea home one quiet inch at a time, until the wet sand holds nothing but starlight, and the night, having nothing left to hurry, simply stays.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
