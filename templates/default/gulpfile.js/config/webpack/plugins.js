/*
 *  Webpack Plugins
 *  ===============
 *
 *  Which plugins are used by Webpack to compile the application bundle.
 */

const webpack = require('webpack');
const {pkg} = require('read-pkg-up').sync();
const HTML = require('html-webpack-plugin');

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
      //  Required by Phaser: Enable Canvas and WebGL renderers.
      CANVAS_RENDERER: true,
      WEBGL_RENDERER: true
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
    })
  ].filter(Boolean);
