'use strict';


module.exports.packageName = function packageName (answers) {
  answers.packageName = require('path').basename(process.cwd());
  return answers;
};

module.exports.destDir = function destDir (dir) {
  return function (answers) {
    answers.destDir = require('../lib/projectConfig').dirs[dir];
    return answers;
  };
};
