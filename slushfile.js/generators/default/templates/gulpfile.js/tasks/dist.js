/*
 * Distribution tasks.
 * ============================================================================
 */

'use strict';


module.exports = function (gulp, $, config) {

  var del = require('del');

  var dirs    = config.dirs;
  var globs   = config.globs;
  var options = config.pluginOptions;

  // Wipes `build` and `dist` directories before any task.
  gulp.task('dist:clean', function () {
    return del([ dirs.build, dirs.dist ]);
  });

  // Process any markup files for distribution.
  gulp.task('dist:views', [ 'dev:build:views' ], function () {
    return gulp.src(dirs.build + '/*.html')
      .pipe($.processhtml())
      .pipe(gulp.dest(dirs.dist));
  });

  // Copy and minify all style sheet files.
  gulp.task('dist:styles', [ 'dev:build:styles' ], function () {
    return gulp.src(dirs.build + '/*.css')
      .pipe($.minifyCss(options['dist:styles']))
      .pipe($.rename({ extname: '.min.css' }))
      .pipe(gulp.dest(dirs.dist));
  });

  // Bundle all scripts together for distribution.
  gulp.task('dist:scripts', [ 'dev:build:scripts' ], function () {
    return gulp.src([
      config.phaser,
      dirs.build + '/game.js'
    ])
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.concat('game.min.js'))
      .pipe($.uglify())
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(dirs.dist));
  });

  // Copy all dependent application assets into the final build directory.
  gulp.task('dist:assets', function () {
    return gulp.src(globs.assets)
      .pipe(gulp.dest(dirs.dist));
  });

  // The main distribution task.
  gulp.task('dist', [ 'dist:clean' ], function (done) {
    gulp.start([
      'dist:views',
      'dist:assets',
      'dist:styles',
      'dist:scripts'
    ], done);
  });

};
