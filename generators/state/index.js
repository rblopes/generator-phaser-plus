'use strict';

const yeoman = require('yeoman-generator');
const assign = require('lodash.assign');
const includes = require('lodash.includes');

const prompt = require('../../lib/prompt');
const yorc = require('../../lib/yorc');
const questions = require('./questions');

module.exports = yeoman.Base.extend({
  prompting() {
    return prompt(this, questions);
  },

  writing: {
    template() {
      const dir = yorc.get(this, 'dirs').states;
      const answers = this.answers;
      assign(answers, {
        withInit: includes(answers.methods, 'init'),
        withPreload: includes(answers.methods, 'preload'),
        withCreate: includes(answers.methods, 'create'),
        withUpdate: includes(answers.methods, 'update'),
        withRender: includes(answers.methods, 'render'),
        withShutdown: includes(answers.methods, 'shutdown')
      });
      this.template('state.js',
        this.destinationPath(dir, `${answers.name}.js`), answers);
    },

    // Append the `export ...` line to the `states.js` module,
    // if one exists in the project tree.
    statesModule() {
      const moduleName = yorc.get(this, 'states-module');
      if (this.fs.exists(moduleName)) {
        this.template('states-module.js', moduleName, {
          contents: this.fs.read(moduleName),
          name: this.answers.name
        });
      }
    }
  }
});
