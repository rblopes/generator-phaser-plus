/*
 * defaults
 * ========
 *
 * Default configuration values for each project template.
 */

exports.commonjs = {
  baseTemplate: 'commonjs',
  objects: {
    dest: 'src/objects/'
  },
  scenes: {
    dest: 'src/states/',
    index: {
      name: 'src/states/index.js',
      requirePath: './'
    }
  }
};

exports.esnext = {
  baseTemplate: 'esnext',
  objects: {
    dest: 'src/objects/'
  },
  scenes: {
    dest: 'src/states/',
    index: {
      name: 'src/states.js',
      requirePath: './states/'
    }
  }
};
