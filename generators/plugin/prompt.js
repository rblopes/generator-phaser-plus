'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');
const yorc = require('../../lib/yorc');
const prompt = require('../../lib/prompt');
const classify = require('../../lib/classify');

const greeting = 'Custom plugin generator:\n';

const questions = g => [{
  name: 'name',
  message: `What's the plugin name?`,
  filter: s => classify(s),
  validate: s => !isEmpty(s) || 'Sorry, a name is required.',
  when: !g.options.name
}, {
  name: 'description',
  message: 'Give it a short description (optional)',
  filter: s => trim(s),
  when: !g.options.name
}];

module.exports = function (g) {
  return prompt(g, greeting, questions(g))
    .then(processCLI)
    .then(processInputs);

  function processCLI(inputs) {
    return Object.assign({
      name: classify(g.options.name),
      description: trim(g.options.description)
    }, inputs);
  }
  function processInputs(inputs) {
    return Object.assign(g, {
      baseTemplate: yorc.get(g, 'baseTemplate'),
      outDir: yorc.get(g, 'dirs').plugins,
      outFilename: `${inputs.name}.js`,
      variables: {
        name: inputs.name,
        description: inputs.description
      }
    });
  }
};
