/*
 * Game state generator test suite.
 */

'use strict';

const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

// Return a callback to be used in the 'before' hook of a test, to run the
// generator with given answers in a mock project.
function runOnMockProject(name, prompts) {
  return () => helpers
    .run(require.resolve('../generators/state'))
    .inTmpDir(dir => fse.copySync(
      path.join(__dirname, `../test/fixtures/${name}-project/`), dir))
    .withPrompts(prompts)
    .toPromise();
}

describe('state generator - CommonJS projects', () => {
  describe('with default methods', () => {
    before(runOnMockProject('commonjs', {
      name: 'Test',
      description: 'Just a test state.'
    }));

    it('creates a game state class with the chosen methods', () => {
      const file = 'src/Test.js';
      assert.file(file);
      assert.fileContent(file, '* Just a test state.');
      assert.noFileContent(file, 'exports.init = function (/*game*/) {');
      assert.noFileContent(file, 'exports.preload = function (/*game*/) {');
      assert.fileContent(file, 'exports.create = function (/*game*/) {');
      assert.fileContent(file, 'exports.update = function (/*game*/) {');
      assert.noFileContent(file, 'exports.render = function (/*game*/) {');
      assert.noFileContent(file, 'exports.shutdown = function (/*game*/) {');
    });

    it('appends the `require` line to the states index script', () => {
      const file = 'src/states-index.js';
      assert.fileContent(file, `exports.Nada = require('./Nada');`);
      assert.fileContent(file, `exports.Test = require('./Test');`);
    });
  });

  describe('with custom methods', () => {
    before(runOnMockProject('commonjs', {
      name: 'Test',
      description: 'Just a test state.',
      methods: ['init', 'create', 'render', 'shutdown']
    }));

    it('creates a game state class with the chosen methods', () => {
      const file = 'src/Test.js';
      assert.file(file);
      assert.fileContent(file, '* Just a test state.');
      assert.fileContent(file, 'exports.init = function (/*game*/) {');
      assert.noFileContent(file, 'exports.preload = function (/*game*/) {');
      assert.fileContent(file, 'exports.create = function (/*game*/) {');
      assert.noFileContent(file, 'exports.update = function (/*game*/) {');
      assert.fileContent(file, 'exports.render = function (/*game*/) {');
      assert.fileContent(file, 'exports.shutdown = function (/*game*/) {');
    });

    it('appends the `require` line to the states index script', () => {
      const file = 'src/states-index.js';
      assert.fileContent(file, `exports.Nada = require('./Nada');`);
      assert.fileContent(file, `exports.Test = require('./Test');`);
    });
  });

  describe('with all methods', () => {
    before(runOnMockProject('commonjs', {
      name: 'Test',
      description: 'Just a test state.',
      methods: ['init', 'preload', 'create', 'update', 'render', 'shutdown']
    }));

    it('creates a game state class with the chosen methods', () => {
      const file = 'src/Test.js';
      assert.file(file);
      assert.fileContent(file, '* Just a test state.');
      assert.fileContent(file, 'exports.init = function (/*game*/) {');
      assert.fileContent(file, 'exports.preload = function (/*game*/) {');
      assert.fileContent(file, 'exports.create = function (/*game*/) {');
      assert.fileContent(file, 'exports.update = function (/*game*/) {');
      assert.fileContent(file, 'exports.render = function (/*game*/) {');
      assert.fileContent(file, 'exports.shutdown = function (/*game*/) {');
    });

    it('appends the `require` line to the states index script', () => {
      const file = 'src/states-index.js';
      assert.fileContent(file, `exports.Nada = require('./Nada');`);
      assert.fileContent(file, `exports.Test = require('./Test');`);
    });
  });
});

describe('state generator - ECMAScript projects', () => {
  describe('with default methods', () => {
    before(runOnMockProject('esnext', {
      name: 'Test',
      description: 'Just a test state.'
    }));

    it('creates a game state class with the chosen methods', () => {
      const file = 'src/Test.js';
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

    it('appends the `export` statement to the states index script', () => {
      const file = 'src/states-index.js';
      assert.fileContent(file, `export {default as Nada} from './Nada';`);
      assert.fileContent(file, `export {default as Test} from './Test';`);
    });
  });

  describe('with custom methods', () => {
    before(runOnMockProject('esnext', {
      name: 'Test',
      description: 'Just a test state.',
      methods: ['init', 'create', 'render', 'shutdown']
    }));

    it('creates a game state class with the chosen methods', () => {
      const file = 'src/Test.js';
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

    it('appends the `export` statement to the states index script', () => {
      const file = 'src/states-index.js';
      assert.fileContent(file, `export {default as Nada} from './Nada';`);
      assert.fileContent(file, `export {default as Test} from './Test';`);
    });
  });

  describe('with all methods', () => {
    before(runOnMockProject('esnext', {
      name: 'Test',
      description: 'Just a test state.',
      methods: ['init', 'preload', 'create', 'update', 'render', 'shutdown']
    }));

    it('creates a game state class with the chosen methods', () => {
      const file = 'src/Test.js';
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

    it('appends the `export` statement to the states index script', () => {
      const file = 'src/states-index.js';
      assert.fileContent(file, `export {default as Nada} from './Nada';`);
      assert.fileContent(file, `export {default as Test} from './Test';`);
    });
  });
});
