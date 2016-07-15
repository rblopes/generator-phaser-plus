/*
 * Development tasks
 * =================
 */

'use strict';

var merge = require('merge-stream');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var server = require('browser-sync').create();
var watch = require('../lib/bundler').watch;

module.exports = function (gulp, $, config) {
  var dirs = config.dirs;
  var files = config.files;

  // Compiles the application code for development, actively observing changes
  // and triggering rebuilds on demand.
  gulp.task('dev:scripts', (function () {
    var notifyError = $.notify.onError('<%%= error.message %>');
    var watcher = watch(config.bundle)
      .on('log', $.util.log)
      .on('update', task);
    return task;
    function task() {
      return merge(lint(), rebuild());
    }
    function rebuild() {
      return watcher
        .bundle()
        .on('error', notifyError)
        .pipe(source('game.js'))
        .pipe(buffer())
        .pipe(gulp.dest(dirs.build))
        .pipe(server.stream());
    }
  })());

  // Starts the live web development server for testing.
  gulp.task('dev:serve', ['dev:scripts'], function () {
    server.init(config.server);
  });

  // Check script files and issue warnings about non-conformances.
  function lint() {
    return gulp.src([files.scripts])
      .pipe($.cached('dev:lint'))
      .pipe($.eslint())
      .pipe($.eslint.format('stylish', process.stderr));
  }
  gulp.task('dev:lint', lint);

  // The main development task.
  gulp.task('default', ['dev:serve']);
};
