/*
 * The generator-phaser-plus banner.
 *
 *    ___  __ _____   ___________    __
 *   / _ \/ // / _ | / __/ __/ _ \__/ /_
 *  / ___/ _  / __ |_\ \/ _// , _/_  __/ generator for Yeoman
 * /_/  /_//_/_/ |_/___/___/_/|_| /_/    release vX.Y.Z
 *
 */

'use strict';

const chalk = require('chalk');

module.exports = version => [
  '',
  chalk`{cyan    ___  __ _____   ___________ }{green    __ }`,
  chalk`{cyan   / _ \\/ // / _ | / __/ __/ _ \\}{green __/ /_}`,
  chalk`{cyan  / ___/ _  / __ |_\\ \\/ _// , _/}{green _  __/} generator for Yeoman`,
  chalk`{cyan /_/  /_//_/_/ |_/___/___/_/|_| }{green /_/   } release {magenta v${version}}`,
  ''
].join('\n');
