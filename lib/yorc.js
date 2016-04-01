'use strict';

var defaults = exports.defaults = {
  'dirs': {
    objects: 'src/objects',
    plugins: 'src/plugins',
    states: 'src/states'
  },
  'states-module': 'src/states.js'
};

exports.get = function get(g, key) {
  return g.config.get(key) || defaults[key];
};
