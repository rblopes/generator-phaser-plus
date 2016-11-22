/*
 * Browserify/Watchify support module
 * ==================================
 */

'use strict';

const watchify = require('watchify');
const browserify = require('browserify');

// Configures Browserify to bundle the application for distribution.
module.exports = function (config) {
  return browserify(Object.assign({}, config));
};

// Instantiates Watchify for live development support.
module.exports.watch = function (config) {
  return watchify(browserify(Object.assign({}, watchify.args, config)));
};
