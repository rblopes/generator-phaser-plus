'use strict';

var chalk = require('chalk');
var yosay = require('yosay');
var yeoman = require('yeoman-generator');

var prompt = require('../../lib/prompt');
var defaults = require('../../lib/defaults');
var questions = require('./questions');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to ' + chalk.green.bold('generator-phaser-plus') + '.'
    ));
    this.log('Before we get started, could you tell me some');
    this.log('details about your new game?');
    prompt(questions, this);
  },

  writing: function () {
    // Copy dotfiles and package.json
    this.copy('_babelrc', '.babelrc');
    this.copy('_editorconfig', '.editorconfig');
    this.copy('_eslintrc', '.eslintrc');
    this.copy('_gitattributes', '.gitattributes');
    this.copy('_gitignore', '.gitignore');
    this.copy('_package.json', 'package.json');

    // Create project README
    this.template('README.md', this.answers);

    // Copy gulpfile.js modules.
    this.fs.copyTpl(
      this.templatePath('gulpfile.js/**'),
      this.destinationPath('gulpfile.js/'),
      this.answers
    );

    // Copy sample game code.
    this.fs.copy(
      this.templatePath('src/**'),
      this.destinationPath('src/')
    );

    // Copy sample game assets.
    this.fs.copy(
      [this.templatePath('static/**'), '!**/*.{html,json}'],
      this.destinationPath('static/')
    );
    this.template('static/index.html', this.answers);
    this.template('static/manifest.json', this.answers);

    // Set this generator config defaults.
    this.config.defaults(defaults);
  },

  install: function () {
    this.installDependencies({bower: false});
  },

  end: function () {
    if (!this.options['skip-install']) {
      this.log('Congrats! Now, launch your project with');
      this.log(chalk.yellow.bold('npm start') + ' and happy hacking :)');
    }
  }
});
