'use strict';

var chalk = require('chalk');
var yeoman = require('yeoman-generator');

var prompt = require('../../lib/prompt');
var yorc = require('../../lib/yorc');
var questions = require('./questions');

module.exports = yeoman.Base.extend({
  prompting: function () {
    prompt(this, [
      'Before we get started, could you tell me some',
      'details about your new game?'
    ].join('\n'), questions);
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
    this.config.defaults(yorc.defaults);
  },

  default: {
    gulp: function () {
      this.composeWith('phaser-plus:gulp', {
        options: {
          customBuild: this.answers.customBuild
        }
      }, {
        local: require.resolve('../gulp')
      });
    }
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
