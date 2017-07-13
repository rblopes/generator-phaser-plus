/*
 * classify
 * ========
 *
 * Convert a string to a 'PascalCase' identifier for class names.
 */

'use strict';

const camelCase = require('lodash.camelcase');
const upperFirst = require('lodash.upperfirst');

module.exports = s => upperFirst(camelCase(s));
