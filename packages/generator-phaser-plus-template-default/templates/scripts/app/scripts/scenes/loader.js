/*
 * Loader scene
 * ============
 *
 * Load remaining game assets.
 */

import {gameAssets as files} from '../assets';

export default class Loader extends Phaser.Scene {
  constructor(config = {}) {
    super(Object.assign({key: 'Loader', files}, config));
  }
}
