'use strict';

const flowRight = require('lodash.flowright');
const camelCase = require('lodash.camelcase');
const upperFirst = require('lodash.upperfirst');

module.exports = flowRight(upperFirst, camelCase);
