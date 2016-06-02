'use strict';

var chalk = require('chalk');
var yeoman = require('yeoman-generator');

var prompt = require('../../lib/prompt');
var yorc = require('../../lib/yorc');
var questions = require('./questions');

module.exports = yeoman.Base.extend({
  prompting: function () {
    return prompt(this, questions);
  },

  writing: {
    // Copy dotfiles and package.json
    dotfiles: function () {
      this.copy('_babelrc', '.babelrc');
      this.copy('_editorconfig', '.editorconfig');
      this.copy('_eslintrc', '.eslintrc');
      this.copy('_gitattributes', '.gitattributes');
      this.copy('_gitignore', '.gitignore');
      this.copy('_package.json', 'package.json');
    },

    // Create project README
    readme: function () {
      this.template('README.md', this.answers);
    },

    // Copy sample game code.
    app: function () {
      this.directory('src/');
    },

    // Copy sample game assets.
    assets: function () {
      this.fs.copy(
        [this.templatePath('static/**'), '!**/*.{html,json}'],
        this.destinationPath('static/')
      );
      this.template('static/index.html', this.answers);
      this.template('static/manifest.json', this.answers);
    },

    // Copy Gulp tasks.
    tasks: function () {
      this.fs.copyTpl(
        this.templatePath('gulpfile.js/**'),
        this.destinationPath('gulpfile.js/'),
        this.answers
      );
    },

    // Set this generator config defaults.
    yorc: function () {
      this.config.defaults(yorc.defaults);
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
