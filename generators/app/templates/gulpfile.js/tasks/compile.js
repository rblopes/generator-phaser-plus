/*
 *  `compile` task
 *  ==============
 *
 *  Compile scripts in production mode using Webpack.
 */

const log = require('fancy-log');
const PluginError = require('plugin-error');
const webpack = require('../lib/webpack');

const compile = done => {
  return webpack('production').run((err, stats) => {
    if (err) {
      throw new PluginError('webpack', err);
    }
    log.info(
      `[webpack]\n${stats.toString({
        colors: true,
        modules: false
      })}`
    );
    done();
  });
};
compile.description = `Compile scripts in production mode using Webpack.`;

module.exports = compile;
