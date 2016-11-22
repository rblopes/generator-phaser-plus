'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');
const includes = require('lodash.includes');
const yorc = require('../../lib/yorc');
const prompt = require('../../lib/prompt');
const classify = require('../../lib/classify');

const greeting = 'Game state generator:\n';

const questions = g => [{
  name: 'name',
  message: `What's the name of this game state?`,
  filter: classify,
  validate: s => !isEmpty(s) || 'Sorry, a name is required.',
  when: !g.name
}, {
  name: 'description',
  message: 'Give it a short description (optional)',
  default: null,
  filter: trim,
  when: !g.name
}, {
  name: 'methods',
  type: 'checkbox',
  message: 'Which methods to include in the game state?',
  choices: ['init', 'preload', 'create', 'update', 'render', 'shutdown'],
  default: ['create', 'update'],
  when: !g.name
}];

module.exports = function (g) {
  return prompt(g, greeting, questions(g))
    .then(processCLI)
    .then(processInputs);

  function processCLI(inputs) {
    return Object.assign({
      name: classify(g.name),
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
        underline: '='.repeat(inputs.name.length + 6),
        description: inputs.description,
        withInit: includes(inputs.methods, 'init'),
        withPreload: includes(inputs.methods, 'preload'),
        withCreate: includes(inputs.methods, 'create'),
        withUpdate: includes(inputs.methods, 'update'),
        withRender: includes(inputs.methods, 'render'),
        withShutdown: includes(inputs.methods, 'shutdown'),
        requirePath: config.requirePath
      }
    });
  }
};
