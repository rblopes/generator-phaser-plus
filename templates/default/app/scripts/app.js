/*
 * `app` module
 * ============
 *
 * Provides the game initialization routine.
 */

//  Required: import Babel polyfills.
import 'babel-polyfill';

//  Import configuration and game scenes.
import * as config from './config';
import * as scenes from './scenes';

//  Add all required scenes and boot the game.
function init() {
  const game = new Phaser.Game(config);

  Object
    .entries(scenes)
    .forEach(([key, scene]) => game.scene.add(key, scene));

  game.scene.start('SplashScreen');

  return game;
}

init();
