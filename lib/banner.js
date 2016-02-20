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

var chalk = require('chalk');
var version = require('../package.json').version;

module.exports = function banner() {
  return [
    chalk.cyan('   ___  __ _____   ___________    ') + chalk.green('__'),
    chalk.cyan('  / _ \\/ // / _ | / __/ __/ _ \\') + chalk.green('__/ /_'),
    chalk.cyan(' / ___/ _  / __ |_\\ \\/ _// , _/') + chalk.green('_  __/') + ' generator for Yeoman',
    chalk.cyan('/_/  /_//_/_/ |_/___/___/_/|_| ') + chalk.green('/_/') + '    release ' + chalk.magenta('v' + version),
    ''
  ].join('\n');
};
