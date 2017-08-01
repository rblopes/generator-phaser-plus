/*
 * `paths` module
 * ==============
 *
 * References project directories, file patterns and resource paths.
 */

'use strict';

const path = require('path');

const CWD = process.cwd();

exports.root = CWD;
exports.context = path.resolve(CWD, 'app');
exports.public = path.resolve(CWD, 'app/static');
exports.dist = path.resolve(CWD, 'dist');
exports.app = `${CWD}/app/scripts/app.js`;
