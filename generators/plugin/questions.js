'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');

const classify = require('../../lib/classify');

exports.message = 'Custom plugin generator:';

exports.questions = [{
  name: 'name',
  message: 'What\'s the name of this plugin?',
  validate(s) {
    return !isEmpty(trim(s)) || 'Sorry, a name is required.';
  },
  filter: classify
}, {
  name: 'description',
  message: '(Optional) What does this plugin do?',
  default: null,
  filter: trim
}, {
  type: 'confirm',
  name: 'proceed',
  message: 'Is that OK to proceed?'
}];
