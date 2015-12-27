'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');

var prompt = require('../../lib/prompt');
var questions = require('./questions');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log('Custom plugin generator:');
    prompt(questions, this);
  },

  writing: function () {
    var dir = this.config.get('dirs').plugins;
    var file = this.answers.name + '.js';
    this.template('plugin.js', path.join(dir, file), this.answers);
  }
});
