/*
 *  Webpack Rules
 *  =============
 *
 *  Configures how source code is processed by Webpack.
 */

const {dirs} = require('../paths');

module.exports = [
  //  -- WebGL Fragment and Vertex Shaders (GLSL) sources.
  {
    test: /\.(frag|vert)$/,
    use: [{
      //  `raw-loader`
      //  ------------
      //
      //  Required by Phaser. Used to compile fragment and vertex shaders
      //  sources contained in the Phaser library.
      loader: 'raw-loader'
    }]
  },

  //  -- JavaScript sources.
  {
    test: /\.js$/,
    include: dirs.scripts,
    use: [{
      //  `babel-loader`
      //  --------------
      //
      //  Uses `@babel/preset-env` to compile modules compatible with current
      //  browsers and devices.
      //
      //  Reference:
      //    <https://github.com/babel/babel-loader#readme>
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                browsers: 'last 2 versions'
              },
              useBuiltIns: 'usage'
            }
          ]
        ]
      }
    }, {
      //  `eslint-loader`
      //  ---------------
      //
      //  Runs ESLint over application sources to detect lint issues. Issues
      //  are reported in the terminal.
      //
      //  Reference:
      //    <https://github.com/webpack-contrib/eslint-loader#readme>
      loader: 'eslint-loader',
      options: {
        emitError: true,
        emitWarning: true
      }
    }]
  }
];
