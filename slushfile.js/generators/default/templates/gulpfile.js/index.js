/*
 * This file structuring was inspired on earlier efforts by Daniel Tello in his
 * 'gulp-starter' project. Find out more in
 * <https://github.com/greypants/gulp-starter/>.
 *
 * Here, instead of declaring several tasks in a single file at once, tasks are
 * categorized and spread in modules under the 'tasks' directory.
 */

'use strict';


var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();
var tasks   = require('require-dir')('./tasks');
var config  = require('./config');


Object.keys(tasks)
  .map(function (key) { return tasks[key]; })
  .filter(function (obj) { return typeof obj === 'function'; })
  .forEach(function (task) { task(gulp, plugins, config); });
