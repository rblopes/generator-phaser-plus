'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');

var prompt = require('../../lib/prompt');
var yorc = require('../../lib/yorc');
var questions = require('./questions');

module.exports = yeoman.Base.extend({
  prompting: function () {
    prompt(this, 'Custom plugin generator:', questions);
  },

  writing: function () {
    var dir = yorc.get(this, 'dirs').plugins;
    var file = this.answers.name + '.js';
    this.template('plugin.js', path.join(dir, file), this.answers);
  }
});
