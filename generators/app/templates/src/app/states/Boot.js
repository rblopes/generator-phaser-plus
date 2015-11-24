/*
 * Boot state
 * ===========================================================================
 *
 * The first state of the game, responsible for setting up some Phaser
 * features.
 */

import assets from '../data/assets';


export default class Boot extends Phaser.State {

  // Use this method to adjust the game appearance, number of input pointers,
  // screen orientation handling etc.
  init () {
    // Point the Phaser Asset Loader to where all your assets live.
    this.load.path = 'assets/';

    // Initialize physics engines here. Phaser builds including Arcade Physics
    // enable it by default.
    //this.physics.startSystem(Phaser.Physics.P2);

    // Adjust how many pointers Phaser will check for input events.
    this.input.maxPointers = 2;

    // Adjust the scaling and page alignment of the game canvas.
    this.scale.pageAlignHorizontally = true;
    this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;

    // If the game canvas loses focus, keep the game loop running.
    this.stage.disableVisibilityChange = true;

    // Tells Phaser to smooth texture corners and sub-pixels when rendering the
    // game canvas.
    this.stage.smoothed = true;
  }

  preload () {
    // Load the required assets to display our splash screen, later.
    this.load.pack('boot', null, assets);
  }

  create () {
    // Immediately after loading the boot assets, go to the next game state.
    this.state.start('Preload');
  }

}
