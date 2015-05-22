/*
 * This code was borrowed from the project `gulp-starter`, by Daniel Tello,
 * licensed under the MIT License.
 *
 * Find out more in <https://github.com/greypants/gulp-starter/>
 */

'use strict';


var notify  = require('gulp-notify');


module.exports = function (errorObject) {
  notify.onError(errorObject.toString().split(': ').join(':\n'))
    .apply(this, arguments);

  // Keep gulp from hanging on this task
  if (typeof this.emit === 'function') {
    this.emit('end');
  }
};
