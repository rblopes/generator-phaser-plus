/*
 * Development tasks
 * =================
 */

'use strict';

var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var server = require('browser-sync').create();
var watch = require('./helpers/bundler').watch;

module.exports = function (gulp, $, config) {
  var dirs = config.dirs;
  var files = config.files;

  var notifyError = $.notify.onError('<%%= error.message %>');

  // Holds the Watchify instance for live development.
  var watcher;

  // Bundle the application source code using Browserify.
  gulp.task('dev:scripts', ['dev:lint'], function () {
    if (!watcher) {
      watcher = watch(config.bundle);
    }
    return watcher
      .bundle()
      .on('error', notifyError)
      .pipe(source('game.js'))
      .pipe(buffer())
      .pipe(gulp.dest(dirs.build))
      .pipe(server.stream());
  });

  // Starts the live web development server for testing.
  gulp.task('dev:serve', ['dev:scripts'], function () {
    server.init(config.server);
  });

  // Monitors files for changes, trigger rebuilds as needed.
  gulp.task('dev:watch', function () {
    gulp.watch(files.scripts, ['dev:scripts']);
  });

  // Check script files and issue warnings about non-conformances.
  gulp.task('dev:lint', function () {
    return gulp.src([files.scripts])
      .pipe($.cached('dev:lint'))
      .pipe($.eslint())
      .pipe($.eslint.format('stylish', process.stderr));
  });

  // The main development task.
  gulp.task('default', ['dev:serve', 'dev:watch']);
};
