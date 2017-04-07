'use strict';

const chalk = require('chalk');
const assert = require('assert');
const classify = require('../lib/classify');

describe(chalk.cyan('`classify` module'), () => {
  const c1 = 'test';
  const c2 = '__!!test??__';
  const c3 = '--test--test--';
  const c4 = 'Some class name';
  const c5 = 'Sømè wëîrd çlâß ñåmé';

  it('capitalize names', () => {
    assert.strictEqual(classify(c1), 'Test');
  });

  it('escapes punctuation and symbols', () => {
    assert.strictEqual(classify(c2), 'Test');
  });

  it('camelcase dasherized names', () => {
    assert.strictEqual(classify(c3), 'TestTest');
  });

  it('camelcase words', () => {
    assert.strictEqual(classify(c4), 'SomeClassName');
  });

  it('deburr and camelcase words', () => {
    assert.strictEqual(classify(c5), 'SomeWeirdClassName');
  });
});
