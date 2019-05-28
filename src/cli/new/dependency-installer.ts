import { exec } from 'child_process';
import { promisify } from 'util';

import { PACKAGES_DEP } from './dependencies';
import { PACKAGES_DEV_DEP } from './dev-dependencies';

export async function installDeps({ appName }: { appName: string }) {
  const execProm = promisify(exec);
  await execProm(`npm i --prefix ${appName} ${PACKAGES_DEP.join(' ')}`);
  await execProm(`npm i --prefix ${appName} -D ${PACKAGES_DEV_DEP.join(' ')}`);
  return true;
}
