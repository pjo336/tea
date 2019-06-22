import * as findUp from 'find-up';
import { dirname } from 'path';

export async function findTeaProjectDir() {
  const teacRc = await findUp('.tea.json');
  if (!teacRc) throw new Error('No .tea.json file found, cannot run tea cli commands without.');
  return dirname(teacRc);
}
