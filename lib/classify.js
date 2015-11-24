'use strict';

var compose = require('lodash/function/compose');
var camelCase = require('lodash/string/camelCase');
var capitalize = require('lodash/string/capitalize');

module.exports = compose(capitalize, camelCase);
