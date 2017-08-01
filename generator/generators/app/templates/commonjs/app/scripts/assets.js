/*
 * `assets` module
 * ===============
 *
 * Declares static asset packs to be loaded using the `Phaser.Loader#pack`
 * method. Use this module to declare game assets.
 */

'use strict';

//  -- Splash screen assets.
exports.splashScreenAssets = [{
  key: 'splash-screen',
  type: 'image',
  url: 'assets/splash-screen.png'
}, {
  key: 'progress-bar',
  type: 'image',
  url: 'assets/progress-bar.png'
}];

//  -- General assets used throughout the game.
exports.gameAssets = [{
  key: 'phaser',
  type: 'image',
  url: 'assets/phaser.png'
}];
