/*
 * Logo
 * ====
 *
 * A simple prefab (extended game object class), displaying a spinning Phaser
 * logo.
 */

'use strict';

module.exports = Phaser.Class({

  Extends: Phaser.GameObjects.Sprite,

  initialize: function Logo (scene) {
    Phaser.GameObjects.Sprite.call(this, scene, 0, 0, 'phaser');

    var x = scene.cameras.main.width / 2;
    var y = scene.cameras.main.height / 2;

    this.setPosition(x, y);
    this.setOrigin(0.5);
  },

  update: function () {
    this.angle += 0.1;
  }

});
