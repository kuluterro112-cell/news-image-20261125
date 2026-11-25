// News-image entry: the finished front page ships beside this file, and the
// program writes those exact bytes to /output/entry.png.
// Node 22, standard library only. No network, no randomness: running it
// twice produces the same bytes.
import { copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const IMAGE_NAME = 'entry.png';

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
}

function main(): void {
  const here = dirname(fileURLToPath(import.meta.url));
  const source = join(here, IMAGE_NAME);
  if (!existsSync(source)) {
    throw new Error(`missing ${IMAGE_NAME} beside main.ts`);
  }
  copyFileSync(source, join(outputDir(), IMAGE_NAME));
}

main();
