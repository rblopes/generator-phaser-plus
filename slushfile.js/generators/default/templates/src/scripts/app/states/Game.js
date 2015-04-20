/*
 * Game state
 * ============================================================================
 *
 * A sample Game state, displaying the Phaser logo.
 */


export default class Game extends Phaser.State {

  create () {
    let { centerX: x, centerY: y } = this.world;

    this.logo = this.add.image(x, y, 'phaser');
    this.logo.anchor.set(0.5);
  }

  update () {
    this.logo.angle += 0.1;
  }

}
