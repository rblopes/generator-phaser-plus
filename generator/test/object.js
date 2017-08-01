/*
 * Game object generator test suite.
 */

'use strict';

const chalk = require('chalk');
const assert = require('yeoman-assert');
const utils = require('../lib/utils');
const runGenerator = require('./fixtures/run-generator');

// User inputs.
const name = 'Test';
const description = 'A test object.';
const baseClass = 'Sprite';

// Expected file name of the create module.
const filename = utils.getModuleName('src', name);

describe(chalk.bold.cyan('generator-phaser-plus:object'), () => {
  describe('creates a CommonJS module', () => {
    describe(`containing a class extended from 'GameObjects.${baseClass}'`, () => {
      it('using prompts', () =>
        runGenerator('object', 'commonjs')
          .withPrompts({name, description, baseClass})
          .then(checkCreatedModule));

      function checkCreatedModule() {
        assert.fileContent([
          [filename, `* ${description}`],
          [filename, `Extends: Phaser.GameObjects.${baseClass},`],
          [filename, `initialize: function ${name}(scene/*, ...args*/) {`],
          [filename, `Phaser.GameObjects.${baseClass}.call(this, scene/*, ...args*/);`]
        ]);
      }
    });

    describe('containing a not extended class', () => {
      it('using prompts', () =>
        runGenerator('object', 'commonjs')
          .withPrompts({name, description})
          .then(checkCreatedModule));

      function checkCreatedModule() {
        assert.fileContent([
          [filename, `* ${description}`],
          [filename, `initialize: function ${name}(scene/*, ...args*/) {`]
        ]);
        assert.noFileContent(filename, `Extends: Phaser.GameObjects`);
      }
    });
  });

  describe('creates a ECMAScript module', () => {
    describe(`containing a class extended from 'GameObjects.${baseClass}'`, () => {
      it('using prompts', () =>
        runGenerator('object', 'esnext')
          .withPrompts({name, description, baseClass})
          .then(checkCreatedModule));

      function checkCreatedModule() {
        assert.fileContent([
          [filename, `* ${description}`],
          [filename, `class ${name} extends Phaser.GameObjects.${baseClass} {`]
        ]);
      }
    });

    describe('containing a not extended class', () => {
      it('using prompts', () =>
        runGenerator('object', 'esnext')
          .withPrompts({name, description})
          .then(checkCreatedModule));

      function checkCreatedModule() {
        assert.fileContent([
          [filename, `* ${description}`],
          [filename, `class ${name} {`]
        ]);
      }
    });
  });
});
