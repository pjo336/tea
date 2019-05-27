import * as inquirer from 'inquirer';

// TODO: type return
export async function askQuestions() {
  return inquirer.prompt(questions);
}

const questions = [
  {
    name: 'nodeVersion',
    message: 'What node version would you like to use? (Default: 10.15.3)',
    default: '10.15.3',
  },
  {
    name: 'description',
    message: 'Write the description of your project',
  },
  {
    name: 'author',
    message: "What is the author's name?",
  },
];
