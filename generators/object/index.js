'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');

var prompt = require('../../lib/prompt');
var yorc = require('../../lib/yorc');
var questions = require('./questions');

module.exports = yeoman.Base.extend({
  prompting: function () {
    prompt(this, 'Object class generator:', questions);
  },

  writing: function () {
    var dir = yorc.get(this, 'dirs').objects;
    var file = this.answers.name + '.js';
    this.template('object.js', path.join(dir, file), this.answers);
  }
});
