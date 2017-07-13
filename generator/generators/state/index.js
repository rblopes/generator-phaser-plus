'use strict';

const Generator = require('yeoman-generator');
const prompt = require('./prompt');

module.exports = class extends Generator {
  constructor(args, env) {
    super(args, env)
      .argument('name', {
        type: String,
        required: false,
        description: 'The game state class name'
      })
      .option('description', {
        type: String,
        description: 'Describe what happens in this game state',
        alias: 'm'
      });
  }

  prompting() {
    return prompt(this);
  }

  writing() {
    //  Write the new game state module.
    this.fs.copyTpl(
      this.templatePath(`${this.baseTemplate}/state.js`),
      this.destinationPath(this.outDir, this.outFilename),
      this.variables);

    //  Append the `export ...` line to the states index module, if one exists.
    if (this.fs.exists(this.indexModuleName)) {
      this.fs.copyTpl(
        this.templatePath(`${this.baseTemplate}/states-index.js`),
        this.indexModuleName,
        Object.assign({
          contents: this.fs.read(this.indexModuleName)
        }, this.variables)
      );
    }
  }
};
