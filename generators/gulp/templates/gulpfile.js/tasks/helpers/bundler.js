/**
 * Browserify/Watchify support module
 * ==================================
 */

'use strict';


var assign     = require('object-assign');
var watchify   = require('watchify');
var browserify = require('browserify');

// Configures Browserify to bundle the application for distribution.
module.exports = function bundler (config) {
  return browserify(assign({}, config));
};

// Instantiates Watchify for live development support.
module.exports.watch = function watch (config) {
  return watchify(browserify(assign({}, watchify.args, config)));
};
