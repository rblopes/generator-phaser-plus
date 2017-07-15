/*
 * `app` module
 * ============
 *
 * Provides the game initialization routine.
 */

//  Required: import Babel polyfills.
import 'babel-polyfill';

//  Import configuration and game states.
import * as config from './config';
import * as states from './states';

//  Add all required states and boot the game.
export function init() {
  const game = new Phaser.Game(config);

  Object
    .entries(states)
    .forEach(([key, state]) => game.state.add(key, state));

  game.state.start('Boot');

  return game;
}
