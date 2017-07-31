/*
 * `index` module
 * ==============
 *
 * Webpack settings.
 */

'use strict';

const paths = require('./paths');
const plugins = require('./plugins');

module.exports = env => {
  const isProduction = env && env.production;

  return {
    context: paths.context,

    entry: {
      vendor: ['p2', 'pixi', 'phaser'],
      app: paths.app
    },

    output: {
      filename: '[name]-[chunkhash].bundle.js',
      path: paths.dist
    },

    module: {
      rules: [{
        test: paths.alias.p2,
        use: 'expose-loader?p2'
      }, {
        test: paths.alias.pixi,
        use: 'expose-loader?PIXI'
      }, {
        test: paths.alias.phaser,
        use: 'expose-loader?Phaser'
      }]
    },

    plugins: plugins(isProduction),

    resolve: {
      alias: paths.alias
    },

    devtool: 'cheap-source-map',

    devServer: {
      contentBase: paths.public,
      compress: true,
      port: 3000
    }
  };
};
