'use strict';

const Generator = require('yeoman-generator');
const prompt = require('./prompt');

module.exports = class extends Generator {
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
    this.fs.copyTpl(
      this.templatePath(`object-${this.baseTemplate}.js`),
      this.destinationPath(this.outDir, this.outFilename),
      this.variables);
  }
};
