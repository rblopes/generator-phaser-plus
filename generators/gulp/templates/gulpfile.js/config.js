/*
 * Project configuration
 * =====================
 */

'use strict';

// Where this project source code lives.
var SRC = 'src';

// Where final distribution files will be copied.
var DIST = 'dist';

// Where compiled scripts will be placed.
var BUILD = 'build';

// Where static assets (textures, fonts, sprites, sounds etc.) live.
var STATIC = 'static';

// Which Phaser build was selected to develop the game.
var PHASER = 'node_modules/phaser/build/<%= customBuild %>.js';

// Build output directories.
exports.dirs = {
  build: BUILD,
  dist: DIST
};

// File paths and glob patterns.
exports.files = {
  // Finds this project static assets to be copied for distribution.
  assets: STATIC + '/**',

  // Finds the scripts to be compiled.
  scripts: SRC + '/**/*.js',

  // The selected Phaser script.
  phaser: PHASER
};

// The Browserify settings.
exports.bundle = {
  debug: true,
  standalone: 'app',
  entries: [SRC + '/app.js']
};

// The BrowserSync settings.
exports.server = {
  server: {
    baseDir: [STATIC, BUILD],
    routes: {
      '/phaser.js': PHASER
    }
  },
  ghostMode: false,
  notify: false
};
