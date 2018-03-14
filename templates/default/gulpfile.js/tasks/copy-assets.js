/*
 *  `copy-assets` task
 *  ==================
 *
 *  Copy static application assets for distribution.
 */

const gulp = require('gulp');
const {dest, dirs} = require('../config/paths');

const copyAssets = () => gulp.src(`${dirs.static}/**`).pipe(gulp.dest(dest));
copyAssets.description = `Copy static assets from '${dirs.static}' directory.`;

module.exports = copyAssets;
