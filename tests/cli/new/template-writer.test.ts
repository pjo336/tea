import * as util from 'util';

import { installDeps } from '~/src/cli/new/dependency-installer';
import { PACKAGES_DEP } from '~/src/cli/new/dependencies';
import { PACKAGES_DEV_DEP } from '~/src/cli/new/dev-dependencies';

describe('template-writer', () => {
  const appName = 'test-app';
  let exec;

  beforeEach(() => {
    exec = sandbox.spy();
    sandbox.stub(util, 'promisify').returns(exec);
  });

  describe('#writeAllTemplates', () => {});
});
