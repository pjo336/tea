import { Command } from 'commander';
import * as fs from 'fs-extra';

import { findTeaProjectDir } from '../utils/find-tea-project-dir';
import { initGraphql } from './init';
import { resolve } from 'path';

const ROOT_RESOLVER = 'root.resolver.ts';
const ROOT_SCHEMA = 'root.schema.graphql';

export async function graphQlResource(commands: Command): Promise<any> {
  try {
    const workingDir = await findTeaProjectDir();
    if (commands.init) {
      return initGraphql(workingDir);
    }
    // Should already be an integrated graphql project, verify
    // root schema and root resolver
    checkRootResolver({ workingDir });
    checkRootSchema({ workingDir });
    return;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

interface ConfigSettings {
  workingDir: string;
}

/**
 * Checks if the src/root.schema.graphql file exists
 *
 * Throws an error if not found, recommends to run init command
 */
function checkRootSchema({ workingDir }: ConfigSettings): boolean {
  return fs.existsSync(resolve(workingDir, 'src', ROOT_SCHEMA));
}

/**
 * Checks if the src/root.resolver.ts file exists.
 *
 * Throws an error if not found, recommends to run init command
 */
function checkRootResolver({ workingDir }: ConfigSettings): boolean {
  return fs.existsSync(resolve(workingDir, 'src', ROOT_RESOLVER));
}
