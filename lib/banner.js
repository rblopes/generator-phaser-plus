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
const version = require('../package.json').version;

module.exports = `
${chalk.cyan('   ___  __ _____   ___________ ')}${chalk.green('   __')}
${chalk.cyan('  / _ \\/ // / _ | / __/ __/ _ \\')}${chalk.green('__/ /_')} generator for Yeoman
${chalk.cyan(' / ___/ _  / __ |_\\ \\/ _// , _/')}${chalk.green('_  __/')} release ${chalk.magenta(`v${version}`)}
${chalk.cyan('/_/  /_//_/_/ |_/___/___/_/|_| ')}${chalk.green('/_/')}
`;
