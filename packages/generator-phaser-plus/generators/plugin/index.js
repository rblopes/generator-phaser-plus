'use strict';

const Generator = require('yeoman-generator');
const utils = require('../../lib/utils');
const banner = require('../../lib/banner');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
      .argument('name', {
        description: 'The plugin class name.',
        type: name => utils.pascalCase(name)
      });
  }

  initializing() {
    this.log(banner(this.rootGeneratorVersion()));
    this.log('Game plugin class generator:\n');
  }

  writing() {
    const {name} = this.options;

    this.fs.copyTpl(
      this.templatePath('plugin.js'),
      this.destinationPath(
        utils.getModuleName(
          this.config.get('plugins').dest,
          name
        )
      ), {name});
  }
};
