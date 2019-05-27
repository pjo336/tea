"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
const _ = require("lodash");
const new_1 = require("./new");
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
const cli = new commander.Command();
cli.version(require('../../package.json').version);
cli
    .command('new <appName>')
    .description('Generate a new API project')
    .action((appName) => new_1.default(appName));
cli
    .command('g <generator>')
    .description('Generate a resource to use in the application (controller, model, etc)')
    .action((generator) => {
    console.log(`Creating a ${generator}`);
});
exports.default = cli;
//# sourceMappingURL=index.js.map