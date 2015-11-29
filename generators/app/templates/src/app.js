/*
 * The `app` module
 * ============================================================================
 *
 * This module provides the game initialization routine.
 */

// Required: import the Babel runtime module.
import 'babel-polyfill';

// Import game states.
import * as states from './app/states';


export function init () {
  const game = new Phaser.Game(640, 480, Phaser.AUTO);

  // Dynamically add all required game states.
  Object.keys(states).forEach((key) => game.state.add(key, states[key]));

  game.state.start('Boot');

  return game;
}
