exports.app = {
  command: '*',
  describe: 'Create a Phaser Web game project.',
  builder(yargs) {
    yargs
      .option('yarn', {
        type: 'boolean',
        describe: 'Whether to install dependencies using Yarn or not.',
        default: true
      })
      .option('skip-install', {
        type: 'boolean',
        describe: 'Do not automatically install dependencies.',
        default: false
      });
  }
};

exports.object = {
  command: 'object <name>',
  aliases: ['o'],
  describe: 'Create a game object class.',
  builder(yargs) {
    yargs
      .positional('name', {
        type: 'string',
        describe: 'The object class name.'
      });
  }
};

exports.plugin = {
  command: 'plugin <name>',
  aliases: ['p'],
  describe: 'Create a custom plugin class.',
  builder(yargs) {
    yargs
      .positional('name', {
        type: 'string',
        describe: 'The plugin class name.'
      });
  }
};

exports.scene = {
  command: 'scene <name>',
  aliases: ['s'],
  describe: 'Create a game scene class.',
  builder(yargs) {
    yargs
      .positional('name', {
        type: 'string',
        describe: 'The scene class name.'
      })
      .option('customize', {
        alias: 'c',
        type: 'boolean',
        describe: 'Select life-cycle methods to include.'
      });
  }
};
