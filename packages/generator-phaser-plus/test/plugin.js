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

// Expected file name of the create module.
const filename = utils.getModuleName('src', name);

describe(chalk.bold.cyan('generator-phaser-plus:plugin'), () => {
  it(`creates a ${name} global plugin`, () =>
    runGenerator('plugin')
      .withOptions({type: 'global'})
      .withArguments([name])
      .then(() => assert.fileContent(
        filename,
        `export default class ${name} extends Phaser.Plugins.BasePlugin`
      )));

  it(`creates a ${name} scene plugin`, () =>
    runGenerator('plugin')
      .withOptions({type: 'scene'})
      .withArguments([name])
      .then(() => assert.fileContent(
        filename,
        `export default class ${name} extends Phaser.Plugins.ScenePlugin`
      )));
});
