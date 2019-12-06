'use strict';

const env = require('yeoman-environment').createEnv();

//  A mapping of command arguments and options.
const generators = {
  app: {
    arguments: [],
    options: ['yarn', 'skip-install']
  },
  object: {
    arguments: ['name'],
    options: []
  },
  plugin: {
    arguments: ['name'],
    options: ['type']
  },
  scene: {
    arguments: ['names'],
    options: []
  }
};

function getArgumentsFor(name, argv) {
  return generators[name].arguments.map(k => argv[k]);
}

function getOptionsFor(name, argv) {
  return generators[name].options.reduce((o, k) => {
    o[k] = argv[k];
    return o;
  }, {});
}

function getHandler(name) {
  return argv => {
    const cmd = [`phaser-plus:${name}`].concat(...getArgumentsFor(name, argv));
    const options = getOptionsFor(name, argv);
    env.run(cmd, options);
  };
}

module.exports = function (program, commands) {
  for (const name of Object.keys(commands)) {
    const command = commands[name];

    env.register(require.resolve(`../generators/${name}`));

    command.handler = getHandler(name);

    program.command(command);
  }

  return program;
};
