'use strict';

const chalk = require('chalk');
const Generator = require('yeoman-generator');
const detectInstalled = require('detect-installed');
const banner = require('../../lib/banner');
const defaults = require('../../lib/defaults');
const questions = require('./questions');

let npmClient;

const greeting = [
  chalk.green('='.repeat(78)),
  '        You are just one step away of creating your new game project.',
  '              Just fill in the answers below and we are done!',
  chalk.green('='.repeat(78))
].join('\n');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
      .option('yarn', {
        type: Boolean,
        default: true,
        hide: true
      });
  }

  initializing() {
    this.log(banner(this.rootGeneratorVersion()));
    this.log(greeting);
  }

  prompting() {
    return this
      .prompt(questions)
      .then(variables => Object.assign(this, {variables}));
  }

  configuring() {
    npmClient =
      this.options.yarn && detectInstalled.sync('yarn') ? 'yarn' : 'npm';

    this.composeWith(
      require.resolve('@rblopes/generator-phaser-plus-template-default'),
      {variables: this.variables}
    );
  }

  writing() {
    //  Set default configuration values.
    this.config.defaults(Object.assign({
      meta: {
        createdWith: this.rootGeneratorVersion(),
        creationDate: new Date().toISOString()
      }
    }, defaults));
  }

  install() {
    //  Prefer Yarn, if available.
    if (npmClient === 'yarn') {
      this.yarnInstall();
    } else {
      this.npmInstall();
    }
  }

  end() {
    if (!this.options['skip-install']) {
      this.log([
        '',
        'Congrats! Now, launch your project using',
        `${chalk.yellow(`${npmClient} install`)} and happy hacking :)`
      ].join('\n'));
    }
  }
};
