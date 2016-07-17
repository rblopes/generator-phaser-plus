'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');

const classify = require('../../lib/classify');

exports.message = 'Object class generator:';

exports.questions = [{
  name: 'name',
  message: 'What\'s the name of the object?',
  validate(s) {
    return !isEmpty(trim(s)) || 'Sorry, a name is required.';
  },
  filter: classify
}, {
  name: 'description',
  message: '(Optional) What does this object do?',
  default: null,
  filter: trim
}, {
  type: 'list',
  name: 'baseClass',
  message: 'From which base class this object extends?',
  choices: [
    'Sprite',
    'Group',
    'Image',
    'Button',
    'Text',
    'Tilemap',
    'Graphics',
    {
      name: 'None',
      value: null
    }
  ],
  default: 0
}, {
  type: 'confirm',
  name: 'proceed',
  message: 'Is that OK to proceed?'
}];
