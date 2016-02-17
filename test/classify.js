'use strict';

var assert = require('assert');
var classify = require('../lib/classify');

describe('`classify` module', function () {
  var c1 = 'test';
  var c2 = '__!!test??__';
  var c3 = '--test--test--';
  var c4 = 'Some class name';
  var c5 = 'Sømè wëîrd çlâß ñåmé';

  it('capitalize names', function () {
    assert.strictEqual(classify(c1), 'Test');
  });

  it('escapes punctuation and symbols', function () {
    assert.strictEqual(classify(c2), 'Test');
  });

  it('camelcase dasherized names', function () {
    assert.strictEqual(classify(c3), 'TestTest');
  });

  it('camelcase words', function () {
    assert.strictEqual(classify(c4), 'SomeClassName');
  });

  it('deburr and camelcase words', function () {
    assert.strictEqual(classify(c5), 'SomeWeirdClassName');
  });
});
