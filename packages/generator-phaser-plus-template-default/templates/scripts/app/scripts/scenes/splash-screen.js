/*
 * SplashScreen scene
 * ==================
 *
 * Takes care of loading the main scene assets, including graphics and sound
 * effects, while displaying a busy splash screen.
 */

import {splashScreenAssets as files} from '../assets';

export default class SplashScreen extends Phaser.Scene {

  constructor(config = {}) {
    super(Object.assign({files}, config));
  }

  preload() {
    //  Display the splash screen graphic and its progress bar.
    this.showBackground();
  }

  create() {
    this.scene.start('Game');
  }

  // --------------------------------------------------------------------------

  showBackground() {
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;

    this.add.image(x, y, 'splash-screen');
    this.add.image(82, 282, 'progress-bar').setOrigin(0);
  }

}
