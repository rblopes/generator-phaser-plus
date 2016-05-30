'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var assign = require('lodash.assign');
var includes = require('lodash.includes');

var prompt = require('../../lib/prompt');
var yorc = require('../../lib/yorc');
var questions = require('./questions');

module.exports = yeoman.Base.extend({
  prompting: function () {
    return prompt(this, 'Game state generator:', questions);
  },

  writing: {
    template: function () {
      var dir = yorc.get(this, 'dirs').states;
      var answers = this.answers;
      var name = answers.name;

      assign(answers, {
        withInit: includes(answers.methods, 'init'),
        withPreload: includes(answers.methods, 'preload'),
        withCreate: includes(answers.methods, 'create'),
        withUpdate: includes(answers.methods, 'update'),
        withRender: includes(answers.methods, 'render'),
        withShutdown: includes(answers.methods, 'shutdown')
      });

      this.template('state.js', path.join(dir, name + '.js'), answers);
    },

    // Append the `export ...` line to the `states.js` module,
    // if one exists in the project tree.
    statesModule: function () {
      var moduleName = yorc.get(this, 'states-module');
      if (this.fs.exists(moduleName)) {
        this.template('states-module.js', moduleName, {
          contents: this.fs.read(moduleName),
          name: this.answers.name
        });
      }
    }
  }
});
