'use strict';

const yeoman = require('yeoman-generator');
const prompt = require('./prompt');

module.exports = class extends yeoman.Base {
  constructor(args, env) {
    super(args, env);
    this
      .argument('name', {
        type: String,
        required: false,
        desc: 'The plugin class name'
      })
      .option('description', {
        type: String,
        required: String,
        desc: 'Describe the purpose of this plugin',
        alias: 'm'
      });
  }

  prompting() {
    return prompt(this);
  }

  writing() {
    this.template(`plugin-${this.baseTemplate}.js`,
      this.destinationPath(this.outDir, this.outFilename), this.variables);
  }
};
