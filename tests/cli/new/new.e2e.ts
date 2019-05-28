import { exec } from 'child_process';
import { readFileSync } from 'fs';
import { resolve } from 'path';
const snapshot = require('snap-shot');

import { generateNewProject } from '~/src/cli/new';

describe('E2E new project generation', () => {
  const appName = 'e2e-test-app';

  function loadFile(filePath) {
    const res = readFileSync(resolve(process.cwd(), appName, filePath)).toString();
    expect(res).to.not.be.null;
    return res;
  }

  before(async () => {
    // Generate the entire project before
    await generateNewProject(appName, {
      input: {
        nodeVersion: '10.15.1',
        description: 'this is a test app',
        author: 'mocha/chai',
      },
      skipDependencies: true,
    });
  });

  after(() => {
    // Clean up after test
    exec(`rm -rf ${resolve(process.cwd(), appName)}`);
  });

  context('src file snapshots', () => {
    it('logger.ts', () => {
      snapshot(loadFile('src/utils/logger.ts'));
    });

    it('app.ts', () => {
      snapshot(loadFile('src/app.ts'));
    });

    it('index.ts', () => {
      snapshot(loadFile('src/index.ts'));
    });
  });

  context('config file snapshots', () => {
    it('default.json', () => {
      snapshot(loadFile('config/default.json'));
    });

    it('test.json', () => {
      snapshot(loadFile('config/test.json'));
    });
  });

  context('root file snapshots', () => {
    it('.dockerignore', () => {
      snapshot(loadFile('.dockerignore'));
    });

    it('.gitignore', () => {
      snapshot(loadFile('.gitignore'));
    });

    it('.nvmrc', () => {
      snapshot(loadFile('.nvmrc'));
    });

    it('.prettierignore', () => {
      snapshot(loadFile('.prettierignore'));
    });

    it('.prettierrc', () => {
      snapshot(loadFile('.prettierrc'));
    });

    it('Dockerfile', () => {
      snapshot(loadFile('Dockerfile'));
    });

    it('nodemon.json', () => {
      snapshot(loadFile('nodemon.json'));
    });

    it('package.json', () => {
      snapshot(loadFile('package.json'));
    });

    it('process.yml', () => {
      snapshot(loadFile('process.yml'));
    });

    it('tsconfig.json', () => {
      snapshot(loadFile('tsconfig.json'));
    });

    it('tslint.json', () => {
      snapshot(loadFile('tslint.json'));
    });
  });
});
