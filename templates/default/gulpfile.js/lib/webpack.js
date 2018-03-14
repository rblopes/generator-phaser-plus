/*
 *  Creates a configured Webpack instance.
 */

const webpack = require('webpack');
const config = require('../config/webpack');

module.exports = (env = 'development') => webpack(config(env));
