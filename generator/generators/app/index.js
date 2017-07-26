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
    const baseTemplate = this.variables.baseTemplate;

    //  Copy dotfiles.
    this.fs.copy(
      this.templatePath('dotfiles/editorconfig'),
      this.destinationPath('.editorconfig'));
    this.fs.copy(
      this.templatePath('dotfiles/gitattributes'),
      this.destinationPath('.gitattributes'));
    this.fs.copy(
      this.templatePath('dotfiles/gitignore'),
      this.destinationPath('.gitignore'));

    //  Write project README.
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.variables);

    //  Copy scripts and related files.
    this.fs.copy(
      this.templatePath(`${baseTemplate}/**`),
      this.destinationPath(),
      {
        globOptions: {
          dot: true
        }
      });

    //  Copy sample game assets.
    this.fs.copy(
      [this.templatePath('static/**'), '!**/*.{html,json}'],
      this.destinationPath('static/'));
    this.fs.copyTpl(
      this.templatePath('static/index.html'),
      this.destinationPath('static/index.html'),
      this.variables);

    //  Copy Gulp tasks.
    this.fs.copyTpl(
      this.templatePath('gulpfile.js/**'),
      this.destinationPath('gulpfile.js/'),
      this.variables);

    //  Set default configuration values.
    this.config.defaults(Object.assign({
      meta: {
        createdWith: this.rootGeneratorVersion(),
        creationDate: new Date().toISOString()
      }
    }, defaults[baseTemplate]));
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
