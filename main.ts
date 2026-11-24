// thinking_revised: one hello, one batch of orders, one slot — a single picture a person from 1800 could picture.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Resolve our own directory so output never depends on the caller's working directory.
const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

// One sentence, no trailing newline, exactly as a person from 1800 could picture it.
const sentence =
  'Every man now carries a small looking-glass in his pocket, and upon it the words of strangers, clear as print, arrive before a courier could saddle his horse.';

writeFileSync(join(outDir, 'entry.txt'), sentence, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(sentence, 'utf8')} bytes`);
