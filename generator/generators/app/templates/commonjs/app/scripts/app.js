/*
 * `app` module
 * ============
 *
 * Provides the game initialization routine.
 */

'use strict';

//  Import configuration and game states.
var config = require('./config');
var states = require('./states');

//  Add all required states and boot the game.
function init () {
  var game = new Phaser.Game(config);

  Object
    .keys(states)
    .forEach(function (key) {
      game.state.add(key, states[key]);
    });

  game.state.start('Boot');

  return game;
};

init();
