'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');

exports.message = [
  'Hi there! You are just a few steps of creating your project.',
  'But first, could you tell some details about your new game?'
].join('\n');

exports.questions = [{
  name: 'title',
  message: 'What\'s your game title?',
  validate(s) {
    return !isEmpty(trim(s)) || 'No way! Great games have great titles!!';
  },
  filter: trim
}, {
  name: 'description',
  message: 'Give it a short description (optional)',
  default: null,
  filter: trim
}, {
  type: 'list',
  name: 'customBuild',
  message: 'Which Phaser build do you prefer?',
  choices: [{
    name: 'Arcade Physics and P2',
    value: 'phaser'
  }, {
    name: 'Arcade Physics Only',
    value: 'custom/phaser-arcade-physics'
  }, {
    name: 'No Physics Engines',
    value: 'custom/phaser-no-physics'
  }]
}, {
  type: 'confirm',
  name: 'proceed',
  message: 'Proceed with the project creation?'
}];
