/*
 * Game object generator test suite.
 */

'use strict';

var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('object generator', function () {
  describe('extending a regular Phaser class', function () {
    before(function (done) {
      helpers.run(require.resolve('../generators/object'))
        .withPrompts({
          name: 'Test',
          description: 'Just a test object.',
          baseClass: 'Image',
          proceed: true
        })
        .withLocalConfig({
          dirs: {
            objects: 'some-dir'
          }
        })
        .on('end', done);
    });

    it('creates an test game object class', function () {
      var file = 'some-dir/Test.js';
      assert.file(file);
      assert.fileContent(file, '* Just a test object.');
      assert.fileContent(file, 'class Test extends Phaser.Image');
    });
  });

  describe('not extending a Phaser class', function () {
    before(function (done) {
      helpers.run(require.resolve('../generators/object'))
        .withPrompts({
          name: 'AnotherTest',
          description: 'Just another test object.',
          baseClass: null,
          proceed: true
        })
        .withLocalConfig({
          dirs: {
            objects: 'some-dir'
          }
        })
        .on('end', done);
    });

    it('creates an test game object class', function () {
      var file = 'some-dir/AnotherTest.js';
      assert.file(file);
      assert.fileContent(file, '* Just another test object.');
      assert.fileContent(file, 'class AnotherTest {');
    });
  });
});
