/*
 * Plugin generator test suite.
 */

'use strict';

const chalk = require('chalk');
const assert = require('yeoman-assert');
const utils = require('../lib/utils');
const runGenerator = require('./fixtures/run-generator');

// User inputs.
const name = utils.pascalCase('Test Plugin');
const description = 'A test plugin.';

// Expected file name of the create module.
const filename = utils.getModuleName('src', name);

describe(chalk.bold.cyan('generator-phaser-plus:plugin'), () => {
  it(`creates a '${name}' class`, () =>
    runGenerator('plugin', 'default')
      .withPrompts({name, description})
      .then(checkCreatedModule));

  function checkCreatedModule() {
    assert.fileContent([
      [filename, `* ${description}`],
      [filename, `export default class ${name} {`]
    ]);
  }
});
