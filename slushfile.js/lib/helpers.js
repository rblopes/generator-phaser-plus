'use strict';


var _       = require('lodash/string');
var compose = require('lodash/function/compose');


module.exports = {
  trim    : _.trim,
  json    : JSON.stringify,
  classify: compose(_.capitalize, _.camelCase)
};
