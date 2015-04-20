/*
 * The `assets` module
 * ============================================================================
 *
 * Use this module to declare static Phaser Asset Packs, that would be loaded
 * using the `Loader#pack` API.
 */


export default {

  // - Boot Assets ------------------------------------------------------------
  'boot': [
    {
      key: 'splash-screen',
      type: 'image',
      url: 'splash-screen.png'
    },

    {
      key: 'progress-bar',
      type: 'image',
      url: 'progress-bar.png'
    }
  ],

  // - Game assets ------------------------------------------------------------
  'game': [
    {
      key: 'phaser',
      type: 'image',
      url: 'phaser.png'
    }
  ],

  // - Music and Sound effects ------------------------------------------------
  'audio': [
    // ...
  ]

};
