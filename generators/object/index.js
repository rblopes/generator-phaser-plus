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
        desc: 'The game object class name'
      })
      .option('description', {
        type: String,
        required: false,
        desc: 'Describe what this object do',
        alias: 'm'
      });
  }

  prompting() {
    return prompt(this);
  }

  writing() {
    this.template(`object-${this.baseTemplate}.js`,
      this.destinationPath(this.outDir, this.outFilename), this.variables);
  }
};
