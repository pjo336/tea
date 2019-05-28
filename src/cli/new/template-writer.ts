import * as bluebird from 'bluebird';
import * as fs from 'fs-extra';
import * as _ from 'lodash';
import * as path from 'path';
import { Template } from 'tea-domain';
import { promisify } from 'util';

import templates from './template-definitions';

/* Use {{}} syntax in templates */
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

export async function writeAllTemplates({
  cwd,
  args,
  appName,
}: {
  cwd: string;
  args: any;
  appName: string;
}) {
  return bluebird.map(templates, tmpl => writeTemplate(cwd, tmpl, { appName, ...args }));
}

async function writeTemplate(cwd: string, template: Template, args: any): Promise<void> {
  const file = await promisify(fs.readFile)(
    path.resolve(__dirname, `templates/${template.templateLocation}`)
  );
  return writeContentToCWD({
    cwd,
    template,
    appName: args.appName,
    fileContents: _.template(file.toString())(args),
  });
}

async function writeContentToCWD({
  cwd,
  template,
  appName,
  fileContents,
}: {
  cwd: string;
  template: Template;
  appName: string;
  fileContents: string;
}): Promise<void> {
  return promisify(fs.outputFile as any)(
    path.resolve(cwd, appName, template.writeLocation),
    fileContents
  );
}
