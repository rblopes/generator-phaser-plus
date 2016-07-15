'use strict';

var banner = require('./banner');

module.exports = function prompt(g, questionnaire) {
  g.log(banner());
  g.log(questionnaire.message);
  return g.prompt(questionnaire.questions).then(function (answers) {
    if (!answers.proceed) {
      g.log.error('Huh?! Ok! See ya!');
      process.exit(1);
    }
    g.answers = answers;
  });
};
