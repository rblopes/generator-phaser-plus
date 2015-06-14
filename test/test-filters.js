'use strict';


var assert = require('assert');

var filters = require('../slushfile.js/lib/filters');


describe('filters', function () {
  describe('trim', function () {
    var t1 = '           left padded';
    var t2 = 'right padded          ';
    var t3 = '        padded        ';

    it('filter left padded strings', function () {
      assert.strictEqual(filters.trim(t1), 'left padded');
    });

    it('filter right padded strings', function () {
      assert.strictEqual(filters.trim(t2), 'right padded');
    });

    it('filter padded strings', function () {
      assert.strictEqual(filters.trim(t3), 'padded');
    });
  });

  describe('classify', function () {
    var c1 = 'test';
    var c2 = '__!!test??__';
    var c3 = '--test--test--';
    var c4 = 'Some class name';
    var c5 = 'Sømè wëîrd çlâß ñåmé';

    it('capitalize names', function () {
      assert.strictEqual(filters.classify(c1), 'Test');
    });

    it('escapes punctuation and symbols', function () {
      assert.strictEqual(filters.classify(c2), 'Test');
    });

    it('camelcase dasherized names', function () {
      assert.strictEqual(filters.classify(c3), 'TestTest');
    });

    it('camelcase words', function () {
      assert.strictEqual(filters.classify(c4), 'SomeClassName');
    });

    it('deburr and camelcase words', function () {
      // NOTE: limited to the Latin 1 supplementary table,
      //       missing some character conversions.
      assert.strictEqual(filters.classify(c5), 'SomeWeirdClassName');
    });
  });
});
