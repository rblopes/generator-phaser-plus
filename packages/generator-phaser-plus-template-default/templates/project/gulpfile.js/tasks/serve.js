/*
 *  `server` task
 *  =============
 *
 *  Creates a Browsersync Web server instance for live development. Makes use
 *  of some Webpack middlewares to enable live reloading features.
 */

const config = require('../config/browsersync');
const server = require('../lib/server');
const webpack = require('../lib/webpack');
const webpackMiddlewares = require('../lib/webpack-middlewares');

const serve = () => {
  const compiler = webpack('development');

  config.middleware.push(...webpackMiddlewares(compiler));

  server.init(config);
};
serve.description = `Create a Browsersync instance for live development.`;

module.exports = serve;
