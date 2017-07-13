/*
 * defaults
 * ========
 *
 * Default configuration values for each project template.
 */

'use strict';

exports.commonjs = {
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
};

exports.esnext = {
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
};
