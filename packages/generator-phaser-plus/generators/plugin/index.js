'use strict';

const Generator = require('yeoman-generator');
const camelCase = require('lodash.camelcase');
const utils = require('../../lib/utils');
const banner = require('../../lib/banner');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
      .argument('name', {
        description: 'The plugin class name.'
      })
      .argument('id', {
        description: `The internal plugin 'id'.`,
        required: false,
        default: null
      });
  }

  initializing() {
    this.log(banner(this.rootGeneratorVersion()));
    this.log('Game plugin class generator:\n');
  }

  configuring() {
    if (this.options.id === null || this.options.id === '') {
      //  If omitted, assume 'id' to be based on the plugin 'name'.
      this.options.id = this.options.name;
    }

    this.variables = {
      id: camelCase(this.options.id),
      name: utils.pascalCase(this.options.name)
    };
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('plugin.js'),
      this.destinationPath(
        utils.getModuleName(
          this.config.get('plugins').dest,
          this.variables.name
        )
      ), this.variables
    );
  }
};
