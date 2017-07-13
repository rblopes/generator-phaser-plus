'use strict';

const chalk = require('chalk');
const Generator = require('yeoman-generator');
const detectInstalled = require('detect-installed');
const defaults = require('../../lib/defaults');
const prompt = require('./prompt');

module.exports = class extends Generator {
  prompting() {
    return prompt(this);
  }

  writing() {
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
      this.templatePath(`${this.baseTemplate}/**`),
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
    }, defaults[this.baseTemplate]));
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
