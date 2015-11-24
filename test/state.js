/*
 * Game state generator test suite.
 */

'use strict';

var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('state generator', function () {
  before(function (done) {
    helpers.run(require.resolve('../generators/state'))
      .withPrompts({
        name: 'Test',
        description: 'Just a test state.',
        proceed: true
      })
      .withLocalConfig({
        dirs: {
          states: 'some-dir'
        }
      })
      .on('end', done);
  });

  it('creates a test game state class', function () {
    var file = 'some-dir/Test.js';
    assert.file(file);
    assert.fileContent(file, '* Just a test state.');
    assert.fileContent(file, 'class Test extends Phaser.State');
  });
});
