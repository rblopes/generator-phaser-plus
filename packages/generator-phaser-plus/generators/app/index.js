'use strict';

const chalk = require('chalk');
const superb = require('superb');
const Generator = require('yeoman-generator');
const which = require('which');
const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');
const banner = require('../../lib/banner');
const defaults = require('../../lib/defaults');

//  Assume 'npm' as the default npm client.
let npmClient = 'npm';

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
    this.log([
      chalk.green('='.repeat(70)),
      `    You are just one step away of creating your new game project.`,
      `          Just fill in the answers below and we are done!`,
      chalk.green('='.repeat(70))
    ].join('\n'));
  }

  prompting() {
    const questions = [{
      name: 'title',
      message: `What is the title of your new game project`,
      default: `My ${superb()} game`,
      filter: s => trim(s),
      validate: s => !isEmpty(s) || 'No way! Great games have great titles!!'
    }, {
      name: 'description',
      message: `How would you describe you game project (optional)`,
      filter: s => trim(s)
    }];

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
    if (!this.options['skip-install']) {
      //  Prefer Yarn, if available.
      if (npmClient === 'yarn') {
        this.yarnInstall();
      } else {
        this.npmInstall();
      }
    }
  }

  end() {
    if (!this.options['skip-install']) {
      this.log([
        ``,
        `Congratulations! Your new game project is ready!`,
        ``,
        `To start developing your game right away, run:`,
        `  ${chalk.green(`${npmClient} start`)}`,
        ``,
        `To create a distribution build:`,
        `  ${chalk.green(`${npmClient} run dist`)}`,
        ``,
        `You will find more info on the project README.`,
        `Good luck, and happy hacking :)`
      ].join('\n'));
    }
  }
};
