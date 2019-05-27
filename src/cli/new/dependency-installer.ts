import { promisify } from 'util';

import { PACKAGES_DEP } from './dependencies';
import { PACKAGES_DEV_DEP } from './dev-dependencies';

export async function installDeps(appName: string) {
  // Install all packages
  // Require used here because the typings are foobar to use with promisify
  const npm = require('npm');
  await promisify(npm.load)({ save: true, prefix: appName });
  await promisify(npm.commands.install)(PACKAGES_DEP);
  // Hack to get a new instance of NPM, capitalizing diff letters TODO: fix hax, may not work on diff OS (tested on Mac)
  const devNpm = require('nPm');
  await promisify(devNpm.load)({ 'save-dev': true, prefix: appName });
  await promisify(devNpm.commands.install)(PACKAGES_DEV_DEP);
}
