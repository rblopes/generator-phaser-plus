/*
 *  `paths` module
 *  ==============
 *
 *  Describes the project working tree for its consumer modules.
 */

const {resolve} = require('path');

//  Exports the root directory path, hosting the project contents.
exports.root = process.cwd();

//  Where application resources are kept.
exports.src = resolve(exports.root, 'app/');

//  The destination diretory of production builds.
exports.dest = resolve(exports.root, 'dist/');

//  Paths to specific directories.
exports.dirs = {
  //  From where static assets should be served during development and copied
  //  from in distribution builds.
  static: resolve(exports.src, 'static/'),

  //  Where application modules that require compilation are kept.
  scripts: resolve(exports.src, 'scripts/')
};
