/*
 * Main generator test suite.
 */

'use strict';

const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const files = {
  // Initial sample assets
  assets: [
    'static/assets/phaser.png',
    'static/assets/progress-bar.png',
    'static/assets/splash-screen.png',
    'static/index.html'
  ],
  // Project configuration by base template
  config: {
    commonjs: [
      '.editorconfig',
      '.eslintrc.yml',
      '.gitattributes',
      '.gitignore',
      '.yo-rc.json',
      'package.json'
    ],
    esnext: [
      '.babelrc',
      '.editorconfig',
      '.eslintrc.yml',
      '.gitattributes',
      '.gitignore',
      '.yo-rc.json',
      'package.json'
    ]
  },
  // Project application modules by base template
  scripts: {
    commonjs: [
      'src/app.js',
      'src/assets.js',
      'src/objects/Logo.js',
      'src/states/Boot.js',
      'src/states/Game.js',
      'src/states/index.js',
      'src/states/Preloader.js'
    ],
    esnext: [
      'src/app.js',
      'src/assets.js',
      'src/objects/Logo.js',
      'src/states.js',
      'src/states/Boot.js',
      'src/states/Game.js',
      'src/states/Preloader.js'
    ]
  },
  // Common Gulp modules
  gulpfiles: [
    'gulpfile.js/bs-config.js',
    'gulpfile.js/config.js',
    'gulpfile.js/index.js',
    'gulpfile.js/lib/bundler.js',
    'gulpfile.js/lib/get-named-buffer.js',
    'gulpfile.js/tasks/dev.js',
    'gulpfile.js/tasks/dist.js'
  ]
};

describe('default generator', function () {
  this.timeout(0);

  describe('CommonJS-based projects', () => {
    before(() => helpers
      .run(require.resolve('../generators/app'))
      .withPrompts({
        title: 'My Test Game',
        description: 'My awesome test game.',
        customBuild: 'phaser',
        baseTemplate: 'commonjs'
      })
      .toPromise());

    it('configuration files', () => assert.file(files.config.commonjs));

    it('README', () => {
      const file = 'README.md';
      assert.file(file);
      assert.fileContent(file, '# [My Test Game]');
      assert.fileContent(file, '>   My awesome test game.');
    });

    it('gulp tasks', () => assert.file(files.gulpfiles));

    it('Phaser build configured in tasks', () => {
      assert.fileContent('gulpfile.js/config.js',
        '{PHASER_BUILDS}/phaser.js');
    });

    it('sample game scripts', () => assert.file(files.scripts.commonjs));

    it('sample game scripts are CommonJS modules', () => {
      assert.fileContent('src/app.js', 'exports.init = function () {');
    });

    it('sample game assets', () => assert.file(files.assets));

    it('sample `index.html` title and description', () => {
      const file = 'static/index.html';
      assert.fileContent(file, '<title>My Test Game</title>');
      assert.fileContent(file, '<meta name="description" content="My awesome test game.">');
    });
  });

  describe('ECMAScript-based projects', () => {
    before(() => helpers
      .run(require.resolve('../generators/app'))
      .withPrompts({
        title: 'My Test Game',
        description: 'My awesome test game.',
        customBuild: 'phaser',
        baseTemplate: 'esnext'
      })
      .toPromise());

    it('configuration files', () => assert.file(files.config.esnext));

    it('README', () => {
      const file = 'README.md';
      assert.file(file);
      assert.fileContent(file, '# [My Test Game]');
      assert.fileContent(file, '>   My awesome test game.');
    });

    it('gulp tasks', () => assert.file(files.gulpfiles));

    it('Phaser build configured in tasks', () => {
      assert.fileContent('gulpfile.js/config.js',
        '{PHASER_BUILDS}/phaser.js');
    });

    it('sample game scripts', () => assert.file(files.scripts.esnext));

    it('sample game scripts are ECMAScript modules', () => {
      assert.fileContent('src/app.js', 'export function init() {');
    });

    it('sample game assets', () => assert.file(files.assets));

    it('sample `index.html` title and description', () => {
      const file = 'static/index.html';
      assert.fileContent(file, '<title>My Test Game</title>');
      assert.fileContent(file, '<meta name="description" content="My awesome test game.">');
    });
  });
});
