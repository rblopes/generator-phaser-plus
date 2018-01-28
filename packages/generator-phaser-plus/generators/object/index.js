'use strict';

const Generator = require('yeoman-generator');
const utils = require('../../lib/utils');
const banner = require('../../lib/banner');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
      .argument('name', {
        description: 'The object class name.',
        type: name => utils.pascalCase(name)
      });
  }

  initializing() {
    this.log(banner(this.rootGeneratorVersion()));
    this.log('Game object class generator:\n');
  }

  prompting() {
    const questions = [{
      name: 'baseClass',
      type: 'list',
      message: `From which 'GameObject' class to extend from?`,
      choices: [
        'Sprite',
        'Image',
        'Graphics',
        {
          name: 'None',
          value: null
        }
      ]
    }];

    return this
      .prompt(questions)
      .then(variables => {
        //  Assign user inputs to the variables hash.
        variables.name = this.options.name;

        return Object.assign(this, {variables});
      });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`object.js`),
      this.destinationPath(
        utils.getModuleName(
          this.config.get('objects').dest,
          this.variables.name
        )
      ),
      this.variables);
  }
};
