'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');

var prompt = require('../../lib/prompt');
var yorc = require('../../lib/yorc');
var questions = require('./questions');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log('Game state generator:');
    prompt(questions, this);
  },

  writing: function () {
    var dir = yorc.get(this, 'dirs').states;
    var file = this.answers.name + '.js';
    this.template('state.js', path.join(dir, file), this.answers);
  },

  end: function () {
    this.log('\nRemember to update your `states.js` file');
    this.log('before using your new game state.');
  }
});
