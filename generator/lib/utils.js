/*
 * `utils` module
 * ==============
 *
 * Collection of utility functions used by the generator.
 */

const kebabCase = require('lodash.kebabcase');

/**
 * Given an output path and a class name, creates a file name suitable for a
 * CommonJS modules using a `kebab-cased` format -- compound names written in
 * lower case letters, separated by dashes.
 *
 * @arg {string} dest The output path of the module.
 * @arg {string} name The module class name.
 * @return {string} The resulting conversion.
 */
exports.getModuleName = function (dest, name) {
  return `${dest}/${kebabCase(name)}.js`;
};
