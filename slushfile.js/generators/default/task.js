/*
 * The 'default' generator task.
 */

'use strict';


var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var helpers = require('../../lib/helpers');


module.exports = function (variables) {
  return gulp.src(__dirname + '/templates/**')
    .pipe($.if('**/*.{md,json}', $.hb({
      data: variables,
      helpers: helpers
    })))
    .pipe($.rename(function (file) {
      if (file.basename[0] === '_') {
        file.basename = '.' + file.basename.slice(1);
      }
    }))
    .pipe($.conflict('.'))
    .pipe(gulp.dest('.'))
    .pipe($.install());
};
