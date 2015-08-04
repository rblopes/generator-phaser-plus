/*
 * Preload state
 * ============================================================================
 *
 * This state comprises two purposes: Take care of loading the remaining
 * assets used within your game, including graphics and sound effects, while
 * displaying a busy splash screen, showing how much progress were made
 * during the asset load.
 */

import assets from '../data/assets';

// To make matters easier, I prepared a SplashScreen class, responsible for
// displaying the decorated splash screen graphic, and the progress bar.
import SplashScreen from '../objects/SplashScreen';


export default class Preload extends Phaser.State {

  init () {
    this.assetsReady    = false;
    this.soundsToDecode = this.getAudioToDecode();
  }

  preload () {
    this.showSplashScreen();

    this.loadGraphics();
    this.loadAudio();
  }

  create () {
    this.assetsReady = true;
  }

  update () {
    // Wait until all sound effects have been decoded into memory.
    if (this.assetsReady && this.allSoundsDecoded) {
      this.state.start('Game');
    }
  }

  // --------------------------------------------------------------------------

  getAudioToDecode () {
    if (assets.audio) {
      return assets.audio.map(({ key }) => key);
    }

    return [];
  }

  showSplashScreen () {
    let { progressBar } = new SplashScreen(this.game);
    this.load.setPreloadSprite(progressBar);
  }

  loadGraphics () {
    this.load.pack('game', null, assets);
  }

  loadAudio () {
    if ('audio' in assets) {
      this.load.pack('audio', null, assets);
      this.sound.onSoundDecode.add((key) => this.dequeueDecodedSound(key));
    }
  }

  dequeueDecodedSound (key) {
    let position = this.soundsToDecode.indexOf(key);

    if (position > -1) {
      this.soundsToDecode.splice(position, 1);
    }
  }

  // --------------------------------------------------------------------------

  get allSoundsDecoded () {
    return this.soundsToDecode.length === 0;
  }

}
