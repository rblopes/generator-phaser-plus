/*
 * `config` module
 * ===============
 *
 * The game instance settings.
 */

//  The game canvas dimensions.
export const width = 640;
export const height = 480;

//  Choose the rendering method. Available values are:
//  * WEBGL: Use WebGL rendering;
//  * CANVAS: Use 'context2D' API rendering method;
//  * AUTO: Phaser will choose, based on the device capabilities, the best
//          rendering method to be used.
export const type = Phaser.AUTO;

//  Adjust game canvas zoom factor.
export const zoom = 1;

//  Declare the pixel density of game graphics.
export const resolution = 1;

//  Uncomment to disable rendering anti-aliasing. Great for pixel art.
// export const pixelArt = true;

//  Uncomment to enable canvas transparency.
// export const transparent = true;

//  Apply some style to the game canvas element.
export const canvasStyle = 'display: block; margin: 0 auto;';

//  Uncomment to define a custom background color.
// export const backgroundColor = '#000000';

//  Game title, version and Web address.
export const title = '<%- title %>';
export const version = '1.0.0';
export const url = 'https://example.com/';
