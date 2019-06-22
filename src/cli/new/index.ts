import { installDeps } from './dependency-installer';
import { askQuestions } from './questions';
import { writeAllTemplates } from './template-writer';

interface GenerateNewProjectOptions {
  input?: any; // TODO: args
  skipDependencies?: boolean; // Should install run
}

export async function generateNewProject(appName: string, options: GenerateNewProjectOptions = {}) {
  const args = options.input ? options.input : await askQuestions();
  const cwd = process.cwd();
  console.log('🍵  Brewing some tea 🍵');
  await writeAllTemplates({ cwd, args, appName });
  if (!options.skipDependencies) await installDeps({ appName });
  console.log(`🍵🍵  ${appName} is ready to go! 🍵🍵`);
  return true;
}
