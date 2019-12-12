/*
 * ESLint rule-set
 * ===============
 *
 * The following rules are intended to be the least restrictive possible. Tweak
 * them as much as you want, or simply replace this file with another one you
 * have previously edited.
 *
 * Learn more about how to configure ESLint at
 *   <http://eslint.org/docs/user-guide/configuring>.
 */

//  Make sure this is the root ESlint configuration of this project.
//  This avoids ESLint from recursively search parent directories, looking for
//  other configuration files that might conflict with this one.
exports.root = true;

exports.env = {
  // Enable ES2015+ features
  es6: true,

  // Enable Browser global variables
  browser: true
};

exports.parserOptions = {
  // Validate ECMAScript 2015+ syntax
  ecmaVersion: 2018,

  // Allow ECMAScript modules
  sourceType: 'module'
};

exports.globals = {
  Phaser: false
};

exports.extends = 'eslint:recommended';

exports.rules = {
  // Indent code with 2 spaces
  'indent': ['error', 2],

  // Prefer single quotes for strings and occasionally template literals
  'quotes': [
    'error',
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true
    }
  ],

  //  Favor Unix-style line endings
  'linebreak-style': ['error', 'unix'],

  //  End lines with semicolons
  'semi': ['error', 'always']
};
