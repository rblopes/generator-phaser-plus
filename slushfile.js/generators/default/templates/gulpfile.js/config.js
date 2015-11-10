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
var PHASER = 'node_modules/phaser/build/{{{ customBuild }}}.js';


module.exports = {

  // Build output directories.
  dirs: {
    build: BUILD,
    dist: DIST
  },

  // File paths and glob patterns.
  files: {
    // Finds this project static assets to be copied for distribution.
    assets: STATIC + '/**',

    // Finds the scripts to be compiled.
    scripts: SRC + '/**/*.js',

    // The selected Phaser script.
    phaser: PHASER
  },

  // The Browserify settings.
  bundle: {
    debug: true,
    standalone: 'app',
    entries: [
      'src/index.js'
    ],
    transform: [
      'babelify'
    ]
  },

  // The BrowserSync settings.
  server: {
    server: {
      baseDir: [
        STATIC,
        BUILD
      ],
      routes: {
        '/phaser.js': PHASER
      }
    },
    ghostMode: false,
    notify: false
  }

};
