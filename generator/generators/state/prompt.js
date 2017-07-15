'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');
const prompt = require('../../lib/prompt');
const classify = require('../../lib/classify');

const greeting = 'Game state generator:\n';

const questions = g => [{
  name: 'name',
  message: `What's the name of this game state?`,
  filter: s => classify(s),
  validate: s => !isEmpty(s) || 'Sorry, a name is required.',
  when: !g.options.name
}, {
  name: 'description',
  message: 'Give it a short description (optional)',
  filter: s => trim(s),
  when: !g.options.name
}, {
  name: 'methods',
  type: 'checkbox',
  message: 'Which methods to include in the game state?',
  choices: ['init', 'preload', 'create', 'update', 'render', 'shutdown'],
  default: ['create', 'update'],
  when: !g.options.name
}];

module.exports = function (g) {
  return prompt(g, greeting, questions(g))
    .then(processCLI)
    .then(processInputs);

  function processCLI(inputs) {
    return Object.assign({
      name: classify(g.options.name),
      methods: ['create', 'update'],
      description: trim(g.options.description)
    }, inputs);
  }
  function processInputs(inputs) {
    const config = g.config.get('states');
    return Object.assign(g, {
      baseTemplate: g.config.get('baseTemplate'),
      outDir: g.config.get('dirs').states,
      outFilename: `${inputs.name}.js`,
      indexModuleName: config.moduleName,
      variables: {
        name: inputs.name,
        methods: inputs.methods,
        description: inputs.description,
        requirePath: config.requirePath
      }
    });
  }
};
