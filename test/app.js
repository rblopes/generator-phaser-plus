/*
 * Main generator test suite.
 */

'use strict';

const chalk = require('chalk');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

// User inputs.
const title = 'My Test Game';
const description = 'My awesome test game.';
const customBuild = 'phaser';

function runGenerator() {
  return helpers
    .run(require.resolve('../generators/app'));
}

describe(chalk.bold.cyan('generator-phaser-plus:app'), function () {
  this.timeout(0);

  describe('creates CommonJS-based projects', () => {
    it('using prompts', () =>
      runGenerator()
        .withPrompts({title, description, customBuild, baseTemplate: 'commonjs'})
        .then(checkAssets)
        .then(checkReadme)
        .then(checkGulpTasks)
        .then(checkCommonJsConfig)
        .then(checkCommonJsModules));
  });

  describe('creates ECMAScript-based projects', () => {
    it('using prompts', () =>
      runGenerator()
        .withPrompts({title, description, customBuild, baseTemplate: 'esnext'})
        .then(checkAssets)
        .then(checkReadme)
        .then(checkGulpTasks)
        .then(checkECMAScriptConfig)
        .then(checkECMAScriptModules));
  });

  function checkCommonJsConfig() {
    assert.file([
      '.editorconfig',
      '.eslintrc.js',
      '.gitattributes',
      '.gitignore',
      '.yo-rc.json',
      'package.json',
      'yarn.lock'
    ]);
  }

  function checkECMAScriptConfig() {
    assert.file([
      '.babelrc',
      '.editorconfig',
      '.eslintrc.js',
      '.gitattributes',
      '.gitignore',
      '.yo-rc.json',
      'package.json',
      'yarn.lock'
    ]);
  }

  function checkReadme() {
    assert.fileContent([
      ['README.md', `# [${title}]`],
      ['README.md', `>   ${description}`]
    ]);
  }

  function checkGulpTasks() {
    assert.file([
      'gulpfile.js/index.js',
      'gulpfile.js/lib/bundler.js',
      'gulpfile.js/lib/get-named-buffer.js',
      'gulpfile.js/tasks/dev.js',
      'gulpfile.js/tasks/dist.js'
    ]);
    assert.fileContent(
      'gulpfile.js/config.js',
      `{PHASER_BUILDS}/${customBuild}.js`
    );
  }

  function checkCommonJsModules() {
    assert.file([
      'src/assets.js',
      'src/objects/Logo.js',
      'src/states/Boot.js',
      'src/states/Game.js',
      'src/states/index.js',
      'src/states/Preloader.js'
    ]);
    assert.fileContent('src/app.js', 'exports.init = function () {');
  }

  function checkECMAScriptModules() {
    assert.file([
      'src/assets.js',
      'src/objects/Logo.js',
      'src/states.js',
      'src/states/Boot.js',
      'src/states/Game.js',
      'src/states/Preloader.js'
    ]);
    assert.fileContent('src/app.js', 'export function init() {');
  }

  function checkAssets() {
    assert.file([
      'static/assets/phaser.png',
      'static/assets/progress-bar.png',
      'static/assets/splash-screen.png'
    ]);
    assert.fileContent([
      ['static/index.html', `<title>${title}</title>`],
      ['static/index.html', `<meta name="description" content="${description}">`]
    ]);
  }
});
