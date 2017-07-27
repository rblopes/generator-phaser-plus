/*
 * defaults
 * ========
 *
 * Default configuration values for each project template.
 */

exports.commonjs = {
  baseTemplate: 'commonjs',
  objects: {
    dest: 'app/scripts/objects/'
  },
  scenes: {
    dest: 'app/scripts/states/',
    index: {
      name: 'app/scripts/states/index.js',
      requirePath: './'
    }
  }
};

exports.esnext = {
  baseTemplate: 'esnext',
  objects: {
    dest: 'app/scripts/objects/'
  },
  scenes: {
    dest: 'app/scripts/states/',
    index: {
      name: 'app/scripts/states/index.js',
      requirePath: './'
    }
  }
};
