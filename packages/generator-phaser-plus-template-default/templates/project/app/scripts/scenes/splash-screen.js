export default class SplashScreen extends Phaser.Scene {
  /**
   *  Takes care of loading the main game assets, including textures, tile
   *  maps, sound effects and other binary files, while displaying a busy
   *  splash screen.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({
      key: 'SplashScreen',

      //  Splash screen and progress bar textures.
      pack: {
        files: [{
          key: 'splash-screen',
          type: 'image'
        }, {
          key: 'progress-bar',
          type: 'image'
        }]
      }
    });
  }

  /**
   *  Show the splash screen and prepare to load game assets.
   *
   *  @protected
   */
  preload() {
    //  Display cover and progress bar textures.
    this.showCover();
    this.showProgressBar();

    //  HINT: Declare all game assets to be loaded here.
    this.load.image('logo');
  }

  /**
   *  Set up animations, plugins etc. that depend on the game assets we just
   *  loaded.
   *
   *  @protected
   */
  create() {
    //  We have nothing left to do here. Start the next scene.
    this.scene.start('Game');
  }

  //  ------------------------------------------------------------------------

  /**
   *  Show the splash screen cover.
   *
   *  @private
   */
  showCover() {
    this.add.image(0, 0, 'splash-screen').setOrigin(0);
  }

  /**
   *  Show the progress bar and set up its animation effect.
   *
   *  @private
   */
  showProgressBar() {
    //  Get the progress bar filler texture dimensions.
    const {width: w, height: h} = this.textures.get('progress-bar').get();

    //  Create a shape to use as a mask for our progress bar filler.
    const mask = this.add.graphics();

    //  Place the filler texture on the progress bar "hole" of the splash
    //  screen.
    const img = this.add.sprite(82, 282, 'progress-bar').setOrigin(0);

    //  Apply the mask and move the shape at the same coordinates of the
    //  filler texture.
    img.mask = new Phaser.Display.Masks.GeometryMask(this, mask);
    mask.setPosition(img.x, img.y);

    //  Given how many files have been loaded, paint the shape mask to reveal
    //  more of the filler, giving the progress bar its animation effect.
    this.load.on('progress', v => mask.fillRect(0, 0, Math.ceil(v * w), h));
  }
}
