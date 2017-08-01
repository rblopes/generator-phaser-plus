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
exports.type = Phaser.AUTO;

//  Adjust game canvas zoom factor.
exports.zoom = 1;

//  Declare the pixel density of game graphics.
exports.resolution = 1;

//  Uncomment to disable rendering anti-aliasing. Great for pixel art.
// exports.pixelArt = true;

//  Uncomment to enable canvas transparency.
// exports.transparent = true;

//  Apply some style to the game canvas element.
exports.canvasStyle = 'display: block; margin: 0 auto;';

//  Uncomment to define a custom background color.
// exports.backgroundColor = '#000000';

//  Game title, version and Web address.
exports.title = '<%- title %>';
exports.version = '1.0.0';
exports.url = 'https://example.com/';
