import { promisify } from 'util';

import { PACKAGES_DEP } from './dependencies';
import { PACKAGES_DEV_DEP } from './dev-dependencies';

export async function installDeps({
  appName,
  // Require used here because the typings are foobar to use with promisify
  npm = require('npm'),
  // Hack to import non cached npm version (May only work on some environs)
  devNpm = require('nPm'),
}: {
  appName: string;
  npm?: any;
  devNpm?: any;
}) {
  const promLoad = promisify(npm.load);
  await promLoad({ save: true, prefix: appName });
  await npm.commands.install(PACKAGES_DEP);

  const promDevLoad = promisify(devNpm.load);
  await promDevLoad({ 'save-dev': true, prefix: appName });
  await devNpm.commands.install(PACKAGES_DEV_DEP);
}
