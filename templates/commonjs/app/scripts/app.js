/*
 * `app` module
 * ============
 *
 * Provides the game initialization routine.
 */

'use strict';

//  Import configuration and game scenes.
var config = require('./config');
var scenes = require('./scenes');

//  Add all required scenes and boot the game.
function init () {
  var game = new Phaser.Game(config);

  Object
    .keys(scenes)
    .forEach(function (key) {
      game.scene.add(key, scenes[key]);
    });

  game.scene.start('SplashScreen');

  return game;
};

init();
