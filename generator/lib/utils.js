/*
 * `utils` module
 * ==============
 *
 * Collection of utility functions used by the generator.
 */

const camelCase = require('lodash.camelcase');
const kebabCase = require('lodash.kebabcase');
const upperFirst = require('lodash.upperfirst');

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

/**
 * Convert a string to a 'PascalCase' identifier for classes.
 *
 * @param  {string} name A common name given by the user.
 * @return {string}      An identifier in 'PascalCase' format.
 */
exports.pascalCase = function (name) {
  return upperFirst(camelCase(name));
};
