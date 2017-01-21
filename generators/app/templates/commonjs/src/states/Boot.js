/*
 * Boot state
 * ==========
 *
 * The first state of the game, responsible for setting up some Phaser
 * features. Adjust the game appearance, number of input pointers, screen
 * orientation handling etc. using this game state.
 */

'use strict';

var assets = require('../assets');

exports.preload = function (game) {
  // Point the Phaser Asset Loader to where your game assets live.
  game.load.path = 'assets/';

  // Initialize physics engines here. Remember that Phaser builds including
  // Arcade Physics have it enabled by default.
  //game.physics.startSystem(Phaser.Physics.P2);

  // Adjust how many pointers Phaser will check for input events.
  game.input.maxPointers = 2;

  // Set the alignment of the game canvas within the page.
  game.scale.pageAlignHorizontally = true;

  // Adjust the scaling mode of the game canvas.
  // Example: If you're developing a pixel-art game, set it to 'USER_SCALE'.
  game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;

  // When using 'USER_SCALE' scaling mode, use this method to adjust the
  // scaling factor.
  //game.scale.setUserScale(2);

  // Uncomment the following line to adjust the rendering of the canvas to
  // crisp graphics. Great for pixel-art!
  //Phaser.Canvas.setImageRenderingCrisp(game.canvas);

  // Uncomment this line to disable smoothing of textures.
  //game.stage.smoothed = false;

  // If the game canvas loses focus, keep the game loop running.
  game.stage.disableVisibilityChange = true;

  // Whether to use frame-based interpolations or not.
  game.tweens.frameBased = false;

  // Load the graphical assets required to show the splash screen later,
  // using the asset pack data.
  game.load.pack('boot', null, assets);
};

exports.create = function (game) {
  // After applying the first adjustments and loading the splash screen
  // assets, move to the next game state.
  game.state.start('Preloader');
};
