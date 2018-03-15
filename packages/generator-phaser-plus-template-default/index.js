'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    //  Retrieve prompt values via generator composition.
    const {variables} = this.options;

    //  Copy dotfiles.
    for (const file of ['editorconfig', 'gitattributes', 'gitignore']) {
      this.fs.copy(
        this.templatePath(`dotfiles/${file}`),
        this.destinationPath(`.${file}`)
      );
    }

    //  Copy README, Webpack configuration, scripts and related files.
    this.fs.copyTpl(
      this.templatePath('scripts/**'),
      this.destinationPath(),
      variables, {}, {
        globOptions: {
          dot: true
        }
      }
    );

    //  Copy game assets.
    this.fs.copy(
      this.templatePath('static/'),
      this.destinationPath('app/static/')
    );
  }
};
