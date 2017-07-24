/*
 * Test suite for utility functions.
 */

'use strict';

const assert = require('assert');
const chalk = require('chalk');
const utils = require('../lib/utils');

describe(chalk.bold.cyan('`utils` module'), () => {
  describe(chalk.bold.cyan('#getModuleName'), () => {
    it('makes CommonJS module names', () => {
      test('Class', '-/class.js');
      test('AnotherClass', '-/another-class.js');
    });

    function test(className, expected) {
      assert.strictEqual(utils.getModuleName('-', className), expected);
    }
  });
});
