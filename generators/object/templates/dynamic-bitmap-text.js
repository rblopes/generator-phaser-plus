export default class <%- name %> extends Phaser.GameObjects.DynamicBitmapText {
  /**
   *  My custom dynamic bitmap text.
   *
   *  @constructor
   *  @class <%- name %>
   *  @extends Phaser.GameObjects.DynamicBitmapText
   *  @param {Phaser.Scene} scene - The scene that owns this bitmap text.
   *  @param {number} x - The horizontal coordinate relative to the scene viewport.
   *  @param {number} y - The vertical coordinate relative to the scene viewport.
   */
  constructor(scene, x, y) {
    super(scene, x, y, '<%- texture %>');

    //  Add this game object to the owner scene.
    scene.children.add(this);
  }
}
