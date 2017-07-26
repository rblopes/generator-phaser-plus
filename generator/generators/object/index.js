'use strict';

const Generator = require('yeoman-generator');
const utils = require('../../lib/utils');
const banner = require('../../lib/banner');
const questions = require('./questions');

module.exports = class extends Generator {
  initializing() {
    this.log(banner(this.rootGeneratorVersion()));
    this.log('Object class generator:\n');
  }

  prompting() {
    return this
      .prompt(questions)
      .then(variables => Object.assign(this, {variables}));
  }

  writing() {
    const baseTemplate = this.config.get('baseTemplate');

    this.fs.copyTpl(
      this.templatePath(`object-${baseTemplate}.js`),
      this.destinationPath(
        utils.getModuleName(
          this.config.get('objects').dest,
          this.variables.name
        )
      ),
      this.variables);
  }
};
