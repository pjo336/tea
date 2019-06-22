import * as fs from 'fs-extra';
import { resolve } from 'path';

export async function writeFile(workingDir: string, templatePath: string, templateName: string) {
  const file = await fs.readFile(templatePath);
  return fs.outputFile(resolve(workingDir, 'src', templateName), file);
}
