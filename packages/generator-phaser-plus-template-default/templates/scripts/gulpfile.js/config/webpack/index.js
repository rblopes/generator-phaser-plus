/*
 * Webpack configuration.
 */

const {src, dest} = require('../paths');
const babelConfig = require('../babel');
const plugins = require('./plugins');

module.exports = (env = 'development') => ({
  context: src,

  entry: {
    vendor: ['phaser'],
    app: ['./scripts/']
  },

  output: {
    filename:
      env === 'production'
        ? '[name]-[chunkhash].bundle.js'
        : '[name].bundle.js',
    path: dest
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: src,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        }
      }
    ]
  },

  plugins: plugins(env),

  devtool: env === 'development' ? 'eval-source-map' : 'source-map'
});
