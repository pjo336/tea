"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const srcTemplates = [
    {
        templateLocation: 'src/index.ts.mustache',
        writeLocation: 'src/index.ts',
        name: 'index.ts',
    },
    {
        templateLocation: 'src/app.ts.mustache',
        writeLocation: 'src/app.ts',
        name: 'app.ts',
    },
    {
        templateLocation: 'src/utils/logger.ts.mustache',
        writeLocation: 'src/utils/logger.ts',
        name: 'logger.ts',
    },
];
const configTemplates = [
    {
        templateLocation: 'config/default.json.mustache',
        writeLocation: 'config/default.json',
    },
    {
        templateLocation: 'config/test.json.mustache',
        writeLocation: 'config/test.json',
    },
];
const rootTemplates = [
    {
        templateLocation: 'package.json.mustache',
        writeLocation: 'package.json',
        name: 'package.json',
    },
    {
        templateLocation: 'tslint.json.mustache',
        writeLocation: 'tslint.json',
        name: 'tslint.json',
    },
    {
        templateLocation: 'tsconfig.json.mustache',
        writeLocation: 'tsconfig.json',
        name: 'tsconfig.json',
    },
    {
        templateLocation: '.gitignore.mustache',
        writeLocation: '.gitignore',
        name: '.gitignore',
    },
    {
        templateLocation: '.dockerignore.mustache',
        writeLocation: '.dockerignore',
        name: '.dockerignore',
    },
    {
        templateLocation: '.nvmrc.mustache',
        writeLocation: '.nvmrc',
        name: '.nvmrc',
    },
    {
        templateLocation: '.prettierrc.mustache',
        writeLocation: '.prettierrc',
        name: '.prettierrc',
    },
    {
        templateLocation: '.prettierignore.mustache',
        writeLocation: '.prettierignore',
        name: '.prettierignore',
    },
    {
        templateLocation: 'nodemon.json.mustache',
        writeLocation: 'nodemon.json',
        name: 'nodemon.json',
    },
    {
        templateLocation: 'Dockerfile.mustache',
        writeLocation: 'Dockerfile',
        name: 'Dockerfile',
    },
    {
        templateLocation: 'process.yml.mustache',
        writeLocation: 'process.yml',
        name: 'process.yml',
    },
];
const NEW_PROJECT_TEMPLATES = [...configTemplates, ...srcTemplates, ...rootTemplates];
exports.default = NEW_PROJECT_TEMPLATES;
//# sourceMappingURL=template-definitions.js.map