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

// Expected file name of the create module.
const filename = utils.getModuleName('src', name);

describe(chalk.bold.cyan('generator-phaser-plus:object'), () => {
  //  Base classes to test.
  const baseClasses = [
    'sprite',
    'image',
    'tile-sprite',
    'blitter',
    'group',
    'zone',
    'dynamic-bitmap-text',
    'graphics'
  ];

  for (const baseClass of baseClasses) {
    const name = utils.pascalCase(`test-${baseClass}`);
    const filename = utils.getModuleName('src', name);
    const className = utils.pascalCase(baseClass);

    it(`creates a '${name}' class extending the '${className}' class`, () =>
      runGenerator('object')
        .withArguments([name])
        .withPrompts({baseClass})
        .then(() => {
          assert.fileContent([
            `class ${name}`,
            `extends Phaser.GameObjects.${className} {`,
            `@class ${name}`
          ].map(s => [filename, s]));
        }));
  }

  it(`creates a plain '${name}' class`, () =>
    runGenerator('object')
      .withArguments([name])
      .withPrompts({baseClass: 'plain'})
      .then(() => {
        assert.fileContent(
          filename,
          `class ${name} {`
        );
      }));
});
