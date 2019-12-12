'use strict';

const Generator = require('yeoman-generator');
const kebabCase = require('lodash.kebabcase');
const utils = require('../../lib/utils');
const banner = require('../../lib/banner');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
      .argument('name', {
        description: 'The object class name.'
      });
  }

  initializing() {
    this.log(banner(this.rootGeneratorVersion()));
    this.log('Game object class generator:\n');
  }

  async prompting() {
    this.variables = await this.prompt([{
      name: 'baseClass',
      type: 'list',
      message: `From which 'GameObject' class to extend from?`,
      choices: [
        {name: 'Sprite', value: 'sprite'},
        {name: 'Image', value: 'image'},
        {name: 'TileSprite', value: 'tile-sprite'},
        {name: 'Blitter', value: 'blitter'},
        {name: 'Group', value: 'group'},
        {name: 'Zone', value: 'zone'},
        {name: 'DynamicBitmapText', value: 'dynamic-bitmap-text'},
        {name: 'Graphics', value: 'graphics'},
        {name: 'None', value: 'plain'}
      ]
    }]);

    //  Assign user inputs to the variables hash.
    this.variables.name = utils.pascalCase(this.options.name);

    //  Infer the object texture key by its class name.
    this.variables.texture = kebabCase(this.options.name);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`${this.variables.baseClass}.js`),
      this.destinationPath(
        utils.getModuleName(
          this.config.get('objects').dest,
          this.variables.name
        )
      ),
      this.variables
    );
  }
};
