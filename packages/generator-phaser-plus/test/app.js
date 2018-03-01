/*
 * Main generator test suite.
 */

'use strict';

const chalk = require('chalk');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

// User inputs.
const title = 'My Test Game';
const description = 'My Awesome Test Game.';

function runGenerator() {
  return helpers
    .run(require.resolve('../generators/app'));
}

describe(chalk.bold.cyan('generator-phaser-plus:app'), function () {
  this.timeout(0);

  it('creates the project', () =>
    runGenerator()
      .withPrompts({title, description})
      .then(checkReadme)
      .then(checkTasks)
      .then(checkConfig)
      .then(checkAssets)
      .then(checkScripts));

  function checkReadme() {
    assert.fileContent([
      ['README.md', `# [${title}]`],
      ['README.md', `>   ${description}`]
    ]);
  }

  function checkTasks() {
    assert.file([
      'gulpfile.js/config/babel.js',
      'gulpfile.js/config/webpack',
      'gulpfile.js/config/webpack/uglify.js',
      'gulpfile.js/config/webpack/plugins.js',
      'gulpfile.js/config/webpack/index.js',
      'gulpfile.js/config/paths.js',
      'gulpfile.js/config/browsersync.js',
      'gulpfile.js/index.js',
      'gulpfile.js/tasks/copy-assets.js',
      'gulpfile.js/tasks/serve.js',
      'gulpfile.js/tasks/clean.js',
      'gulpfile.js/tasks/dist.js',
      'gulpfile.js/tasks/compile.js',
      'gulpfile.js/lib/server.js',
      'gulpfile.js/lib/webpack-middlewares.js',
      'gulpfile.js/lib/webpack.js'
    ]);
  }

  function checkConfig() {
    assert.file([
      '.editorconfig',
      '.eslintrc.js',
      '.gitattributes',
      '.gitignore',
      '.yo-rc.json',
      'package.json'
    ]);
  }

  function checkAssets() {
    assert.file([
      'app/index.html',
      'app/static/favicon.ico',
      'app/static/assets/phaser.png',
      'app/static/assets/progress-bar.png',
      'app/static/assets/splash-screen.png'
    ]);
  }

  function checkScripts() {
    assert.file([
      'app/scripts/assets.js',
      'app/scripts/index.js',
      'app/scripts/objects/logo.js',
      'app/scripts/scenes/game.js',
      'app/scripts/scenes/index.js',
      'app/scripts/scenes/splash-screen.js'
    ]);
    assert.fileContent(
      'app/scripts/config.js',
      `export const title = '${title}';`
    );
  }
});
