/*
 * `paths` module
 * ==============
 *
 * References project directories, file patterns and resource paths.
 */

'use strict';

const path = require('path');

const CWD = process.cwd();
const PHASER_CUSTOM_BUILDS = 'phaser-ce/build/custom';

exports.root = CWD;
exports.context = path.resolve(CWD, 'app');
exports.public = path.resolve(CWD, 'app/static');
exports.dist = path.resolve(CWD, 'dist');
exports.app = `${CWD}/app/scripts/app.js`;

//  For Phaser CE split libraries.
exports.alias = {
  p2: require.resolve(`${PHASER_CUSTOM_BUILDS}/p2.js`),
  pixi: require.resolve(`${PHASER_CUSTOM_BUILDS}/pixi.js`),
  phaser: require.resolve(`${PHASER_CUSTOM_BUILDS}/phaser-split.js`),
};
