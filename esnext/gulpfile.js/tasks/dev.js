/*
 * Development tasks
 * =================
 */

'use strict';

const merge = require('merge-stream');
const server = require('browser-sync').create();
const watch = require('../lib/bundler').watch;
const getNamedBuffer = require('../lib/get-named-buffer');

module.exports = function (gulp, $, config) {
  const dirs = config.dirs;
  const files = config.files;

  // Compile the application code for development, actively observing for
  // changes and triggering rebuilds on demand.
  gulp.task('bundleDev', (() => {
    const devBuffer = getNamedBuffer('game.js');
    const notifyError = $.notify.onError('<%= error.message %>');
    const watcher = watch(config.bundle)
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
        .pipe(devBuffer())
        .pipe(gulp.dest(dirs.build))
        .pipe(server.stream());
    }
  })());

  // Starts the Web Server for testing.
  gulp.task('serve', ['bundleDev'], () => server.init(config.server.dev));

  // Check syntax and style of scripts and warn about potential issues.
  function lint() {
    return gulp.src([files.scripts])
      .pipe($.cached('eslint'))
      .pipe($.eslint())
      .pipe($.eslint.format('stylish', process.stderr));
  }
  gulp.task('lint', lint);

  // The main development task.
  gulp.task('default', ['serve']);
};
