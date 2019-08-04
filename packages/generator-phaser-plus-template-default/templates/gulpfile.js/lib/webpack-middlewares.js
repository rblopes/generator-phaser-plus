/*
 *  Webpack Middlewares
 *  ===================
 *
 *  Configures Webpack Middlewares for use with Browsersync.
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
