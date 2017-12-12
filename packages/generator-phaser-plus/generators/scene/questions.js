'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');
const utils = require('../../lib/utils');

module.exports = [{
  name: 'name',
  message: `What's this scene name?`,
  filter: s => utils.pascalCase(s),
  validate: s => !isEmpty(s) || 'Sorry, a name is required.'
}, {
  name: 'description',
  message: 'Describe this scene in a few words (optional):',
  filter: s => trim(s)
}, {
  name: 'methods',
  type: 'checkbox',
  message: 'Choose which life-cycle methods to include:',
  choices: ['init', 'preload', 'create', 'update', 'render', 'shutdown'],
  default: ['create', 'update']
}];
