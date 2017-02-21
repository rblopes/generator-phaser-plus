/*
 * `app` module
 * ============
 *
 * Provides the game initialization routine.
 */

//  Import configuration and game scenes.
import * as config from './config';
import * as scenes from './scenes';

//  Add all required scenes and boot the game.
export function boot() {
  const game = new Phaser.Game(config);

  Object
    .entries(scenes)
    .forEach(([key, scene]) => game.scene.add(key, scene));

  game.scene.start('SplashScreen');

  return game;
}

boot();
