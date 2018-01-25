/*
 * Describes the project working tree.
 */

const path = require('path');

const root = (exports.root = process.cwd());
const src = (exports.src = path.resolve(root, 'app/'));
const dest = (exports.dest = path.resolve(root, 'dist/'));

exports.dirs = {
  static: path.resolve(src, 'static/'),
  scripts: path.resolve(src, 'scripts/')
};
