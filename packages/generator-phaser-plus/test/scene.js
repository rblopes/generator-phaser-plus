/*
 * Game scene generator test suite.
 */

'use strict';

const chalk = require('chalk');
const assert = require('yeoman-assert');
const kebabCase = require('lodash.kebabcase');
const utils = require('../lib/utils');
const runGenerator = require('./fixtures/run-generator');

// Expected file name of the create module.
const filename = name => utils.getModuleName('src', name);

// The states index module, that should be updated.
const statesIndex = 'src/scenes-index.js';

describe(chalk.bold.cyan('generator-phaser-plus:scene'), () => {
  it(`creates multiple scene classes`, () => {
    const names = ['SceneA', 'SceneB', 'SceneC'];

    return runGenerator('scene')
      .withArguments(names)
      .then(checkCreatedModules)
      .then(checkIndexModule);

    function checkCreatedModules() {
      for (const name of names) {
        assert.fileContent(
          filename(name),
          `class ${name} extends Phaser.Scene {`
        );
      }
    }

    function checkIndexModule() {
      assert.fileContent(
        statesIndex,
        `export {default as Nada} from './nada';`
      );

      for (const name of names) {
        assert.fileContent(
          statesIndex,
          `export {default as ${name}} from './${kebabCase(name)}';`
        );
      }
    }
  });
});
