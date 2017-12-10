'use strict';

const chalk = require('chalk');
const Generator = require('yeoman-generator');
const detectInstalled = require('detect-installed');
const banner = require('../../lib/banner');
const defaults = require('../../lib/defaults');
const questions = require('./questions');

const greeting = `Hi there! You're just a few steps of creating your project.
But first, could you tell some details about your new game?
`;

module.exports = class extends Generator {
  initializing() {
    this.log(banner(this.rootGeneratorVersion()));
    this.log(greeting);
  }

  prompting() {
    return this
      .prompt(questions)
      .then(variables => Object.assign(this, {variables}));
  }

  writing() {
    //  Copy dotfiles.
    for (const file of ['editorconfig', 'gitattributes', 'gitignore']) {
      this.fs.copy(
        this.templatePath(`dotfiles/${file}`),
        this.destinationPath(`.${file}`));
    }

    //  Copy README, Webpack configuration, scripts and related files.
    this.fs.copyTpl(
      this.templatePath('scripts/**'),
      this.destinationPath(),
      this.variables, {}, {
        globOptions: {
          dot: true
        }
      });

    //  Copy game assets.
    this.fs.copy(
      this.templatePath('static/'),
      this.destinationPath('app/static/'));

    //  Set default configuration values.
    this.config.defaults(Object.assign({
      meta: {
        createdWith: this.rootGeneratorVersion(),
        creationDate: new Date().toISOString()
      }
    }, defaults));
  }

  install() {
    //  Prefer Yarn package manager, if available.
    if (detectInstalled.sync('yarn')) {
      this.yarnInstall();
    } else {
      this.npmInstall();
    }
  }

  end() {
    if (!this.options['skip-install']) {
      const command = `${detectInstalled.sync('yarn') ? 'yarn' : 'npm'} start`;
      this.log([
        '',
        'Congrats! Now, launch your project using',
        chalk`{yellow ${command}} and happy hacking :)`
      ].join('\n'));
    }
  }
};
