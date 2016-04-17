/*
 * Game state generator test suite.
 */

'use strict';

var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('state generator', function () {
  describe('with default options', function () {
    before(function (done) {
      helpers.run(require.resolve('../generators/state'))
        .withPrompts({
          name: 'Test',
          description: 'Just a test state.',
          proceed: true
        })
        .withLocalConfig({
          dirs: {
            states: 'some-dir'
          }
        })
        .on('end', done);
    });

    it('creates a test game state class', function () {
      var file = 'some-dir/Test.js';
      assert.file(file);
      assert.fileContent(file, '* Just a test state.');
      assert.fileContent(file, 'class Test extends Phaser.State');

      assert.noFileContent(file, 'init() {');
      assert.noFileContent(file, 'preload() {');
      assert.fileContent(file, 'create() {');
      assert.fileContent(file, 'update() {');
      assert.noFileContent(file, 'render() {');
      assert.noFileContent(file, 'shutdown() {');
    });
  });

  describe('with custom methods', function () {
    before(function (done) {
      helpers.run(require.resolve('../generators/state'))
        .withPrompts({
          name: 'Test',
          description: 'Just a test state.',
          methods: ['init', 'create', 'render', 'shutdown'],
          proceed: true
        })
        .withLocalConfig({
          dirs: {
            states: 'some-dir'
          }
        })
        .on('end', done);
    });

    it('creates a test game state class', function () {
      var file = 'some-dir/Test.js';
      assert.file(file);
      assert.fileContent(file, '* Just a test state.');
      assert.fileContent(file, 'class Test extends Phaser.State');

      assert.fileContent(file, 'init() {');
      assert.noFileContent(file, 'preload() {');
      assert.fileContent(file, 'create() {');
      assert.noFileContent(file, 'update() {');
      assert.fileContent(file, 'render() {');
      assert.fileContent(file, 'shutdown() {');
    });
  });

  describe('with all methods', function () {
    before(function (done) {
      helpers.run(require.resolve('../generators/state'))
        .withPrompts({
          name: 'Test',
          description: 'Just a test state.',
          methods: ['init', 'preload', 'create', 'update', 'render', 'shutdown'],
          proceed: true
        })
        .withLocalConfig({
          dirs: {
            states: 'some-dir'
          }
        })
        .on('end', done);
    });

    it('creates a test game state class', function () {
      var file = 'some-dir/Test.js';
      assert.file(file);
      assert.fileContent(file, '* Just a test state.');
      assert.fileContent(file, 'class Test extends Phaser.State');

      assert.fileContent(file, 'init() {');
      assert.fileContent(file, 'preload() {');
      assert.fileContent(file, 'create() {');
      assert.fileContent(file, 'update() {');
      assert.fileContent(file, 'render() {');
      assert.fileContent(file, 'shutdown() {');
    });
  });
});
