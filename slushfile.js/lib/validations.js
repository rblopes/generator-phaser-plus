'use strict';


module.exports = function validations (filter, rules) {
  return function (value) {
    value = filter(value);

    for (var len = rules.length, i = 0; i < len; ++i) {
      var rule = rules[i][0];
      var message = rules[i][1];

      if (!rule(value)) {
        return message;
      }
    }

    return true;
  };
};

module.exports.isNotBlank = function (value) {
  return value !== '';
};
