/*
 * Distribution tasks
 * ==================
 */

'use strict';


module.exports = function (gulp, $, config) {

  var del     = require('del');
  var buffer  = require('vinyl-buffer');
  var source  = require('vinyl-source-stream');
  var bundler = require('./helpers/bundler');

  var dirs  = config.dirs;
  var files = config.files;

  // Wipes `build` and `dist` directories before any task.
  gulp.task('dist:clean', function () {
    return del([ dirs.build, dirs.dist ]);
  });

  // Copies and minifies the Phaser build for distribution.
  gulp.task('dist:phaser', function () {
    return gulp.src([ files.phaser ])
      .pipe($.rename('phaser.min.js'))
      .pipe($.uglify())
      .pipe($.sourcemaps.init())
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(dirs.dist));
  });

  // Bundle all scripts together for distribution.
  gulp.task('dist:scripts', [ 'dev:lint' ], function () {
    return bundler(config.bundle)
      .bundle()
      .pipe(source('game.min.js'))
      .pipe(buffer())
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.uglify())
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(dirs.dist));
  });

  // Copy all required application assets into the final build directory.
  gulp.task('dist:assets', function () {
    var filterHTML = $.filter('*.html', { restore: true });
    return gulp.src(files.assets)
      .pipe(filterHTML)
      .pipe($.processhtml())
      .pipe(filterHTML.restore)
      .pipe(gulp.dest(dirs.dist));
  });

  // The main distribution task.
  gulp.task('dist', [ 'dist:clean' ], function (done) {
    gulp.start([
      'dist:assets',
      'dist:phaser',
      'dist:scripts'
    ], done);
  });

};
