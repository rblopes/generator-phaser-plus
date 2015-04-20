'use strict';


module.exports.packageName = function packageName (answers) {
  var path      = require('path');
  var kebabCase = require('lodash/string/kebabCase');

  answers.packageName = kebabCase(path.basename(process.cwd()));
  return answers;
};

module.exports.escapeJSON = function escapeJSON (answers) {
  answers.escapeJSON = function () {
    return function (text, render) {
      return JSON.stringify(render(text));
    };
  };
  return answers;
};

module.exports.destDir = function destDir (dir) {
  return function (answers) {
    answers.destDir = require('../lib/projectConfig').dirs[dir];
    return answers;
  };
};
