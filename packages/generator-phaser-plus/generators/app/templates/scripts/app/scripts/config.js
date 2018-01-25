/*
 * `config` module
 * ===============
 *
 * The game instance settings.
 */

//  Game canvas dimensions.
export const width = 640;
export const height = 480;

//  Adjust canvas zoom factor.
export const zoom = 1;

//  Adjust pixel density of game graphics.
export const resolution = 1;

//  Choose a rendering method. Available values are:
//  - `WEBGL`: Use WebGL rendering;
//  - `CANVAS`: Use 'context2D' API rendering method;
//  - `AUTO`: Phaser will choose, based on device capabilities, the best
//      rendering method to be used.
export const type = Phaser.AUTO;

//  Uncomment to disable anti-aliasing. Great for pixel art.
// export const pixelArt = true;

//  Uncomment to enable canvas transparency.
// export const transparent = true;

//  Apply some style to the canvas element.
export const canvasStyle = 'display: block; margin: 0 auto;';

//  Uncomment to define a background color.
// export const backgroundColor = '#000000';

//  Enable physics simulation and configure parameters. Available systems are:
//  - `arcade`: Phaser Arcade Physics 2;
//  - `matter`: Liam Brummitt's (@liabru) Matter.js;
//  - `impact`: ImpactJS Physics Engine.
// export const physics = {};

//  Asset loader global parameters.
export const loader = {
  path: 'assets/'
};

//  Game title, version and Web address.
export const title = '<%- title %>';
export const version = '1.0.0';
export const url = 'https://example.com/';
