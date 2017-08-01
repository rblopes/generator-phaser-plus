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
    dest: 'app/scripts/scenes/',
    index: {
      name: 'app/scripts/scenes/index.js',
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
    dest: 'app/scripts/scenes/',
    index: {
      name: 'app/scripts/scenes/index.js',
      requirePath: './'
    }
  }
};
