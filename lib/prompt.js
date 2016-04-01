'use strict';

var banner = require('./banner');

module.exports = function (g, message, questions) {
  var done = g.async();

  g.log(banner());
  g.log(message);
  g.prompt(questions, function (answers) {
    if (!answers.proceed) {
      g.log.error('Huh?! Ok! See ya!');
      process.exit(1);
    }

    delete answers.proceed;
    g.answers = answers;

    done();
  });
};
