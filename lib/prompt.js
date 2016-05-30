'use strict';

var banner = require('./banner');

module.exports = function (g, message, questions) {
  g.log(banner());
  g.log(message);
  return g.prompt(questions).then(function (answers) {
    if (!answers.proceed) {
      g.log.error('Huh?! Ok! See ya!');
      process.exit(1);
    }
    g.answers = answers;
  });
};
