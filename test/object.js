/*
 * Game object generator test suite.
 */

'use strict';

const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('object generator', () => {
  describe('extending a regular Phaser class', () => {
    before(() => helpers
      .run(require.resolve('../generators/object'))
      .withPrompts({
        name: 'Test',
        description: 'Just a test object.',
        baseClass: 'Image'
      })
      .withLocalConfig({
        dirs: {
          objects: 'some-dir'
        }
      })
      .toPromise());

    it('creates an test game object class', () => {
      const file = 'some-dir/Test.js';
      assert.file(file);
      assert.fileContent(file, '* Just a test object.');
      assert.fileContent(file, 'class Test extends Phaser.Image');
    });
  });

  describe('not extending a Phaser class', () => {
    before(() => helpers
      .run(require.resolve('../generators/object'))
      .withPrompts({
        name: 'AnotherTest',
        description: 'Just another test object.',
        baseClass: null
      })
      .withLocalConfig({
        dirs: {
          objects: 'some-dir'
        }
      })
      .toPromise());

    it('creates an test game object class', () => {
      const file = 'some-dir/AnotherTest.js';
      assert.file(file);
      assert.fileContent(file, '* Just another test object.');
      assert.fileContent(file, 'class AnotherTest {');
    });
  });
});
