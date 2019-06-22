import { resolve } from 'path';
import * as fs from 'fs-extra';

import { writeFile } from '../utils/write-file';

export async function initGraphql(workingDir: string) {
  // Create the root schema and root resolver
  // TODO: check if files already exist, don't want to overwrite
  await writeFile(
    workingDir,
    resolve(__dirname, 'templates/root.schema.graphql.mustache'),
    'root.schema.graphql'
  );
  await writeFile(
    workingDir,
    resolve(__dirname, 'templates/root.resolver.ts.mustache'),
    'root.resolver.ts'
  );
  return;
}

// async function setupIndexFile(workingDir: string) {
//   const indexFile = await fs.readFile(resolve(workingDir, 'src', 'index.ts'));
//   const imports = indexFile
//     .toString()
//     .split('\n')
//     .forEach();
// }
