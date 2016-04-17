'use strict';

var trim = require('lodash.trim');
var isEmpty = require('lodash.isempty');

var classify = require('../../lib/classify');

module.exports = [
  {
    name: 'name',
    message: 'What\'s the name of this game state?',
    validate: function (s) {
      return !isEmpty(trim(s)) || 'Sorry, a name is required.';
    },
    filter: classify
  },
  {
    name: 'description',
    message: '(Optional) What happens in this game state?',
    default: null,
    filter: trim
  },
  {
    name: 'methods',
    type: 'checkbox',
    message: 'Which methods to include?',
    choices: ['init', 'create', 'update', 'render', 'shutdown'],
    default: ['create', 'update']
  },
  {
    type: 'confirm',
    name: 'proceed',
    message: 'Is it OK to proceed?'
  }
];
