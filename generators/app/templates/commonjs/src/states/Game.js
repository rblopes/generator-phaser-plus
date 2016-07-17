/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

'use strict';

var Logo = require('../objects/Logo');

exports.create = function (game) {
  // TODO: Replace this with a really cool game code here :)
  var x = game.world.centerX;
  var y = game.world.centerY;
  game.add.existing(new Logo(game, x, y));
};
