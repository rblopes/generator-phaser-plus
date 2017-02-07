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
      vendor: ['phaser'],
      app: paths.app
    },

    output: {
      filename: '[name]-[chunkhash].bundle.js',
      path: paths.dist
    },

    module: {
      rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }]
    },

    plugins: plugins(isProduction),

    devtool: 'cheap-source-map',

    devServer: {
      contentBase: paths.public,
      compress: true,
      port: 3000
    }
  };
};
