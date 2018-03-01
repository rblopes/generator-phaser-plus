/*
 * Webpack configuration.
 */

const {src, dest} = require('../paths');
const babelConfig = require('../babel');
const plugins = require('./plugins');

module.exports = (mode = 'development') => ({
  mode,

  context: src,

  entry: {
    vendor: ['phaser'],
    app: ['./scripts/']
  },

  output: {
    filename:
      mode === 'production' ?
        '[name]-[chunkhash].bundle.js' :
        '[name].bundle.js',
    path: dest
  },

  module: {
    rules: [
      {
        test: /\.(frag|vert)$/,
        use: 'raw-loader'
      },
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

  plugins: plugins(mode),

  devtool: mode === 'development' ? 'eval-source-map' : 'source-map'
});
