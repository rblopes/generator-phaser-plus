'use strict';

const yeoman = require('yeoman-generator');

const prompt = require('../../lib/prompt');
const yorc = require('../../lib/yorc');
const questions = require('./questions');

module.exports = yeoman.Base.extend({
  prompting() {
    return prompt(this, questions);
  },

  writing() {
    const dir = yorc.get(this, 'dirs').objects;
    this.template('object.js',
      this.destinationPath(dir, `${this.answers.name}.js`), this.answers);
  }
});
