'use strict';


var gulp = require('gulp');


// The generator, and its sub-generators.
gulp.task('default', require('./generators/default'));
gulp.task('object',  require('./generators/object'));
gulp.task('plugin',  require('./generators/plugin'));
gulp.task('state',   require('./generators/state'));
