/*
 * Describes the project working tree.
 */

const path = require('path');

exports.root = process.cwd();
exports.src = path.resolve(exports.root, 'app/');
exports.dest = path.resolve(exports.root, 'dist/');
exports.dirs = {
  static: path.resolve(exports.src, 'static/'),
  scripts: path.resolve(exports.src, 'scripts/')
};
