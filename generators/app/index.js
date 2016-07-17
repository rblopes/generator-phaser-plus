'use strict';

const chalk = require('chalk');
const yeoman = require('yeoman-generator');
const yorc = require('../../lib/yorc');
const prompt = require('./prompt');

module.exports = class extends yeoman.Base {
  prompting() {
    return prompt(this);
  }

  get writing() {
    return {
      // Copy dotfiles.
      dotfiles() {
        this.copy('dotfiles/editorconfig', '.editorconfig');
        this.copy('dotfiles/gitattributes', '.gitattributes');
        this.copy('dotfiles/gitignore', '.gitignore');
      },

      // Create project README.
      readme() {
        this.template('README.md', this.variables);
      },

      // Copy the project scripts and related assets.
      app() {
        this.directory(
          this.templatePath(this.baseTemplate),
          this.destinationPath());
      },

      // Copy sample game assets.
      assets() {
        this.fs.copy(
          [this.templatePath('static/**'), '!**/*.{html,json}'],
          this.destinationPath('static/'));
        this.template('static/index.html', this.variables);
      },

      // Copy Gulp tasks.
      tasks() {
        this.fs.copyTpl(
          this.templatePath('gulpfile.js/**'),
          this.destinationPath('gulpfile.js/'),
          this.variables);
      },

      // Set the generator configuration values.
      yorc() {
        this.config.defaults(yorc.defaultsFor(this, this.baseTemplate));
      }
    };
  }

  install() {
    this.installDependencies({bower: false});
  }

  end() {
    if (!this.options['skip-install']) {
      this.log('Congrats! Now, launch your project with');
      this.log(`${chalk.yellow.bold('npm start')} and happy hacking :)`);
    }
  }
};
