'use strict';


var validations = require('../../lib/validations');
var isNotBlank  = validations.isNotBlank;

var trim = require('../../lib/helpers').trim;


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
      { name: 'No Physics'               , value: 'no-physics'     },
      { name: 'Minimum'                  , value: 'minimum'        }
    ],
    default: 0
  },
  {
    type: 'confirm',
    name: 'proceed',
    message: 'Continue?'
  }
];
