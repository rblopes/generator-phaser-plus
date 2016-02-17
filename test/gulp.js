/*
 * Gulp generator test suite.
 */

'use strict';

var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('gulp generator', function () {
  before(function (done) {
    helpers.run(require.resolve('../generators/gulp'))
      .withOptions({
        customBuild: 'phaser'
      })
      .on('end', done);
  });

  it('copies Gulp modules to project root', function () {
    assert.file([
      'gulpfile.js/config.js',
      'gulpfile.js/index.js',
      'gulpfile.js/tasks/dev.js',
      'gulpfile.js/tasks/dist.js',
      'gulpfile.js/tasks/helpers',
      'gulpfile.js/tasks/helpers/bundler.js'
    ]);
  });

  it('configures the tasks with the user choices.', function () {
    var file = 'gulpfile.js/config.js';
    assert.fileContent(file,
      'var PHASER = \'node_modules/phaser/build/phaser.js\';');
  });
});
