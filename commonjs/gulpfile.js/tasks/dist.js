/*
 * Distribution tasks
 * ==================
 */

'use strict';

const del = require('del');
const server = require('browser-sync').create();
const runSequence = require('run-sequence');
const bundler = require('../lib/bundler');
const getNamedBuffer = require('../lib/get-named-buffer');

module.exports = function (gulp, $, config) {
  const dirs = config.dirs;
  const files = config.files;

  // Wipes `build` and `dist` directories.
  gulp.task('clean', () => del([dirs.build, dirs.dist]));

  // Copy all application assets for distribution.
  gulp.task('copyAssets', () =>
    gulp.src(files.assets)
      .pipe($.if('**/*.html', $.processhtml()))
      .pipe($.if('**/*.json', $.jsonMinify()))
      .pipe(gulp.dest(dirs.dist)));

  // Copy a minified Phaser build for distribution.
  gulp.task('copyPhaser', () =>
    gulp.src([files.phaser])
      .pipe($.sourcemaps.init({loadMaps: true}))
      .pipe($.uglify())
      .pipe($.rename('phaser.min.js'))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(dirs.dist)));

  // Bundle application scripts for distribution.
  gulp.task('bundleDist', ['lint'], () =>
    bundler(config.bundle)
      .bundle()
      .pipe(getNamedBuffer('game.min.js')())
      .pipe($.sourcemaps.init({loadMaps: true}))
      .pipe($.uglify())
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(dirs.dist)));

  // The main distribution task.
  gulp.task('dist', done =>
    runSequence('clean', [
      'copyAssets',
      'copyPhaser',
      'bundleDist'
    ], done));

  // Used to test the application bundled for distribution in the browser.
  gulp.task('test-dist', ['dist'], () => server.init(config.server.dist));
};
