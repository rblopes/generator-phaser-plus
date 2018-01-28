/*
 * Game object generator test suite.
 */

'use strict';

const chalk = require('chalk');
const assert = require('yeoman-assert');
const utils = require('../lib/utils');
const runGenerator = require('./fixtures/run-generator');

// User inputs.
const name = utils.pascalCase('Test Object');
const baseClass = 'Sprite';

// Expected file name of the create module.
const filename = utils.getModuleName('src', name);

describe(chalk.bold.cyan('generator-phaser-plus:object'), () => {
  it(`creates an extended '${name}' class`, () =>
    runGenerator('object', 'default')
      .withArguments([name])
      .withPrompts({baseClass})
      .then(() => {
        assert.fileContent(
          filename,
          `class ${name} extends Phaser.GameObjects.${baseClass} {`
        );
      }));

  it(`creates a plain '${name}' class`, () =>
    runGenerator('object', 'default')
      .withArguments([name])
      .withPrompts({baseClass: null})
      .then(() => {
        assert.fileContent(
          filename,
          `class ${name} {`
        );
      }));
});
