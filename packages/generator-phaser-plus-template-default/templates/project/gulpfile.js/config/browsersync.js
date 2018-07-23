/*
 *  Browsersync Settings
 *  ====================
 *
 *  Basic settings for Browsersync Web server.
 *
 *  Reference:
 *    <https://browsersync.io/docs/options>
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

  //  Always reload the application page when files in these paths change.
  files: [`${dirs.static}/**`, `${dirs.scripts}/**`]
};
