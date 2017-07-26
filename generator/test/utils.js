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

  describe(chalk.bold.cyan('#pascalCase'), () => {
    const c1 = 'test';
    const c2 = '__!!test??__';
    const c3 = '--test--test--';
    const c4 = 'Some class name';
    const c5 = 'Sømè wëîrd çlâß ñåmé';

    it('capitalize names', () => test(c1, 'Test'));
    it('escapes punctuation and symbols', () => test(c2, 'Test'));
    it('converts names separated by dashes', () => test(c3, 'TestTest'));
    it('converts words', () => test(c4, 'SomeClassName'));
    it('replaces non-ASCII characters', () => test(c5, 'SomeWeirdClassName'));

    function test(s, expected) {
      assert.strictEqual(utils.pascalCase(s), expected);
    }
  });
});
