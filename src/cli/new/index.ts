import { installDeps } from './dependency-installer';
import { askQuestions } from './questions';
import { writeAllTemplates } from './template-writer';

export default async function generateNewProject(appName: string) {
  const args = await askQuestions();
  const cwd = process.cwd();
  console.log('🍵  Brewing some tea 🍵');
  await writeAllTemplates({ cwd, args, appName });
  await installDeps(appName);
  console.log(`🍵🍵  ${appName} is ready to go! 🍵🍵`);
  return true;
}
