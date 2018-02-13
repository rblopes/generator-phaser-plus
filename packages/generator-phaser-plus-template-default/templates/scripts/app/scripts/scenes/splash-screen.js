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
    super(Object.assign({key: 'SplashScreen', files}, config));
  }

  preload() {
    //  Display the splash screen graphic and its progress bar.
    this.showCover();

    //  Prepare the loader scene to load remaining assets.
    this.prepareLoaderScene();
    this.scene
      .launch('Loader')
      .bringToTop('Loader');
  }

  // --------------------------------------------------------------------------

  showCover() {
    this.add.image(0, 0, 'splash-screen').setOrigin(0);
  }

  prepareLoaderScene() {
    const scene = this.scene.get('Loader');

    //  Change the scene viewport to simulate a shrunk progress bar.
    const camera = scene.cameras.main;
    camera.setViewport(82, 282, 0, 28);

    //  Add the progress bar.
    scene.add.image(0, 0, 'progress-bar').setOrigin(0);

    //  Bind to the `progress` event to widen the viewport and reveal the
    //  progress bar.
    scene.load.on('progress', n => {
      camera.setSize(Math.ceil(476 * n), camera.height);
    });

    //  When the asset loader fulfills its job, start the Game scene.
    scene.load.on('complete', () => {
      this.scene
        .stop('Loader')
        .start('Game');
    });
  }
}
