/*
 * get-named-buffer
 * ================
 *
 * Extract a named buffer from a Browserify stream.
 */

'use strict';

const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const lazypipe = require('lazypipe');

module.exports = function (src) {
  return lazypipe()
    .pipe(source, src)
    .pipe(buffer);
};
