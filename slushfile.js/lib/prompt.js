'use strict';


var promise  = require('promise');
var inquirer = require('inquirer');

module.exports = function (questions) {
  return new promise(function (resolve, reject) {
    return inquirer.prompt(questions, function (answers) {
      if (!answers.proceed) {
        return reject(null);
      }

      return resolve(answers);
    });
  });
};
