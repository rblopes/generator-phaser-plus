'use strict';


var validations = require('../../lib/validations');
var isNotBlank  = validations.isNotBlank;

var trim = require('../../lib/filters').trim;


module.exports = [
  {
    name: 'title',
    message: 'Game Title',
    validate: validations(trim, [
      [ isNotBlank, 'A game title is required' ]
    ]),
    filter: trim
  },
  {
    name: 'description',
    message: 'Description',
    default: null,
    filter: trim
  },
  {
    type: 'list',
    name: 'customBuild',
    message: 'Which Phaser build will you use?',
    choices: [
      { name: 'Arcade only (recommended)', value: 'arcade-physics' },
      { name: 'P2 with Arcade (standard)', value: null             },
      { name: 'Minimum'                  , value: 'minimum'        },
      { name: 'No Physics'               , value: 'no-physics'     }
    ],
    default: 0
  },
  {
    type: 'confirm',
    name: 'proceed',
    message: 'Continue?'
  }
];
