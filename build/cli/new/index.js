"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dependency_installer_1 = require("./dependency-installer");
const questions_1 = require("./questions");
const template_writer_1 = require("./template-writer");
async function generateNewProject(appName) {
    const args = await questions_1.askQuestions();
    const cwd = process.cwd();
    console.log('🍵  Pouring some tea 🍵');
    await template_writer_1.writeAllTemplates({ cwd, args, appName });
    await dependency_installer_1.installDeps(appName);
    console.log(`🍵🍵  ${appName} is ready to go! 🍵🍵`);
    return true;
}
exports.default = generateNewProject;
//# sourceMappingURL=index.js.map