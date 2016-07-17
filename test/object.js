/*
 * Game object generator test suite.
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
    .run(require.resolve('../generators/object'))
    .inTmpDir(dir => fse.copySync(
      path.join(__dirname, `../test/fixtures/${name}-project/`), dir))
    .withPrompts(prompts)
    .toPromise();
}

describe('object generator - CommonJS projects', () => {
  describe('extending a regular Phaser class', () => {
    before(runOnMockProject('commonjs', {
      name: 'Test',
      description: 'Just a test object.',
      baseClass: 'Image'
    }));

    it('creates an test game object class', () => {
      const file = 'src/Test.js';
      assert.file(file);
      assert.fileContent(file, '* Just a test object.');
      assert.fileContent(file, 'function Test(game/*, ...args*/) {');
      assert.fileContent(file, 'Phaser.Image.call(this, game/*, ...args*/);');
      assert.fileContent(file, 'Test.prototype = Object.create(Phaser.Image.prototype);');
    });
  });

  describe('not extending a Phaser class', () => {
    before(runOnMockProject('commonjs', {
      name: 'Test',
      description: 'Just a test object.',
      baseClass: null
    }));

    it('creates an test game object class', () => {
      const file = 'src/Test.js';
      assert.file(file);
      assert.fileContent(file, '* Just a test object.');
      assert.fileContent(file, 'function Test(game/*, ...args*/) {');
      assert.noFileContent(file, 'Test.prototype = Object.create(');
    });
  });
});

describe('object generator - ECMAScript projects', () => {
  describe('extending a regular Phaser class', () => {
    before(runOnMockProject('esnext', {
      name: 'Test',
      description: 'Just a test object.',
      baseClass: 'Image'
    }));

    it('creates an test game object class', () => {
      const file = 'src/Test.js';
      assert.file(file);
      assert.fileContent(file, '* Just a test object.');
      assert.fileContent(file, 'class Test extends Phaser.Image');
    });
  });

  describe('not extending a Phaser class', () => {
    before(runOnMockProject('esnext', {
      name: 'Test',
      description: 'Just a test object.',
      baseClass: null
    }));

    it('creates an test game object class', () => {
      const file = 'src/Test.js';
      assert.file(file);
      assert.fileContent(file, '* Just a test object.');
      assert.fileContent(file, 'class Test {');
    });
  });
});
