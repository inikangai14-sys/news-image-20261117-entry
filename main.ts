// News-image entry for Tuesday 17 November 2026.
//
// The image is entry.png, sitting beside this file in the repository. This
// program copies it to the output directory. Node 22, standard library
// only: no network, no dependencies, and the same bytes on every run.
//
// To try it outside the grader's container:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
