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

// A helper function to extract how many sound effects need to be decoded
// before loading the next game state.
function getSoundsToDecode (packName) {
  return assets[packName]
    .filter(({ type }) => type === 'audio' || type === 'audiosprite')
    .map(({ key }) => key);
}


export default class Preload extends Phaser.State {

  init (packName = 'game') {
    this.packName = packName;

    this.assetsReady    = false;
    this.soundsToDecode = getSoundsToDecode(packName);
  }

  preload () {
    this.showSplashScreen();
    this.loadAssets();
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

  showSplashScreen () {
    const { progressBar } = new SplashScreen(this.game);
    this.load.setPreloadSprite(progressBar);
  }

  loadAssets () {
    this.load.pack(this.packName, null, assets);

    if (!this.allSoundsDecoded) {
      this.sound.onSoundDecode.add((key) => this.dequeueDecodedSound(key));
    }
  }

  dequeueDecodedSound (key) {
    const position = this.soundsToDecode.indexOf(key);

    if (position > -1) {
      this.soundsToDecode.splice(position, 1);
    }
  }

  // --------------------------------------------------------------------------

  get allSoundsDecoded () {
    return this.soundsToDecode.length === 0;
  }

}
