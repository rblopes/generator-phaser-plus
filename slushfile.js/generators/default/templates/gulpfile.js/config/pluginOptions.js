/*
 * Task Plugin Options
 * ============================================================================
 */

'use strict';


module.exports = {

  'dist:styles': {
    keepSpecialComments: false,
    removeEmpty: true
  },

  'dist:appcache': {
    filename: 'offline.appcache',
    cache: [
      'game.min.js',
      'styles.min.css'
    ],
    preferOnline: true,
    timestamp: true,
    network: [
      'https://*',
      'http://*',
      '*'
    ],
    fallback: [
      '. index.html'
    ]
  }

};
