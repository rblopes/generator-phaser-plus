/*
 * Logo
 * ====
 *
 * A sample prefab (extended game object class), displaying a spinning Phaser
 * logo.
 */

export default class Logo extends Phaser.Sprite {

  constructor(game, x, y) {
    super(game, x, y, 'phaser');

    this.anchor.set(0.5);
  }

  update() {
    this.angle += 0.1;
  }

}
