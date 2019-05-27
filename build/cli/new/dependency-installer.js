"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const dependencies_1 = require("./dependencies");
const dev_dependencies_1 = require("./dev-dependencies");
async function installDeps(appName) {
    const npm = require('npm');
    await util_1.promisify(npm.load)({ save: true, prefix: appName });
    await util_1.promisify(npm.commands.install)(dependencies_1.PACKAGES_DEP);
    const devNpm = require('nPm');
    await util_1.promisify(devNpm.load)({ 'save-dev': true, prefix: appName });
    await util_1.promisify(devNpm.commands.install)(dev_dependencies_1.PACKAGES_DEV_DEP);
}
exports.installDeps = installDeps;
//# sourceMappingURL=dependency-installer.js.map