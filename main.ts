// Loading Screen Gold — a tip in 200 characters.
// Writes a single loading-screen tip for stressed developers
// and AI coding agents to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The tip, in two halves: the setup (what the agent did) and the
// turn (why it deserves a little kindness).
const setup = "Tip: your coding agent read 10,000 lines to change one.";
const turn = "Be kind — it did the onboarding you skipped.";

const tip = `${setup} ${turn}`;

// Guard: the gate wants 1–200 characters, one line, not only whitespace.
if (tip.length < 1 || tip.length > 200 || tip.includes("\n") || !tip.trim()) {
  throw new Error(`tip is ${tip.length} chars, must be 1–200 on one line`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", tip, "utf8");
