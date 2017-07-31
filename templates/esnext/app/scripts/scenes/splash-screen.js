/*
 * SplashScreen scene
 * ==================
 *
 * Takes care of loading the main scene assets, including graphics and sound
 * effects, while displaying a busy splash screen.
 */

import {splashScreenAssets as files} from '../assets';

export default class SplashScreen extends Phaser.Scene {

  constructor() {
    super({files});
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
    const background = this.add.image(x, y, 'splash-screen');
    background.setOrigin(0.5);
  }

}
