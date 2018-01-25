/*
 * Game scene
 * ==========
 *
 * A sample Game scene, displaying the Phaser logo.
 */

import {gameAssets as files} from '../assets';
import Logo from '../objects/logo';

export default class Game extends Phaser.Scene {

  constructor(config = {}) {
    super(Object.assign({files}, config));
  }

  create() {
    //  TODO: Replace this content with really cool game code here :)
    this.logo = this.add.existing(new Logo(this));
  }

  update() {
    this.logo.update();
  }

}
