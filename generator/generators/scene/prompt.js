'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');
const prompt = require('../../lib/prompt');
const classify = require('../../lib/classify');

const greeting = 'Game scene generator:\n';

const questions = g => [{
  name: 'name',
  message: `What's the name of this game state?`,
  filter: s => classify(s),
  validate: s => !isEmpty(s) || 'Sorry, a name is required.'
}, {
  name: 'description',
  message: 'Give it a short description (optional)',
  filter: s => trim(s)
}, {
  name: 'methods',
  type: 'checkbox',
  message: 'Which methods to include in the game state?',
  choices: ['init', 'preload', 'create', 'update', 'render', 'shutdown'],
  default: ['create', 'update']
}];

module.exports = function (g) {
  return prompt(g, greeting, questions(g))
    .then(inputs => {
      const config = g.config.get('scenes');
      return Object.assign(g, {
        baseTemplate: g.config.get('baseTemplate'),
        dest: config.dest,
        filename: `${inputs.name}.js`,
        indexModuleName: config.index.name,
        variables: {
          name: inputs.name,
          methods: inputs.methods,
          description: inputs.description,
          requirePath: config.index.requirePath
        }
      });
    });
};
