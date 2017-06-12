/*
 * `app` module
 * ============
 *
 * Provides the game initialization routine.
 */

// Required: import Babel polyfills.
import 'babel-polyfill';

// Import configuration and game states.
import * as config from './config';
import * as states from './states';

export function init() {
  const game = new Phaser.Game(config);

  // Dynamically add all required game states.
  Object
    .entries(states)
    .forEach(([key, state]) => game.state.add(key, state));

  game.state.start('Boot');

  return game;
}
