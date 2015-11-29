/*
 * Main generator test suite.
 */

'use strict';

var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('default generator', function () {
  before(function (done) {
    helpers.run(require.resolve('../generators/app'))
      .withPrompts({
        title: 'My Test Game',
        description: 'My awesome test game.',
        customBuild: 'phaser',
        proceed: true
      })
      .on('end', done);
  });

  it('copies README and configuration files to project root', function () {
    assert.file([
      '.babelrc',
      '.editorconfig',
      '.eslintrc',
      '.gitattributes',
      '.gitignore',
      '.yo-rc.json',
      'package.json',
      'README.md'
    ]);
  });

  it('Fills the game title and description in README', function () {
    var file = 'README.md';
    assert.fileContent(file, '# [My Test Game]');
    assert.fileContent(file, '>   My awesome test game.');
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

  it('Configures the tasks with the user choices.', function () {
    var file = 'gulpfile.js/config.js';
    assert.fileContent(file,
      'var PHASER = \'node_modules/phaser/build/phaser.js\';');
  });

  it('copies sample game code', function () {
    assert.file([
      'src/app.js',
      'src/app/data/assets.js',
      'src/app/objects/SplashScreen.js',
      'src/app/states.js',
      'src/app/states/Boot.js',
      'src/app/states/Game.js',
      'src/app/states/Preload.js'
    ]);
  });

  it('copies resources directory contents', function () {
    assert.file('resources/sfx/README.md');
  });

  it('copies initial game assets', function () {
    assert.file([
      'static/assets/phaser.png',
      'static/assets/progress-bar.png',
      'static/assets/splash-screen.png',
      'static/browserconfig.xml',
      'static/favicon.ico',
      'static/icons/android-chrome-144x144.png',
      'static/icons/android-chrome-192x192.png',
      'static/icons/android-chrome-36x36.png',
      'static/icons/android-chrome-48x48.png',
      'static/icons/android-chrome-72x72.png',
      'static/icons/android-chrome-96x96.png',
      'static/icons/apple-touch-icon-114x114.png',
      'static/icons/apple-touch-icon-120x120.png',
      'static/icons/apple-touch-icon-144x144.png',
      'static/icons/apple-touch-icon-152x152.png',
      'static/icons/apple-touch-icon-180x180.png',
      'static/icons/apple-touch-icon-57x57.png',
      'static/icons/apple-touch-icon-60x60.png',
      'static/icons/apple-touch-icon-72x72.png',
      'static/icons/apple-touch-icon-76x76.png',
      'static/icons/apple-touch-icon-precomposed.png',
      'static/icons/apple-touch-icon.png',
      'static/icons/favicon-160x160.png',
      'static/icons/favicon-16x16.png',
      'static/icons/favicon-196x196.png',
      'static/icons/favicon-32x32.png',
      'static/icons/favicon-96x96.png',
      'static/icons/mstile-144x144.png',
      'static/icons/mstile-150x150.png',
      'static/icons/mstile-310x150.png',
      'static/icons/mstile-310x310.png',
      'static/icons/mstile-70x70.png',
      'static/index.html',
      'static/manifest.json'
    ]);
  });

  it('Fills title and description in the HTML document', function () {
    var file = 'static/index.html';
    assert.fileContent(file, '<title>My Test Game</title>');
    assert.fileContent(file, '<meta name="description" content="My awesome test game.">');
  });

  it('Fills the game title in the page manifest', function () {
    var file = 'static/manifest.json';
    assert.fileContent(file, '"name": "My Test Game"');
  });
});
