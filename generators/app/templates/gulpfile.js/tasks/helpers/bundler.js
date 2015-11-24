/**
 * Browserify/Watchify support module.
 * ============================================================================
 */

'use strict';


var assign     = require('object-assign');
var watchify   = require('watchify');
var browserify = require('browserify');


// Create a Browserify bundler for the application with the given
// configuration.
function createBundler (config, withWatchify) {
  if (withWatchify) {
    // Return a Watchify bundler for live development instead.
    return watchify(browserify(assign({}, watchify.args, config)));
  }

  return browserify(config || {});
}


// Remember the bundler instance.
var bundler = null;


// Get the current bundler instance.
module.exports = function (config, withWatchify) {
  if (!bundler) {
    // Initialize the bundler for the first time.
    bundler = createBundler(config, withWatchify);
  }

  return bundler;
};
