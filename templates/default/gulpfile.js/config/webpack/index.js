/*
 *  Webpack Configuration
 *  =====================
 *
 *  For reference, access the Webpack site:
 *    <https://webpack.js.org/>
 */

const {src, dirs, dest} = require('../paths');
const rules = require('./rules');
const plugins = require('./plugins');

module.exports = (env = 'development') => ({
  //  Triggers a Webpack mode.
  //
  //  Can be either 'development' or 'production'.
  mode: env,

  //  The base path where to resolve entry points.
  context: src,

  //  Application entry points.
  //
  //  Vendor libraries (e.g.: Phaser) are declared first to become available
  //  globally.
  entry: {
    vendor: ['phaser'],
    app: [dirs.scripts]
  },

  //  Options instructing Webpack how and where to output bundles.
  output: {
    filename:
      env === 'production' ?
        '[name]-[chunkhash].bundle.js' :
        '[name].bundle.js',
    path: dest
  },

  //  Controls module resolution.
  resolve: {
    extensions: ['.js'],
    alias: {
      //  Makes '@' an alias to the `app/scripts/` directory.
      '@': dirs.scripts
    }
  },

  //  How source files are processed by Webpack. The rules configuration was
  //  split into its own `rules.js` module.
  module: {
    rules
  },

  //  Plugins used during bundle processing. Check the `plugins.js` module to
  //  see which and how plugins are configured.
  plugins: plugins(env),

  //  Basically, defines the type of source maps written in each compilation
  //  mode.
  devtool: env === 'development' ? 'eval-source-map' : 'source-map'
});
