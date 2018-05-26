'use strict';

const Generator = require('yeoman-generator');
const utils = require('../../lib/utils');
const banner = require('../../lib/banner');

//  A regular expression to filter the 'type' option.
const TYPE_REGEXP = /^(?:global|scene)$/i;

//  Filter the value of the 'type' option.
function getType(s) {
  try {
    return s.trim().match(TYPE_REGEXP)[0];
  } catch (e) {
    throw new TypeError(`Wrong plugin type given: "${s}".`);
  }
}

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
      .option('type', {
        alias: 't',
        type: String,
        description: 'The kind of plugin to generate (global or scene)',
        default: 'global'
      })
      .argument('name', {
        description: 'The plugin class name.'
      });
  }

  initializing() {
    this.log(banner(this.rootGeneratorVersion()));
    this.log('Game plugin class generator:\n');
  }

  configuring() {
    this.variables = {
      type: getType(this.options.type),
      name: utils.pascalCase(this.options.name)
    };
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`${this.variables.type}.js`),
      this.destinationPath(
        utils.getModuleName(
          this.config.get('plugins').dest,
          this.variables.name
        )
      ), this.variables
    );
  }
};
