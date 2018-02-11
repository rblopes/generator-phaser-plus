export default class <%- name %> extends Phaser.GameObjects.Graphics {
  /**
   * My custom graphic.
   *
   * @constructor
   * @class <%- name %>
   * @extends Phaser.GameObjects.Sprite
   * @param {Phaser.Scene} scene - The scene that owns this graphic.
   * @param {object} [options={}] - Configuration parameters of this graphic.
   * @param {number} options.x - The horizontal coordinate relative to the scene viewport.
   * @param {number} options.y - The vertical coordinate relative to the scene viewport.
   */
  constructor(scene, options = {x: 0, y: 0}) {
    super(scene, options);

    //  Add this game object to the owner scene.
    scene.children.add(this);
  }
}
