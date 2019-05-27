"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bluebird = require("bluebird");
const fs = require("fs-extra");
const _ = require("lodash");
const path = require("path");
const util_1 = require("util");
const template_definitions_1 = require("./template-definitions");
async function writeAllTemplates({ cwd, args, appName, }) {
    await bluebird.map(template_definitions_1.default, tmpl => writeTemplate(cwd, tmpl, { appName, ...args }));
}
exports.writeAllTemplates = writeAllTemplates;
async function writeTemplate(cwd, template, args) {
    const file = await util_1.promisify(fs.readFile)(path.resolve(__dirname, `templates/${template.templateLocation}`));
    return writeContentToCWD({
        cwd,
        template,
        appName: args.appName,
        fileContents: _.template(file.toString())(args),
    });
}
async function writeContentToCWD({ cwd, template, appName, fileContents, }) {
    return util_1.promisify(fs.outputFile)(path.resolve(cwd, appName, template.writeLocation), fileContents);
}
//# sourceMappingURL=template-writer.js.map