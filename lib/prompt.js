'use strict';

module.exports = function (questions, g) {
  var done = g.async();

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
