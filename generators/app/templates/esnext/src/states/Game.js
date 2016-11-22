/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

import Logo from '../objects/Logo';

export default class Game extends Phaser.State {

  create() {
    // TODO: Replace this with a really cool game code here :)
    const {centerX: x, centerY: y} = this.world;
    this.add.existing(new Logo(this.game, x, y));
  }

}
