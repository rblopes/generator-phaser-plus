'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');

var prompt = require('../../lib/prompt');
var yorc = require('../../lib/yorc');
var questions = require('./questions');

module.exports = yeoman.Base.extend({
  prompting: function () {
    prompt(this, 'Game state generator:', questions);
  },

  writing: function () {
    var dir = yorc.get(this, 'dirs').states;
    var name = this.answers.name;
    this.template('state.js', path.join(dir, name + '.js'), this.answers);

    // Append the `export ...` line to the `states.js` module,
    // if one exists in the project tree.
    var moduleName = yorc.get(this, 'states-module');
    var moduleContents;
    if (this.fs.exists(moduleName)) {
      moduleContents = this.fs.read(moduleName);
      this.template('states-module.js', moduleName, {
        contents: moduleContents,
        name: name
      });
    }
  }
});
