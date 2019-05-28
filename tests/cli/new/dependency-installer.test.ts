import * as util from 'util';

import { installDeps } from '~/src/cli/new/dependency-installer';
import { PACKAGES_DEP } from '~/src/cli/new/dependencies';
import { PACKAGES_DEV_DEP } from '~/src/cli/new/dev-dependencies';

describe('dependency-installer', () => {
  const appName = 'test-app';
  let npmLoad, npmInstall, devNpmLoad, devNpmInstall;

  beforeEach(() => {
    npmLoad = sandbox.spy();
    npmInstall = { commands: { install: sandbox.spy() } };
    devNpmLoad = sandbox.spy();
    devNpmInstall = { commands: { install: sandbox.spy() } };
    sandbox
      .stub(util, 'promisify')
      .onFirstCall()
      .returns(npmLoad)
      .onSecondCall()
      .returns(devNpmLoad);
  });

  describe('#installDeps', () => {
    context('production dependencies', () => {
      it('calls load on npm with save true', async () => {
        await installDeps({
          appName,
          npm: { ...npmLoad, ...npmInstall },
          devNpm: { ...devNpmLoad, ...devNpmInstall },
        });
        expect(npmLoad).to.have.been.calledOnceWithExactly({ save: true, prefix: appName });
      });

      it('calls install on npm with production dependencies', async () => {
        await installDeps({
          appName,
          npm: { ...npmLoad, ...npmInstall },
          devNpm: { ...devNpmLoad, ...devNpmInstall },
        });
        expect(npmInstall.commands.install).to.have.been.calledOnceWithExactly(PACKAGES_DEP);
      });
    });
  });

  context('dev dependencies', () => {
    it('calls load on dev npm with save-dev', async () => {
      await installDeps({
        appName,
        npm: { ...npmLoad, ...npmInstall },
        devNpm: { ...devNpmLoad, ...devNpmInstall },
      });
      expect(devNpmLoad).to.have.been.calledOnceWithExactly({ 'save-dev': true, prefix: appName });
    });

    it('calls install on npm with production dependencies', async () => {
      await installDeps({
        appName,
        npm: { ...npmLoad, ...npmInstall },
        devNpm: { ...devNpmLoad, ...devNpmInstall },
      });
      expect(devNpmInstall.commands.install).to.have.been.calledOnceWithExactly(PACKAGES_DEV_DEP);
    });
  });
});
