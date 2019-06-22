import * as util from 'util';

import { installDeps } from '~/src/new/dependency-installer';
import { PACKAGES_DEP } from '~/src/new/dependencies';
import { PACKAGES_DEV_DEP } from '~/src/new/dev-dependencies';

describe('dependency-installer', () => {
  const appName = 'test-app';
  let exec;

  beforeEach(() => {
    exec = sandbox.spy();
    sandbox.stub(util, 'promisify').returns(exec);
  });

  describe('#installDeps', () => {
    context('production dependencies', () => {
      it('calls install on npm with production dependencies', async () => {
        await installDeps({ appName });
        expect(exec.getCall(0).args[0]).to.eql(`npm i --prefix test-app ${PACKAGES_DEP.join(' ')}`);
      });
    });
  });

  context('dev dependencies', () => {
    it('calls install on npm with development dependencies', async () => {
      await installDeps({ appName });
      expect(exec.getCall(1).args[0]).to.eql(
        `npm i --prefix test-app -D ${PACKAGES_DEV_DEP.join(' ')}`
      );
    });
  });
});
