'use strict';

const Generator = require('yeoman-generator');
const prompt = require('./prompt');

module.exports = class extends Generator {
  prompting() {
    return prompt(this);
  }

  writing() {
    //  Write the new game state module.
    this.fs.copyTpl(
      this.templatePath(`${this.baseTemplate}/module.js`),
      this.destinationPath(this.dest, this.filename),
      this.variables);

    //  Append the `export ...` line to the states index module, if one exists.
    if (this.fs.exists(this.indexModuleName)) {
      this.fs.copyTpl(
        this.templatePath(`${this.baseTemplate}/index.js`),
        this.indexModuleName,
        Object.assign({
          contents: this.fs.read(this.indexModuleName)
        }, this.variables)
      );
    }
  }
};
