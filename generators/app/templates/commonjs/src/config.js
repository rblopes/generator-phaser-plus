/*
 * `config` module
 * ===============
 *
 * The game instance settings.
 */

//  The game canvas dimensions.
exports.width = 640;
exports.height = 480;

//  Choose the rendering method. Recommended values are:
//  - WEBGL: Use WebGL rendering;
//  - CANVAS: Use 'context2D' based rendering;
//  - AUTO: Phaser will choose, based on the device capabilities, between the
//          former rendering methods.
exports.renderer = Phaser.AUTO;

//  Declare the pixel density of the game graphics.
exports.resolution = 1;

//  Uncomment to disable texture anti-aliasing. Great for pixel art.
// exports.antialias = false;

//  Uncomment to enable WebGL multi-texture features.
// exports.multiTexture = true;

//  Uncomment if you desire to render your game in a transparent canvas
//  element.
// exports.transparent = true;

//  Uncomment to disable the Phaser debugging API.
//  TODO: Automate the production build to conditionally enable this flag.
// exports.enableDebug = false;
