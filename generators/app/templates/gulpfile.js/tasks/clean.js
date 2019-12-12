/*
 *  `clean` task
 *  ============
 *
 *  Uses 'del' to dispose the contents found in the `dest` directory before
 *  creating a fresh distribution build.
 */

const del = require('del');
const {dest} = require('../config/paths');

const clean = () => del([dest]);
clean.description = `Dispose of contents from '${dest}' directory.`;

module.exports = clean;
