'use strict';

const Generator = require('yeoman-generator');
const prompt = require('./prompt');

module.exports = class extends Generator {
  prompting() {
    return prompt(this);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`object-${this.baseTemplate}.js`),
      this.destinationPath(this.dest, this.filename),
      this.variables);
  }
};
