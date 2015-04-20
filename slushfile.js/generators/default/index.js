'use strict';


var task      = require('./task');
var questions = require('./questions');

var prompt     = require('../../lib/prompt');
var transforms = require('../../lib/transforms');


module.exports = function () {
  return prompt(questions)
    .then(transforms.packageName)
    .then(transforms.escapeJSON)
    .then(task);
};
