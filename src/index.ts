import {
  scriptName,
  log,
  err,
  warn,
  getArgs,
  readFile,
  writeFile,
  readJSON,
} from './helper';

import fs from 'fs';

import yargs from 'yargs';

import { Coverage } from './coverage';

// Instrument the target JS file
const instrument = (argv: any) => {
  const [ targetPath ] = getArgs('instrument', argv, 1);

  log('Instrumenting the target JS file...');

  // Read the target JS file and parse it
  const code = readFile(targetPath);
  log(`The target file is \`${targetPath}\`.`);

  // Create a coverage object and run the code with the inputs
  const cov: Coverage = new Coverage(code);

  log('Instrumentation completed.');

  // Print the instrumented code
  console.log(cov.modified);
}

// Calculate the coverage
const coverage = (argv: any) => {
  const [ targetPath, inputPath ] = getArgs('coverage', argv, 2);

  log('Calculating the coverage...');

  // Read the target JS file and parse it
  const code = readFile(targetPath);
  log(`The target file is \`${targetPath}\`.`);

  // Read the input JSON file
  const inputs = readJSON(inputPath);
  if (!Array.isArray(inputs)) { err('Input must be an array.'); }
  log(`The input file is \`${inputPath}\`.`);

  // Create a coverage object and run the code with the inputs
  const cov: Coverage = new Coverage(code);
  cov.run(inputs);

  // Print the coverage
  console.log(cov.toString(/* showModified */ true, /* showDetail */ true));
}

// Parse the command-line arguments
try {
  yargs(process.argv.slice(2))
    .scriptName(scriptName)
    .usage('Usage: $0 <command> [options]')
    .command('instrument', 'Instrument the target JS file', () => {}, instrument)
    .example('$0 instrument target.js', 'Instrument the target JS file')
    .command('coverage', 'Calculate the coverage', () => {}, coverage)
    .example('$0 coverage target.js input.json', 'Calculate the coverage')
    .demandCommand(1, `You need a command to run \`${scriptName}.\``)
    .parse();
} catch (e) {
  if (typeof e === 'string') {
    console.error(e);
  } else {
    throw e;
  }
}
