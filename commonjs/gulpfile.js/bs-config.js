/*
 * Browsersync configuration
 * =========================
 *
 * This module is used when running the npm `test-dist` script.
 */

'use strict';

const dirs = require('./config').dirs;

module.exports = {
  server: dirs.dist,
  ghostMode: false,
  notify: false,
  ui: false
};
