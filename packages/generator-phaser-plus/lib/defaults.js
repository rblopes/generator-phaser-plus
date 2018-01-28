/*
 * defaults
 * ========
 *
 * Default configuration values for each project template.
 */

module.exports = {
  objects: {
    dest: 'app/scripts/objects/'
  },
  plugins: {
    dest: 'app/scripts/plugins/'
  },
  scenes: {
    dest: 'app/scripts/scenes/',
    index: {
      name: 'app/scripts/scenes/index.js',
      requirePath: './'
    }
  }
};
