import * as files from '@/assets';

export default class SplashScreen extends Phaser.Scene {
  /**
   *  Takes care of loading the main scene assets, including graphics and
   *  sound effects, while displaying a busy splash screen.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'SplashScreen', files: files.splashScreenAssets});
  }

  /**
   *  Show the splash screen and prepare to load the remaining game assets.
   *
   *  @protected
   */
  create() {
    //  Display the splash screen graphic and its progress bar.
    this.showCover();

    //  Prepare the loader scene to load remaining assets.
    this.prepareLoaderScene();
    this.scene.launch('Loader');
  }

  //  ------------------------------------------------------------------------

  /**
   *  Display the splash screen graphic and its progress bar.
   *
   *  @private
   */
  showCover() {
    this.add.image(0, 0, 'splash-screen').setOrigin(0);
  }

  /**
   *  Create a temporary 'Loader' scene to load remaining game assets and show
   *  the progress bar effect.
   *
   *  @private
   */
  prepareLoaderScene() {
    //  Use a temporary scene to load remaining game assets.
    const scene = this.scene
      .add('Loader', {files: files.gameAssets})
      .get('Loader');

    //  Change the scene viewport to simulate the progress bar.
    const camera = scene.cameras.main;
    camera.setViewport(82, 282, 0, 28);

    //  Add the progress bar graphic.
    scene.add.image(0, 0, 'progress-bar').setOrigin(0);

    //  Stretch the viewport to fill the progress bar.
    scene.load.on('progress', n => {
      camera.setSize(Math.ceil(476 * n), camera.height);
    });

    //  When the asset loader fulfills its job, start the Game scene.
    scene.load.on('complete', () => {
      this.scene
        .remove(scene)
        .start('Game');
    });
  }
}
