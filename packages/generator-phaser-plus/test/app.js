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
      .then(checkFiles));

  function checkFiles() {
    assert.fileContent([
      ['README.md', `# [${title}]`],
      ['README.md', `>   ${description}`]
    ]);
    assert.fileContent([
      ['package.json', `"title": ${JSON.stringify(title)}`],
      ['package.json', `"description": ${JSON.stringify(description)}`]
    ]);
  }
});
