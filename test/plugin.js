/*
 * Phaser plugin generator test suite.
 */

'use strict';

const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

// Return a callback to be used in the 'before' hook of a test, to run the
// generator with given answers in a mock project.
function runOnMockProject(name, prompts) {
  return () => helpers
    .run(require.resolve('../generators/plugin'))
    .inTmpDir(dir => fse.copySync(
      path.join(__dirname, `../test/fixtures/${name}-project/`), dir))
    .withPrompts(prompts)
    .toPromise();
}

describe('plugin generator - CommonJS projects', () => {
  before(runOnMockProject('commonjs', {
    name: 'Test',
    description: 'Just a test plugin.'
  }));

  it('creates a test plugin', () => {
    const file = 'src/Test.js';
    assert.file(file);
    assert.fileContent(file, '* Just a test plugin.');
    assert.fileContent(file, 'function Test(game, parent) {');
  });
});

describe('plugin generator - ECMAScript projects', () => {
  before(runOnMockProject('esnext', {
    name: 'Test',
    description: 'Just a test plugin.'
  }));

  it('creates a test plugin', () => {
    const file = 'src/Test.js';
    assert.file(file);
    assert.fileContent(file, '* Just a test plugin.');
    assert.fileContent(file, 'class Test extends Phaser.Plugin {');
  });
});
