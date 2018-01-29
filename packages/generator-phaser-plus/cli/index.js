#!/usr/bin/env node

'use strict';

const program = require('yargs');
const buildCommands = require('../lib/build-commands');
const commands = require('./commands');

buildCommands(program, commands)
  .strict(true)
  .usage('Usage: $0 [command]')
  .version()
  .help()
  .parse();
