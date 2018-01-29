/*
 * Game scene generator test suite.
 */

'use strict';

const chalk = require('chalk');
const assert = require('yeoman-assert');
const kebabCase = require('lodash.kebabcase');
const utils = require('../lib/utils');
const runGenerator = require('./fixtures/run-generator');

// User inputs.
const name = utils.pascalCase('Test Scene');
const methods = ['init', 'create', 'shutdown'];

// Expected file name of the create module.
const filename = utils.getModuleName('src', name);

// The states index module, that should be updated.
const statesIndex = 'src/scenes-index.js';

describe(chalk.bold.cyan('generator-phaser-plus:scene'), () => {
  it(`creates a '${name}' class with selected life-cycle methods`, () => {
    return runGenerator('scene')
      .withArguments([name])
      .withOptions({customize: true})
      .withPrompts({methods})
      .then(checkCreatedModule)
      .then(checkIndexModule);

    function checkCreatedModule() {
      assert.fileContent([
        [filename, `class ${name} extends Phaser.Scene {`],
        [filename, `init() {`],
        [filename, `create() {`],
        [filename, `shutdown() {`]
      ]);
      assert.noFileContent([
        [filename, `preload() {`],
        [filename, `update() {`],
        [filename, `render() {`],
        [filename, `destroy() {`]
      ]);
    }
  });

  it(`creates a '${name}' class with default methods`, () => {
    return runGenerator('scene')
      .withArguments([name])
      .then(checkCreatedModule)
      .then(checkIndexModule);

    function checkCreatedModule() {
      assert.fileContent([
        [filename, `class ${name} extends Phaser.Scene {`],
        [filename, `create() {`],
        [filename, `update() {`]
      ]);
      assert.noFileContent([
        [filename, `init() {`],
        [filename, `preload() {`],
        [filename, `render() {`],
        [filename, `shutdown() {`],
        [filename, `destroy() {`]
      ]);
    }
  });

  function checkIndexModule() {
    assert.fileContent([
      [statesIndex, `export {default as Nada} from './nada';`],
      [statesIndex, `export {default as ${name}} from './${kebabCase(name)}';`]
    ]);
  }
});
