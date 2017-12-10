'use strict';

const Generator = require('yeoman-generator');
const kebabCase = require('lodash.kebabcase');
const utils = require('../../lib/utils');
const banner = require('../../lib/banner');
const questions = require('./questions');

module.exports = class extends Generator {
  initializing() {
    this.log(banner(this.rootGeneratorVersion()));
    this.log('Game scene generator:\n');
  }

  prompting() {
    return this
      .prompt(questions)
      .then(variables => Object.assign(this, {variables}));
  }

  writing() {
    const template = name => this.templatePath(`${name}.js`);

    const config = this.config.get('scenes');
    const filename = kebabCase(this.variables.name);
    const indexModuleName = this.destinationPath(config.index.name);

    //  Write the new game state module.
    this.fs.copyTpl(
      template('module'),
      this.destinationPath(
        utils.getModuleName(
          config.dest,
          this.variables.name
        )
      ),
      this.variables
    );

    //  Append the `export ...` line to the states index module, if one exists.
    if (this.fs.exists(indexModuleName)) {
      const variables = Object.assign({
        filename,
        contents: this.fs.read(indexModuleName),
        requirePath: config.index.requirePath
      }, this.variables);
      this.fs.copyTpl(template('index'), indexModuleName, variables);
    }
  }
};
