/*
 * Game state generator test suite.
 */

'use strict';

const chalk = require('chalk');
const assert = require('yeoman-assert');
const runGenerator = require('./fixtures/run-generator');

// User inputs.
const name = 'Test';
const description = 'A test game state.';
const methods = ['init', 'create', 'shutdown'];

// Expected file name of the create module.
const fileName = `src/${name}.js`;

// The states index module, that should be updated.
const statesIndex = 'src/scenes-index.js';

describe(chalk.bold.cyan('generator-phaser-plus:scene'), () => {
  describe('creates a CommonJS module', () => {
    describe('with chosen methods', () => {
      it('using prompts', () =>
        runGenerator('scene', 'commonjs')
          .withPrompts({name, description, methods})
          .then(checkCreatedModule)
          .then(checkUpdatedIndex));

      function checkCreatedModule() {
        assert.fileContent([
          [fileName, `* ${description}`],
          [fileName, `exports.init = function () {`],
          [fileName, `exports.create = function (/*game*/) {`],
          [fileName, `exports.shutdown = function (/*game*/) {`]
        ]);
        assert.noFileContent([
          [fileName, `exports.preload = function (/*game*/) {`],
          [fileName, `exports.update = function (/*game*/) {`],
          [fileName, `exports.render = function (/*game*/) {`]
        ]);
      }
    });

    describe('with default methods', () => {
      it('using prompts', () =>
        runGenerator('scene', 'commonjs')
          .withPrompts({name, description})
          .then(checkCreatedModule)
          .then(checkUpdatedIndex));

      it('using command-line interface', () =>
        runGenerator('scene', 'commonjs')
          .withArguments([name])
          .withOptions({description})
          .then(checkCreatedModule)
          .then(checkUpdatedIndex));

      function checkCreatedModule() {
        assert.fileContent([
          [fileName, `* ${description}`],
          [fileName, `exports.create = function (/*game*/) {`],
          [fileName, `exports.update = function (/*game*/) {`]
        ]);
        assert.noFileContent([
          [fileName, `exports.init = function () {`],
          [fileName, `exports.preload = function (/*game*/) {`],
          [fileName, `exports.render = function (/*game*/) {`],
          [fileName, `exports.shutdown = function (/*game*/) {`]
        ]);
      }
    });

    function checkUpdatedIndex() {
      assert.fileContent([
        [statesIndex, `exports.Nada = require('./Nada');`],
        [statesIndex, `exports.${name} = require('./${name}');`]
      ]);
    }
  });

  describe('creates a ECMAScript module', () => {
    describe('with chosen methods', () => {
      it('using prompts', () =>
        runGenerator('scene', 'esnext')
          .withPrompts({name, description, methods})
          .then(checkCreatedModule)
          .then(checkUpdatedIndex));

      function checkCreatedModule() {
        assert.fileContent([
          [fileName, `* ${description}`],
          [fileName, `class ${name} extends Phaser.State {`],
          [fileName, `init() {`],
          [fileName, `create() {`],
          [fileName, `shutdown() {`]
        ]);
        assert.noFileContent([
          [fileName, `preload() {`],
          [fileName, `update() {`],
          [fileName, `render() {`]
        ]);
      }
    });

    describe('with default methods', () => {
      it('using prompts', () =>
        runGenerator('scene', 'esnext')
          .withPrompts({name, description})
          .then(checkCreatedModule)
          .then(checkUpdatedIndex));

      it('using command-line interface', () =>
        runGenerator('scene', 'esnext')
          .withArguments([name])
          .withOptions({description})
          .then(checkCreatedModule)
          .then(checkUpdatedIndex));

      function checkCreatedModule() {
        assert.fileContent([
          [fileName, `* ${description}`],
          [fileName, `class ${name} extends Phaser.State {`],
          [fileName, `create() {`],
          [fileName, `update() {`]
        ]);
        assert.noFileContent([
          [fileName, `init() {`],
          [fileName, `preload() {`],
          [fileName, `render() {`],
          [fileName, `shutdown() {`]
        ]);
      }
    });

    function checkUpdatedIndex() {
      assert.fileContent([
        [statesIndex, `export {default as Nada} from './Nada';`],
        [statesIndex, `export {default as ${name}} from './${name}';`]
      ]);
    }
  });
});
