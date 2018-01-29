/*
 * Plugin generator test suite.
 */

'use strict';

const chalk = require('chalk');
const assert = require('yeoman-assert');
const camelCase = require('lodash.camelcase');
const utils = require('../lib/utils');
const runGenerator = require('./fixtures/run-generator');

// User inputs.
const name = utils.pascalCase('Test Plugin');
const id = 'test';

// Expected file name of the create module.
const filename = utils.getModuleName('src', name);

describe(chalk.bold.cyan('generator-phaser-plus:plugin'), () => {
  it(`creates a '${name}' class`, () =>
    runGenerator('plugin')
      .withArguments([name])
      .then(() => assert.fileContent([
        [filename, `export default class ${name} {`],
        [filename, `register('${name}', this, '${camelCase(name)}')`]
      ])));

  it(`creates a '${name}' class with id '${id}'`, () =>
    runGenerator('plugin')
      .withArguments([name, id])
      .then(() => assert.fileContent([
        [filename, `export default class ${name} {`],
        [filename, `register('${name}', this, '${id}')`]
      ])));
});
