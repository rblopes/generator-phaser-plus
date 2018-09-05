/*
 *  Webpack Plugins
 *  ===============
 *
 *  Which plugins are used by Webpack to compile the application bundle.
 */

const webpack = require('webpack');
const {package: pkg} = require('read-pkg-up').sync();
const HTML = require('html-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const {dirs, dest} = require('../paths');

module.exports = (env = 'development') =>
  [
    //  Webpack Define plugin
    //  ---------------------
    //
    //  Defines global constants at compile time.
    //
    //  Reference:
    //  - <https://webpack.js.org/plugins/define-plugin/>
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': true,
      'typeof WEBGL_RENDERER': true,
      'typeof EXPERIMENTAL': false,
      'typeof FEATURE_SOUND': true,
      'typeof PLUGIN_CAMERA3D': false,
      'typeof PLUGIN_FBINSTANT': false
    }),

    //  HTML Plugin
    //  -----------
    //
    //  Simplifies creation of HTML files to serve Webpack bundles.
    //
    //  Reference:
    //  - <https://webpack.js.org/plugins/html-webpack-plugin/>
    new HTML({
      title: pkg.title,
      description: pkg.description,
      template: 'index.html'
    }),

    //  Copy Plugin
    //  -----------
    //
    //  Copies application assets into the bundle.
    //
    //  Reference:
    //    <https://github.com/webpack-contrib/copy-webpack-plugin#readme>
    new Copy([{
      from: dirs.static,
      to: dest
    }])
  ].filter(Boolean);
