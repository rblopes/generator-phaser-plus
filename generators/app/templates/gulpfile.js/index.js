/*
 *  `gulpfile.js` index module
 *  ==========================
 *
 *  Rather than managing one big file containing multiple Gulp tasks and
 *  helper functions, the whole collection has been split and organized under
 *  the `tasks/` directory. User tasks are exposed below.
 */

const clean = require('./tasks/clean');
const compile = require('./tasks/compile');
const dist = require('./tasks/dist');
const serve = require('./tasks/serve');

//  Expose user tasks and make `serve` the default task.
module.exports = {clean, compile, dist, default: serve};
