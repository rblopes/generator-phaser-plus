'use strict';

const Generator = require('yeoman-generator');
const kebabCase = require('lodash.kebabcase');
const utils = require('../../lib/utils');
const banner = require('../../lib/banner');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
      .argument('name', {
        description: 'The scene class name.',
        type: name => utils.pascalCase(name)
      })
      .option('customize', {
        alias: 'c',
        description: 'Select life-cycle methods to include.'
      });
  }

  initializing() {
    this.log(banner(this.rootGeneratorVersion()));
    this.log('Game scene class generator:\n');
  }

  prompting() {
    const defaults = {methods: ['create', 'update']};

    const questions = [{
      name: 'methods',
      type: 'checkbox',
      message: 'Choose which life-cycle methods to include:',
      choices: [
        'init',
        'preload',
        'create',
        'update',
        'render',
        'shutdown',
        'destroy'
      ],
      default: defaults.methods,
      when: () => this.options.customize
    }];

    return this
      .prompt(questions)
      .then(variables => {
        if (typeof variables.methods === 'undefined') {
          variables.methods = defaults.methods;
        }

        //  Assign user inputs to the variables hash.
        variables.name = this.options.name;

        return Object.assign(this, {variables});
      });
  }

  writing() {
    const template = name => this.templatePath(`${name}.js`);

    const config = this.config.get('scenes');
    const filename = kebabCase(this.variables.name);
    const indexModuleName = this.destinationPath(config.index.name);

    //  Write the new game state module.
    this.fs.copyTpl(
      template('module'),
      this.destinationPath(
        utils.getModuleName(
          config.dest,
          this.variables.name
        )
      ),
      this.variables
    );

    //  Append the `export ...` line to the states index module, if one exists.
    if (this.fs.exists(indexModuleName)) {
      const variables = Object.assign({
        filename,
        contents: this.fs.read(indexModuleName),
        requirePath: config.index.requirePath
      }, this.variables);
      this.fs.copyTpl(template('index'), indexModuleName, variables);
    }
  }
};
