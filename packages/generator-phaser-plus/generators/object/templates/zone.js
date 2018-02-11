export default class <%- name %> extends Phaser.GameObjects.Zone {
  /**
   * My custom zone.
   *
   * @constructor
   * @class <%- name %>
   * @extends Phaser.GameObjects.Sprite
   * @param {Phaser.Scene} scene - The scene that owns this sprite.
   * @param {number} x - The horizontal coordinate relative to the scene viewport.
   * @param {number} y - The vertical coordinate relative to the scene viewport.
   * @param {number} [width=1] - This zone width.
   * @param {number} [height=1] - This zone height.
   */
  constructor(scene, x, y, width = 1, height = 1) {
    super(scene, x, y, width, height);

    //  Add this game object to the owner scene.
    scene.children.add(this);
  }
}
