'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');
const yorc = require('../../lib/yorc');
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
    const config = yorc.get(g, 'states');
    return Object.assign(g, {
      baseTemplate: yorc.get(g, 'baseTemplate'),
      outDir: yorc.get(g, 'dirs').states,
      outFilename: `${inputs.name}.js`,
      // NOTE: We also look for a `states-module` key for compatibility with
      //       old projects created using earlier versions of the generator.
      indexModuleName: yorc.get(g, 'states-module') || config.moduleName,
      variables: {
        name: inputs.name,
        methods: inputs.methods,
        description: inputs.description,
        requirePath: config.requirePath
      }
    });
  }
};
