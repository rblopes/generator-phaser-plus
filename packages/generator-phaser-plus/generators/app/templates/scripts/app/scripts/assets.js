/*
 * `assets` module
 * ===============
 *
 * Declares static asset packs to be loaded using the `Phaser.Loader#pack`
 * method. Use this module to declare game assets.
 */

//  -- Splash screen assets.
export const splashScreenAssets = [{
  key: 'splash-screen',
  type: 'image',
  url: 'assets/splash-screen.png'
}, {
  key: 'progress-bar',
  type: 'image',
  url: 'assets/progress-bar.png'
}];

//  -- General assets used throughout the game.
export const gameAssets = [{
  key: 'phaser',
  type: 'image',
  url: 'assets/phaser.png'
}];
