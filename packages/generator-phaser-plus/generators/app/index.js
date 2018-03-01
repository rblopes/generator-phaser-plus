'use strict';

const chalk = require('chalk');
const Generator = require('yeoman-generator');
const which = require('which');
const banner = require('../../lib/banner');
const defaults = require('../../lib/defaults');
const questions = require('./questions');

//  Assume 'npm' is the default npm client.
let npmClient = 'npm';

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
    //  If available, prefer Yarn instead of npm.
    if (this.options.yarn && which.sync('yarn', {nothrow: true})) {
      npmClient = 'yarn';
    }

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
        `${chalk.yellow(`${npmClient} start`)} and happy hacking :)`
      ].join('\n'));
    }
  }
};
