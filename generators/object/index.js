'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');

var prompt = require('../../lib/prompt');
var questions = require('./questions');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log('Object class generator:');
    prompt(questions, this);
  },

  writing: function () {
    var dir = this.config.get('dirs').objects;
    var file = this.answers.name + '.js';
    this.template('object.js', path.join(dir, file), this.answers);
  }
});
