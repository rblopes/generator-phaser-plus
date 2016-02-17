'use strict';

var trim = require('lodash.trim');
var isEmpty = require('lodash.isempty');

module.exports = [
  {
    name: 'title',
    message: 'What\'s the game title?',
    validate: function (s) {
      return !isEmpty(trim(s)) || 'No way! Great games have great titles!!';
    },
    filter: trim
  },
  {
    name: 'description',
    message: 'Give it a short description (optional)',
    default: null,
    filter: trim
  },
  {
    type: 'list',
    name: 'customBuild',
    message: 'Which Phaser build will you use?',
    choices: [
      {
        name: 'P2 with Arcade',
        value: 'phaser'
      },
      {
        name: 'Arcade only',
        value: 'custom/phaser-arcade-physics'
      },
      {
        name: 'No Physics',
        value: 'custom/phaser-no-physics'
      }
    ]
  },
  {
    type: 'confirm',
    name: 'proceed',
    message: 'Proceed with the project creation?'
  }
];
