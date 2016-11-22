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
        desc: 'The game state class name'
      })
      .option('description', {
        type: String,
        required: false,
        desc: 'Describe what happens in this game state',
        alias: 'm'
      });
  }

  prompting() {
    return prompt(this);
  }

  get writing() {
    return {
      template() {
        this.template(`${this.baseTemplate}/state.js`,
          this.destinationPath(this.outDir, this.outFilename), this.variables);
      },

      // Append the `export ...` line to the `states.js` module, if one exists.
      statesModule() {
        if (this.fs.exists(this.indexModuleName)) {
          this.template(`${this.baseTemplate}/states-index.js`,
            this.indexModuleName, Object.assign({
              contents: this.fs.read(this.indexModuleName)
            }, this.variables));
        }
      }
    };
  }
};
