/*
 * Webpack plugins.
 */

const webpack = require('webpack');
const UglifyJS = require('uglifyjs-webpack-plugin');
const HTML = require('html-webpack-plugin');
const uglifyOptions = require('./uglify');

module.exports = (env = 'development') =>
  [
    //  Required by Phaser: Enable Canvas and WebGL renderers.
    new webpack.DefinePlugin({
      CANVAS_RENDERER: true,
      WEBGL_RENDERER: true
    }),

    //  Split the compiled JavaScript bundle.
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),

    //  Process the HTML template.
    new HTML({
      title: 'Phaser 3 Demo Project',
      template: './index.html'
    }),

    //  Minify bundled JavaScript for distribution.
    env === 'production' && new UglifyJS(uglifyOptions)
  ].filter(Boolean);
