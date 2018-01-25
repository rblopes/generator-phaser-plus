/*
 * Basic settings for Browsersync Web server.
 */

const {dirs} = require('./paths');

module.exports = {
  ui: false,
  notify: false,
  ghostMode: false,
  server: {
    baseDir: [dirs.static]
  },
  middleware: [],
  watchOptions: {
    ignoreInitial: true
  },
  files: [`${dirs.static}/**`, `${dirs.scripts}/**`]
};
