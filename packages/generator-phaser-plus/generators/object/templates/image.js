export default class <%- name %> extends Phaser.GameObjects.Image {
  /**
   *  My custom image.
   *
   *  @constructor
   *  @class <%- name %>
   *  @extends Phaser.GameObjects.Image
   *  @param {Phaser.Scene} scene - The scene that owns this image.
   *  @param {number} x - The horizontal coordinate relative to the scene viewport.
   *  @param {number} y - The vertical coordinate relative to the scene viewport.
   */
  constructor(scene, x, y) {
    super(scene, x, y, '<%- texture %>');

    //  Add this game object to the owner scene.
    scene.children.add(this);
  }
}
