/*
 *  `dist` task
 *  ===========
 *
 *  Bundle the application contents for distribution.
 */

const gulp = require('gulp');
const clean = require('./clean');
const compile = require('./compile');

const dist = gulp.series(clean, compile);
dist.description = `Bundle application contents for distribution.`;

module.exports = dist;
