/*
 *  `config` module
 *  ===============
 *
 *  The game instance settings.
 */

//  Import created game scenes.
import * as scenes from '@/scenes';

/**
 *  Game canvas width.
 */
export const width = 640;

/**
 *  Game canvas height.
 */
export const height = 480;

/**
 *  Adjust zoom factor.
 */
export const zoom = 1;

/**
 *  Adjust pixel density of game graphics.
 */
export const resolution = 1;

/**
 *  Choose a rendering method.
 *
 *  Available options are:
 *
 *    - `WEBGL`: Use WebGL rendering;
 *    - `CANVAS`: Use 'context2D' API rendering method;
 *    - `AUTO`: Phaser will choose, based on device capabilities, the best
 *      rendering method to be used.
 */
export const type = Phaser.AUTO;

/**
 *  Whether to disable antialiasing or not. Great for pixel art.
 */
export const pixelArt = false;

/**
 *  Whether to enable canvas transparency or not.
 */
export const transparent = false;

/**
 *  Apply some style to the canvas element.
 */
export const canvasStyle = 'display: block; margin: 0 auto;';

/**
 *  Define a default a background color.
 */
export const backgroundColor = '#000000';

/**
 *  Configure physics engines global parameters.
 *
 *  Available systems are:
 *
 *    - `arcade`: Phaser Arcade Physics 2;
 *    - `matter`: Liam Brummitt's (@liabru) Matter.js;
 *    - `impact`: ImpactJS Physics Engine.
 */
export const physics = {
  /**
   *  Enable a physics engine by default on all game scenes.
   */
  default: false,

  /**
   *  Phaser Arcade Physics 2 parameters.
   *
   *  This engine becomes available under a `physics` property on game scenes.
   */
  // arcade: {
  // },

  /**
   *  Matter.js parameters.
   *
   *  This engine becomes available under a `matter` property on game scenes.
   */
  // matter: {
  // },

  /**
   *  Impact Physics Engine parameters.
   *
   *  This engine becomes available under a `impact` property on game scenes.
   */
  // impact: {
  // }
};

/**
 *  Global parameters of the asset manager.
 */
export const loader = {
  //  HINT: Put all your game assets in the `app/static/assets/` directory.
  path: 'assets/'
};

/**
 *  Export the game title, version and Web address, as defined in the
 *  project package metadata file (`package.json`).
 *
 *  These properties can be accessed in the game configuration object
 *  (`scene.sys.game.config`), under the keys `gameTitle`, `gameVersion` and
 *  `gameURL`, respectively.
 */
export {title, version, url} from '@/../../package.json';

/**
 *  Export created game scenes.
 */
export const scene = Object.values(scenes);
