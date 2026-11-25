// Fortune Cookie for the Liquidated Trader.
// Writes one fortune cookie line for a liquidated crypto trader to /output/entry.txt.
// Gate: the file must be UTF-8 text of 1 to 160 characters, a single line of at most 20 words.
import { mkdirSync, writeFileSync } from "node:fs";

function fortune(): string {
  // Fortune voice up front, then the turn: the stars promised, but left out the timing.
  return "The stars promise a great fortune ahead—they just didn't say it would arrive after your liquidation.";
}

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, fortune(), "utf8");
