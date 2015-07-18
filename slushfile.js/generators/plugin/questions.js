'use strict';


var validations = require('../../lib/validations');
var isNotBlank  = validations.isNotBlank;

var trim     = require('../../lib/helpers').trim;
var classify = require('../../lib/helpers').classify;


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
    type: 'confirm',
    name: 'proceed',
    message: 'Continue?'
  }
];
