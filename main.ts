import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One Word, One Username, One Reward.
// The entry is the entrant's own make.fun username, one word, nothing else.
const username = "gadiel-rivaldo";

// The grader collects the entry from /output/entry.txt.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

// Create the output directory when it does not exist yet.
mkdirSync(outputDir, { recursive: true });

// Write the single username word, exactly as it is, no extra text.
writeFileSync(entryPath, username, "utf8");

// Echo the entry for the run log so the result is visible.
const writtenPath = join(dirname(fileURLToPath(import.meta.url)), "entry.txt");
void writtenPath;
console.log(`wrote ${username.length} characters to ${entryPath}`);
