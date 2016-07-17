/*
 * yorc
 * ====
 *
 * Helper functions to manage configuration of projects.
 */

'use strict';

// The configuration for each project base template.
const defaults = {
  commonjs: {
    baseTemplate: 'commonjs',
    dirs: {
      objects: 'src/objects/',
      plugins: 'src/plugins/',
      states: 'src/states/'
    },
    states: {
      moduleName: 'src/states/index.js',
      requirePath: './'
    }
  },

  esnext: {
    baseTemplate: 'esnext',
    dirs: {
      objects: 'src/objects/',
      plugins: 'src/plugins/',
      states: 'src/states/'
    },
    states: {
      moduleName: 'src/states.js',
      requirePath: './states/'
    }
  }
};

exports.defaultsFor = function (g, baseTemplate) {
  return Object.assign({
    meta: {
      createdWith: g.rootGeneratorVersion(),
      creationDate: new Date().toISOString()
    }
  }, defaults[baseTemplate]);
};

exports.get = function (g, key) {
  // NOTE: Projects created using generator-phaser-plus releases prior to
  // `v1.0.0` are compatible with the 'esnext' base template. To keep backward
  // compatibility when using sub-generators, we assume this is the default
  // base template for old projects.
  const baseTemplate = g.config.get('baseTemplate') || 'esnext';
  return g.config.get(key) || defaults[baseTemplate][key];
};
