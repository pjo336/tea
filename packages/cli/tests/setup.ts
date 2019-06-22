// Set up module alias stuff for ts-node
import 'module-alias/register';
import * as moduleAlias from 'module-alias';
import * as path from 'path';
if (process.env.MODULE_ALIAS) {
  moduleAlias.addAliases({
    '~/src': path.join(__dirname, '../src'),
    '~/tests': path.join(__dirname, '../tests'),
  });
}

// Configure testing libraries
import * as chai from 'chai';
import * as chaiPromised from 'chai-as-promised';
import 'mocha';
import * as sinon from 'sinon';
import * as chaiSinon from 'sinon-chai';

chai.use(chaiPromised);
chai.use(chaiSinon);

// Configure global setup
(global as any)['expect'] = chai.expect;
(global as any)['sandbox'] = sinon.createSandbox();
