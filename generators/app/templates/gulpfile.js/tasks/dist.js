/*
 * Distribution tasks
 * ==================
 */

'use strict';


module.exports = function (gulp, $, config) {

  var del = require('del');

  var dirs  = config.dirs;
  var files = config.files;

  // Wipes `build` and `dist` directories before any task.
  gulp.task('dist:clean', function () {
    return del([ dirs.build, dirs.dist ]);
  });

  // Bundle all scripts together for distribution.
  gulp.task('dist:scripts', [ 'dev:scripts' ], function () {
    return gulp.src([
      files.phaser,
      dirs.build + '/game.js'
    ])
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.concat('game.min.js'))
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
      'dist:scripts'
    ], done);
  });

};
