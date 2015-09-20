'use strict';


var task      = require('./task');
var questions = require('./questions');

var prompt     = require('../../lib/prompt');


module.exports = function () {
  return prompt(questions)
    .then(task);
};
