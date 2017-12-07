'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');
const utils = require('../../lib/utils');

module.exports = [{
  name: 'name',
  message: `What's the object name?`,
  filter: s => utils.pascalCase(s),
  validate: s => !isEmpty(s) || 'Sorry, a name is required.'
}, {
  name: 'description',
  message: 'Give it a short description (optional)',
  filter: s => trim(s)
}, {
  type: 'list',
  name: 'baseClass',
  message: 'From which base class this object extends from?',
  choices: [
    'Sprite',
    'Image',
    'Graphics',
    {
      name: 'None',
      value: null
    }
  ]
}];
