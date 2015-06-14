'use strict';


var gulp = require('gulp');
var $    = require('gulp-load-plugins')();


gulp.task('lint', function () {
  return gulp.src([
    'gulpfile.js',
    'test/**/*.js',
    'slushfile.js/**/*.js'
  ])
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('jshint-stylish'));
});
