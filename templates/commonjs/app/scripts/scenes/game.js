/*
 * Game scene
 * ==========
 *
 * A sample Game scene, displaying the Phaser logo.
 */

'use strict';

var Logo = require('../objects/logo');

exports.files = require('../assets').gameAssets;

exports.create = function () {
  //  TODO: Replace this content with really cool game code here :)
  this.logo = this.add.existing(new Logo(this));
};

exports.update = function () {
  this.logo.update();
};
