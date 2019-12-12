'use strict';

const Generator = require('yeoman-generator');
const kebabCase = require('lodash.kebabcase');
const utils = require('../../lib/utils');
const banner = require('../../lib/banner');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
      .argument('names', {
        description: 'Scene class names.',
        type: Array
      });
  }

  initializing() {
    this.log(banner(this.rootGeneratorVersion()));
    this.log('Game scene class generator:\n');
  }

  writing() {
    //  Convert all names into valid class identifiers before processing.
    const names = [...new Set(this.options.names)].map(utils.pascalCase);

    const template = name => this.templatePath(`${name}.js`);

    const config = this.config.get('scenes');
    const indexModuleName = this.destinationPath(config.index.name);

    //  Write the new scenes modules.
    for (const name of names) {
      this.fs.copyTpl(
        template('module'),
        this.destinationPath(utils.getModuleName(config.dest, name)),
        {name}
      );
    }

    //  Append the `export ...` lines to the scenes index module, if one
    //  exists.
    if (this.fs.exists(indexModuleName)) {
      this.fs.copyTpl(template('index'), indexModuleName, {
        contents: this.fs.read(indexModuleName),
        scenes: names.map(name => [
          name,
          `${config.index.requirePath}${kebabCase(name)}`
        ])
      });
    }
  }
};
