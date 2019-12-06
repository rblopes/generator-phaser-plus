'use strict';

const fse = require('fs-extra');
const helpers = require('yeoman-test');

/**
 * Prepares a generator for testing alongside a given fixture project.
 *
 * @param {string} name - the name of the generator to run.
 * @param {string} projectName - the name of the generator to run.
 * @return A Yeoman generator running context.
 */
module.exports = function (name) {
  return helpers
    .run(require.resolve(`../../generators/${name}`))
    .inTmpDir(dir =>
      fse.copySync(`${__dirname}/project/`, dir));
};
