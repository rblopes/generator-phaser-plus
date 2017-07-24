'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');
const prompt = require('../../lib/prompt');
const classify = require('../../lib/classify');

const greeting = 'Object class generator:\n';

const questions = g => [{
  name: 'name',
  message: `What's the object name?`,
  filter: s => classify(s),
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
    'Group',
    'Image',
    'Button',
    'Text',
    'Graphics',
    {
      name: 'None',
      value: null
    }
  ]
}];

module.exports = function (g) {
  return prompt(g, greeting, questions(g))
    .then(inputs => {
      const config = g.config.get('objects');
      return Object.assign(g, {
        baseTemplate: g.config.get('baseTemplate'),
        dest: config.dest,
        filename: `${inputs.name}.js`,
        variables: {
          name: inputs.name,
          baseClass: inputs.baseClass,
          description: inputs.description
        }
      });
    });
};
