/*
 * Phaser plugin generator test suite.
 */

'use strict';

const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('plugin generator', () => {
  before(() => helpers
    .run(require.resolve('../generators/plugin'))
    .withPrompts({
      name: 'Test',
      description: 'Just a test plugin.'
    })
    .withLocalConfig({
      dirs: {
        plugins: 'some-dir'
      }
    })
    .toPromise());

  it('creates a test plugin class', () => {
    const file = 'some-dir/Test.js';
    assert.file(file);
    assert.fileContent(file, '* Just a test plugin.');
    assert.fileContent(file, 'class Test extends Phaser.Plugin');
  });
});
