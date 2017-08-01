/*
 * SplashScreen scene
 * ==================
 *
 * Takes care of loading the main scene assets, including graphics and sound
 * effects, while displaying a busy splash screen.
 */

'use strict';

exports.files = require('../assets').splashScreenAssets;

exports.preload = function () {
  //  Display the splash screen graphic and its progress bar.
  showBackground(this);
};

exports.create = function (scene) {
  this.scene.start('Game');
};

function showBackground (scene) {
  var x = scene.cameras.main.width / 2;
  var y = scene.cameras.main.height / 2;
  var background = scene.add.image(0, 0, 'splash-screen');
  background.setOrigin(0);
}
