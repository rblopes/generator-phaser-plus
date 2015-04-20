/*
 * The 'state' generator task, invoked as `slush phaser-plus:state`.
 */

'use strict';


var gulp = require('gulp');
var $    = require('gulp-load-plugins')();


module.exports = function (variables) {
  return gulp.src(__dirname + '/templates/state.js')
    .pipe($.mustache(variables))
    .pipe($.rename({ basename: variables.name }))
    .pipe($.conflict('.'))
    .pipe(gulp.dest(variables.destDir));
};
