/*
 * Preloader state
 * ===============
 *
 * Takes care of loading the main game assets, including graphics and sound
 * effects, while displaying a busy splash screen.
 */

import assets from '../assets';

export default class Preloader extends Phaser.State {

  preload() {
    this.showSplashScreen();
    this.load.pack('game', null, assets);
  }

  create() {
    // Here is a good place to initialize plugins dependent of any game asset.
    // Don't forget to `import` them first. Example:
    //this.game.myPlugin = this.plugins.add(MyPlugin/*, ... parameters ... */);

    this.state.start('Game');
  }

  // --------------------------------------------------------------------------

  showSplashScreen() {
    this.add.image(0, 0, 'splash-screen');
    this.load.setPreloadSprite(this.add.image(82, 282, 'progress-bar'));
  }

}
