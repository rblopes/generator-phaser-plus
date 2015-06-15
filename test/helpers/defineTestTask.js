'use strict';


var gulp = require('gulp');
var mockGulpDest = require('mock-gulp-dest');


module.exports = function defineTestTask (task, variables) {
  gulp.task('test', function () {
    return task(variables);
  });

  return mockGulpDest(gulp);
};
