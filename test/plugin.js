/*
 * Phaser plugin generator test suite.
 */

'use strict';

const chalk = require('chalk');
const assert = require('yeoman-assert');
const runGenerator = require('./fixtures/run-generator');

// User inputs.
const name = 'Test';
const description = 'A test plugin.';

// Expected file name of the create module.
const fileName = `src/${name}.js`;

describe(chalk.bold.cyan('generator-phaser-plus:plugin'), () => {
  describe('creates a CommonJS module', () => {
    it('using prompts', () =>
      runGenerator('plugin', 'commonjs')
        .withPrompts({name, description})
        .then(checkCreatedModule));

    it('using command-line interface', () =>
      runGenerator('plugin', 'commonjs')
        .withArguments([name])
        .withOptions({description})
        .then(checkCreatedModule));

    function checkCreatedModule() {
      assert.fileContent([
        [fileName, `* ${description}`],
        [fileName, `function ${name}(game, parent) {`]
      ]);
    }
  });

  describe('creates a ECMAScript module', () => {
    it('using prompts', () =>
      runGenerator('plugin', 'esnext')
        .withPrompts({name, description})
        .then(checkCreatedModule));

    it('using command-line interface', () =>
      runGenerator('plugin', 'esnext')
        .withArguments([name])
        .withOptions({description})
        .then(checkCreatedModule));

    function checkCreatedModule() {
      assert.fileContent([
        [fileName, `* ${description}`],
        [fileName, `class ${name} extends Phaser.Plugin {`]
      ]);
    }
  });
});
