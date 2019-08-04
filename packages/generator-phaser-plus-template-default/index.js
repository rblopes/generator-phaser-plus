'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    //  Retrieve prompt values via generator composition.
    const {variables} = this.options;

    //  Copy project files.
    this.fs.copyTpl(
      this.templatePath('**'),
      this.destinationPath(),
      variables, {}, {
        globOptions: {
          dot: true
        }
      }
    );

    // Just rename `.gitignore` after copying it to the project directory.
    this.fs.move(
      this.destinationPath('gitignore'),
      this.destinationPath('.gitignore')
    );
  }
};
