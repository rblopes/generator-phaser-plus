'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');
const utils = require('../../lib/utils');

module.exports = [{
  name: 'name',
  message: `What's this plugin name?`,
  filter: s => utils.pascalCase(s),
  validate: s => !isEmpty(s) || 'Sorry, a name is required.'
}, {
  name: 'description',
  message: `Describe the purpose of this plugin in a few words (optional):`,
  filter: s => trim(s)
}];
