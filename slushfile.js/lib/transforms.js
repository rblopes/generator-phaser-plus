'use strict';


module.exports.destDir = function destDir (dir) {
  return function (answers) {
    answers.destDir = require('../lib/projectConfig').dirs[dir];
    return answers;
  };
};
