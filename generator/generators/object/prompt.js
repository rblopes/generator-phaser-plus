'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');
const utils = require('../../lib/utils');
const prompt = require('../../lib/prompt');

const greeting = 'Object class generator:\n';

const questions = () => [{
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
        filename: g.destinationPath(utils.getModuleName(config.dest, inputs.name)),
        variables: {
          name: inputs.name,
          baseClass: inputs.baseClass,
          description: inputs.description
        }
      });
    });
};
