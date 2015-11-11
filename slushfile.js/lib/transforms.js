'use strict';


module.exports.destDir = function destDir (dir) {
  return function (answers) {
    answers.destDir = 'src/app/' + dir;
    return answers;
  };
};
