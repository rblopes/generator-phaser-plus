'use strict';

const chalk = require('chalk');
const yeoman = require('yeoman-generator');

const prompt = require('../../lib/prompt');
const yorc = require('../../lib/yorc');
const questions = require('./questions');

module.exports = yeoman.Base.extend({
  prompting() {
    return prompt(this, questions);
  },

  writing: {
    // Copy dotfiles and package.json
    dotfiles() {
      this.copy('_babelrc', '.babelrc');
      this.copy('_editorconfig', '.editorconfig');
      this.copy('_eslintrc', '.eslintrc');
      this.copy('_gitattributes', '.gitattributes');
      this.copy('_gitignore', '.gitignore');
      this.copy('_package.json', 'package.json');
    },

    // Create project README
    readme() {
      this.template('README.md', this.answers);
    },

    // Copy sample game code.
    app() {
      this.directory('src/');
    },

    // Copy sample game assets.
    assets() {
      this.fs.copy(
        [this.templatePath('static/**'), '!**/*.{html,json}'],
        this.destinationPath('static/')
      );
      this.template('static/index.html', this.answers);
    },

    // Copy Gulp tasks.
    tasks() {
      this.fs.copyTpl(
        this.templatePath('gulpfile.js/**'),
        this.destinationPath('gulpfile.js/'),
        this.answers
      );
    },

    // Set this generator config defaults.
    yorc() {
      this.config.defaults(yorc.defaults);
    }
  },

  install() {
    this.installDependencies({bower: false});
  },

  end() {
    if (!this.options['skip-install']) {
      this.log('Congrats! Now, launch your project with');
      this.log(`${chalk.yellow.bold('npm start')} and happy hacking :)`);
    }
  }
});
