// News-image entry for Tuesday 17 November 2026.
//
// The image is entry.png, sitting beside this file in the repository. This
// program copies it to the output directory and then verifies the copy by
// comparing the SHA-256 of the written file against the source, so a
// truncated or corrupted write fails loudly instead of silently shipping
// bad bytes. Node 22, standard library only: no network, no dependencies,
// and the same bytes on every run.
//
// To try it outside the grader's container:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(here, 'entry.png');
if (!existsSync(source)) {
  throw new Error(`news-image-20261117: source image missing: ${source}`);
}

const target = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const digest = (path) => createHash('sha256').update(readFileSync(path)).digest('hex');
if (digest(source) !== digest(target)) {
  throw new Error('news-image-20261117: copied image failed its SHA-256 integrity check');
}
