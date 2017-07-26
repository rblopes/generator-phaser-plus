'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');

module.exports = [{
  name: 'title',
  message: `What's your game title?`,
  filter: s => trim(s),
  validate: s => !isEmpty(s) || 'No way! Great games have great titles!!'
}, {
  name: 'description',
  message: 'Give it a short description (optional)',
  filter: s => trim(s)
}, {
  type: 'list',
  name: 'customBuild',
  message: 'Which Phaser build are you going to use?',
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
  type: 'list',
  name: 'baseTemplate',
  message: 'How do you prefer to develop your game code?',
  choices: [{
    name: 'Using CommonJS modules',
    value: 'commonjs'
  }, {
    name: 'Using Babel and ECMAScript modules',
    value: 'esnext'
  }]
}];
