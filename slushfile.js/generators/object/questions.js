'use strict';


var validations = require('../../lib/validations');
var isNotBlank  = validations.isNotBlank;

var trim     = require('../../lib/filters').trim;
var classify = require('../../lib/filters').classify;


module.exports = [
  {
    name: 'name',
    message: 'Name',
    validate: validations(classify, [
      [ isNotBlank, 'A name is required' ]
    ]),
    filter: classify
  },
  {
    name: 'description',
    message: 'Description (optional)',
    default: null,
    filter: trim
  },
  {
    type: 'list',
    name: 'baseClass',
    message: 'Which base class to extend?',
    choices: [ 'Sprite', 'Group', 'Image', 'Button', 'Graphics' ],
    default: 0
  },
  {
    type: 'confirm',
    name: 'proceed',
    message: 'Continue?'
  }
];
