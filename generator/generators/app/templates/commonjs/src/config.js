/*
 * `config` module
 * ===============
 *
 * The game instance settings.
 */

//  The game canvas dimensions.
exports.width = 640;
exports.height = 480;

//  Choose the rendering method. Available values are:
//  * WEBGL: Use WebGL rendering;
//  * CANVAS: Use 'context2D' API rendering method;
//  * AUTO: Phaser will choose, based on the device capabilities, the best
//          rendering method to be used.
exports.renderer = Phaser.AUTO;

//  Declare the pixel density of the game graphics.
exports.resolution = 1;

//  Uncomment to disable rendering anti-aliasing. Great for pixel art.
// exports.antialias = false;

//  Uncomment to enable WebGL multi-texture features.
// exports.multiTexture = true;

//  Uncomment to enable canvas transparency.
// exports.transparent = true;

//  Uncomment to disable the Phaser debugging API.
//  TODO: Automate the production build to conditionally enable this flag.
// exports.enableDebug = false;
