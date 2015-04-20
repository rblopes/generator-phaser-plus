'use strict';


var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();
var tasks   = require('require-dir')('./tasks');
var config  = require('./config');

Object.keys(tasks)
  .map(function (key) { return tasks[key] })
  .filter(function (obj) { return typeof obj === 'function' })
  .forEach(function (task) { task(gulp, plugins, config) });
