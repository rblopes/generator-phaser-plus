'use strict';


var assert = require('assert');

var helpers = require('../slushfile.js/lib/helpers');


describe('helpers', function () {
  describe('trim', function () {
    var t1 = '           left padded';
    var t2 = 'right padded          ';
    var t3 = '        padded        ';

    it('filter left padded strings', function () {
      assert.strictEqual(helpers.trim(t1), 'left padded');
    });

    it('filter right padded strings', function () {
      assert.strictEqual(helpers.trim(t2), 'right padded');
    });

    it('filter padded strings', function () {
      assert.strictEqual(helpers.trim(t3), 'padded');
    });
  });

  describe('classify', function () {
    var c1 = 'test';
    var c2 = '__!!test??__';
    var c3 = '--test--test--';
    var c4 = 'Some class name';
    var c5 = 'Sømè wëîrd çlâß ñåmé';

    it('capitalize names', function () {
      assert.strictEqual(helpers.classify(c1), 'Test');
    });

    it('escapes punctuation and symbols', function () {
      assert.strictEqual(helpers.classify(c2), 'Test');
    });

    it('camelcase dasherized names', function () {
      assert.strictEqual(helpers.classify(c3), 'TestTest');
    });

    it('camelcase words', function () {
      assert.strictEqual(helpers.classify(c4), 'SomeClassName');
    });

    it('deburr and camelcase words', function () {
      // NOTE: limited to the Latin 1 supplementary table,
      //       missing some character conversions.
      assert.strictEqual(helpers.classify(c5), 'SomeWeirdClassName');
    });
  });

  describe('json', function () {
    it('escapes unsafe JSON strings', function () {
      assert.strictEqual(helpers.json('"Test"'), '"\\"Test\\""');
    });
  });

  describe('kebab', function () {
    var p1 = 'package';
    var p2 = 'package name';
    var p3 = '  package name  ';
    var p4 = 'package_name';

    it('ignores single word names', function () {
      assert.strictEqual(helpers.kebab(p1), 'package');
    });

    it('joins words with hyphens', function () {
      assert.strictEqual(helpers.kebab(p2), 'package-name');
    });

    it('trims strings', function () {
      assert.strictEqual(helpers.kebab(p3), 'package-name');
    });

    it('replaces non letter characters', function () {
      assert.strictEqual(helpers.kebab(p4), 'package-name');
    });
  });
});
