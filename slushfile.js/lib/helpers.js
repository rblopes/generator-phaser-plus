'use strict';


var _s      = require('lodash/string');
var compose = require('lodash/function/compose');


module.exports.trim     = _s.trim;
module.exports.classify = compose(_s.trim, _s.capitalize, _s.camelCase);

module.exports.json = function (input) {
  return JSON.stringify(input);
};
