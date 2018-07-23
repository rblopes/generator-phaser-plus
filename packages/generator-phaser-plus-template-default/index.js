'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    //  Retrieve prompt values via generator composition.
    const {variables} = this.options;

    //  Copy dotfiles.
    for (const file of ['gitattributes', 'gitignore']) {
      this.fs.copy(
        this.templatePath(`dotfiles/${file}`),
        this.destinationPath(`.${file}`)
      );
    }

    //  Copy project files.
    this.fs.copyTpl(
      this.templatePath('project/**'),
      this.destinationPath(),
      variables, {}, {
        globOptions: {
          dot: true
        }
      }
    );
  }
};
