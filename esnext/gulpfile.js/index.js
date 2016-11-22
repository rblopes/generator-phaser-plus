/*
 * gulpfile.js
 * ===========
 *
 * Instead of declaring several tasks using a single flat script, tasks are
 * categorized into modules, inside the 'tasks' directory.
 */

'use strict';

const gulp = require('gulp');
const tasks = require('require-dir')('./tasks');
const plugins = require('gulp-load-plugins')();
const config = require('./config');

Object.keys(tasks)
  .map(key => tasks[key])
  .forEach(fn => fn(gulp, plugins, config));
