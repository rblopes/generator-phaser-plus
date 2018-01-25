/*
 * Webpack middlewares for Browsersync.
 */

const devMiddleware = require('webpack-dev-middleware');

module.exports = function (compiler) {
  return [
    devMiddleware(compiler, {
      quiet: true,
      stats: {
        colors: true,
        modules: false
      }
    })
  ];
};
