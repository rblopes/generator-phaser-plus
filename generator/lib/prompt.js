/*
 * prompt
 * ======
 *
 * A helper function to display the 'Phaser+' banner, a greeting and handle
 * user input.
 */

'use strict';

const banner = require('./banner');

module.exports = function (g, greeting, questions) {
  g.log(banner(g.rootGeneratorVersion()));
  g.log(greeting);
  return g.prompt(questions);
};
