'use strict';

var flowRight = require('lodash/flowRight');
var camelCase = require('lodash/camelCase');
var capitalize = require('lodash/capitalize');

module.exports = flowRight(capitalize, camelCase);
