'use strict';

var flowRight = require('lodash.flowright');
var camelCase = require('lodash.camelcase');
var upperFirst = require('lodash.upperfirst');

module.exports = flowRight(camelCase, upperFirst);
