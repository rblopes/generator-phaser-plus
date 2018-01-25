/*
 * UglifyJs plugin settings.
 */

module.exports = {
  parallel: true,
  sourceMap: true,
  uglifyOptions: {
    output: {
      comments: false
    },
    compress: {
      /* eslint-disable camelcase */
      comparisons: true,
      conditionals: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
      negate_iife: false,
      unused: true,
      warnings: false
      /* eslint-enable camelcase */
    }
  }
};
