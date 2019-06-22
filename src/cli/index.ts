import * as commander from 'commander';
import * as _ from 'lodash';

import { handleGenerate } from './generate';
import { graphQlResource } from './graphql';
import { generateNewProject } from './new';

const cli = new commander.Command();
cli.version(require('../../package.json').version);

/* Generate a new project (One time use) */
cli
  .command('new <appName>')
  .description('Generate a new API project')
  .action((appName: string) => generateNewProject(appName));

/* Generate a graphql integration or resource*/
cli
  .command('graphql')
  .description('Generate a new GraphQL integration or add a GraphQL resource')
  .option('-i, --init', 'Create a new GraphQL integration in your TEA project')
  .option('-r, --resolver', 'Generate a module specific resolver, and matching schema/service')
  .option(
    '--root-resource',
    'Generate a resolver non specific to a module. Ex: user.resolver.ts would handle universal user related options like `findById`'
  )
  .action((commands: commander.Command) => graphQlResource(commands));

/* Create a resource, such as a Model, a Controller, a Service, etc */
cli
  .command('g <generator>')
  .description('Generate a resource to use in the application (controller, model, etc)')
  .action(handleGenerate);

export default cli; // Pass around to add commands
