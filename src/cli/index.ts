import * as commander from 'commander';
import * as _ from 'lodash';
import generateNewProject from './new';

/* Use {{}} syntax in templates */
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

const cli = new commander.Command();
cli.version(require('../../package.json').version);

/* Generate a new project (One time use) */
cli
  .command('new <appName>')
  .description('Generate a new API project')
  .action((appName: string) => generateNewProject(appName));

/* Create a resource, such as a Model, a Controller, a Service, etc */
cli
  .command('g <generator>')
  .description('Generate a resource to use in the application (controller, model, etc)')
  .action((generator: string) => {
    console.log(`Creating a ${generator}`);
  });

export default cli; // Pass around to add commands
