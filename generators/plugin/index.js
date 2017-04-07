'use strict';

const Generator = require('yeoman-generator');
const prompt = require('./prompt');

module.exports = class extends Generator {
  constructor(args, env) {
    super(args, env)
      .argument('name', {
        type: String,
        required: false,
        description: 'The plugin class name'
      })
      .option('description', {
        type: String,
        description: 'Describe the purpose of this plugin',
        alias: 'm'
      });
  }

  prompting() {
    return prompt(this);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`plugin-${this.baseTemplate}.js`),
      this.destinationPath(this.outDir, this.outFilename),
      this.variables);
  }
};
