/*
 * The 'plugin' generator task, invoked as `slush phaser-plus:plugin`.
 */

'use strict';


var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var helpers = require('../../lib/helpers');


module.exports = function (variables) {
  return gulp.src(__dirname + '/templates/plugin.js')
    .pipe($.hb({
      data: variables,
      helpers: helpers
    }))
    .pipe($.rename({ basename: variables.name }))
    .pipe($.conflict('.'))
    .pipe(gulp.dest(variables.destDir));
};
