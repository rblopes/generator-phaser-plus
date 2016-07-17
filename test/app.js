/*
 * Main generator test suite.
 */

'use strict';

const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('default generator', () => {
  before(() => helpers
    .run(require.resolve('../generators/app'))
    .withPrompts({
      title: 'My Test Game',
      description: 'My awesome test game.',
      customBuild: 'phaser'
    })
    .toPromise());

  it('copies README and configuration files to project root', () => {
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

  it('fills the game title and description in README', () => {
    const file = 'README.md';
    assert.fileContent(file, '# [My Test Game]');
    assert.fileContent(file, '>   My awesome test game.');
  });

  it('copies Gulp modules to project root', () => {
    assert.file([
      'gulpfile.js/config.js',
      'gulpfile.js/index.js',
      'gulpfile.js/lib/bundler.js',
      'gulpfile.js/tasks/dev.js',
      'gulpfile.js/tasks/dist.js'
    ]);
  });

  it('configures the tasks with the user choices.', () => {
    const file = 'gulpfile.js/config.js';
    assert.fileContent(file,
      `var PHASER = 'node_modules/phaser/build/phaser.js';`);
  });

  it('copies sample game code', () => {
    assert.file([
      'src/app.js',
      'src/assets.js',
      'src/objects/Logo.js',
      'src/states.js',
      'src/states/Boot.js',
      'src/states/Game.js',
      'src/states/Preload.js'
    ]);
  });

  it('copies initial game assets', () => {
    assert.file([
      'static/assets/phaser.png',
      'static/assets/progress-bar.png',
      'static/assets/splash-screen.png',
      'static/index.html'
    ]);
  });

  it('fills title and description in the HTML document', () => {
    const file = 'static/index.html';
    assert.fileContent(file, '<title>My Test Game</title>');
    assert.fileContent(file, '<meta name="description" content="My awesome test game.">');
  });
});
