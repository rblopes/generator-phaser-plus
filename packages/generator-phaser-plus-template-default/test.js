'use strict';

const chalk = require('chalk');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

// User inputs.
const title = 'Test Title';
const description = 'Test Description';

function runGenerator() {
  return helpers
    .run(require.resolve('.'));
}

describe(chalk.bold.cyan('generator-phaser-plus-template-default'), function () {
  this.timeout(0);

  it('creates the project', () =>
    runGenerator()
      .withOptions({variables: {title, description}})
      .then(checkReadme)
      .then(checkTasks)
      .then(checkConfig)
      .then(checkAssets)
      .then(checkScripts));

  function checkReadme() {
    assert.file('screenshot.png');
    assert.fileContent([
      ['README.md', `# [${title}]`],
      ['README.md', `>   ${description}`]
    ]);
  }

  function checkTasks() {
    assert.file([
      'gulpfile.js/config/browsersync.js',
      'gulpfile.js/config/paths.js',
      'gulpfile.js/config/webpack/index.js',
      'gulpfile.js/config/webpack/plugins.js',
      'gulpfile.js/config/webpack/rules.js',
      'gulpfile.js/index.js',
      'gulpfile.js/lib/server.js',
      'gulpfile.js/lib/webpack-middlewares.js',
      'gulpfile.js/lib/webpack.js',
      'gulpfile.js/tasks/clean.js',
      'gulpfile.js/tasks/compile.js',
      'gulpfile.js/tasks/copy-assets.js',
      'gulpfile.js/tasks/dist.js',
      'gulpfile.js/tasks/serve.js'
    ]);
  }

  function checkConfig() {
    assert.file([
      '.editorconfig',
      '.eslintrc.js',
      '.gitattributes',
      '.gitignore'
    ]);
    assert.fileContent([
      ['package.json', `"title": ${JSON.stringify(title)}`],
      ['package.json', `"description": ${JSON.stringify(description)}`]
    ]);
  }

  function checkAssets() {
    assert.file([
      'app/index.html',
      'app/static/favicon.ico',
      'app/static/assets/logo.png',
      'app/static/assets/progress-bar.png',
      'app/static/assets/splash-screen.png'
    ]);
  }

  function checkScripts() {
    assert.file([
      'app/scripts/assets.js',
      'app/scripts/config.js',
      'app/scripts/index.js',
      'app/scripts/objects/logo.js',
      'app/scripts/scenes/game.js',
      'app/scripts/scenes/index.js',
      'app/scripts/scenes/splash-screen.js'
    ]);
  }
});
