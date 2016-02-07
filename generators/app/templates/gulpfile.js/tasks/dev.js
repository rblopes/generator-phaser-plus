/*
 * Development tasks
 * =================
 */

'use strict';


module.exports = function (gulp, $, config) {

  var buffer      = require('vinyl-buffer');
  var source      = require('vinyl-source-stream');
  var bundler     = require('./helpers/bundler');
  var browserSync = require('browser-sync').create();

  var handleErrors = $.notify.onError('<%%= error.message %>');

  var dirs  = config.dirs;
  var files = config.files;

  // Holds the Watchify instance for live development.
  var watcher;

  // Bundle the application source code using Browserify.
  gulp.task('dev:scripts', [ 'dev:lint' ], function () {
    if (!watcher) {
      watcher = bundler.watch(config.bundle);
    }
    return watcher
      .bundle()
      .on('error', handleErrors)
      .pipe(source('game.js'))
      .pipe(buffer())
      .pipe(gulp.dest(dirs.build))
      .pipe(browserSync.stream());
  });

  // Starts the live web development server for testing.
  gulp.task('dev:server', [ 'dev:scripts' ], function () {
    browserSync.init(config.server);
  });

  // Monitors files for changes, trigger rebuilds as needed.
  gulp.task('dev:watch', function () {
    gulp.watch(files.scripts, [ 'dev:scripts' ]);
  });

  // Check script files and issue warnings about non-conformances.
  gulp.task('dev:lint', function () {
    return gulp.src([ files.scripts ])
      .pipe($.cached('dev:lint'))
      .pipe($.eslint())
      .pipe($.eslint.format('stylish', process.stderr));
  });

  // The main development task.
  gulp.task('dev', [
    'dev:server',
    'dev:watch'
  ]);

  // Aliasing `dev` as default task.
  gulp.task('default', [ 'dev' ]);

};
