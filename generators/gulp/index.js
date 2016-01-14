'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('gulpfile.js/**'),
      this.destinationPath('gulpfile.js/'), {
        customBuild: this.options.customBuild
      }
    );
  }
});
