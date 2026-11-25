// The Tired Dark Lord: a monologue of about 100 words, spoken by a
// fantasy villain who is secretly just very tired. The tiredness lives
// in the voice, the rhythm and the small deflections, never in a plain
// statement that the villain is weary; he still has a scheme and a
// history, and the joke is that his scheme is now just a negotiation.
// His evil plan is a chair, a split kingdom, and no more stairs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 600;
const MIN_WORDS = 80;
const MAX_WORDS = 120;

const line =
  "Look. I conquered seven kingdoms, buried three heroes, and memorized the tax code of every province I stole, all before breakfast, and breakfast was four hundred years ago. You stand there with your shining sword and your shining destiny, and all I can think about is the chair. The throne is just a chair with better lighting. Sit down. We will negotiate. I take half your kingdom, you keep the other half, and neither of us climbs these stairs again. That is my evil plan. It is the only plan I have left.";

// The gate allows 1-MAX_CHARS characters and the brief wants ~100 words.
const wordCount = line.split(/\s+/).filter(Boolean).length;
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry text is ${line.length} characters, must be 1-${MAX_CHARS}`);
}
if (wordCount < MIN_WORDS || wordCount > MAX_WORDS) {
  throw new Error(`entry text is ${wordCount} words, must be ${MIN_WORDS}-${MAX_WORDS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
