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

  describe('creates ECMAScript-based projects', () => {
    it('using prompts', () =>
      runGenerator()
        .withPrompts({title, description, customBuild, baseTemplate: 'default'})
        .then(checkSharedAssets)
        .then(checkReadme)
        .then(checkWebpackConfig)
        .then(checkECMAScriptConfig)
        .then(checkECMAScriptModules));
  });

  function checkECMAScriptConfig() {
    assert.file([
      '.babelrc.js',
      '.editorconfig',
      '.eslintrc.js',
      '.gitattributes',
      '.gitignore',
      '.yo-rc.json',
      'package.json'
    ]);
  }

  function checkReadme() {
    assert.fileContent([
      ['README.md', `# [${title}]`],
      ['README.md', `>   ${description}`]
    ]);
  }

  function checkWebpackConfig() {
    assert.file([
      'config/index.js',
      'config/paths.js',
      'config/plugins.js'
    ]);
  }

  function checkECMAScriptModules() {
    assert.file([
      'app/scripts/assets.js',
      'app/scripts/objects/logo.js',
      'app/scripts/scenes/game.js',
      'app/scripts/scenes/index.js',
      'app/scripts/scenes/splash-screen.js'
    ]);
    assert.fileContent(
      'app/scripts/config.js',
      `export const title = 'My Test Game';`
    );
    assert.fileContent(
      'app/scripts/app.js',
      `import * as config from './config';`
    );
  }

  function checkSharedAssets() {
    assert.file([
      'app/index.html',
      'app/static/favicon.ico',
      'app/static/assets/phaser.png',
      'app/static/assets/progress-bar.png',
      'app/static/assets/splash-screen.png'
    ]);
  }
});
